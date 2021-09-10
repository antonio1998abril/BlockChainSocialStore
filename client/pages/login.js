import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'



function Login() {
    const styleSeason = {
       /*  padding-bottom: 2.5rem;    
        margin-left: 11%;
        margin-right: 5%;  */
        /* 'padding-bottom': '-21rem'; */ 
    
    }
    return (
/*         <div classNameName="loginCard">
            <div>
                LOGIN
            </div>
            <div>
                <Card>

                </Card>
            </div>
        </div> */
<>
<div style={styleSeason}>
<div className="limiter" >
<div className="container-login100">
<div className="wrap-login100">
<form className="login100-form validate-form">
<span className="login100-form-title p-b-43">
Login to continue
</span>
<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
<input className="input100" type="text" name="email"/>
<span className="focus-input100"></span>
<span className="label-input100">Email</span>
</div>
<div className="wrap-input100 validate-input" data-validate="Password is required">
<input className="input100" type="password" name="pass"/>
<span className="focus-input100"></span>
<span className="label-input100">Password</span>
</div>
<div className="flex-sb-m w-full p-t-3 p-b-32">

<div>
<a href="#" className="txt1">
Forgot Password?
</a>
</div>
</div>
<div className="container-login100-form-btn">
<button className="login100-form-btn">
Login
</button>
</div>
<div className="text-center p-t-46 p-b-20">
<span className="txt2">
or sign up using
</span>
</div>
<div className="login100-form-social flex-c-m">
<a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
<i className="fa fa-facebook-f" aria-hidden="true"></i>
</a>
<a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
<i className="fa fa-twitter" aria-hidden="true"></i>
</a>
</div>
</form>

<div className="login100-more" /* style="background-image: url('images/bg-01.jpg');" */>

</div>
</div>
</div>


</div>
</div>
</>
        
    )
}

export default Login
