function genTicket(n){
    let arr=new Array()
    for(let i=0;i<n;i++){
       arr[i]=Math.floor(Math.random()*10);
       
    }
    return arr;
}

let sum=(ticket)=>{
    
    return ticket.reduce((sum,val)=>sum + val ,0)
}

export  {genTicket,sum}