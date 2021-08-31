import axios from "axios";
import { useEffect, useState } from "react";
import Customer from "./Customer";
import './CustomerList.css'

function CustomerList(){ 

    const [customers,setCustomers] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8080/customers").
        then(response => {
            setCustomers(response.data)   
        })
    },[])
    
    return(
        <div className="customer-container">
             <h3 className="p-3 font-weight-bold">Customers</h3>
            <div>{customers.map( data => (<Customer data={data}/>))}</div>
        </div>
    );
}
export default CustomerList;