import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { Editor } from "@b0r0/lily-wysiwyg"
import { EditorState } from "draft-js";
import "./lily-wysiwyg.css";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const Main = () => {
    const editorState_ = EditorState.createEmpty();
    const [editorState, setEditorState] = useState(editorState_);
    return <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        editorStyle={{ height: 300}}
        onEditorStateChange={(e) => { 
            setEditorState(e)
        }}
        placeholder="Body of your document..."
        // onBlur={(_) => {
        //     const rawContentState = convertToRaw(editorState.getCurrentContent());
        //     let x = draftToHtml(rawContentState);
        //     setBody(x);
        // }}
    />
}

root.render(<Main />)