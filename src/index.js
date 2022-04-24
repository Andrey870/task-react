import React from "react";
import { render } from "react-dom";

import Autocomplete from "./Autocomplete";

require("./styles.css");

function App() {
  return (
    <div class="center">
      <h1>Fruit Search Page</h1>
      <Autocomplete
        suggestions={[
          "Apple",
          "Apricots",
          "Avocado",
          "Banana",
          "Breadfruit",
          "Cantaloupe",
          "Carambola",
          "Clementine",
          "Feijoa",
          "Figs",
          "Grapefruit",
          "Guava",
          "Lemon",
          "Lime",
          "Mandarin",
          "Mango",
          "Mangosteen",
          "Nectarine",
          "Orange",
          "Papaya",
          "Passion Fruit",
          "Peach",
          "Pear",
          "Persimmon",
          "Pitaya",
          "Pineapple",
          "Plums",
          "Pomegranate",
          "Watermelon",
        ]}
      />
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
