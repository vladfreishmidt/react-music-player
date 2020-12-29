import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  const allSongs = songs.map((song) => {
    return <LibrarySong song={song} />;
  });
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">{allSongs}</div>
    </div>
  );
};

export default Library;
