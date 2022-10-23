import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Editor } from "lily-utils"
import { EditorState } from "draft-js";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//     <BrowserRouter>
//         <Route />
//     </BrowserRouter>
// );

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

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </React.StrictMode>
);

// root.render(<Main />)