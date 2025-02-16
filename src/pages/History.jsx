import { useState } from "react";

export default function History() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    console.log(`Dark mode is ${!darkMode ? "On" : "Off"}`);
  };

  return (
    // The outer div toggles the dark mode class
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen p-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">History</h2>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg border-2 shadow-lg transition-colors duration-300 ${
              darkMode
                ? "border-white hover:bg-gray-700"
                : "border-black hover:bg-gray-200"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <p>Manage your account order history.</p>
        <h1 className="mt-4">Hellowwwwwwwwwwwwwwwww</h1>
      </div>
    </div>
  );
}
