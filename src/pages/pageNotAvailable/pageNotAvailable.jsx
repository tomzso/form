import React from "react";

export const PageNotAvailable = () => {
  const pageNotAvailableStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "1rem",
    fontFamily: "Arial, sans-serif",
    fontWeight: "normal",
    backgroundColor: "#f8f9fa",
    color: "#333",
    width: "100%",
    minHeight: "100vh", // Ensures it spans the full height of the viewport
    paddingTop: "60px", // Adds padding to avoid overlap with a fixed navbar
    boxSizing: "border-box", // Includes padding in the total height
  };

  return (
    <div style={pageNotAvailableStyles}>
      <h2>Page is not available</h2>
    </div>
  );
};
