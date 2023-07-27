import { ChangeEvent, useState } from "react";
import {
  NewsletterButton,
  NewsletterForm,
  NewsletterInput,
} from "@/styles/Footer/Footer.styles";
import { FooterSubheading } from "@/styles/Text/Text.styles";

const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e: any) => {
    e.preventDefault();
    setIsEmailSubmitted(true);
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
          <input type="hidden" name="ml-submit" value="1" />
          <NewsletterButton
            type="submit"
            value={isEmailSubmitted ? "Submitted" : "Sign up"}
            className="button"
          >
            {isEmailSubmitted ? "Thanks!" : "Sign up"}
          </NewsletterButton>
        </NewsletterForm>
        <input type="hidden" name="anticsrf" value="true" />
      </form>
      <script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v1f25ee4b05f240a833e02c19975434a4"
        type="text/javascript"
      />
    </>
  );
};

export default SubscriptionSection;
