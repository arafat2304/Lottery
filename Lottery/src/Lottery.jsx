import { useState } from "react"
import {genTicket,sum} from "./GenTicket.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3,winCondition}){

    let [ticket,setTicket]=useState(genTicket(n));

    let generateTicket=()=>{
        setTicket(genTicket(n))
    }

    let isWinnig=winCondition(ticket)
    

    return(
        <div>
            <h4>Lottery Game!</h4>
            <Ticket ticket={ticket}/>
            <b>{isWinnig ? "Congratulations You Won" : "Try Again"}</b><br/>
            <button onClick={generateTicket}>Buy new Ticket</button>
        </div>
    )
}