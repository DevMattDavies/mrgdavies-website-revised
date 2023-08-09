import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import meet_marry_murder from "/public/images/meet_marry_murder.png";

export const Scriptwriting = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Scriptwriting<ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <RowImageContainer>
        <BlogImage src={meet_marry_murder} alt="meet marry murder image" />
      </RowImageContainer>
      <Text color={"var(--black)"}>
        Michael has written more than 20 hours of narrative non-fiction for
        television shows that have been sold worldwide. One of these –{" "}
        <i>Meet, Marry, Murder</i> – was named number one in the Netflix charts.
      </Text>
      <Text>
        He holds an MA in TV Scriptwriting from De Montfort University and has a
        wide portfolio of scripts. He has also written radio plays, one of which
        has Sir Derek Jacobi attached and is being taken through the BBC’s
        commissioning process by a Radio 4 staff producer. Other work includes
        feature films, shorts, corporate and online scripts.
      </Text>
    </>
  );
};
