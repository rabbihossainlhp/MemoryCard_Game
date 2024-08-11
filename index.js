import {imageData} from"./data.js";
let section = document.querySelector("section");
let Moves = document.querySelector("section h2");
let reset = document.querySelector(".resetBtn");

let MoveCount = 14;
Moves.innerText = `Moves: ${MoveCount}`;

let pairs = (imageData.length)/2;
let counterPairs = 0;
//Get & Random data;
const get_rand_Data = ()=>{
    const getData = imageData;
    const randData = getData.sort(()=>Math.random()-0.5);
    
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv");
    //Generate card with this images...
    randData.forEach( (item)=>{
        //create div/img/backpart......................
        const singleCard = document.createElement("div");
        const imgSide = document.createElement("img");
        const backsideCard = document.createElement("div");
        

        //add class name...............................
        singleCard.classList.add("singleCard");
        imgSide.classList.add("imgSide");
        backsideCard.classList.add("backsideCard");
        
        singleCard.setAttribute("name", item.name);

        //add source into img.......................
        imgSide.src = item.img_src


        //add this two element in main Div.................... 
        section.appendChild(mainDiv);


        //Now append this all.........................
        section.appendChild(mainDiv);
        mainDiv.appendChild(singleCard);

        //this is simple try to showing card few second initially..........
        setTimeout(() => {
            document.querySelectorAll(".singleCard").forEach((card)=>{
                card.classList.add("toggleCard");
            })
        }, 500);

        setTimeout(() => {
            document.querySelectorAll(".singleCard").forEach((card)=>{
                card.classList.remove("toggleCard");
            })
        }, 2000);
        //........................end here.................


        singleCard.appendChild(imgSide)
        singleCard.appendChild(backsideCard);


        //now add eventlisten into the card............
        singleCard.addEventListener("click",(e)=>{
            singleCard.classList.toggle("toggleCard");
            clickedCard(e);
        })
        
        
    })
    //check is card clicked or not>>>
    const clickedCard = (e)=>{
        const checkTarget = e.target;
        // console.log(checkTarget);

        checkTarget.classList.add("flipped")
        const getID = document.querySelectorAll(".flipped");
    
        //condition for set win/loss by simple logic........
        if(getID.length === 2){
            if(getID[0].getAttribute("name") === getID[1].getAttribute("name")){
                getID.forEach((card)=>{
                    card.classList.remove("flipped");
                    card.style.pointerEvents = "none";
                })
                counterPairs++;
                if(counterPairs === pairs){
                    setTimeout(() => {
                    alert("Hurrah! You're Won the Game..");
                    }, 300);
                }
            }else{
                //decress the count value......
                MoveCount--;
                Moves.innerText = `Moves: ${MoveCount}`;
                //check here with conditon if moves = 0 then game will disable.
                if(MoveCount === 0){
                    document.querySelectorAll(".singleCard").forEach((data)=>
                        data.style.pointerEvents = "none");
                    setTimeout(() => {
                        alert("You're Loss the Game!! Try again..")     
                    }, 300);
                }


                getID.forEach((card)=>{
                    card.classList.remove("flipped");
                    setTimeout(()=>{
                        card.classList.remove("toggleCard");
                    },1000)
                    

                    // console.log(card)
                })
            }  
        }
    }
}


//annd functionality for reset button
reset.addEventListener("click", ()=>{
    resetAll();
})


//declear/define resetAll function
const resetAll =()=>{
    const getData = imageData.sort(()=>Math.random()-0.5);
    const imgSide = document.querySelectorAll(".imgSide");
    const singleCard = document.querySelectorAll(".singleCard");
    
    getData.forEach((card, index)=>{
        singleCard[index].classList.remove("toggleCard");
        
        //make random again...
        setTimeout(() => {
            imgSide[index].src = card.img_src;
        }, 300);
        
        singleCard[index].style.pointerEvents = "all";
        //set name attribute...
        singleCard[index].setAttribute("name",card.name);
    })

    setTimeout(() => {
        singleCard.forEach((card) =>{
            card.classList.add("toggleCard");
        })    
    }, 450);
    setTimeout(() => {
        singleCard.forEach((card)=>{
            card.classList.remove("toggleCard");
        })
    }, 2000);
    
    MoveCount = 14;
    Moves.innerText = `Moves: ${MoveCount}`
    counterPairs = 0;

    // console.log(getData);
}




//call here getRand function.....
get_rand_Data();