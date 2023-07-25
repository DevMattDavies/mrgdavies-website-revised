import { motion } from "framer-motion";
import {
  ColorStop,
  WritingAndPerformingSubtitle,
} from "@/styles/Text/Text.styles";

type TSubtitles = {
  page?: string;
  writingSubtitle?: string;
  performingSubtitle?: string;
  updateWritingData?: (e: any) => void;
  updatePerformingData?: (e: any) => void;
};

export const Subtitles = ({
  page,
  writingSubtitle,
  performingSubtitle,
  updateWritingData,
  updatePerformingData,
}: TSubtitles): JSX.Element => {
  if (page === "writing") {
    return (
      <>
        <motion.div
          animate={{ marginLeft: writingSubtitle === "Fiction." ? "2rem" : 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="fiction"
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: writingSubtitle === "Scriptwriting." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="scriptwriting"
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Scriptwriting<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{ marginLeft: writingSubtitle === "Stage." ? "2rem" : 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="stage"
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Stage<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: writingSubtitle === "Non-Fiction." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="non-fiction"
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Non-Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: writingSubtitle === "Journalism." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="journalism"
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Journalism<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <motion.div
          animate={{
            marginLeft: performingSubtitle === "Acting." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updatePerformingData}
          >
            Acting<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: performingSubtitle === "Voiceover." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updatePerformingData}
          >
            Voiceover<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: performingSubtitle === "Presenting." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updatePerformingData}
          >
            Presenting<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: performingSubtitle === "Roleplaying." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updatePerformingData}
          >
            Roleplaying<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft:
              performingSubtitle === "Public Speaking & Lecturing."
                ? "2rem"
                : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updatePerformingData}
          >
            Public Speaking <br />& Lecturing
            <ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: performingSubtitle === "Music." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updatePerformingData}
          >
            Music<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
      </>
    );
  }
};

export default Subtitles;
