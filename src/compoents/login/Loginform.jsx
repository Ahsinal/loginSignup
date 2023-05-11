import React from 'react'
import './loginform.css'
import { Link } from 'react-router-dom'
const Loginform = () => {
    return (

        <div className="login d-flex align-items-center justify-content-center bg-primary vh-100">
            <div className='p-5 form_container rounded bg-white'>
                <form className='needs-validation'>
                    <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2 was-validated'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email" className='form-control' required />
                        <div className="invalid-feedback">
                            Please Enter your email
                        </div>
                    </div>
                    <div className='mb-2 was-validated'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className='form-control' required />
                        <div className="invalid-feedback">
                            Please Enter your password
                        </div>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkobx' id="check"></input>
                        <label htmlFor="check" className='custom-input-label ms-2'>Remember me</label>
                    </div>
                    <div className='d-grid'>
                        <button className="btn btn-primary">Sign In</button>
                    </div>
                    <p className='text-end mt-2'>
                        Forget <a href="">Password?</a>
                        <Link to="/signup" className='ms-2'>Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Loginform
