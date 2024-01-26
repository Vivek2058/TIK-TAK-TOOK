const buttons=document.querySelectorAll('.game-main');
let turn=true;
const result=document.getElementById('strong');
result.classList.add('disabled');
var rematch=document.getElementById('rematch').classList.add('disabledBorder');
buttons.forEach((element)=>
{
    element.addEventListener('click',()=>
    {
       if(turn)
       {
        element.innerHTML="0";
        turn=false;
       }
       else
       {
        element.innerHTML="X";
        turn=true;
       }
       element.classList.add('disabled');
       checkWiner();
    }) 
})

//Reset Game Logic
const resetBtn=document.getElementById('reset');
resetBtn.addEventListener('click',()=>
{
    buttons.forEach((element)=>
    {
        element.innerHTML="";
        element.classList.remove('disabled');
    })
})

const winPattern =
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [6,7,8],
    [2,5,8],
    [2,4,6],
    [1,4,7],
    [3,4,5],
];

const checkWiner=()=>
{

    for(let box of winPattern)
    {
        let position1=buttons[box[0]].innerHTML;
        let position2=buttons[box[1]].innerHTML;
        let position3=buttons[box[2]].innerHTML;
        if(position1!=""&& position2!=""&&position3!="")
        {
            if(position1==position2 && position2==position3)
            {
                result.innerHTML=`Winner ${position1}`;
                const borderInvisible=document.getElementById('border').classList.add('disabledBorder');
                var rematch=document.getElementById('rematch').classList.remove('disabledBorder');
                buttons.forEach((element)=>
                {
                    element.classList.add('disabled');
                })
            }
        } 
    }
}
const finalRematch=document.getElementById('rematch');
finalRematch.onclick=()=>
{
    const borderInvisible=document.getElementById('border').classList.remove('disabledBorder');
    var rematch=document.getElementById('rematch').classList.add('disabledBorder');
    result.innerHTML="";
    buttons.forEach((element)=>
    {
        element.innerHTML="";
        element.classList.remove('disabled');
    })
    turn=true;
}
