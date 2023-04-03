import React from "react";

export type PageTitleProps = {
  outline?: boolean;
};

export type TextProps = {
  italic?: boolean;
};

export type NewsletterButtonProps = {
  onSubmit: (e: React.FormEvent) => void;
};
