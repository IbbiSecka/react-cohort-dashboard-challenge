import React, { useState } from "react";

const NewPostForm = ({ setPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };

    try {
      
      const response = await fetch(
        "https://boolean-uk-api-server.fly.dev/IbbiSecka/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts((prevPosts) => [data, ...prevPosts]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="border p-2 rounded w-full mb-2 bg-inputBackground"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="border p-2 rounded w-full mb-2 bg-inputBackground"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-buttonHover"
      >
        Create Post
      </button>
    </form>
  );
};
export default NewPostForm;