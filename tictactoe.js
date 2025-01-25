 let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector("#reset-btn");
 let newGameBtn=documeny.querySelector("#new-btn");
 let msgContainer=document.querySelector(".msg-container");
 let msg=document.querySelector("#msg");
 let turnO=true;// playerx=flase&playero=true
 let count=0;
  const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5], 
    [6,7,8]
  ];
  const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");

        
  }
  boxes.forEach((box)=>{  
    box.addEventListener("click",()=>{
        
        if(turnO){//playero
            box.innerText="O";
            turnO=false;
            
        }else{
            box.innerText="X";//playerx
            turnO=true; 
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count==9&&!iswinner){
            gamedraw();
        }
    });
  });
  const gaemDraw=()=>{
    msg.innerText='Game was a draw.';
    msgContainer.classList.remove("hide");
    disableboxes();

  };
  const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  };
  const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}; 
  const showWinner=(winner)=>{
    msg.innerText='congragulations you won';
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
  const checkWinner=()=>{
    for(let pattern of winPatterns){ 
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("winner ",pos1Val);
                showWinner(pos1Val);
            }
        }
          
    };
    newGameBtn.addEventListener("click",restGame);
    resetBtn.addEventListener("click",)
    
    
               
    
  }
