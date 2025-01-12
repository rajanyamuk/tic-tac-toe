let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let turn0  = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

    
];
boxes.forEach((box) => 
{
    box.addEventListener("click", () => 
    {
        console.log("box was clicked");
        if(turn0 === true)
            {
                //turn0 = "O";
                box.innerText = "O";
                turn0 = false;
            }
        else{
            //turn0 = "X";
            box.innerText = "X";
            turn0 = true;

        }
        box.disabled = true;

        checkWinner();
        
    });
});
//to disable the buttons after we got a winner
const disableBoxes = (disable) =>
    {
        for(let box of boxes)
            {
                box.disabled = true;
            }
    };
    //to enable again
    const enableBoxes = (enable) =>
        {
            for(let box of boxes)
                {
                    box.disabled = false;
                    box.innerText="";
                }
        };
const showWinner = (winner) =>
    {
        msg.innerText = `Congo! Our Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };
const checkWinner = () =>
    {
        for(pattern of winPatterns)
            {
                            let pos1Val = boxes[pattern[0]].innerText;
                            let pos2Val = boxes[pattern[1]].innerText;
                            let pos3Val = boxes[pattern[2]].innerText; 
                            if(pos1Val != "" && pos2Val != "" && pos3Val != "")
                                {
                                    if(pos1Val === pos2Val && pos2Val === pos3Val)
                                        {
                                            console.log("winner");
                                            showWinner(pos1Val);
                                        }
                                        
                                }
                                
                        
                
            }
    };

    const resetGame = () =>
        {
            turn0 = true;
            enableBoxes();
            msgContainer.classList.add("hide");

         

        };
  
        newGameBtn.addEventListener("click", resetGame);
       