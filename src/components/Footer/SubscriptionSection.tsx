import { ChangeEvent, useEffect, useState } from "react";
import Script from "next/script";
import {
  NewsletterButton,
  NewsletterForm,
  NewsletterInput,
  NewsletterConfirmation,
  NewsletterError,
} from "@/styles/Footer/Footer.styles";
import { FooterSubheading } from "@/styles/Text/Text.styles";

const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
    setNameError("");
  };

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isNameValid = name.trim().length > 0;

    setIsFormValid(isEmailValid && isNameValid);
  }, [email, name]);

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();

    if (!isFormValid) {
      if (!name.trim()) {
        setNameError("Please provide a name");
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError("Please provide a valid email");
      }
      return;
    }

    setIsEmailSubmitted(true);
    try {
      const response = await fetch(
        "https://assets.mailerlite.com/jsonp/512752/forms/94840561898358047/subscribe",
        {
          method: "POST",
          body: JSON.stringify({ fields: { email, name } }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("An error occurred while subscribing:", error);
    }
  };

  return (
    <>
      <FooterSubheading>Subscribe</FooterSubheading>
      <form
        action="https://assets.mailerlite.com/jsonp/512752/forms/94840561898358047/subscribe"
        method="post"
        target="_blank"
        onSubmit={handleEmailSubmit}
      >
        <NewsletterForm>
          <NewsletterInput
            aria-label="name"
            aria-required="true"
            type="text"
            className="form-control"
            data-inputmask=""
            name="fields[name]"
            placeholder="Name"
            autoComplete="name"
            required
            onChange={handleNameChange}
            value={isEmailSubmitted ? "" : name}
          ></NewsletterInput>
          {nameError && <NewsletterError>{nameError}</NewsletterError>}
          <NewsletterInput
            aria-label="email"
            aria-required="true"
            type="email"
            className="form-control"
            data-inputmask=""
            name="fields[email]"
            placeholder="Email"
            autoComplete="email"
            required
            onChange={handleEmailChange}
            value={isEmailSubmitted ? "" : email}
          ></NewsletterInput>
          {emailError && <NewsletterError>{emailError}</NewsletterError>}
          <input type="hidden" name="ml-submit" value="1" />
          {isEmailSubmitted ? (
            <NewsletterConfirmation>
              Thanks for subscribing!
            </NewsletterConfirmation>
          ) : (
            <NewsletterButton
              type="submit"
              value={isEmailSubmitted ? "Submitted" : "Sign up"}
              className="button"
            >
              Sign up
            </NewsletterButton>
          )}
        </NewsletterForm>
        <input type="hidden" name="anticsrf" value="true" />
      </form>
      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v1f25ee4b05f240a833e02c19975434a4"
        type="text/javascript"
      />
    </>
  );
};

export default SubscriptionSection;
