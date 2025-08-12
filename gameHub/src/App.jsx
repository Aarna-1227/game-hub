import { useState } from "react";
import "./App.css";

function App() {
  const [showHub, setShowHub] = useState(false);

  const games = [
    { name: "Fruit Catch", img: "/assets/fruit.png" },
    { name: "Pixel Runner", img: "/assets/runner.png" },
    { name: "Space Shooter", img: "/assets/space.png" },
  ];

  return (
    <div className="app">
      {!showHub ? (
        <div className="landing">
          <h1 className="glitch" data-text="MASTER GAMER">
            MASTER GAMER
          </h1>
          <button onClick={() => setShowHub(true)}>Enter Arcade</button>
        </div>
      ) : (
        <>
          <header className="header">
            <h1>🎮 Master Gamer</h1>
            <p>Your Dark Mode Gaming Hub</p>
          </header>

          <main className="games-grid">
            {games.map((game, index) => (
              <div className="game-card" key={index}>
                <img src={game.img} alt={game.name} />
                <h3>{game.name}</h3>
                <button>Play</button>
              </div>
            ))}
          </main>
        </>
      )}
    </div>
  );
}

export default App;