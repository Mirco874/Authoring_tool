import { ChapterEditor } from "../ChapterEditor/ChapterEditor";

export const Panel = ({ data }) => {
  const { chapters } = data;
  return (
    <div>
      {chapters.map((chapter) => (<div key={chapter.content} >
        <ChapterEditor content={chapter.content} />
        <hr />
        </div>
      ))}
    </div>
  );
};
