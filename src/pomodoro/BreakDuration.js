import React from "react";
import { secondsToDuration } from "../utils/duration/index";

const BreakDuration = ({ clockTimes, setClockTimes }) => {
    const handleBreakChange = (event) => {
        let breakChange = (event.target.id === "decrease-break") ? (0 - 60) : 60;

        // max bound: 15min * 60sec
        if (clockTimes.breakSetting + breakChange > 15 * 60) {
            breakChange = 0;
        }
        //Min Bound: 1 min 
        else if (clockTimes.breakSetting + breakChange < 60) {
            breakChange = 0;
        }

        setClockTimes({
            ...clockTimes,
            breakSetting: clockTimes.breakSetting + breakChange,
            breakRemaining: clockTimes.breakSetting + breakChange,
        });
    };

    return (
        <div className="col">
            <div className="float-right">
                <div className="input-group input-group-lg mb-2">
                    <span className="input-group-text" data-testid="duration-break">
                        {/* TODO: Update this text to display the current break session duration */}
              					Break Duration: {secondsToDuration(clockTimes.breakSetting)}
            				</span>
                    <div className="input-group-append">
                        {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="decrease-break"
                            onClick={handleBreakChange}
                            id="decrease-break"
                            disabled={clockTimes.isSessionActive}
                        >
                            <span className="oi oi-minus" id="decrease-break"/>
                        </button>
                        {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="increase-break"
                            onClick={handleBreakChange}
                            id="increase-break"
                            disabled={clockTimes.isSessionActive}
                        >
                            <span className="oi oi-plus" id="increase-break" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    

        )

}

export default BreakDuration;