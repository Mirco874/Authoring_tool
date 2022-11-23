import { CollectionsOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Panel, PanelEditor } from "../../components";
import "./EditorPage.css";
export const EditorPage = () => {
  const initialElements = {
    chapters: [
      { content: "this is the content" },
      { content: "this is the second content" }
    ],
  };

  const [elements, setElements] = useState(initialElements);

  const onAddChapter = (content) => {
    const {chapters}=elements;
    const updatedChapters={chapters:[...chapters,{content:"new content"}]};
    setElements(updatedChapters);
  };

  return (
    <main className="main">
      <aside className="side-bar">
        <PanelEditor onAddChapter={onAddChapter} />
      </aside>
      <section className="panel-section">
        <Panel data={elements} />
      </section>
    </main>
  );
};
