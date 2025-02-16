import { useState } from "react";

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    console.log(`Dark mode is ${!darkMode ? "On" : "Off"}`);
  };

  const profileFields = ["Name", "E-mail", "Contact", "Address"];

  return (
    // Add the "dark" class conditionally to enable Tailwind's dark mode variants
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen p-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Settings</h2>
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

        <div>
          <h3 className="text-lg font-bold mb-4 italic">Profile</h3>
          {profileFields.map((field, index) => (
            <div
              key={index}
              className={`p-4 shadow-lg rounded-lg m-2 transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <h4 className="font-bold italic">{field}</h4>
            </div>
          ))}
        </div>

        <div
          className={`p-4 shadow-lg rounded-lg m-2 transition-colors duration-300 ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <h4 className="font-bold">Your Settings</h4>
        </div>
      </div>
    </div>
  );
}
