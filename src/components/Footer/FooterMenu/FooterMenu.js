import React, { useState, useRef} from 'react';
 
function FooterMenu(props) {
  const [setActive, setActiveState] = useState("");
  const [setStyle, setStyleState] = useState("none");
  const [setIcon, setIconState] = useState("+");

// useRef is there to give function based components the ability to store data across the whole lifetime of a component instance.
  const content = useRef(null);

  function toggleFooterMenu() {
    setActiveState(setActive === "" ? "active" : "");
    setStyleState(setActive === "active" ? "none" : "block");
    setIconState(setActive === "active" ? "+" : "-");
  }

  return (
    <div className="Footer__section">
      <p className="Footer__section-title">{props.title}
      <span className={`Icon ${setActive}`} onClick={toggleFooterMenu}>{setIcon}</span>
      </p>
      <ul
        ref={content}
        style={{ display: `${setStyle}` }}
        className="Footer__menu"
        // set HTML
        dangerouslySetInnerHTML={{ __html: props.content }}
      >
        
      </ul>
   </div>
  );
}
export default FooterMenu;
 