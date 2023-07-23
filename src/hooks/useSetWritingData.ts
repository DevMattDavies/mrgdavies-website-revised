import { useState } from "react";

export const useSetWritingData = () => {
  const [writingSubtitle, setWritingSubtitle] = useState("");

  const updateWritingSubtitle = (e: any) => {
    const clickedSubtitle = e.target.textContent;
    setWritingSubtitle(clickedSubtitle);
  };

  return { writingSubtitle, updateWritingSubtitle };
};
