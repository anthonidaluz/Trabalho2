import React from "react";

export function Footer() {
  return (
    <footer style={styles.footer}>
      <p>©IFSC 2025 Created by Anthoni da Luz and Caio Pagliosa</p>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    marginTop: "2rem",
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
  },
};
