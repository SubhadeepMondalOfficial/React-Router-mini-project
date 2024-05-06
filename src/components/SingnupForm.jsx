import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const SingnupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName: '',
            emailId: '', 
            createPassword: '',
            confirmPassword: '' 
        }
    )

    function formDataChangeHandler(event){
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value 
            }
        ))
    }

    function formSubmitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success('Signup Successfully');
        navigate("/dashboard")
    }

    return(
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={formSubmitHandler} >
                <div>
                    <label htmlFor="firstName">
                        <span>First Name<sup>*</sup></span>
                        <input type="text" name="firstName" value={formData.firstName} required placeholder="Enter First name" onChange={formDataChangeHandler} />
                    </label>
                    <label htmlFor="lastName">
                        <span>Last Name<sup>*</sup></span>
                        <input type="text" name="lastName" value={formData.lastName} required placeholder="Enter Last name" onChange={formDataChangeHandler} />
                    </label>
                </div>

                <div>
                    <label htmlFor="emailId">
                        <span>Email Address<sup>*</sup></span>
                        <input type="text" name="emailId" value={formData.emailId} required placeholder="Enter Email Address" onChange={formDataChangeHandler} />
                    </label>
                </div>
                
                <div>
                    <label htmlFor="createPassword">
                        <span>Create Password<sup>*</sup></span>
                        <input type="text" name="createPassword" value={formData.createPassword} required placeholder="Enter Password" onChange={formDataChangeHandler} />
                    </label>
                    <label htmlFor="confirmPassword">
                        <span>Confirm Password<sup>*</sup></span>
                        <input type="text" name="confirmPassword" value={formData.confirmPassword} required placeholder="Confirm Password" onChange={formDataChangeHandler} />
                    </label>
                </div>

                <button>Create Account</button>

            </form>

        </div>
    )
}

export default SingnupForm