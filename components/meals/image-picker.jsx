"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();

  return (
    <div className={classes.picker}>
      <label htmlFor={name} className="">
        {label}
      </label>
      <div className={classes.controls}>
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
        />

        <button
          className={classes.button}
          type="button"
          onClick={() => inputRef.current.click()}>
          Upload Image
        </button>
      </div>
    </div>
  );
}
