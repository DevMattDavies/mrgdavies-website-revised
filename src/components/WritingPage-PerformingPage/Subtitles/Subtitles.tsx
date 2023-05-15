import {
  ColorStop,
  WritingAndPerformingSubtitle,
} from "@/styles/Text/Text.styles";

import { motion } from "framer-motion";

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
        <motion.div
          whileHover={{ marginLeft: "2rem" }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          whileHover={{ marginLeft: "2rem" }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Scriptwriting<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          whileHover={{ marginLeft: "2rem" }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Stage<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          whileHover={{ marginLeft: "2rem" }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateWritingData}
          >
            Non-Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          whileHover={{ marginLeft: "2rem" }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
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
          whileHover={{ marginLeft: "2rem" }}
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
          whileHover={{ marginLeft: "2rem" }}
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
          whileHover={{ marginLeft: "2rem" }}
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
          whileHover={{ marginLeft: "2rem" }}
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
          whileHover={{ marginLeft: "2rem" }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updatePerformingData}
          >
            Public Speaking & Lecturing
            <ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          whileHover={{ marginLeft: "2rem" }}
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
