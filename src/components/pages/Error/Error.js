import React from "react";
import { Link } from "react-router-dom";

import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error">404 not found</h1>

      <h3 className="error" style={{ fontWeight: "500" }}>
        either you didn't add questions or you're in the wrong place...
      </h3>

      <Link to="/" className="return-home">
        return home
      </Link>
    </div>
  );
};

export default Error;
