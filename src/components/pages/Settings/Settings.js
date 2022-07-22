import React from "react";

import "./Settings.css";

const Settings = ({ settings, setSettings }) => {
  return (
    <div className="settings-container">
      <div className="items-container">
        <h2 className="label">Dark Mode {"-->"}</h2>

        <div className="options-container">
          <button
            className={`options-selector ${settings.darkMode ? "active" : ""}`}
            onClick={() =>
              setSettings({ ...settings, darkMode: !settings.darkMode })
            }
          >
            {settings.darkMode ? "On" : "Off"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
