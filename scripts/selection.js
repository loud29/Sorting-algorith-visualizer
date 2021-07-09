function Selection_s(li) {
    var len = li.length;     
    for(i=0; i<len ; i++){
        var min = i;
        update_div(divs[i],div_sizes[i],green);
        for(j=i+1; j<len; j++){
            update_div(divs[min],div_sizes[min],blue);
            update_div(divs[j],div_sizes[j],blue);
            if(li[min] > li[j]){
                min = j;
                update_div(divs[min],div_sizes[min],red);
                update_div(divs[j],div_sizes[j],red);
                update_div(divs[i],div_sizes[i],purple);
                update_div(divs[j],div_sizes[j],purple);
            }else{
            update_div(divs[i],div_sizes[i],purple);
            update_div(divs[j],div_sizes[j],purple);
            }
        }
        update_div(divs[i],div_sizes[i],red)
        update_div(divs[min],div_sizes[min],red)
        var temp = li[i];
        li[i] = li[min];
        li[min] = temp;
        update_div(divs[min],div_sizes[min],blue)
        update_div(divs[i],div_sizes[i],teal)
    }
}
function Selection_sort(){
    var info = document.getElementById('info')
    var title = document.getElementById('title')
    title.innerHTML = ' Selection Sort'
    info.innerHTML = "<br>    •	This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the <br>        sorted part is empty and the unsorted part is the entire list.<br><br>    •	The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving<br>        unsorted array boundary by one element to the right. <br><br><h3 style='text-align: left;'>Complexity</h3><br>    •	This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n*n), where n is the number of items. <br><br>    •	The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation. <br><br>    •	Time Complexity: O(n2) as there are two nested loops. <br><br>    •	Auxiliary Space: O(1) <br>"
    change_delay = 0;
    help = div_sizes.slice(0,arr_size);
    div_sizes = help;
    Selection_s(div_sizes);
    console.log(div_sizes)
    enable_buttons();
}
