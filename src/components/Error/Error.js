import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="error-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        fontSize: "2rem",
        width: "90%",
        padding: "100px 10px",
      }}
    >
      <h1 className="error">404 Not Found</h1>
      <h3 className="error" style={{ fontWeight: "500" }}>
        Either you didn't add questions or you're in the wrong place...
      </h3>
      <Link
        to="/"
        className="return-home"
        style={{
          border: "2px solid #000",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--shadow-color)",
          padding: "6px 0",
          fontWeight: "600",
        }}
      >
        Back to home
      </Link>
    </div>
  );
};

export default Error;
