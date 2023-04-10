import { MobileWelcomeSubtitle } from "@/styles/Text/Text.styles";

const MobileWelcome = (): JSX.Element => {
  return (
    <>
      <HomeImage src="assets/roleplay.jpg" />
      <MobileWelcomeSubtitle color={"var(--white)"}>Test</MobileWelcomeSubtitle>
    </>
  );
};

import { HomeImage } from "@/styles/Images/Image.styles";

export default MobileWelcome;
