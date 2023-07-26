import { useState } from "react";

export const useSetWritingAndPerformingData = () => {
  const [subtitle, setSubtitle] = useState("");

  const updateSubtitle = (e: any) => {
    const clickedSubtitle = e.target.textContent;
    if (clickedSubtitle === "Writing." || clickedSubtitle === "Performing.") {
      setSubtitle("");
    } else {
      setSubtitle(clickedSubtitle);
    }
  };

  return { subtitle, updateSubtitle };
};
