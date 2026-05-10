import { type ReactNode } from "react";

type RollingTextProps = {
  children: ReactNode;
  text?: string;
};

export function RollingText({ children, text }: RollingTextProps) {
  const label = typeof children === "string" ? children : text;

  return (
    <span className="rolling-text" aria-hidden={label ? undefined : true}>
      <span className="rolling-text-inner" data-text={label}>
        {children}
      </span>
    </span>
  );
}
