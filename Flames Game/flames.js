const flames=(name1,name2)=>{
    name1=name1.toLowerCase();
    name2=name2.toLowerCase();
    var name1Array=name1.split("");
    var name2Array=name2.split("");
    delName=[]
    for(var i=0;i<name1Array.length;i++){
        for(var j=0;j<name2Array.length;j++){
            if(name1Array[i]==name2Array[j]){
                delName.push(name1Array[i]);
                name2Array.splice(j,1);
                break;  
            }
        }
    }
    for(var i=0;i<delName.length;i++){
        var ind1=name1Array.indexOf(delName[i])
        name1Array.splice(ind1,1);
    }
    
    newArr=[...name1Array,...name2Array]
    var leftWord=newArr.join("");
    if(leftWord.length%6==0) document.getElementById('result').value="Siblings";
    else if(leftWord.length%6==1) document.getElementById('result').value="Friends";
    else if(leftWord.length%6==2) document.getElementById('result').value="Lovers";
    else if(leftWord.length%6==3) document.getElementById('result').value="Affectionates";
    else if(leftWord.length%6==4) document.getElementById('result').value="Married";
    else document.getElementById('result').value="Enemies";
}

function func() {
    var yname=document.getElementById("yName").value;
    var pname=document.getElementById("pName").value;
    flames(yname,pname);
}

function clearfunc(){
    document.getElementById("yName").value="";
    document.getElementById("pName").value="";
    document.getElementById("result").value="";

}