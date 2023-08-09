import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";
import { RowImageContainer } from "@/styles/Containers/Container.styles";
import { BlogImage } from "@/components/Images/Images";
import public_speaking from "/public/images/public_speaking.png";

export const PublicSpeaking = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Public Speaking & Lecturing
        <ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <RowImageContainer>
        <BlogImage src={public_speaking} alt="Mike speaking to the public" />
      </RowImageContainer>
      <Text color={"var(--black)"}>
        A national award-winning public speaker, Michael is highly experienced
        in formal and informal situations, from after-dinner engagements to
        university lecturing.
      </Text>
      <Text>
        Michael has addressed meetings and conferences from the WI to corporate
        boards and his natural, entertaining style is highly adaptable to any
        audience. He’s given talks on everything from the state of the newspaper
        industry to the brilliance of <i>The West Wing</i>.
      </Text>
      <Text>
        In more formal settings, Michael has delivered lectures, facilitation
        and training for many universities, including Birmingham, Warwick,
        Leicester, Wolverhampton and Northampton. He has led lectures and
        workshops in creative writing and journalism for university
        undergraduates, sessions on media production for secondary pupils and
        ‘how to write a news report’ groups for primary schoolchildren.
      </Text>
      <Text>
        He has trained hundreds of journalists in new technology and is also an
        experienced trainer in project management.
      </Text>
    </>
  );
};
