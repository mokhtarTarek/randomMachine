import marked from "marked";
import React,{ useEffect } from "react";
import Prism from 'prismjs';
import ToolBar from "./ToolBar";
import MarkDownContext from "../../MarkDownContext";

marked.setOptions({
  breaks: true,
});

const Viewer = ({ text,minimize }) => {
  const contextData = React.useContext(MarkDownContext)

  const convertedText = (text)=>{
    return(
  <div id="preview" 
      dangerouslySetInnerHTML={{ __html: marked(text) }}>
  </div>
    )
  }
  useEffect(() => {
    convertedText(text)
  }, [text])
  useEffect(() => {
   
    Prism.highlightAll();
  }, [text])
  return (
    
    <div className= {`markdown__previewer language-js ${contextData.classes.previewClass}`}>
      <ToolBar title={'Markdown-Previwer'} visible='markdown__toolbar--hide-theme-Buttom' />
       {convertedText}
      <div id="preview" 
      dangerouslySetInnerHTML={{ __html: marked(text) }} />
    </div>
  );
};

export default Viewer;


