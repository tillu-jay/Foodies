import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus()

    return (
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <img src={LOGO_URL} className="w-12 mt-3 ml-28" />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4 mr-12">
                    <li className="px-3">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-3">
                        <Link to="contact">Contact us</Link>
                    </li>
                    <li className="px-3">
                        <Link to="grocery">Grocery</Link>
                    </li>
                    <li className="px-3">Cart</li>
                    <button className="login px-3"
                        onClick={
                            () => {
                                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                            }
                        }
                    >{btnName}
                    </button>
                </ul>
            </div>
        </div >
    );
}

export default Header;