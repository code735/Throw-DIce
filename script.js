document.getElementById("roll").style.cursor = "grab";

// Roll The Dice Button event

document.getElementById("roll").addEventListener("click",function(){    

    var mem1 = 0;
    var mem2 = 0;
    var mem3 = 0;

    while(mem1==0 || mem2==0 || mem3==0){
        mem1 = Math.round(Math.random()*6);
        mem2 = Math.round(Math.random()*6);
        mem3 = Math.round(Math.random()*6);
    }


    // Member Scores
    document.getElementById("mem-1").textContent="Score: "+mem1;
    document.getElementById("mem-2").textContent="Score: "+mem2;
    document.getElementById("mem-3").textContent="Score: "+mem3;

    if(mem1==mem2 && mem1==mem3 && mem2==mem3){
        document.getElementById("member-1").style.background = "#05b50b";
        document.getElementById("member-2").style.background = "#05b50b";
        document.getElementById("member-3").style.background = "#05b50b";

        document.getElementById("winner").textContent = "Winner: Member-A,Member-B,Member-C";
    }
    else if(mem1>mem2 && mem1>mem3){
        document.getElementById("member-1").style.background = "#05b50b";
        document.getElementById("winner").textContent = "Winner: Member-A";

        if(mem2==mem3){
            document.getElementById("member-2").style.background = "#3f00ff";
            document.getElementById("member-3").style.background = "#3f00ff";
        }
        else if(mem2>mem3){
            document.getElementById("member-2").style.background = "#3f00ff";
            document.getElementById("member-3").style.background = "red";
        }
        else{
            document.getElementById("member-2").style.background = "red";
            document.getElementById("member-3").style.background = "#3f00ff";
        }
    }
    else if(mem2>mem1 && mem2>mem3){
        document.getElementById("member-2").style.background = "#05b50b";
        document.getElementById("winner").textContent = "Winner: Member-B";

        if(mem1==mem3){
            document.getElementById("member-1").style.background = "#3f00ff";
            document.getElementById("member-3").style.background = "#3f00ff";
        }
        else if(mem1>mem3){
            document.getElementById("member-1").style.background = "#3f00ff";
            document.getElementById("member-3").style.background = "red";
        }
        else{
            document.getElementById("member-1").style.background = "red";
            document.getElementById("member-3").style.background = "#3f00ff";
        }
    }
    else if(mem3>mem2 && mem3>mem1){
        document.getElementById("winner").textContent = "Winner: Member-C";
        document.getElementById("member-3").style.background = "#05b50b";

        if(mem2==mem1){
            document.getElementById("member-2").style.background = "#3f00ff";
            document.getElementById("member-1").style.background = "#3f00ff";
        }
        else if(mem2>mem1){
            document.getElementById("member-2").style.background = "#3f00ff";
            document.getElementById("member-1").style.background = "red";
        }
        else{
            document.getElementById("member-2").style.background = "red";
            document.getElementById("member-1").style.background = "#3f00ff";
        }
    }  
    else if(mem1==mem2){
        document.getElementById("winner").textContent = "Winner: Member-A,Member-B";
        
        document.getElementById("member-1").style.background = "#05b50b"
        document.getElementById("member-2").style.background = "#05b50b"
        document.getElementById("member-3").style.background = "#3f00ff"
    }
    else if(mem2==mem3){
        document.getElementById("winner").textContent = "Winner: Member-B,Member-C";

        document.getElementById("member-1").style.background = "#3f00ff"
        document.getElementById("member-2").style.background = "#05b50b"
        document.getElementById("member-3").style.background = "#05b50b"
    }
    else if(mem1==mem3){
        document.getElementById("winner").textContent = "Winner: Member-A,Member-C";

        document.getElementById("member-1").style.background = "#05b50b"
        document.getElementById("member-2").style.background = "#3f00ff"
        document.getElementById("member-3").style.background = "#05b50b"
    }  
    

});
