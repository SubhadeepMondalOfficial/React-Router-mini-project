import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link to="/">
          <h1>Study Notion</h1>
        </Link>
      </div>

      <nav>
        <ul className="flex justify-center items-center gap-8 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-5">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button onClick={() => {
                setIsLoggedIn(false)
                toast.success("Logout Successfully")
            }}>Log Out</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
