import React from 'react';
import "./Service.css";

const Service = ({service}) => {

    const {name,info,img} = service;
    return (
        <div className='service'>
             <img src ={img} alt =""   />
            <h2>{name}</h2>
            <p>{info}</p>
            <button>Book This</button>
            
        </div>
    );
};

export default Service;