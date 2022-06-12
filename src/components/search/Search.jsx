import "./Search.css";
import React from "react";
import FileMesh from "../../service/FileMesh";

const Search = ({ setSearch }) => {
  const [term, setTerm] = React.useState("");
  const search = (e) => {
    e.preventDefault();
    if (term) FileMesh.Search(term).then(setSearch);
  };
  return (
    <div id="wrap">
      <form action="">
        <input
          id="search"
          name="search"
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          placeholder="What're you looking for ?"
        />
        <input
          id="search_submit"
          value="Rechercher"
          type="submit"
          onClick={search}
        />
      </form>
    </div>
  );
};

export default Search;
