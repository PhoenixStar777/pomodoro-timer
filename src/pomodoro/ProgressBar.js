import React from "react";



const ProgressBar = ({ clockTimes }) => {
	if(!clockTimes.isSessionActive) {
		return null;
	}

	const percent = () => {
		const mode = clockTimes.focus ? "focus" : "break";
		return 100 - (100 * (clockTimes[`${mode}Remaining`] / clockTimes[`${mode}Setting`]));
        //mode will flip based on the situation ["breakRemaining"] & ["focusRemaining"]
		// 100 -> 0
		// 0 -> 100
		// 50 -> 50
		// 75 -> 25
		// 25 -> 75
		// 18 -> 82
	}

	return (
		<div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percent()} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${percent()}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
	);
}

export default ProgressBar;