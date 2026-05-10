export type GalleryCategory = {
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

export const galleryCategories = [
  {
    "slug": "kuchyne",
    "label": "Kuchyne",
    "description": "Kuchynské linky a kuchynský nábytok navrhnutý pre konkrétny priestor.",
    "imageCount": 26
  },
  {
    "slug": "vstavane-skrine",
    "label": "Vstavané skrine",
    "description": "Vstavané skrine, šatníky a úložné systémy vyrábané na mieru.",
    "imageCount": 25
  },
  {
    "slug": "chodby",
    "label": "Chodby",
    "description": "Chodby, vstupné priestory a praktické úložné riešenia na mieru.",
    "imageCount": 14
  },
  {
    "slug": "obyvacky",
    "label": "Obývačky",
    "description": "Obývacie steny, skrinky a interiérové prvky pre dennú časť domu.",
    "imageCount": 8
  },
  {
    "slug": "kupelne",
    "label": "Kúpeľne",
    "description": "Kúpeľňový nábytok a odolné úložné riešenia na mieru.",
    "imageCount": 2
  }
] satisfies GalleryCategory[];

export const galleryImages = [
  {
    "id": "kuchyne-01",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-01.jpg",
    "title": "Kuchyne 1",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 1"
  },
  {
    "id": "kuchyne-02",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-02.jpg",
    "title": "Kuchyne 2",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 2"
  },
  {
    "id": "kuchyne-03",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-03.jpg",
    "title": "Kuchyne 3",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 3"
  },
  {
    "id": "kuchyne-04",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-04.jpg",
    "title": "Kuchyne 4",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 4"
  },
  {
    "id": "kuchyne-05",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-05.jpg",
    "title": "Kuchyne 5",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 5"
  },
  {
    "id": "kuchyne-06",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-06.jpg",
    "title": "Kuchyne 6",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 6"
  },
  {
    "id": "kuchyne-07",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-07.jpg",
    "title": "Kuchyne 7",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 7"
  },
  {
    "id": "kuchyne-08",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-08.jpg",
    "title": "Kuchyne 8",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 8"
  },
  {
    "id": "kuchyne-09",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-09.jpg",
    "title": "Kuchyne 9",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 9"
  },
  {
    "id": "kuchyne-10",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-10.jpg",
    "title": "Kuchyne 10",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 10"
  },
  {
    "id": "kuchyne-11",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-11.jpg",
    "title": "Kuchyne 11",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 11"
  },
  {
    "id": "kuchyne-12",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-12.jpg",
    "title": "Kuchyne 12",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 12"
  },
  {
    "id": "kuchyne-13",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-13.jpg",
    "title": "Kuchyne 13",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 13"
  },
  {
    "id": "kuchyne-14",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-14.jpg",
    "title": "Kuchyne 14",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 14"
  },
  {
    "id": "kuchyne-15",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-15.jpg",
    "title": "Kuchyne 15",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 15"
  },
  {
    "id": "kuchyne-16",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-16.jpg",
    "title": "Kuchyne 16",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 16"
  },
  {
    "id": "kuchyne-17",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-17.jpg",
    "title": "Kuchyne 17",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 17"
  },
  {
    "id": "kuchyne-18",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-18.jpg",
    "title": "Kuchyne 18",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 18"
  },
  {
    "id": "kuchyne-19",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-19.jpg",
    "title": "Kuchyne 19",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 19"
  },
  {
    "id": "kuchyne-20",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-20.jpg",
    "title": "Kuchyne 20",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 20"
  },
  {
    "id": "kuchyne-21",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-21.jpg",
    "title": "Kuchyne 21",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 21"
  },
  {
    "id": "kuchyne-22",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-22.jpg",
    "title": "Kuchyne 22",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 22"
  },
  {
    "id": "kuchyne-23",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-23.jpg",
    "title": "Kuchyne 23",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 23"
  },
  {
    "id": "kuchyne-24",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-24.jpg",
    "title": "Kuchyne 24",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 24"
  },
  {
    "id": "kuchyne-25",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-25.jpg",
    "title": "Kuchyne 25",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 25"
  },
  {
    "id": "kuchyne-26",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-26.jpg",
    "title": "Kuchyne 26",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 26"
  },
  {
    "id": "vstavane-skrine-01",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-01.jpg",
    "title": "Vstavané skrine 1",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 1"
  },
  {
    "id": "vstavane-skrine-02",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-02.jpg",
    "title": "Vstavané skrine 2",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 2"
  },
  {
    "id": "vstavane-skrine-03",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-03.jpg",
    "title": "Vstavané skrine 3",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 3"
  },
  {
    "id": "vstavane-skrine-04",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-04.jpg",
    "title": "Vstavané skrine 4",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 4"
  },
  {
    "id": "vstavane-skrine-05",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-05.jpg",
    "title": "Vstavané skrine 5",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 5"
  },
  {
    "id": "vstavane-skrine-06",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-06.jpg",
    "title": "Vstavané skrine 6",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 6"
  },
  {
    "id": "vstavane-skrine-07",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-07.jpg",
    "title": "Vstavané skrine 7",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 7"
  },
  {
    "id": "vstavane-skrine-08",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-08.jpg",
    "title": "Vstavané skrine 8",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 8"
  },
  {
    "id": "vstavane-skrine-09",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-09.jpg",
    "title": "Vstavané skrine 9",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 9"
  },
  {
    "id": "vstavane-skrine-10",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-10.jpg",
    "title": "Vstavané skrine 10",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 10"
  },
  {
    "id": "vstavane-skrine-11",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-11.jpg",
    "title": "Vstavané skrine 11",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 11"
  },
  {
    "id": "vstavane-skrine-12",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-12.jpg",
    "title": "Vstavané skrine 12",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 12"
  },
  {
    "id": "vstavane-skrine-13",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-13.jpg",
    "title": "Vstavané skrine 13",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 13"
  },
  {
    "id": "vstavane-skrine-14",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-14.jpg",
    "title": "Vstavané skrine 14",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 14"
  },
  {
    "id": "vstavane-skrine-15",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-15.jpg",
    "title": "Vstavané skrine 15",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 15"
  },
  {
    "id": "vstavane-skrine-16",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-16.jpg",
    "title": "Vstavané skrine 16",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 16"
  },
  {
    "id": "vstavane-skrine-17",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-17.jpg",
    "title": "Vstavané skrine 17",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 17"
  },
  {
    "id": "vstavane-skrine-18",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-18.jpg",
    "title": "Vstavané skrine 18",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 18"
  },
  {
    "id": "vstavane-skrine-19",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-19.jpg",
    "title": "Vstavané skrine 19",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 19"
  },
  {
    "id": "vstavane-skrine-20",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-20.jpg",
    "title": "Vstavané skrine 20",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 20"
  },
  {
    "id": "vstavane-skrine-21",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-21.jpg",
    "title": "Vstavané skrine 21",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 21"
  },
  {
    "id": "vstavane-skrine-22",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-22.jpg",
    "title": "Vstavané skrine 22",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 22"
  },
  {
    "id": "vstavane-skrine-23",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-23.jpg",
    "title": "Vstavané skrine 23",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 23"
  },
  {
    "id": "vstavane-skrine-24",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-24.jpg",
    "title": "Vstavané skrine 24",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 24"
  },
  {
    "id": "vstavane-skrine-25",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-25.jpg",
    "title": "Vstavané skrine 25",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 25"
  },
  {
    "id": "chodby-01",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-01.jpg",
    "title": "Chodby 1",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 1"
  },
  {
    "id": "chodby-02",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-02.jpg",
    "title": "Chodby 2",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 2"
  },
  {
    "id": "chodby-03",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-03.jpg",
    "title": "Chodby 3",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 3"
  },
  {
    "id": "chodby-04",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-04.jpg",
    "title": "Chodby 4",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 4"
  },
  {
    "id": "chodby-05",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-05.jpg",
    "title": "Chodby 5",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 5"
  },
  {
    "id": "chodby-06",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-06.jpg",
    "title": "Chodby 6",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 6"
  },
  {
    "id": "chodby-07",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-07.jpg",
    "title": "Chodby 7",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 7"
  },
  {
    "id": "chodby-08",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-08.jpg",
    "title": "Chodby 8",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 8"
  },
  {
    "id": "chodby-09",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-09.jpg",
    "title": "Chodby 9",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 9"
  },
  {
    "id": "chodby-10",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-10.jpg",
    "title": "Chodby 10",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 10"
  },
  {
    "id": "chodby-11",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-11.jpg",
    "title": "Chodby 11",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 11"
  },
  {
    "id": "chodby-12",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-12.jpg",
    "title": "Chodby 12",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 12"
  },
  {
    "id": "chodby-13",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-13.jpg",
    "title": "Chodby 13",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 13"
  },
  {
    "id": "chodby-14",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-14.jpg",
    "title": "Chodby 14",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 14"
  },
  {
    "id": "obyvacky-01",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-01.jpg",
    "title": "Obývačky 1",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 1"
  },
  {
    "id": "obyvacky-02",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-02.jpg",
    "title": "Obývačky 2",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 2"
  },
  {
    "id": "obyvacky-03",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-03.jpg",
    "title": "Obývačky 3",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 3"
  },
  {
    "id": "obyvacky-04",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-04.jpg",
    "title": "Obývačky 4",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 4"
  },
  {
    "id": "obyvacky-05",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-05.jpg",
    "title": "Obývačky 5",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 5"
  },
  {
    "id": "obyvacky-06",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-06.jpg",
    "title": "Obývačky 6",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 6"
  },
  {
    "id": "obyvacky-07",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-07.jpg",
    "title": "Obývačky 7",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 7"
  },
  {
    "id": "obyvacky-08",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-08.jpg",
    "title": "Obývačky 8",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 8"
  },
  {
    "id": "kupelne-01",
    "category": "kupelne",
    "categoryLabel": "Kúpeľne",
    "src": "/referencie/kupelne/kupelne-01.jpg",
    "title": "Kúpeľne 1",
    "alt": "STOLÁRSTVO SKRINKA - kúpeľne realizácia 1"
  },
  {
    "id": "kupelne-02",
    "category": "kupelne",
    "categoryLabel": "Kúpeľne",
    "src": "/referencie/kupelne/kupelne-02.jpg",
    "title": "Kúpeľne 2",
    "alt": "STOLÁRSTVO SKRINKA - kúpeľne realizácia 2"
  }
] satisfies GalleryImage[];

export const featuredImages = {
  "hero": {
    "id": "kuchyne-01",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-01.jpg",
    "title": "Kuchyne 1",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 1"
  },
  "about": {
    "id": "vstavane-skrine-01",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-01.jpg",
    "title": "Vstavané skrine 1",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 1"
  },
  "serviceInterior": {
    "id": "kuchyne-02",
    "category": "kuchyne",
    "categoryLabel": "Kuchyne",
    "src": "/referencie/kuchyne/kuchyne-02.jpg",
    "title": "Kuchyne 2",
    "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 2"
  },
  "serviceExterior": {
    "id": "chodby-01",
    "category": "chodby",
    "categoryLabel": "Chodby",
    "src": "/referencie/chodby/chodby-01.jpg",
    "title": "Chodby 1",
    "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 1"
  },
  "detailOne": {
    "id": "obyvacky-01",
    "category": "obyvacky",
    "categoryLabel": "Obývačky",
    "src": "/referencie/obyvacky/obyvacky-01.jpg",
    "title": "Obývačky 1",
    "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 1"
  },
  "detailTwo": {
    "id": "vstavane-skrine-02",
    "category": "vstavane-skrine",
    "categoryLabel": "Vstavané skrine",
    "src": "/referencie/vstavane-skrine/vstavane-skrine-02.jpg",
    "title": "Vstavané skrine 2",
    "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 2"
  },
  "portfolioPreview": [
    {
      "id": "kuchyne-03",
      "category": "kuchyne",
      "categoryLabel": "Kuchyne",
      "src": "/referencie/kuchyne/kuchyne-03.jpg",
      "title": "Kuchyne 3",
      "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 3"
    },
    {
      "id": "vstavane-skrine-03",
      "category": "vstavane-skrine",
      "categoryLabel": "Vstavané skrine",
      "src": "/referencie/vstavane-skrine/vstavane-skrine-03.jpg",
      "title": "Vstavané skrine 3",
      "alt": "STOLÁRSTVO SKRINKA - vstavané skrine realizácia 3"
    },
    {
      "id": "chodby-03",
      "category": "chodby",
      "categoryLabel": "Chodby",
      "src": "/referencie/chodby/chodby-03.jpg",
      "title": "Chodby 3",
      "alt": "STOLÁRSTVO SKRINKA - chodby realizácia 3"
    },
    {
      "id": "obyvacky-02",
      "category": "obyvacky",
      "categoryLabel": "Obývačky",
      "src": "/referencie/obyvacky/obyvacky-02.jpg",
      "title": "Obývačky 2",
      "alt": "STOLÁRSTVO SKRINKA - obývačky realizácia 2"
    },
    {
      "id": "kupelne-01",
      "category": "kupelne",
      "categoryLabel": "Kúpeľne",
      "src": "/referencie/kupelne/kupelne-01.jpg",
      "title": "Kúpeľne 1",
      "alt": "STOLÁRSTVO SKRINKA - kúpeľne realizácia 1"
    },
    {
      "id": "kuchyne-01",
      "category": "kuchyne",
      "categoryLabel": "Kuchyne",
      "src": "/referencie/kuchyne/kuchyne-01.jpg",
      "title": "Kuchyne 1",
      "alt": "STOLÁRSTVO SKRINKA - kuchyne realizácia 1"
    }
  ]
} satisfies {
  hero: GalleryImage;
  about: GalleryImage;
  serviceInterior: GalleryImage;
  serviceExterior: GalleryImage;
  detailOne: GalleryImage;
  detailTwo: GalleryImage;
  portfolioPreview: GalleryImage[];
};
