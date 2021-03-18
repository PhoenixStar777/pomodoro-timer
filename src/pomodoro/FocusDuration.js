import React from "react";
import { secondsToDuration } from "../utils/duration/index";

const FocusDuration = ({ clockTimes, setClockTimes }) => {
    const handleFocusChange = (event) => {
        // check to see whether the plus or minus button was pressed
        let focusChange = (event.target.id === "decrease-focus") ? 0 - (5 * 60) : (5 * 60);

        // max bound: 60 min * 60 sec
        if (clockTimes.focusSetting + focusChange > 60 * 60) {
            focusChange = 0;
        }
        // min bound: 5 min * 60 sec
        else if (clockTimes.focusSetting + focusChange < 5 * 60) {
            focusChange = 0;
        }

        // change the focusSetting variable based off of newTime
        setClockTimes({
            ...clockTimes,
            focusSetting: clockTimes.focusSetting + focusChange,
            focusRemaining: clockTimes.focusSetting + focusChange
        });
    };

return (
    <div className="col">
        <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
                {/* DONE: Update this text to display the current focus session duration */}
					Focus Duration: {clockTimes.focusSetting === (60 * 60) ? "60:00" : secondsToDuration(clockTimes.focusSetting)}
            </span>

            <div className="input-group-append">
                {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="decrease-focus"
                    onClick={handleFocusChange}
                    id="decrease-focus"
                    disabled={clockTimes.isSessionActive}
                >
                    <span className="oi oi-minus" id="decrease-focus" />
                </button>
                {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-testid="increase-focus"
                    onClick={handleFocusChange}
                    id="increase-focus"
                    disabled={clockTimes.isSessionActive}
                >
                    <span className="oi oi-plus" />
                </button>
            </div>
        </div>
    </div>
	);
}

export default FocusDuration;