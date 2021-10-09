import { logOut } from "../services/firebase";

const Logout = () => {

    return (
        <button className="logout-button" onClick={logOut}>
            <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                alt="google icon"
            />
            <span> Logout </span>
        </button>
    )
};

export default Logout;