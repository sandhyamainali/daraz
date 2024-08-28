import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignIn() {
    
    
    const [userName, setuserName] = useState("");
    
    const handleChange = (e) => {
        // Here we are checking if the length is equal to 10
        if (e.target.value.length === 6) {
            window.alert(
                "Enter code shouldn't exceed 6 characters"
            );
        }
        setuserName(e.target.value);
    };
    let s=()=>{
        s.preventDefault()
    }
    return (
        <>
            <div className='container py-3 bg-body-secondary'>
                <h5 className='pb-4'>Create your Account</h5>
                <form onSubmit={s}>
                    <div className="row">
                        <div className="col">
                            <label for="phone">Phone Number*</label>
                            <input type="text" className="form-control" placeholder="Enter your Number" id="phone" />
                        </div>
                        <div className="col mb-3">
                            <label for="name">Full Name*</label>
                            <input type="text" className="form-control" placeholder="Last name" id="name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="code">Verification Code*</label>
                            <input type="text" className="form-control" placeholder="6 Digits" id="code" name="username" value={userName} onChange={handleChange}/>
                        </div>
                        <div className="col">
                            <div className='form-check '>
                                <label for="form-check-label">I'd like to receive exclusive offers and promotions via SMS</label>
                                <input type="checkbox" className="form-check-input"  />
                                <input type="text" placeholder='SignIn ' className='bg-secondary-subtle mt-2 text-uppercase  text-center' />
                                <p></p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col">
                            <label for="code">Password*</label>
                            <input type="text" className="form-control " placeholder="Maximum 6 Character with a number and a letter" id="code" name="username" value={userName} onChange={handleChange}/>
                        </div>
                        <div className="col">
                            <div >
                                <label className='fs-6'>By clicking "SIGN UP" I agree to Terms of Use and Privacy Policy</label>
                               
                                <label className='fs-6 pt-4'>or Signup with</label>
                                <div className='pt-3'>
                                <button className='btn btn-primary'>Facebook</button>

                                <button className='btn btn-danger ms-3 '>Google</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='btn btn-primary' >Submit</button>
                    </form>
            
            </div>


        </>
    )
}

export default SignIn
