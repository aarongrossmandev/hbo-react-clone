import { useStateContext } from "../../HBOProvider";
import Link from "next/link";
import { useState } from "react";

const GenreNav = (props: any) => {
  // const globalState = useStateContext();
  const [activeNav, setActiveNav] = useState(false);
  setTimeout(() => setActiveNav(true), 100);

  return (
    <ul className={`genre-nav ${activeNav ? "genre-nav--active" : ""}`}>
      <GenreList genresData={props.genresData} mediaType={props.mediaType} />
    </ul>
  );
};

const GenreList = (props: any) => {
  return props.genresData.map((item: any) => {
    return (
      <li key={item.id}>
        <Link href={`/${props.mediaType}/genre/${item.id}`}>{item.name}</Link>
      </li>
    );
  });
};

export default GenreNav;
