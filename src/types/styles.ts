import React from "react";

// Font types
export type TextProps = {
  italic?: boolean;
};

export type ColorStopProps = {
  color: string;
};

// Nav types
export type PageTitleProps = {
  outline?: boolean;
  isMobile?: boolean;
};

// Footer types
export type NewsletterButtonProps = {
  onSubmit: (e: React.FormEvent) => void;
};

export type FooterProps = {
  isMobile?: boolean;
  outline?: boolean;
};
