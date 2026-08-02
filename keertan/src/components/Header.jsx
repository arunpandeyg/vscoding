import { Link } from "react-router-dom";

import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex items-center justify-between bg-orange-600 text-white">
      <div className="flex gap-3">
        <Link to={"/"} className="flex gap-3">
          <img src="/k.png" width={30} height={30} alt="keertan" className="rounded-full "/>
          <h1>Delhi Keertan Service</h1>
        </Link>
      </div>
      <div className="flex gap-5">
        <Link to={"/book-service"}>
          <h3>BookService</h3>
        </Link>
        <Link to={"/contact"}>
          <h3>Contact</h3>
        </Link>
        <Link to={"/about"}>
          <h3>About</h3>
        </Link>
      </div>
      <div>
        <Button className="bg-orange-700 hover:bg-orange-200">Login</Button>
      </div>
    </div>
  );
}

export default Header;
