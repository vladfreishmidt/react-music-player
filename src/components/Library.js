import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  const allSongs = songs.map((song) => {
    return (
      <LibrarySong
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        song={song}
        id={song.id}
        key={song.id}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
    );
  });

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <h2>Library</h2>
      <div className="library-songs">{allSongs}</div>
    </div>
  );
};

export default Library;
