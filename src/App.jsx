import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-backend-api.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number }),
      });
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold mb-4">Submit a Number</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            className="border border-gray-600 bg-gray-700 text-white p-2 rounded w-full mb-4"
            placeholder="Enter a number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gray-600 text-white px-4 py-2 rounded w-full hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
