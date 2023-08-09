import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import outback_cover from "/public/images/outback_cover.png";
import domino_island from "/public/images/domino_island_cover.jpg";
import lancashire_stories from "/public/images/lancashire_stories_cover.jpeg";
import vicious_circle from "/public/images/vicious_circle_cover.jpg";

export const Fiction = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <RowImageContainer>
        <BlogImage src={outback_cover} alt="outback book cover" />
        <BlogImage src={domino_island} alt="domino island book cover" />
        <BlogImage
          src={lancashire_stories}
          alt="lancashire stories book cover"
        />
        <BlogImage src={vicious_circle} alt="vicious circle book cover" />
      </RowImageContainer>
      <Text color={"var(--black)"}>
        <i>Outback</i>, Michael’s debut novel published in May 2023 by
        HarperCollins, is the culmination of years of fiction-writing. It
        features the protagonist Bill Kemp – described by Jeffrey Deaver as
        ‘part James Bond, part Philip Marlowe, and all hero’ – who first
        appeared in the Desmond Bagley thriller <i>Domino Island</i>, which
        Michael was commissioned to complete for posthumous publication in 2019.{" "}
        <i>Outback</i> is a kind of sequel and honours the legacy of the ‘master
        of the genre’ Bagley in the centenary year of his birth.
      </Text>
      <Text>
        The next novel in the Bill Kemp thriller series, <i>Thin Ice</i>, is due
        to be published in 2024.
      </Text>
      <Text>
        Elsewhere, Michael contributed to <i>Vicious Circle</i>, a collaboration
        between a dozen writers to create a novel in just one weekend. His short
        stories have won awards and the latest, <i>Last Tram to Fleetwood</i>,
        is published in an anthology entitled <i>Lancashire Stories</i>.
      </Text>
    </>
  );
};
