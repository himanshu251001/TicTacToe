let flag1=true;
let input=0;
 
function fill(x){
    if(document.getElementById(x).innerHTML==""){
      if(flag1==true){
            document.getElementById(x).innerHTML="X";
            flag1=false;
            input=input+1;
           let bo= checkingwin();
            if(bo){
                alert("X WON");
            }
            else if(!bo && input==9){
                alert("DRAW")
            }       
        }
       else{
            document.getElementById(x).innerHTML="O";
            flag1=true;
            input=input+1;
            let bo=checkingwin();
            if(bo){
                alert("O won");
            }
            else if(!bo && input==9){
                alert("DRAW")
            }
        }
    }
}

function checkd1(i){
    let win=false;
    let ele=document.getElementById(i).innerHTML;
    if(ele==document.getElementById(4).innerHTML && ele==document.getElementById(8).innerHTML && ele==document.getElementById(0).innerHTML){
        win=true;
    } 
    return win;
}
function checkd2(i){
    let win=false;
    let e=document.getElementById(i).innerHTML;
    if(e==document.getElementById(2).innerHTML && e==document.getElementById(4).innerHTML && e==document.getElementById(6).innerHTML){
        win=true;
    } 
    return win;
}
function checkcolumn(i){
    let win=false;
    let elem=document.getElementById(i).innerHTML;
    if(elem==document.getElementById(i+3).innerHTML && elem==document.getElementById(i+6).innerHTML){
        win=true;
    }
    return win;
}
function checkrow(i){
  
    let win=false;
    let eleme=document.getElementById(i).innerHTML;
    if(eleme==document.getElementById(i+1).innerHTML && eleme==document.getElementById(i+2).innerHTML){
        win=true;
    }
    console.log("checkrow is working"+win);
    return win;
}
function checkingwin(){
//    console.log("Running")
    let winning=false;
    for(i=0;i<9;i+=3){ //row
        if(document.getElementById(i).innerHTML==""){
            continue;
        }
        else{
            if(checkrow(i)){
                winning=true;
            }
        }
        // console.log("checking column" + winning);
    }
        
        for(i=0;i<3;i++){
             if(document.getElementById(i).innerHTML==""){
                 continue;
             }
             else{
                 if(checkcolumn(i)){
                     winning= winning || true;
                 }
             }
         }
         
          
            for(i=0;i<=8;i+=2){//checking both d1 and d2 with corner elements
                 if(document.getElementById(i).innerHTML==""){
                     continue;
                 }
                 else{
                     if(checkd2(i) || checkd1(i)){
                         winning=winning || true;
                     }
                 }
             }
             
             return winning;
            }