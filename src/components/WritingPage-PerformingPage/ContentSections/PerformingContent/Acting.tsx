import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import professor_curvature from "/public/images/professor_curvature.jpg";
import man_wide from "/public/images/man_of_the_moment_wide.jpg";
import man_diving from "/public/images/man_of_the_moment_diving.jpg";

export const Acting = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Acting<ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <RowImageContainer>
        <BlogImage src={professor_curvature} alt="Curvature acting" />
        <BlogImage src={man_wide} alt="Man of the moment acting" />
        <BlogImage src={man_diving} alt="Man of the moment diving" />
      </RowImageContainer>
      <Text color={"var(--black)"}>
        Under his stage name Michael Crask-Davies, Michael’s professional debut
        came in Sir Alan Ayckbourn’s <i>Man of the Moment</i> (Royal & Derngate,
        Northampton), directed by the playwright himself. Michael also performed
        the world premiere of <i>CurvAture</i>, a one-man play by William
        Morris, at Leicester’s Curve Theatre.
      </Text>
      <Text>
        Other roles include the leading man in musicals such as{" "}
        <i>Kiss Me Kate</i> and <i>Smike</i>, and plays including the two-hander{" "}
        <i>Sleuth</i>. In addition, his musical expertise has led him to act as
        musical director on a number of shows, including Carousel and Sondheim’s{" "}
        <i>A Funny Thing Happened On The Way To The Forum</i>, as well as for
        his own work, such as the originally-scored pantomime <i>Robin Hood</i>{" "}
        and a musical for schools, <i>Luigi Da Squigi (and the Wise Guys)</i>.
      </Text>
    </>
  );
};
