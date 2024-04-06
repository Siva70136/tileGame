import React, { useState, useEffect } from 'react';
import Rules from './components/Rules';

import './App.css'

const App = () => {
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(3); // Default speed

  useEffect(() => {
    fetchGridPattern();
  }, []);

  const fetchGridPattern = async () => {
    try {
      const response = await fetch('https://tilegameapi.onrender.com/grid-pattern');
      const data = await response.json()
      setGrid(data.grid);
    } catch (error) {
      console.error('Error fetching grid pattern:', error);
    }
  };

  const handleTileClick = (row, col) => {
    if (grid[row][col] == 'red') {
      setScore(pre => {
        return pre - 10;
      })
    }
    else {
      setScore(pre => {
        return pre + 10;
      })
    }
    fetchGridPattern();
  };

  const handleStartGame = () => {
    setScore(0);
  };

  const handleStopGame = () => {
    setScore(0);
  };

  return (
    <div>
      <Rules />
      <div className='header-section'>
        <button onClick={handleStartGame} className='button'>Start Game</button>
        <button onClick={handleStopGame} className='button'>Stop Game</button>
        <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))}>
          <option value={1}>250ms</option>
          <option value={2}>200ms</option>
        </select>
        <div className='score'>Score: {score}</div>
      </div>
      <div className="grid-container">
        {grid.map((row, rowIndex) => {
          //console.log(row);
          return (
            <div key={rowIndex} className="grid-row">
              {row.map((color, colIndex) => {
                //console.log(colIndex);
                return (
                  <div
                    key={colIndex}
                    className={`tile  ${color}`}
                    onClick={() => handleTileClick(rowIndex, colIndex)}
                  ></div>
                )
              })}
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default App;
