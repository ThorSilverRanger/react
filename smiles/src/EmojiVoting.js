import React, { useState, useEffect } from "react";
import './App.css';

const EmojiVoting = () => {
  const [emojis, setEmojis] = useState(() => {
    // Get emojis from local storage, or use default emojis with count set to 0
    const storedEmojis = localStorage.getItem("emojis");
    if (storedEmojis) {
      return JSON.parse(storedEmojis);
    } else {
      return [
        { emoji: "😃", count: 0 },
        { emoji: "😍", count: 0 },
        { emoji: "😂", count: 0 },
        // Add more emojis here
      ];
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [winningEmoji, setWinningEmoji] = useState(null);

  useEffect(() => {
    // Update local storage with current emojis whenever emojis change
    localStorage.setItem("emojis", JSON.stringify(emojis));
  }, [emojis]);

  const handleEmojiClick = (index) => {
    const updatedEmojis = [...emojis];
    updatedEmojis[index].count += 1;
    setEmojis(updatedEmojis);
  };

  const handleShowResultsClick = () => {
    const winningEmoji = emojis.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );
    setWinningEmoji(winningEmoji);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Проголосуй за улюблений смайл</h1>
      <ul>
        {emojis.map((emoji, index) => (
          <li key={index}>
            <span>{emoji.emoji}</span>
            <p>{emoji.count} голос(ів)</p>
            <button className="vote-btn" onClick={() => handleEmojiClick(index)}>Голосувати</button>
          </li>
        ))}
      </ul>
      <button className="res-btn" onClick={handleShowResultsClick}>Показати результати</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Результат голосування</h2>
            {winningEmoji && (
              <div>
                <p>На даний момент перемагає:</p>
                <span className="winning-emoji">{winningEmoji.emoji}</span>
                <p>з {winningEmoji.count} голосами!</p>
              </div>
            )}
            <button className="hide-btn" onClick={handleCloseModal}>Приховати</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiVoting;
