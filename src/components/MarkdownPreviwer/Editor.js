import React, { useState } from "react";
import MarkDownContext from "../../MarkDownContext";

import ToolBar from "./ToolBar";



function Editor(props) {
  const [theme, setTheme] = useState('markdown__editor--theme-dark')
  const contextData =React.useContext(MarkDownContext)
  
  const themeChangesHandler = ()=>{
    setTheme(theme==='markdown__editor--theme-dark'
    ?'markdown__editor--theme-light'
    :'markdown__editor--theme-dark')
    
  }
  return (
    <div className={`markdown__editor ${contextData.classes.editorClass} `}>
       <ToolBar 
       title={'Markdown-Editor'}
       themeChangesHandler = {themeChangesHandler}
       />
      <textarea
        className={`${theme}`}
        id="editor"
        type="text"
        onChange={props.textChangesHandler}
        value={props.text}
      />
    </div>
  )
}

export default Editor
