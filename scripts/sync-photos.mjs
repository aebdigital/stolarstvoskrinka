import { copyFile, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, "public", "fotky");
const publicRoot = path.join(root, "public", "referencie");
const dataPath = path.join(root, "lib", "gallery-data.ts");

const categoryMeta = {
  chodby: {
    label: "Chodby",
    description: "Chodby, vstupné priestory a praktické úložné riešenia na mieru."
  },
  kuchyne: {
    label: "Kuchyne",
    description: "Kuchynské linky a kuchynský nábytok navrhnutý pre konkrétny priestor."
  },
  kupelne: {
    label: "Kúpeľne",
    description: "Kúpeľňový nábytok a odolné úložné riešenia na mieru."
  },
  obyvacky: {
    label: "Obývačky",
    description: "Obývacie steny, skrinky a interiérové prvky pre dennú časť domu."
  },
  "vstavane-skrine": {
    label: "Vstavané skrine",
    description: "Vstavané skrine, šatníky a úložné systémy vyrábané na mieru."
  },
  ostatne: {
    label: "Ostatné",
    description: "Ďalšie stolárske realizácie a samostatné interiérové prvky."
  }
};

const categoryOrder = ["kuchyne", "vstavane-skrine", "chodby", "obyvacky", "kupelne", "ostatne"];

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isImage(fileName) {
  return /\.(jpe?g|png|webp|avif)$/i.test(fileName);
}

function toTs(value) {
  return JSON.stringify(value, null, 2);
}

function sortCategories(a, b) {
  const aIndex = categoryOrder.indexOf(a.slug);
  const bIndex = categoryOrder.indexOf(b.slug);

  if (aIndex !== -1 || bIndex !== -1) {
    return (aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex) - (bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex);
  }

  return a.label.localeCompare(b.label, "sk");
}

function pick(images, slug, index = 0) {
  const matches = images.filter((image) => image.category === slug);
  return matches[index] ?? matches[0] ?? images[0];
}

const entries = await readdir(sourceRoot, { withFileTypes: true });
const folderCategories = entries
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const slug = slugify(entry.name);
    const meta = categoryMeta[slug] ?? {
      label: entry.name.normalize("NFC"),
      description: "Realizácie STOLÁRSTVO SKRINKA v tejto kategórii."
    };

    return {
      slug,
      label: meta.label,
      description: meta.description,
      sourceFolder: path.join(sourceRoot, entry.name)
    };
  });

const rootImages = entries.filter((entry) => entry.isFile() && isImage(entry.name)).map((entry) => entry.name);
const sourceCategories = [
  ...folderCategories,
  ...(rootImages.length
    ? [
        {
          slug: "ostatne",
          label: categoryMeta.ostatne.label,
          description: categoryMeta.ostatne.description,
          sourceFolder: sourceRoot,
          rootFiles: rootImages
        }
      ]
    : [])
].sort(sortCategories);

await rm(publicRoot, { recursive: true, force: true });
await mkdir(publicRoot, { recursive: true });

const categories = [];
const images = [];

for (const category of sourceCategories) {
  const targetFolder = path.join(publicRoot, category.slug);
  await mkdir(targetFolder, { recursive: true });

  const files = (category.rootFiles ??
    (await readdir(category.sourceFolder, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && isImage(entry.name))
      .map((entry) => entry.name))
    .sort((a, b) => a.localeCompare(b, "sk"));

  categories.push({
    slug: category.slug,
    label: category.label,
    description: category.description,
    imageCount: files.length
  });

  for (const [index, fileName] of files.entries()) {
    const ext = path.extname(fileName).toLowerCase() === ".jpeg" ? ".jpg" : path.extname(fileName).toLowerCase();
    const number = String(index + 1).padStart(2, "0");
    const publicName = `${category.slug}-${number}${ext}`;
    const src = `/referencie/${category.slug}/${publicName}`;

    await copyFile(path.join(category.sourceFolder, fileName), path.join(targetFolder, publicName));

    images.push({
      id: `${category.slug}-${number}`,
      category: category.slug,
      categoryLabel: category.label,
      src,
      title: `${category.label} ${index + 1}`,
      alt: `STOLÁRSTVO SKRINKA - ${category.label.toLowerCase()} realizácia ${index + 1}`
    });
  }
}

const featured = {
  hero: pick(images, "kuchyne", 0),
  about: pick(images, "vstavane-skrine", 0),
  serviceInterior: pick(images, "kuchyne", 1),
  serviceExterior: pick(images, "chodby", 0),
  detailOne: pick(images, "obyvacky", 0),
  detailTwo: pick(images, "vstavane-skrine", 1),
  portfolioPreview: [
    pick(images, "kuchyne", 2),
    pick(images, "vstavane-skrine", 2),
    pick(images, "chodby", 2),
    pick(images, "obyvacky", 1),
    pick(images, "kupelne", 0),
    pick(images, "ostatne", 0)
  ].filter(Boolean)
};

const content = `export type GalleryCategory = {
  slug: string;
  label: string;
  description: string;
  imageCount: number;
};

export type GalleryImage = {
  id: string;
  category: string;
  categoryLabel: string;
  src: string;
  title: string;
  alt: string;
};

export const galleryCategories = ${toTs(categories)} satisfies GalleryCategory[];

export const galleryImages = ${toTs(images)} satisfies GalleryImage[];

export const featuredImages = ${toTs(featured)} satisfies {
  hero: GalleryImage;
  about: GalleryImage;
  serviceInterior: GalleryImage;
  serviceExterior: GalleryImage;
  detailOne: GalleryImage;
  detailTwo: GalleryImage;
  portfolioPreview: GalleryImage[];
};
`;

await writeFile(dataPath, content, "utf8");

console.log(`Synced ${images.length} images across ${categories.length} categories.`);
