let boxes=document.querySelectorAll(".box");
let reset_button=document.querySelector("#reset");
let newclass_con =document.querySelector(".newclass_con");
let winner=document.querySelector("winner");
let newbutton=document.querySelector("#newbutton");
let turn0=true;
let count=0;
const winPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]
];
const reset=()=>{
    true0=true;
    count=0;
    enableBox();

    newclass_con.classList.add("hide");
};


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkPattern();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    winner.innerText = `Game was a Draw.`;
    newclass_con.classList.remove("hide");
    disableBox();
  };



const showWinner=(winner)=>{
    winner.innerText=`Congratitation winner $(winner)`;
    newclass_con.classList.remove("hide");
    disableBox();

};

const disableBox=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBox=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const checkPattern=() =>{
    for(pattern of winPattern){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let  posVal3=boxes[pattern[2]].innerText;
        if(posVal1 !="" && posVal2 !="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("Winner",posVal1);
                showWinner(posVal1);
                return true;
            }
        }
    }
};
reset_button.addEventListener("click",reset);
newbutton.addEventListener("click",reset);