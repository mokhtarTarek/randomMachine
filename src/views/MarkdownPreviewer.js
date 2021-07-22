import React, { useState } from "react";
import { data } from "../data";
import Editor from "../components/MarkdownPreviwer/Editor";
import Viewer from "../components/MarkdownPreviwer/Viewer";
import '../css/style-markdown.css'

import MarkDownContext from "../MarkDownContext.js";

const Initialclasses = {
  icon: "fas fa-compress",
  editorClass: "markdown__editor--minimize",
  previewClass: "markdown__previewer--show",
};

function MarkdownPreviewer() {
  const [text, setText] = useState(data.markdownPreviwer.placeholder);
  const [maxEditor, setMaxEditor] = useState(true);
  const [maxPreview, setMaxPreview] = useState(true);
  const [classes, setClasses] = useState(Initialclasses);

  const handlemaxEditor = () => {
    setMaxEditor(maxEditor=>!maxEditor);
    setClasses(
      maxEditor
        ? {
            icon: "fas fa-compress-arrows-alt",
            editorClass: "markdown__editor--maximize",
            previewClass: "markdown__previewer--hide",
          }
        : {
            icon: "fas fa-compress",
            editorClass: "markdown__editor--minimize",
            previewClass: "markdown__previewer--show",
          }
    );
  };

  const handlemaxPreview = () => {
    setMaxPreview(maxPreview=>!maxPreview);
    setClasses(
      maxPreview
        ? {
            icon: "fas fa-compress-arrows-alt",
            editorClass: "markdown__editor--hide",
            previewClass: "markdown__previewer--maximize",
          }
        : {
            icon: "fas fa-compress",
            editorClass: "markdown__editor--show",
            previewClass: "markdown__previewer--minimize",
          }
    );
  };

  const textChangesHandler = (e) => {
    setText(e.target.value);
  };

  const context = {
    classes: classes,
    handlemaxEditor: handlemaxEditor,
    handlemaxPreview: handlemaxPreview,
  };

  return (
    <MarkDownContext.Provider value={context}>
      <div className="markdown__body">
        <Editor text={text} textChangesHandler={textChangesHandler} />
        <Viewer text={text} />
      </div>
    </MarkDownContext.Provider>
  );
}

export default MarkdownPreviewer;
