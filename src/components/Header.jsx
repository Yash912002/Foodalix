import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	const Online = useOnlineStatus();

	return (
		<div className="flex justify-between bg-green-300 h-20 shadow-lg mb-6">
			<div className="logo-container">
				<img src={LOGO_URL} alt="Logo" className="w-24 h-20" />
			</div>

			<div className="flex items-center">
				<ul className="flex px-7 gap-6">
					<li>
						Online: {Online? "✅":"🔴"}
					</li>

					<Link to={"/"}>
						<li> Home </li>
					</Link>

					<Link to={"/about"}>
						<li> About </li>
					</Link>

					<Link to={"/contact"}>
						<li> Contact Us </li>
					</Link>

					<Link to={"/grocery"}>
						<li> Grocery</li>
					</Link>

					<li> Cart </li>

					<button
						className="loginBtn"
						onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
						}}
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
