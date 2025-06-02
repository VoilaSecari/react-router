import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Homepage</h1>
      <p>
        Questa è la HomePage, e questo è un testo segnaposto che cambia: Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Voluptas error, iure
        nulla temporibus quidem magnam impedit corrupti perspiciatis dolor illum
        distinctio, aperiam vitae, sint quas cumque. Laboriosam eos impedit
        suscipit?
      </p>
      <NavLink to="/posts">
        <button className="btn btn-primary">Vai alla Posts Page</button>
      </NavLink>
    </div>
  );
}
