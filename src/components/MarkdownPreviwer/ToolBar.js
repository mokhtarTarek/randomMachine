import React from "react";
import MarkDownContext from "../../MarkDownContext";

function ToolBar({title,themeChangesHandler, visible }) {
  const contextData = React.useContext(MarkDownContext)
  
  return (
    <div className="markdown__toolbar">
      <div>
        <i className="fas fa-i-cursor"></i>
        <h3> {title} </h3>
      </div>
      <div>
        {/* <i className="fas fa-compress-arrows-alt"  
        onClick={handleMax.handlemaxEditor} ></i> */}
         
        <i className={contextData.classes.icon}
          onClick={title==='Markdown-Editor'
          ?contextData.handlemaxEditor
          :contextData.handlemaxPreview}/>

        <i
          className={`fas fa-palette ${visible} `}
          onClick={themeChangesHandler}
        />
      </div>
    </div>
  );
}

export default ToolBar;
