let resElement=document.getElementById("res");

let num,result;
function clear(){
    resElement.innerHTML="";
}

function one(){
    resElement.innerHTML+="1";
}

function zero(){
    resElement.innerHTML+="0";
}

function sumbtn(){
    resElement.innerHTML+="+";
}

function subbtn(){
    resElement.innerHTML+="-";
}

function mulbtn(){
    resElement.innerHTML+="*";
}

function divbtn(){
    resElement.innerHTML+="/";
}

function equal(){
    //console.log(resElement.innerHTML);
    if(resElement.innerHTML.includes('+')){        
        resElement.innerHTML.toString()
        var numbers=resElement.innerHTML.split("+");
        num=parseInt(numbers[0],2)+parseInt(numbers[1],2);  
        result=num.toString(2);      
    }
    else if(resElement.innerHTML.includes('-')){
        resElement.innerHTML.toString()
        var numbers=resElement.innerHTML.split("-");
        num=parseInt(numbers[0],2)-parseInt(numbers[1],2);
        result=num.toString(2); 
    }
    else if(resElement.innerHTML.includes('*')){
        resElement.innerHTML.toString()
        var numbers=resElement.innerHTML.split("*");
        num=parseInt(numbers[0],2)*parseInt(numbers[1],2);
        result=num.toString(2); 
    }
    else {
        resElement.innerHTML.toString()
        var numbers=resElement.innerHTML.split("/");
        num=Math.floor(parseInt(numbers[0],2)/parseInt(numbers[1],2));
        result=num.toString(2); 
    }

    document.getElementById('res').innerHTML=result;
}
document.getElementById('btnClr').addEventListener('click',clear)
document.getElementById('btn1').addEventListener('click',one)
document.getElementById('btn0').addEventListener('click',zero)
document.getElementById('btnSum').addEventListener('click',sumbtn)
document.getElementById('btnSub').addEventListener('click',subbtn)
document.getElementById('btnMul').addEventListener('click',mulbtn)
document.getElementById('btnDiv').addEventListener('click',divbtn)
document.getElementById('btnEql').addEventListener('click',equal)
