import "./PanelEditor.css"
export const PanelEditor = ({onAddChapter}) => {
  return (
    <>
      <h3 className="aside-title">Select element:</h3>
        <hr />
      <div id="add-chapter-option" className="add-element-btn" onClick={()=>{onAddChapter("a")}}>
        <p>Add chapter</p> 
      </div>
      <div id="add-quiz-option" className="">
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" > Add question </button>
      </div>
    </>
  );
};
