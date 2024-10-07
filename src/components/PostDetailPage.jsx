import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postRes = await fetch(
          `https://boolean-uk-api-server.fly.dev/IbbiSecka/post/${postId}`
        );

        if (!postRes.ok) {
          throw new Error(`Failed to fetch post: ${postRes.status}`);
        }

        const postData = await postRes.json();
        setPost(postData);

        const commentsRes = await fetch(
          `https://boolean-uk-api-server.fly.dev/IbbiSecka/post/${postId}/comment`
        );

        if (!commentsRes.ok) {
          throw new Error(`Failed to fetch comments: ${commentsRes.status}`);
        }

        const commentsData = await commentsRes.json();
        setComments(commentsData);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching post details or comments:", error);
      }
    };

    fetchPostDetails();
  }, [postId]);

  

  if (!post) {
    return <div>Loading post details...</div>;
  }


  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{post.title}</h2>
      <p className="mb-4">{post.content}</p>
      <div className="comments-section">
        <h3 className="text-lg font-bold mb-2">Comments</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="mb-2">
                <p>{comment.content}</p>
                <p className="text-sm text-gray-500">
                  By: {comment.authorInitials}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};
export default PostDetailPage