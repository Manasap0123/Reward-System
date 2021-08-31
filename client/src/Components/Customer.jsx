import { useEffect, useState } from "react";
import './Customer.css'

const Customer = (props) => {
    const [check, setCheck] = useState(false);

    const handleClick=()=>{    
        setCheck(prevCheck => !prevCheck);
    }
    return (<div className="customer" onClick={handleClick}>
        <span>{props.data.name}</span>
        <p className="span-check">{check ? 'Reward Points :'+props.data.rewardPoints : null}</p>
    </div>)
}
export default Customer