// import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    // console.log("button was clicked !" + text);
    var newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase !", "success");
  };

  const lowerCase = () => {
    var newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase !", "success");
  };
  const clear = () => {
    var newText = "";
    setText(newText);
    props.showAlert("Text Cleared !", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied !", "success");
  };

  const handlechange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h4>{props.heading}</h4>
        <div className="my-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handlechange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={upperCase}>
          Contvert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>
          Contvert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy
        </button>
        <div className="container my-2">
          <h4>Your text Summary</h4>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minute read</p>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text : "Enter Somthing to Previews"}</p>
        </div>
      </div>
    </>
  );
}
