import React from "react";
import classNames from "../utils/class-names";

function PlayStopButton({isTimerRunning, playPause, setIsTimerRunning, clockTimes, setClockTimes}) {

    function stopButtonHandler(event) {
			setIsTimerRunning(false);
			setClockTimes({
				...clockTimes,
				focusRemaining: clockTimes.focusSetting,
				breakRemaining: clockTimes.breakSetting,
				focus: true,
				isSessionActive: false,
			})
				// if(isTimerRunning)
                //then !isTimerRunning && session end
    }

 return (

    <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
							onClick={stopButtonHandler}
							disabled={!clockTimes.isSessionActive}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>


 )


}
 

export default PlayStopButton;