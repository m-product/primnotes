import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState, useEffect } from 'react';

export default function Home() {
  
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  /*
  return (
    <div className="App">
      <header className="App-header">
        PRIMNOTES TEXT EDITOR
      </header>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  )
  */

  const [editor, setEditor] = useState(false)
  useEffect(() => {
    setEditor(true)
  }, [])

  return (
    <>
      {editor ? (
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      ) : null}
    </>
  )

}
