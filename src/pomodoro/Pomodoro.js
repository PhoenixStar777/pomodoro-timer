import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import FocusDuration from "./FocusDuration";
import BreakDuration from "./BreakDuration";
import PlayStopButton from "./PlayStopButton";
import TimeRemaining from "./TimeRemaining";
import ProgressBar from "./ProgressBar";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const initClockTimes = {
    focusSetting: 25 * 60,
    breakSetting: 5 * 60,
    focusRemaining: 25 * 60,
    breakRemaining: 5 * 60,
    focus: true,
    isSessionActive: false,
  }
  const [clockTimes, setClockTimes] = useState(initClockTimes);

  // focus duration X
  // break duration X
  // play/stop X
  // time remaining X
  // progress bar X

  // when the session is active, the Duration components should be disabled X
  // when the session is inactive, the Stop button should be disabled X
  // when the session is inactive, the entire TimeRemaining and ProgressBar should be hidden X
  // when the session is active and the pause button is pressed, it displays the word "PAUSED"

  useInterval( // is called every second if isTimerRunning is truthy
    () => {
      // ToDo: Implement what should happen when the timer is running
      async function handleSecondPassed() {
        const mode = clockTimes.focus ? "focusRemaining" : "breakRemaining";
  
        await setClockTimes({
          ...clockTimes,
          [mode]: clockTimes[mode] - 1,
        });

        if(clockTimes[mode] === 0) {
          setClockTimes({
            ...clockTimes,
            focus: !clockTimes.focus,
            [mode]: clockTimes[clockTimes.focus ? "focusSetting" : "breakSetting"],
          });
        }
      }
      
      handleSecondPassed();
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setClockTimes({
      ...clockTimes,
      isSessionActive: true,
    });
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <FocusDuration clockTimes={clockTimes} setClockTimes={setClockTimes} />
        <BreakDuration clockTimes={clockTimes} setClockTimes={setClockTimes} />
      </div>

      <PlayStopButton
          isTimerRunning={isTimerRunning}
          playPause={playPause} 
          setIsTimerRunning={setIsTimerRunning}
          clockTimes={clockTimes}
          setClockTimes={setClockTimes}
      />

      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <TimeRemaining clockTimes={clockTimes} isTimerRunning={isTimerRunning} />

        <ProgressBar clockTimes={clockTimes} />
      </div>
    </div>
  );
}

export default Pomodoro;
