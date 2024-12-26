import TicketNum from "./TicketNum"
import "./Ticket.css"
export default function Ticket({ticket}){
    return(
        <div className="ticket">
            <h4>Ticket</h4>
          {ticket.map((num,ind)=>(
            <TicketNum num={num} key={ind} />
          ))}
        </div>
    )
}