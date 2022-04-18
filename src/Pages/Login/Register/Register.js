import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import "./Register.css"
import auth from "../../../firebase.init";

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);




    const navigate= useNavigate();

    const navigateLogin = () => {
        navigate("/login")
    }
    if(user){
       navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='form-container'>
            <h2 style ={{textAlign:"center"}}>Register Here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name ="name" id ="" placeholder="your Name"/>
                <input type="email" name ="email" id ="" placeholder="email address" required/>
                <input type="password" name ="password" id ="" placeholder="password" required/>
                <input type="submit" value ="Register"/>
             </form>

             <p>Already Have An Account?<span className='text-danger' onClick ={navigateLogin}>Please Log IN Here</span></p>
            
            
        </div>
    );
};

export default Register;