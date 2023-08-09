import {
  Fiction,
  Scriptwriting,
  Stage,
  NonFiction,
  Journalism,
} from "./WritingContent";

type TWritingContent = {
  writingSubtitle: string;
};

export const Writing = ({ writingSubtitle }: TWritingContent): JSX.Element => {
  return (
    <>
      {writingSubtitle === "Fiction." ? <Fiction /> : null}
      {writingSubtitle === "Scriptwriting." ? <Scriptwriting /> : null}
      {writingSubtitle === "Stage." ? <Stage /> : null}
      {writingSubtitle === "Non-Fiction." ? <NonFiction /> : null}
      {writingSubtitle === "Journalism." ? <Journalism /> : null}
    </>
  );
};

export default Writing;
