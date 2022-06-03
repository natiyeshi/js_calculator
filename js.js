var map = new Map();    
var counter = 1;
var times=0,ch=1;
display = (id)=>{  
        var dis =document.getElementById("display");
        var view =document.getElementById("view");
         
        if(id.innerHTML == "c" || times == ch){
            console.log("r");
            dis.innerHTML = "";
            view.innerHTML = "";
            map.clear();
            if(id.innerHTML == "c")
            return
        }
        if(id.innerHTML == "/" || id.innerHTML =="+" || id.innerHTML =="-" || id.innerHTML =="*"){
            console.log(counter)
            view.innerHTML +=" "+ dis.innerHTML +" "+ id.innerHTML;
            let name = "num" + counter;
            let op = "op"+counter;
            map.set(name,dis.innerHTML);
            console.log(map.get(name));
            map.set(op,id.innerHTML);
            dis.innerHTML = "";  
            counter++;
            console.log(counter)
            return;  
            }
        dis.innerHTML = dis.innerHTML + id.innerHTML;
        ch++;
}

calculate =()=>{
    var view =document.getElementById("view");
    var dis =document.getElementById("display");
    view.innerHTML +=" "+ dis.innerHTML;
    let name = "num" + counter;
    map.set(name,dis.innerHTML);
    console.log(map.get(name));
    console.log(counter);
    let value;
    let op = "op"+1; 
    if(map.get(op)=="+" || map.get(op)=="-"){value = 0}
    if(map.get(op)=="*" || map.get(op)=="/"){value = 1}
    for(let z=1,p=z; z<=counter;z++){
        if(z!=1){
           p=z-1; 
        }
        if(map.has("op"+p)){
             op = "op"+p; 
        }
        let num = "num" + z; 
        if(map.get(op)=="+"){
            value  += Number(map.get(num))
            console.log("num "+num+" value "+Number(map.get(num)))
        }
        if(map.get(op)=="-"){
                if(z == 1)
                    value = Number(map.get(num)) - value
                else 
                    value -= Number(map.get(num))
            }
        if(map.get(op)=="/"){
                if(z == 1)
                    value = Number(map.get(num)) / value
                else 
                    value /= Number(map.get(num))
            }
        if(map.get(op)=="*"){
                value *= Number(map.get(num))
            } 
    }   
    dis.innerHTML = "||> " + value;
    clear()
    times = ch;
}
clear = () =>{
    map.clear();
    counter = 1;
}
