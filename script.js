document.getElementById("roll").style.cursor = "grab";
var startingtext=document.createElement("div");
startingtext.textContent = "Winners";
document.getElementById("winner").append(startingtext); 
// Roll The Dice Button event

document.getElementById("roll").addEventListener("click",function(){    
    document.getElementById("member-1").style.color = "white";
    document.getElementById("member-2").style.color = "white";
    document.getElementById("member-3").style.color = "white";
     

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
        document.getElementById("member-1").style.background = "#3f00ff";
        document.getElementById("member-2").style.background = "#3f00ff";
        document.getElementById("member-3").style.background = "#3f00ff";

        document.getElementById("winner").textContent="";
        
        var tie=document.createElement("div");
        tie.textContent = "It's Tie !";
        document.getElementById("winner").append(tie);        
    }

    else if(mem1>mem2 && mem1>mem3){
        document.getElementById("member-1").style.background = "#05b50b";
        document.getElementById("winner").textContent="";
        
        var winner=document.createElement("div");
        winner.textContent = "Winner";
        document.getElementById("winner").append(winner);  
        
        var member_a=document.createElement("div");
        member_a.textContent = "Member-A";
        document.getElementById("winner").append(member_a);   

        if(mem2==mem3){
            document.getElementById("member-2").style.background = "#3f00ff";
            document.getElementById("member-3").style.background = "#3f00ff";
        }
        else if(mem2>mem3){
            document.getElementById("member-2").style.background = "#ccff00";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("member-3").style.background = "red";
        }
        else{
            document.getElementById("member-2").style.background = "red";
            document.getElementById("member-3").style.background = "#ccff00";
            document.getElementById("member-3").style.color = "black";
        }
    }
    else if(mem2>mem1 && mem2>mem3){
        document.getElementById("member-2").style.background = "#05b50b";
        document.getElementById("winner").textContent="";
        
        var winner=document.createElement("div");
        winner.textContent = "Winners";
        document.getElementById("winner").append(winner);  
        
        var member_b=document.createElement("div");
        member_b.textContent = "Member-B";
        document.getElementById("winner").append(member_b);  

        if(mem1==mem3){
            document.getElementById("member-1").style.background = "#3f00ff";
            document.getElementById("member-3").style.background = "#3f00ff";
        }
        else if(mem1>mem3){
            document.getElementById("member-1").style.color = "black";
            document.getElementById("member-1").style.background = "#ccff00";
            document.getElementById("member-3").style.background = "red";
        }
        else{
            document.getElementById("member-1").style.background = "red";
            document.getElementById("member-3").style.background = "#ccff00";
            document.getElementById("member-3").style.color = "black";
        }
    }
    else if(mem3>mem2 && mem3>mem1){
        document.getElementById("member-3").style.background = "#05b50b";
        document.getElementById("winner").textContent="";
        
        var winner=document.createElement("div");
        winner.textContent = "Winners";
        document.getElementById("winner").append(winner);  
        
        var member_c=document.createElement("div");
        member_c.textContent = "Member-C";
        document.getElementById("winner").append(member_c);   

        if(mem2==mem1){
            document.getElementById("member-2").style.background = "#3f00ff";
            document.getElementById("member-1").style.background = "#3f00ff";
        }
        else if(mem2>mem1){
            document.getElementById("member-2").style.background = "#ccff00";
            document.getElementById("member-2").style.color = "black";
            document.getElementById("member-1").style.background = "red";
        }
        else{
            document.getElementById("member-2").style.background = "red";
            document.getElementById("member-1").style.background = "#ccff00";
            document.getElementById("member-1").style.color = "black";
        }
    }  
    else if(mem1==mem2){
        document.getElementById("winner").textContent="";
        
        var winner=document.createElement("div");
        winner.textContent = "Winners";
        document.getElementById("winner").append(winner);  
        
        var member_a=document.createElement("div");
        member_a.textContent = "Member-A";
        document.getElementById("winner").append(member_a);   

        var member_b=document.createElement("div");
        member_b.textContent = "Member-B";
        document.getElementById("winner").append(member_b);   
        
        document.getElementById("member-1").style.background = "#3f00ff";
        document.getElementById("member-2").style.background = "#3f00ff";
        document.getElementById("member-3").style.background = "red";
    }
    else if(mem2==mem3){
        document.getElementById("winner").textContent="";
        
        var winner=document.createElement("div");
        winner.textContent = "Winners";
        document.getElementById("winner").append(winner);  
        
        var member_b=document.createElement("div");
        member_b.textContent = "Member-B";
        document.getElementById("winner").append(member_b);   

        var member_c=document.createElement("div");
        member_c.textContent = "Member-C";
        document.getElementById("winner").append(member_c); 

        document.getElementById("member-1").style.background = "red";
        document.getElementById("member-2").style.background = "#3f00ff";
        document.getElementById("member-3").style.background = "#3f00ff";
    }
    else if(mem1==mem3){
        document.getElementById("winner").textContent="";
        
        var winner=document.createElement("div");
        winner.textContent = "Winners";
        document.getElementById("winner").append(winner);  
        
        var member_a=document.createElement("div");
        member_a.textContent = "Member-A";
        document.getElementById("winner").append(member_a);   

        var member_c=document.createElement("div");
        member_c.textContent = "Member-C";
        document.getElementById("winner").append(member_c); 

        document.getElementById("member-1").style.background = "#3f00ff";
        document.getElementById("member-2").style.background = "red";
        document.getElementById("member-3").style.background = "#3f00ff";
    }  
    

});
