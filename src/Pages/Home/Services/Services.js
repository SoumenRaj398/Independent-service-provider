import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {

    const [services,setServices] = useState([]);

    useEffect(() =>{
        fetch("services.json")
        .then(res =>res.json())
        .then(data => setServices(data));
    },[])

   
    return (
        <div id ="services">
            <h1 className='service-title mt-5 mb-5'>Our Services</h1>
            <div className='services-container'>
            {
                services.map(service=><Service
                key ={service.id}
                service ={service}
                
                ></Service>)
            }
            </div>

            <Button className='text-center'>Click it for Booking</Button>
            
        </div>
    );
};

export default Services;