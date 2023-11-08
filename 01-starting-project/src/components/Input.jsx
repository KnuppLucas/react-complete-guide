import React, { useState } from "react";

function Input({onChange, userInput}) {

  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          <p>INITIAL INVESTMENT</p>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </label>
        <label>
          <p>ANNUAL INVESTMENT</p>
          <input type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            } />
        </label>
      </div>
      <div className="input-group">
        <label>
          <p>EXPECTED RETURN</p>
          <input type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            } />
        </label>
        <label>
          <p>DURATION</p>
          <input type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onChange("duration", event.target.value)
            } />
        </label>
      </div>
    </div>
  );
}

export default Input;
