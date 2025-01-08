import React, { useState, useEffect } from "react";

const SearchCompletion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        // console.log(data.users)
        setUsers(data.users.map((user) => user.firstName));
        console.log(users);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 0) {
      const filteredData =
        users && users.length > 0
          ? users.filter((user) => user.toLowerCase().indexOf(query) !== -1)
          : [];

      setFilteredData(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <input
        value={searchParam}
        onChange={handleChange}
        placeholder="Search Users Here"
        type="text"
      />
      <div className="dropdown">
        {showDropdown && filteredData && filteredData.length > 0
          ? filteredData.map((item) => <div className="data">{item}</div>)
          : null}
      </div>
    </div>
  );
};

export default SearchCompletion;
