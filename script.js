let display=document.querySelector('#display')
function working(value){
    display.value+=value
}
function clear(value){
    display.value=''
}
function val(value){
    display.value=eval(display.value)
}