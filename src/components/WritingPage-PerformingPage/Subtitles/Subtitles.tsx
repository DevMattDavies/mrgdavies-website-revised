import {
  ColorStop,
  WritingAndPerformingSubtitle,
} from "@/styles/Text/Text.styles";

type TSubtitles = {
  page?: string;
  updateWritingData?: (e: any) => void;
  updatePerformingData?: (e: any) => void;
};

export const Subtitles = ({
  page,
  updateWritingData,
  updatePerformingData,
}: TSubtitles): JSX.Element => {
  if (page === "writing") {
    return (
      <>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updateWritingData}
        >
          Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updateWritingData}
        >
          Scriptwriting<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updateWritingData}
        >
          Stage<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updateWritingData}
        >
          Non-Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updateWritingData}
        >
          Journalism<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
      </>
    );
  } else {
    return (
      <>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updatePerformingData}
        >
          Acting<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updatePerformingData}
        >
          Voiceover<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updatePerformingData}
        >
          Presenting<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updatePerformingData}
        >
          Roleplaying<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updatePerformingData}
        >
          Public Speaking & Lecturing
          <ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
        <WritingAndPerformingSubtitle
          color={"var(--black)"}
          onClick={updatePerformingData}
        >
          Music<ColorStop color={"var(--red)"}>.</ColorStop>
        </WritingAndPerformingSubtitle>
      </>
    );
  }
};

export default Subtitles;
