import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import whatsonstage from "/public/images/whatsonstage.png";

export const NonFiction = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Non-Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <RowImageContainer>
        <BlogImage src={whatsonstage} alt="Whatsonstage logo" />
      </RowImageContainer>
      <Text color={"var(--black)"}>
        Michael has been a professional theatre critic for 30 years. His work
        has appeared in national newspapers and he has been a regular reviewer
        for <i>The Stage</i>, as well as serving as resident critic for a host
        of regional newspaper titles. His reviews can be read at{" "}
        <a href="www.stagereviews.co.uk">www.stagereviews.co.uk</a> and{" "}
        <a href="www.whatsonstage.com">whatsonstage.com</a>.
      </Text>
      <Text>
        He is also a regular contributor of articles, interviews and biographies
        for theatre and concert programmes. His pieces have featured in
        productions for the Royal Shakespeare Company, West End shows and
        regional venues all over the country.
      </Text>
    </>
  );
};
