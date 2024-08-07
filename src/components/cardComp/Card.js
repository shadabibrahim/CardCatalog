import React from "react";
import { useState } from "react";
import "./card.css"
import {Card } from "antd";

const CardM = ({ title, description, price, weight, image }) => {
    const [count, setCount] = useState(0);
    const [thumbnail] = image
    
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <Card className="card">
            <img src={thumbnail} alt="milk" />
            <h3>{title}</h3>
            <p>{description.slice(0, 100) + "..."}</p>
            <span className="size">{weight} g</span>
            <div className="bottom">
                <b>${price}</b>
                {
                    count === 0 ? <button onClick={increment}>ADD</button> :
                        <div className="btn-grp">
                            <button onClick={decrement}>-</button>
                            <span>{count}</span>
                            <button onClick={increment}>+</button>
                        </div>
                }
            </div>
            {count > 0 && <h2>Total Price: $ {price * count}</h2>}
        </Card>

    )
}
export default CardM;