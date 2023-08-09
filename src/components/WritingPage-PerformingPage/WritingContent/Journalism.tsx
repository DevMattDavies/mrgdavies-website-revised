import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";

export const Journalism = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Journalism<ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <Text color={"var(--black)"}>
        Michael is an experienced journalist with more than 25 years at the
        highest levels in newspapers, including editorships and senior executive
        posts at several publishing groups. He has edited regional evening
        newspapers, served as Group Editor for a series of Sunday titles, and
        written regular columns and theatre reviews.
      </Text>
      <Text>
        He is recognised as one of the foremost newspaper designers in the UK
        and has redesigned every publication he has worked for. His skills have
        even been exploited to create mock-up newspapers for television
        productions.
      </Text>
      <Text>
        In a varied journalism career, Michael has been responsible for
        editorial departments of up to 100 staff, as well as project managing
        the multi-million-pound installation of entire new systems on time and
        on budget.
      </Text>
    </>
  );
};
