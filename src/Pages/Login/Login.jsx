
import { useEffect, useRef, useState } from 'react';
import { FaS } from 'react-icons/fa6';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const catpcthaRef = useRef(null);
    const [disabled,setDisabled] = useState(true);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event => {
        event.preventDefault();
        const form =event.target;
        const email = form.email.value ;
        const password= form.password.value;
        console.log(email,password);
    }

    const handleValidateCapctha = () =>{
        const user_capctha_value = catpcthaRef.current.value;
        if(validateCaptcha(user_capctha_value)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }


    return (
     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password"  placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* Captcha */}
        <div className="form-control">
          <label className="label">
          < LoadCanvasTemplate /> 
          </label>
          <input type="text" ref={catpcthaRef} name="captcha"  placeholder="type the captcha above" className="input input-bordered" />
            <button onClick={handleValidateCapctha} className='btn btn-outline btn-xs'>Validate</button>
        </div>
        <div className="form-control mt-6">
        
          <input disabled={disabled} type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;