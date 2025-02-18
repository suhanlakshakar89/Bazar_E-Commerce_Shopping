import { useState } from "react";
import Img1 from '../assets/Mikki.webp'
import Img2 from '../assets/images.jpeg'
import Img3 from '../assets/Frizz.jpg'
import Img4 from '../assets/iphone.webp'
import Img5 from '../assets/Macbook.jpg'
import Img6 from '../assets/Washing_machine.jpg'
import Img7 from '../assets/ovenjpeg.jpeg'
import Img8 from '../assets/genretor.jpg'
import Img9 from '../assets/bowl.jpeg' 
import Img10 from '../assets/Cattle.avif'
import Img11 from '../assets/Cattle.jpg'
// import cattleImage from "../../assets/cattle.jpg";
import Img12 from '../assets/women_1.jpg'
import Img13 from '../assets/women_1.jpg'



// Array of product objects
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description of Product 1",
    image:Img1,
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description of Product 2",
    image:Img2,
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description of Product 3",
    image:Img3,
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description of Product 4",
    image:Img4,
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description of Product 5",
    image:Img5,
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description of Product 6",
    image:Img6,
  },
  {
    id: 7,
    title: "Product 7",
    description: "Description of Product 7",
    image:Img7,
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description of Product 8",
    image:Img8,
  },
  {
    id: 9,
    title: "Product 9",
    description: "Description of Product 9",
    image: Img9,
  }, 
  {
    id: 10,
    title: "Product 10",
    description: "Description of Product 10",
    image: Img10,
  },
  {
    id: 11,
    title: "Product 11",
    description: "Description of Product 11",
    image: Img11,
  },
  {
    id: 12,
    title: "Product 12",
    description: "Description of Product 12",
    image: Img12,
  },
  {
    id: 13,
    title: "Product 13",
    description: "Description of Product 13",
    image: Img13,
  },
];

export default function Menu() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log(`Dark mode is ${!darkMode ? "On" : "Off"}`);
  };

  return (
    // The parent div toggles the "dark" class based on the darkMode state
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen p-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
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
        <p className="mb-4">Browse through our wide range of products.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className={`p-4 shadow-lg rounded-lg flex items-start transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <div className="flex-1">
                <h3 className="font-bold text-lg">{product.title}</h3>
                <p>{product.description}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="h-16 object-cover rounded-lg ml-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
