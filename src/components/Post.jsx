import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <div className="border-b py-4">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
          {post.authorInitials}
        </div>
        <h3 className="ml-2 font-semibold text-postTitle">{post.title}</h3>
      </div>
      <p>{post.content}</p>
      <Link to={`/post/${post.id}`} className="text-blue-500">
        View Comments
      </Link>
    </div>
  );
};