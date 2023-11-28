import React from 'react'
import {useState, useEffect}

export default function Worker({ data }: { data: Record<string, string> }) {
  const [lastClick, setLastClick] = useState();
  const [options, setOptions] = useState(
    [...Object.values(data), ...Object.keys(data)]
      .sort(() => Math.random() - 0.2)
      .map((points) => ({
        call: points,
        state: "default",
      })),
  );

  const handleClick = ({ stars }: { stars: Record<string, string> }) => {
    if (!lastClick) {
      setLastClick(stars.call);
      setOptions(
        options.map((opt) => {
          return {
            ...opt,
            state: opt.call === stars.call ? "selected" : "default",
          };
        }),
      );
    } else if (
      data[lastClick] === stars.call ||
      lastClick === data[stars.call]
    ) {
      setOptions(
        options.filter((opt) => {
          if (opt.call === lastClick || opt.call === stars.call) {
            return;
          } else {
            return opt;
          }
        }),
      );
      setLastClick();
    } else {
      setOptions(
        options.map((opt) => {
          return opt.call === lastClick || opt.call === stars.call
            ? { ...opt, state: "wrong" }
            : opt;
        }),
      );
      setLastClick();
    }
  };

  const restartGame = () => {
    setOptions(
      [...Object.values(data), ...Object.keys(data)]
        .sort(() => Math.random() - 0.2)
        .map((points) => ({
          call: points,
          state: "default",
        })),
    );
  };

  return (
    <div>
      <div className={`${options.length === 0 ? "popUp" : "skip"}`}>
        <div className="content">
          <h1 className="heading">Congratulations!</h1>
          <p className="paragraph">
            You've completed the game successfully. Well done!
          </p>
          <button className="button col" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      </div>
      <div>
        {options.map((stars) => {
          return (
            <button
              className={`button ${stars.state === "selected" ? "col" : ""} ${
                stars.state === "wrong" ? "col2" : ""
              }`}
              key={stars.call}
              onClick={() => {
                handleClick({ stars });
              }}
            >
              <p>{stars.call}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
