import React from "react";
import { secondsToDuration } from "../utils/duration/index";

const TimeRemaining = ({ clockTimes, isTimerRunning }) => {
	if(!clockTimes.isSessionActive) {
		return null;
	}

    const getTimerHeading = () => {
        return clockTimes.focus ?
            `Focusing for ${secondsToDuration(clockTimes.focusSetting)} minutes` :
            `On Break for ${secondsToDuration(clockTimes.breakSetting)} minutes`
    }
    const getRemainingHeading = () => {
        return ( 		// condition ? true action : false action
            clockTimes.focus ? `${secondsToDuration(clockTimes.focusRemaining)}` :
                `${secondsToDuration(clockTimes.breakRemaining)}`
        )
    }

    return (
        <div className="row mb-2">
            <div className="col">
                {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
                <h2 data-testid="session-title">
                    {getTimerHeading()}

                </h2>
                {/* TODO: Update message below to include time remaining in the current session */}
                <p className="lead" data-testid="session-sub-title">
									{getRemainingHeading()} remaining
                    
            		</p>        {/*return null when something is not to be seen in this case*/ }
								<h3>{clockTimes.isSessionActive && !isTimerRunning ? "PAUSED" : null}</h3>
            </div>
        </div>
    );
}

export default TimeRemaining;