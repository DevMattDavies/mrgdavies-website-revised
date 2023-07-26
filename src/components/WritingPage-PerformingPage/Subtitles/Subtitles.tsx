import { motion } from "framer-motion";
import {
  ColorStop,
  WritingAndPerformingSubtitle,
} from "@/styles/Text/Text.styles";

type TSubtitles = {
  page?: string;
  subtitle?: string;
  updateSubtitle?: (e: any) => void;
};

export const Subtitles = ({
  page,
  subtitle,
  updateSubtitle,
}: TSubtitles): JSX.Element => {
  if (page === "writing") {
    return (
      <>
        <motion.div
          animate={{ marginLeft: subtitle === "Fiction." ? "2rem" : 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="fiction"
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: subtitle === "Scriptwriting." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="scriptwriting"
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Scriptwriting<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{ marginLeft: subtitle === "Stage." ? "2rem" : 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="stage"
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Stage<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: subtitle === "Non-Fiction." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="non-fiction"
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Non-Fiction<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: subtitle === "Journalism." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            id="journalism"
            color={"var(--black)"}
            onClick={updateSubtitle}
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
            marginLeft: subtitle === "Acting." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Acting<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: subtitle === "Voiceover." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Voiceover<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: subtitle === "Presenting." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Presenting<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: subtitle === "Roleplaying." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Roleplaying<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft:
              subtitle === "Public Speaking & Lecturing." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Public Speaking <br />& Lecturing
            <ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
        <motion.div
          animate={{
            marginLeft: subtitle === "Music." ? "2rem" : 0,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <WritingAndPerformingSubtitle
            color={"var(--black)"}
            onClick={updateSubtitle}
          >
            Music<ColorStop color={"var(--red)"}>.</ColorStop>
          </WritingAndPerformingSubtitle>
        </motion.div>
      </>
    );
  }
};

export default Subtitles;
