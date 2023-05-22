import { useState, useEffect } from "react";
import axios from "axios";

function UniSearch() {
  const [uniSearch, setUniSearch] = useState("");
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    if (uniSearch.trim() !== "") {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://universities.hipolabs.com/search?country=${uniSearch}`
          );
          setUniversities(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [uniSearch]);

  const handleInputChange = (event) => {
    setUniSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a country name"
        value={uniSearch}
        onChange={handleInputChange}
      />

      <ul>
        {universities.map((university) => (
          <li key={university.name}>{university.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UniSearch;
