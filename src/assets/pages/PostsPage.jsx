import { NavLink } from "react-router-dom";

export default function PostsPage() {
  return (
    <div className="container">
      <h1>Posts Page</h1>
      <p>
        Questa è la Posts Page, e questo è un testo segnaposto che cambia: Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptas error, iure
        nulla temporibus quidem magnam impedit corrupti perspiciatis ?
      </p>
      <NavLink to="/">
        <button className="btn btn-primary">Vai alla HomePage</button>
      </NavLink>
    </div>
  );
}
