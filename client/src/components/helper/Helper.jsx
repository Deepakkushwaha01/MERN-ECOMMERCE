import axios from "axios";
import React, { useEffect, useState } from "react";
import { Entry } from "../Axios/AxiosRegister";

const Helper = () => {
  const [formData, newformData] = useState({
    file: null,
    id: "",
  });

  const set = (e) => {
    const file = e.target.files;
    const value = e.target.value;
    const name = e.target.name;

    if (name == "file") {
      newformData({
        ...formData,
        [name]: file,
      });
    } else {
      newformData({
        ...formData,
        [name]: value,
      });
    }
  };

  const form = new FormData();

  const send = (e) => {
    e.preventDefault();

    form.append("id", formData.id);

    /* ----for files ------------- */

    const arr = Array.from(formData.file); //  yaha pe formData.file ek array ki tarah dikhne waala object hai proper array nahi hai isliye hum Array.form ki madad se ek array ki tarah dikhne waala object ko proper array bananyenge
                                          // Array.form copy create karta hai , The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. In this case, we're passing the arrayLike object as the argument to Array.from(), which creates a new array with the same elements as the arrayLike object.
    arr.forEach((val) => {
      form.append("file", val);
    });

    const res = Entry(form);
  };

  return (
    <div>
      <form onSubmit={send}>
        <input
          type="text"
          name="id"
          value={formData.value}
          onChange={set}
          className="border-2"
        />
        <input type="file" name="file" multiple onChange={set} />
        <button
          type="sumbit"
          className="bg-red-500 w-[7rem] h-[2rem] rounded-md"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Helper;
