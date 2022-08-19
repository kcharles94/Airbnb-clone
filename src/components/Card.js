import React from "react";


export default function Card(props){
    console.log(props);
    return(
        <div className="card">
            <img src={props.img}  className="card--image"/>
                <div className="card--status">
                    <img src="../image/Star 1-1.png"/>
                    <span>{props.rating}</span>
                    <span>({props.reviewCount})</span>
                    <span>{props.location}</span>
                </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price} </span>/ person </p>
            </div>
    )
}