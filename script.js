let a=document.getElementById("firstNumber");
let b=document.getElementById("secondNumber");
let c=document.getElementById("checkButton");
let d=document.getElementById("restartButton");
let e=document.getElementById("gameResult");
let f=document.getElementById("userInput");
function restart(){
    let randomNumber=Math.random()*100;
    let randomNumber2=Math.random()*100;

    a.textContent=Math.ceil(randomNumber);
    b.textContent=Math.ceil(randomNumber2);

    e.textContent=" ";
    f.value="  ";
}
restart();
function check(){
    let g=parseInt(a.textContent);
    let h=parseInt(b.textContent);
    let i=parseInt(f.value);
    let sum=g+h;
    if (i===sum){
        e.textContent="Wow,Congratulations";
        e.style.backgroundColor="#028a0f";
        e.style.color="white";
    }
    else{
        e.textContent="Try Again Later.";
        e.style.backgroundColor="#1e217c";
        e.style.color="white";

    }

}