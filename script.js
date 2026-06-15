let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset_btn");

let patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let turnO=true;
boxes.forEach((box) =>{
box.addEventListener(("click"),()=>{
    if (turnO){
        box.innerText="O";
        box.style.color="blue";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
       
    } 
    box.disabled=true;
    checkwinner();
   

})
})
const boxDisabled=()=>{
    boxes.forEach((box)=>{
        if (box.innerText==="X" || box.innerText==="O"){
            box.innerText=box.innerText;
        }
        else{
    box.innerText="";
        }
        
        box.disabled=true;
    })
}
let winnerShow=document.querySelector("#winner");
const checkwinner=()=>{

for (let pattern of patterns){
    let check1=boxes[pattern[0]].innerText;
    let check2=boxes[pattern[1]].innerText;
    let check3=boxes[pattern[2]].innerText;
    if(check1 != "" && check2 != "" && check3 != ""){
    if(check1 === check2 && check2 === check3){
        winnerShow.innerText=`The winner is ${check1}`;
        winnerShow.style.visibility="visible";
        boxDisabled();
        
    }

}

    
}
}
boxes.forEach((box)=>{
    reset.addEventListener("click",()=>{
        box.innerText="";
        box.disabled=false;
        winnerShow.style.visibility="hidden";
    })
})
