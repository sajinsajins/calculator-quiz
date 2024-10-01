var dis =document.getElementById("inner");
function cal(cell){
  dis.value += cell;
}
function calculate(){
    dis.value = eval(dis.value);
}
function cleardisplay(){
    dis.value = '';
}
function back(){
    dis.value = dis.value.slice(0,-1);
} 
