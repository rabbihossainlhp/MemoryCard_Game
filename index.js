import {imageData} from"./data.js";
let section = document.querySelector("section");
let Moves = document.querySelector("section h2");
let MoveCount = 7;
Moves.innerText = `Moves: ${MoveCount}`;


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
                console.log("congratch");
            }else{
                getID.forEach((card)=>{
                    card.classList.remove("flipped");
                    setTimeout(()=>{
                        card.classList.remove("toggleCard");
                    },1000)
                    
                    MoveCount--;
                    Moves.innerText = `Moves: ${MoveCount}`;

                    console.log(card)
                })
            }  
        }
    }
}




get_rand_Data();