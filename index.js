let count = 1;

let xoArray = [];
document.getElementById('divone').value = null;
document.getElementById('divtwo').value = null;
document.getElementById('divthree').value = null;
document.getElementById('divfour').value = null;
document.getElementById('divfive').value = null;
document.getElementById('divsix').value = null;
document.getElementById('divseven').value = null;
document.getElementById('diveight').value = null;
document.getElementById('divnine').value = null;


function desision(divid){
    count =count + 1;
    let divaddres = document.getElementById(divid).value;


    if(count%2 == 0){
        Drawx(divid);
    }
    else{
        Drawo(divid);
    }
}      
function  Drawx( divid){
    if (document.getElementById(divid).value == null) {
        document.getElementById(divid).textContent='X';
        document.getElementById(divid).value='X';
        document.getElementById("turn").innerHTML = "O"
        xoArray[xoArray.length] =  document.getElementById(divid);
        Condition();
    }
    else{
        count =count - 1;
    }
    
    if (document.getElementById('divone').value != null && document.getElementById('divtwo').value != null && document.getElementById('divthree').value != null ) {
       if (document.getElementById('divfour').value != null && document.getElementById('divfive').value != null && document.getElementById('divsix').value != null ) {            
        if (document.getElementById('divseven').value != null && document.getElementById('diveight').value != null && document.getElementById('divnine').value != null) {
                Draw()
            }
           }  
        } 
    }
   

function  Drawo( divid){
    if (document.getElementById(divid).value == null) {
        document.getElementById(divid).textContent='O';
        document.getElementById(divid).value='O';
        xoArray[xoArray.length] =  document.getElementById(divid);
         document.getElementById("turn").innerHTML = "X"
        Condition();
    }
    else{
        count =count - 1;
    }
    
        if (document.getElementById('divone').value != null && document.getElementById('divtwo').value != null && document.getElementById('divthree').value != null ) {
            if (document.getElementById('divfour').value != null && document.getElementById('divfive').value != null && document.getElementById('divsix').value != null ) {
             if (document.getElementById('divseven').value != null && document.getElementById('diveight').value != null && document.getElementById('divnine').value != null) {
                 Draw()
             }
            } 
         } 
    }



function Draw(){
    let winnerdiv = document.getElementById("winner");
        winnerdiv.style.zIndex = "1";
        document.getElementById("container").style.zIndex ="0";
        winnerdiv.textContent='Draw';
        winnerdiv.style.color="white";

        let playagain = document.createElement("div");
        let atag = document.createElement("a")

        playagain.append(atag)
        winnerdiv.append(playagain);

        atag.innerText = "Play Again";
        atag.href = "";
        atag.style.cursor = 'pointer';
        atag.style.textDecoration = 'none';
        atag.style.color = "white";
        atag.style.border = '1px solid #FF2E63'
        atag.style.backgroundColor = "#FF2E63";
        atag.style.fontSize = "20px";
        atag.style.position = "relative";
        atag.style.top ="175px";
        atag.style.padding = "10px 15px 10px 15px";
        atag.style.borderRadius = "5px";
    Condition();

}


