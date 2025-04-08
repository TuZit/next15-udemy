"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickerImage, setPickerImage] = useState();

  const inputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPickerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name} className="">
        {label}
      </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickerImage && <p>No image chosen</p>}
          {pickerImage && <Image alt="image" src={pickerImage} fill />}
        </div>
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
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
