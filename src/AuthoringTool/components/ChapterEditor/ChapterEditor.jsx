import { useRef } from "react";
import {Editor} from "@tinymce/tinymce-react";
import "./ChapterEditor.css"
export const ChapterEditor = ({content}) => {

    const editorRef=useRef();
    const showHtml=()=>{
        console.log(editorRef.current.getContent())
    }

  return (
    <div className="editor-container" >
        <Editor onInit={(e,editor)=>{editorRef.current=editor} }/>
        <button onClick={()=>showHtml()}>show html</button>
    </div>
  )
}