function  Condition(){
    if (document.getElementById('divone').value == document.getElementById('divtwo').value && document.getElementById('divone').value == document.getElementById('divthree').value) {
        if (document.getElementById('divone').value != null) {
            let winner = document.getElementById('divone').textContent;
            document.getElementById('divone').style.backgroundColor="#08D9D6"
            document.getElementById('divtwo').style.backgroundColor="#08D9D6"
            document.getElementById('divthree').style.backgroundColor="#08D9D6"
            Winner(winner);   
        }
        
    }
    if(document.getElementById('divfour').value == document.getElementById('divfive').value && document.getElementById('divfour').value == document.getElementById('divsix').value){
        if (document.getElementById('divfour').value != null) {
            let winner = document.getElementById('divfour').textContent;
            document.getElementById('divfour').style.backgroundColor="#08D9D6"
            document.getElementById('divfive').style.backgroundColor="#08D9D6"
            document.getElementById('divsix').style.backgroundColor="#08D9D6"
            Winner(winner);
        }
    }

    if(document.getElementById('divseven').value == document.getElementById('diveight').value && document.getElementById('divseven').value == document.getElementById('divnine').value){
        if (document.getElementById('divseven').value != null) {
            let winner = document.getElementById('divseven').textContent;
            document.getElementById('divseven').style.backgroundColor="#08D9D6"
            document.getElementById('diveight').style.backgroundColor="#08D9D6"
            document.getElementById('divnine').style.backgroundColor="#08D9D6"
            Winner(winner);
        }
    }
    if(document.getElementById('divone').value == document.getElementById('divfour').value && document.getElementById('divone').value == document.getElementById('divseven').value){
        if (document.getElementById('divone').value != null) {
            let winner = document.getElementById('divone').textContent;
            document.getElementById('divfour').style.backgroundColor="#08D9D6"
            document.getElementById('divone').style.backgroundColor="#08D9D6"
            document.getElementById('divseven').style.backgroundColor="#08D9D6"
            Winner(winner);
        }
    }

    if(document.getElementById('divtwo').value == document.getElementById('divfive').value && document.getElementById('divtwo').value == document.getElementById('diveight').value){
        if (document.getElementById('divtwo').value != null) {
            let winner = document.getElementById('divtwo').textContent;
            document.getElementById('divtwo').style.backgroundColor="#08D9D6"
            document.getElementById('divfive').style.backgroundColor="#08D9D6"
            document.getElementById('diveight').style.backgroundColor="#08D9D6"
            Winner(winner);
        }
    }

    if(document.getElementById('divthree').value == document.getElementById('divsix').value && document.getElementById('divthree').value == document.getElementById('divnine').value){
        if (document.getElementById('divthree').value != null) {
            let winner = document.getElementById('divthree').textContent;
            document.getElementById('divthree').style.backgroundColor="#08D9D6"
            document.getElementById('divsix').style.backgroundColor="#08D9D6"
            document.getElementById('divnine').style.backgroundColor="#08D9D6"
            Winner(winner);
        }
    }

    if(document.getElementById('divone').value == document.getElementById('divfive').value && document.getElementById('divone').value == document.getElementById('divnine').value){
        if (document.getElementById('divone').value != null) {
            let winner = document.getElementById('divone').textContent;
            document.getElementById('divone').style.backgroundColor="#08D9D6"
            document.getElementById('divfive').style.backgroundColor="#08D9D6"
            document.getElementById('divnine').style.backgroundColor="#08D9D6"
            Winner(winner);
        }
    }

    if(document.getElementById('divthree').value == document.getElementById('divfive').value && document.getElementById('divthree').value == document.getElementById('divseven').value){
        if (document.getElementById('divthree').value != null) {
            let winner = document.getElementById('divthree').textContent;
            document.getElementById('divthree').style.backgroundColor="#08D9D6"
            document.getElementById('divfive').style.backgroundColor="#08D9D6"
            document.getElementById('divseven').style.backgroundColor="#08D9D6"
            Winner(winner);
        }
    }
    }

    function Winner (winner){
        
        let winnerdiv = document.getElementById("winner");
        winnerdiv.style.zIndex = "1";
        document.getElementById("container").style.zIndex ="0";
        winnerdiv.textContent= winner+ '    Won The Game';
        winnerdiv.style.color="white";


        let playagain = document.createElement("div");
        let atag = document.createElement("a")

        playagain.append(atag)
        winnerdiv.append(playagain);

        atag.innerText = "Play Again";
        atag.href = "";
        atag.style.cursor = 'pointer';
        atag.style.textDecoration = 'none';
        atag.style.color = "white";
        atag.style.border = '1px solid #FF2E63'
        atag.style.backgroundColor = "#FF2E63";
        atag.style.fontSize = "20px";
        atag.style.position = "relative";
        atag.style.top ="175px";
        atag.style.padding = "10px 15px 10px 15px";
        atag.style.borderRadius = "5px";
    }
























