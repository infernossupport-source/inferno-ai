import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#000000,#111111,#1f1f1f)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial"
      }}>
        <h1 style={{
          fontSize: "60px",
          color: "#ff5e00",
          marginBottom: "20px"
        }}>
          🔥 Inferno AI
        </h1>

        <p style={{
          fontSize: "22px",
          color: "#cccccc",
          marginBottom: "30px"
        }}>
          The Future of AI Starts Here
        </p>

        <button style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#ff5e00",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}>
          Start Chatting
        </button>
      </div>
      <Analytics />
    </>
  );
}

export default App;
