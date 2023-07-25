import { useState } from "react";

export const useSetPerformingData = () => {
  const [performingSubtitle, setPerformingSubtitle] = useState("");

  const updatePerformingSubtitle = (e: any) => {
    const clickedSubtitle = e.target.textContent;
    // console.log(clickedSubtitle);
    if (clickedSubtitle === "Performing.") {
      setPerformingSubtitle("");
    } else {
      setPerformingSubtitle(clickedSubtitle);
    }
  };

  return { performingSubtitle, updatePerformingSubtitle };
};
