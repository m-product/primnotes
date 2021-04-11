import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Editor, EditorState } from 'draft-js';
import React, { useState, useEffect } from 'react';

import 'draft-js/dist/Draft.css'
import 'tailwindcss/tailwind.css'

export default function Home() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [editor, setEditor] = useState(false)
  const [ref, setRef] = useState()

  useEffect(() => {
    setEditor(true)
  }, [])

  if (editor === false) return <></>

  return (
    <div
      className="w-1/2 p-8 m-8 border-2 border-gray-300"
      style={{ minHeight: "calc(100vh - 4rem)" }}
      onClick={() => { console.log(ref); ref.focus(); }}
    >
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        ref={setRef}
      />
    </div>
  )
}
