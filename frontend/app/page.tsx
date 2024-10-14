import { useState, useEffect } from 'react';

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Express 서버로부터 데이터를 가져옴
    const fetchPlayers = async () => {
      const response = await fetch('http://localhost:4000/players?year=2000&synergy=광주일고');
      const data = await response.json();
      setPlayers(data);
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Player Search</h1>
      {players.length > 0 ? (
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player.name}</li>
          ))}
        </ul>
      ) : (
        <p>No players found</p>
      )}
    </div>
  );
}
