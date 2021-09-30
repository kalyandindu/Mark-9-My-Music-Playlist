import React, { useState } from "react";
import "./styles.css";

var Heading = "My Music";
var textColor = "orange";

const myPlaylist = {
  journey: [
    { name: "Rock on bro", movie: "Janatha Garage" },
    { name: "Life of Ram", movie: "Jaanu" }
  ],
  Love: [
    { name: "Mabbulu Kammeley", movie: "Yentha Vaadu Gaani" },
    { name: "Gunzukunna", movie: "Kadali" }
  ],
  Dance: [
    { name: "Maari Thara Local", movie: "Maari" },
    { name: "Ek Baar", movie: "Vinaya idheya Rama" }
  ]
};

export default function App() {
  var [genreSelected, genreFunc] = useState("");
  function buttonClick(genre) {
    genreFunc(genre);
  }

  var genreLIst = Object.keys(myPlaylist);
  var genreValueList = myPlaylist[genreSelected];

  return (
    <div className="App">
      <h1 style={{ color: textColor }}>{Heading}</h1>
      <p> Check out my favorite playlist according to mood :)</p>
      <div>
        {genreValueList.map((genre) => (
          <button
            onClick={() => buttonClick(genre)}
            style={{
              padding: "0.5rem",
              margin: "0 0.7rem",
              borderRadius: "0.5rem",
              cursor: "pointer"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {genreLIst.map((song) => (
            <li>
              <div> {song.name} </div>
              <div> {song.movie} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
