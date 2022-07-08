import React, { useState } from "react";
function InputText(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      ></input>
      <span>{inputText}</span>
    </div>
  );
}

export default InputText;
