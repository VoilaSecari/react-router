import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setPost(res.data.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/not-found");
      });
  }, []);

  return (
    <div>
      <div className="container">
        {post ? (
          <>
            <h1>{post.title}</h1>
            <img src={"http://localhost:3000/" + post.image} alt="" />
            <p>{post.content}</p>
            <ul>
              {post.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          </>
        ) : (
          <h1 className="my-5">Caricamento...</h1>
        )}
      </div>
    </div>
  );
}
