import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	IoGameController,
	IoTrendingUp,
	IoHeart,
	IoLogIn,
	IoLogOut,
} from "react-icons/io5";

// styles
import styles from "./BottomBar.module.css";

const BottomBar = () => {
	const [user] = useAuthState(auth);

	const navigate = useNavigate();

	const onLogout = async () => {
		try {
			await signOut(auth);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	const activeStyle = {
		color: "#fff",
	};

	return (
		<nav className={styles.navigation}>
			<ul>
				<li>
					<NavLink
						to="/"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<IoGameController className={styles.icon} />
						<span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/popular"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<IoTrendingUp className={styles.icon} />
						<span>Popular</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/favorites"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<IoHeart className={styles.icon} />
						<span>Favorites</span>
					</NavLink>
				</li>
				{!user ? (
							<li>
								<NavLink
									to="signup"
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
								>
									Daftar
								</NavLink>
							</li>
						) : (
							""
						)}
				{user ? (
					<li>
						<button className={styles.btn_logout} onClick={onLogout}>
							<IoLogOut className={styles.icon} />
							<span>Keluar</span>
						</button>
					</li>
				) : (
					<li>
						<NavLink to="/login">
							<IoLogIn className={styles.icon} />
							<span>Masuk</span>
						</NavLink>
					</li>
				)}
					<li>
					<NavLink to="/">
					<IoGameController className={styles.logo} />
					Game Play
				</NavLink>
					</li>
			</ul>
		</nav>
	);
};

export default BottomBar;
