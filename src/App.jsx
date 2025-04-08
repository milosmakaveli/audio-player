import { useState } from 'react'
import CustomAudioPlayer from 'react-pro-audio-player';
import { FaPlay, FaPause } from 'react-icons/fa';




const songsList = [
  { id: 1, url: "/assets/bymyside.mp3", title: "By My Side", thumbnail: "/assets/img/bymyside.jpg", artist: "Marcus P" },
  { id: 2, url: "/assets/dawnofchange.mp3", title: "Dawn Of Change", thumbnail: "/assets/img/dawnofchange.jpg", artist: "Roman Senyk" },
  { id: 3, url: "/assets/slowlife.mp3", title: "Slow Life", thumbnail: "/assets/img/slowlife.jpg", artist: "Benjamin Lazzarus" },
];


function App() {
  const [songs, setSongs] = useState(songsList);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const handleSongClick = (index) => {
    if (currentSongIndex === index) {
      //Toggle play/pause
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  return (
    <>

<div className="container">
        <div className="song-list">
          {songs.map((song, index) => (
            <div key={song.id} className="song-item">
              <img src={song.thumbnail} alt={song.title} className="song-thumbnail" />
              <div className="song-info">
                <span className="song-title">{song.title}</span>
                <span className="song-artist"> {song.artist} </span>
              </div>
              {/* Play/Pause button */}
              <div className="play-button" onClick={() => handleSongClick(index)}>
                {isPlaying && currentSongIndex === index ? (
                  <FaPause className="play-pause-icon" />
                ) : (
                  <FaPlay className="play-pause-icon" />
                )}
              </div>
            </div>
          ))}
        </div>
        

        {currentSongIndex !== null && (
          <CustomAudioPlayer
            className="custom-audio-player"
            songs={songs}
            isPlaying={isPlaying}
            currentSongIndex={currentSongIndex}
            onPlayPauseChange={setIsPlaying}
            onSongChange={setCurrentSongIndex}
            songUrlKey="url"
            songNameKey="title"
            songThumbnailKey="thumbnail"
            songSingerKey="artist"
          />
        )}
      </div>
    </>
  )
}

export default App
