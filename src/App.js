import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Karakter from "./components/Karakter";
import { data } from "./mocks/handlers";

const App = () => {
  let [veri, setVeri] = useState(null);
  useEffect(() => {
    const render = async () => {
      const total = await axios.get("https://swapi.dev/api/people/");
      return total;
    };
    render()
      .then((res) => setVeri(res.data))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Karakter data={veri} />
    </>
  );
};

export default App;
