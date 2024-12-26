
import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import {sum} from "./GenTicket"

function App() {

  let winCondition=(Ticket)=>{
    return Ticket.every((num)=> num==Ticket[0])
  }

  return (
    <>
   <Lottery n={2} winCondition={winCondition}/>
    </>
      
  )
}

export default App
