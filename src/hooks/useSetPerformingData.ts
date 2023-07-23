import { useState } from "react";

export const useSetPerformingData = () => {
  const [performingSubtitle, setPerformingSubtitle] = useState("");

  const updatePerformingSubtitle = (e: any) => {
    const clickedSubtitle = e.target.textContent;
    setPerformingSubtitle(clickedSubtitle);
  };

  return { performingSubtitle, updatePerformingSubtitle };
};
