import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { options } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValues) => {
    fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValues}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <div>
      Search
      <AsyncPaginate
        placeholder="enter city"
        debounceTimeout={600}
        value={search}
        handleOnChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
