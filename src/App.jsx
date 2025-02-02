import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null); // State to store the result

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/calc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number }),
      });
      const data = await response.json();
      setResult(data.result); // Assuming the API returns { result: <calculated_value> }
      console.log("Response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold mb-6">Submit a Number</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between mb-4">
            <input
              type="number"
              className="border border-gray-600 bg-gray-700 text-white p-3 rounded w-full"
              placeholder="Enter a number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            {result !== null && (
              <span className="ml-4 text-lg text-gray-300 border-l-2 pl-4">
                {result}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-gray-600 text-white px-6 py-2 rounded w-full hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
