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
};

// Footer types
export type NewsletterButtonProps = {
  onSubmit: (e: React.FormEvent) => void;
};

export type FooterProps = {
  outline?: boolean;
};

export type MainContainerProps = {
  padding: string;
};

export type ContainerBackgroundProps = {
  red?: boolean;
};
