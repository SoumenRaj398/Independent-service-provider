import React from 'react';

const Service = ({service}) => {

    const {name,info,img} = service;
    return (
        <div>
             <img src ={img} alt =""   />
            <h2>{name}</h2>
            <p>{info}</p>
            <button>Book This</button>
            
        </div>
    );
};

export default Service;