import { useState } from "react";

const NewTweet = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;

    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    // TODO: Add Tweet to store

    console.log("New Tweet: ", text)

    setText("")
  }

  return <div>New Tweet</div>;
};

export default NewTweet;
