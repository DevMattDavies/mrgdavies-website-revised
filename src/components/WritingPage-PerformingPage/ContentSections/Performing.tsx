import {
  Acting,
  Voiceover,
  Presenting,
  Roleplaying,
  PublicSpeaking,
  Music,
} from "@/components/WritingPage-PerformingPage/PerformingContent";

type TPerformingContent = {
  performingSubtitle: string;
};

const Performing = ({
  performingSubtitle,
}: TPerformingContent): JSX.Element => {
  return (
    <>
      {performingSubtitle === "Acting." ? <Acting /> : null}
      {performingSubtitle === "Voiceover." ? <Voiceover /> : null}
      {performingSubtitle === "Presenting." ? <Presenting /> : null}
      {performingSubtitle === "Roleplaying." ? <Roleplaying /> : null}
      {performingSubtitle === "Public Speaking & Lecturing." ? (
        <PublicSpeaking />
      ) : null}
      {performingSubtitle === "Music." ? <Music /> : null}
    </>
  );
};

export default Performing;
