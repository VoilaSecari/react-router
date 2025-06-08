import { useState, useEffect } from "react";
import axios from "axios";

export default function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data.posts);
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Post List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titolo</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>Visualizza</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
