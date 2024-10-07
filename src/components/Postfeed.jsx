import React, { useEffect, useState } from "react";
import {Post} from "./Post";
import NewPostForm from "./NewPostForm";

 const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://boolean-uk-api-server.fly.dev/IbbiSecka/post",
          { method: "GET", headers: {
            "Content-Type": "application/json", }
          }
        );
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <NewPostForm setPosts={setPosts} />
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostFeed