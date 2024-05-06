import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  function formDataChangeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandler(event){
    event.preventDefault()
    setIsLoggedIn(true)
    toast.success('Login Successfully')
    navigate("/dashboard")
}

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="emailId">
        <span>
          Email Address<sup>*</sup>
        </span>
        <input
          type="email"
          name="email"
          value={formData.email}
          required
          placeholder="Enter email address"
          onChange={formDataChangeHandler}
        />
      </label>

      <label htmlFor="password">
        <span>
          Password<sup>*</sup>
        </span>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          required
          placeholder="Enter Password"
          onChange={formDataChangeHandler}
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <span>Forgot Password</span>
        </Link>
      </label>

      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
