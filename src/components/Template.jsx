import { Link } from "react-router-dom";
import imgFrame from "../assets/frame.png";
import SingnupForm from "./SingnupForm";
import LoginForm from "./LoginForm";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{desc1}</p>
          <span>{desc2}</span>
        </div>

        {formType === "signup" ? <SingnupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div>
          <div></div>
          <span>OR</span>
          <div></div>
        </div>

        <Link to="#">
          <button>Sign in with Google</button>
        </Link>
      </div>

      <div>
        <img
          src={imgFrame}
          alt="Image Background Frame"
          width={558}
          height={504}
          loading="lazy"
        />
        <img src={image} alt="Image" width={558} height={504} loading="lazy" />
      </div>
    </div>
  );
};

export default Template;
