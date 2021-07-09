var size = document.getElementById('size'),arr_size=size.value+1;
var arr_speed = document.getElementById('speed');
var generate = document.getElementById('gen');

var algo_b = document.querySelectorAll('.button button'); //buttons div selected

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById('array');
cont.style = 'flex-direction:row';

generate.addEventListener('click',generate_array);
size.addEventListener('input',update_size);

margin_size = 0.1;
function generate_array()
{   
    div_sizes = [];
    divs = [];
    cont.innerHTML="";
    var info = document.getElementById('info')
    var title = document.getElementById('title')
    title.innerHTML = ''
    info.innerHTML = ''
    for(var i=0;i<arr_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(size.max - size.min) ) + 10;
        d=document.createElement("div");
        divs[i] = d;
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style="color : white;padding-top :10px; margin: " + margin_size + "%; background-color:#be9fe6; width:" + (100/arr_size-(2*margin_size)) + "%; height:" + (div_sizes[i])+ "%;";
        if (arr_size <36){
            d.innerHTML= (div_sizes[i]);
        }

    }
    console.log(div_sizes)
    console.log(divs)
}


function update_size(){
    arr_size = size.value;
    generate_array();
    console.log(arr_size)
}
window.onload = update_size();
console.log(algo_b)

algo_b[1].addEventListener("click",run);
algo_b[2].addEventListener("click",run);
algo_b[3].addEventListener("click",run);
algo_b[4].addEventListener("click",run);
algo_b[5].addEventListener("click",run);

function disable_buttons()
{
    for(var i = 0;i<algo_b.length;i++){
        
        algo_b[i].classList=[];
        algo_b[i].classList.add('lock');
        algo_b[i].disabled = true;
    }
    generate.style = 'cursor:not-allowed;box-shadow:none;color: #0a4069;background-color:#a5b9c8;align-self: center;outline: none;border-color:White ;border-style: solid;border-width:1px;border-radius: 0px;transition: 0.5s;'
    size.disabled = true;
    arr_speed.disabled = true;
    generate.disabled = true;
}

function run()
{
    disable_buttons()
    this.style= "background-color: #0a4069;color: #76c900;border-color:#0a4069; box-shadow: 0px 15px 25px -5px #a5b9c8;cursor: not-allowed;"
    //console.log(this.innerHTML)
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();  
            break;
        case "Selection":Selection_sort();
            break;
        case "Insertion":Insertion();
            break;
        case "Merge":Merge();;
            break;
        case "Quick":Quick();
            break;    
        
    }

}

//color variables
var blue = '#3d56ec'
var teal = 'teal'
var green = '#9bde5af2'
var red = '#fe5819'
var purple = '#be9fe6'
