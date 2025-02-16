import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold text-center">Bazar</h1>
      <nav className="flex justify-end items-center space-x-4 mt-2">
        <Link to="/profile" className="hover:text-blue-800 text-xl ">Setting</Link>
        <Link to="/menu" className="hover:text-blue-800 text-xl">Menu</Link>
        <Link to="/History" className="hover:text-blue-800 text-xl">History</Link>  
        {/* <Link to="/First" className="hover:text-blue-800 text-xl">FF</Link>  */}
        
      </nav>
    </header>
  );
}