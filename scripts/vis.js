var speed = 10000;
arr_speed.addEventListener('input',select_speed);

function select_speed(){
    var ar_speed =arr_speed.value;
    switch(parseInt(ar_speed))
    {
        case 1: speed = 9;
            break;
        case 2: speed = 200;
            break;
        case 3: speed = 800;
            break;
        case 4: speed = 2000;
            break;
        case 5: speed = 5000;
            break;
    }
    delay_time = 10000/(Math.floor(arr_size/10)*speed);
}
var delay_time = 10000/(Math.floor(arr_size/10)*speed);
var change_delay = 0;
/*
function update_div(cont,div_height,color,a){
    window.setTimeout(function(){
        cont.style = 
    },change_delay+=delay_time);
}
console.log(divs[0].style.background)
*/
/*
function update_color(cont,color,div_height){
    cont.style = 'padding-top:'+10+'px;'+'transistion:0.4s;'+'color:white;'+'font-family:'+'"Open Sans",'+ 'sans-serif;'+'font-size:'+16+'px;font-size:16px;' + 'border-color:red;margin:0% 0.1%; background-color:'+color+';width:'+(100/arr_size-(2*0.1))+'%;height:'+div_height/2+';';
}
*/
function update_div(cont,div_height,color){
    window.setTimeout(function(){
        if(cont != undefined){
        cont.style =  "padding-top:10px;color:white; margin:0% " +0.1+ "%; width:" + (100/arr_size-(2*0.1)) +  "%; background-color:" + color + ";"+" height:" + div_height+"%" ;}
        if (arr_size<36){
        cont.innerHTML = div_height;}
    },change_delay+=delay_time);
}
/*
function swap_divs(a,b,color){
    a.style.backgroundColor = color;
    b.style.backgroundColor = color;
    [a,b] = [b,a];

}
*/
function enable_buttons(){
    window.setTimeout(function(){
        for (var i = 0;i<algo_b.length;i++){
            algo_b[i].style = ''
            algo_b[i].classList=[];
            algo_b[i].disabled = false;
        }
        generate.style = '';
        arr_speed.disabled = false;
        generate.disabled = false;
        size.disabled = false;
    },change_delay+=delay_time)
}