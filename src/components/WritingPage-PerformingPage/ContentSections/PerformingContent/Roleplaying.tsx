import { ColorStop, HR, Subtitle, Text } from "@/styles/Text/Text.styles";

export const Roleplaying = (): JSX.Element => {
  return (
    <>
      <Subtitle>
        Roleplaying<ColorStop color={"var(--red)"}>.</ColorStop>
      </Subtitle>
      <HR />
      <Text color={"var(--black)"}>
        Nowhere near as dodgy as it sounds, the kind of roleplay in which
        Michael indulges is strictly professional, usually involving assessment
        and development, leadership and management or communication skills
        training. He is also a highly skilled facilitator.
      </Text>
      <Text>
        He holds a full DBS certificate and is specially qualified to deliver
        end-of-life and cancer care skills training. His extensive experience
        across the public and private sectors includes: Home Office, Foreign
        Office, NHS, BBC, Arts Council England, banks and financial
        institutions, police forces, fire and local authorities and retail
        companies.
      </Text>
    </>
  );
};
