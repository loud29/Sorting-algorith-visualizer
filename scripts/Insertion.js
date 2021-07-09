function Insertion(){
    var info = document.getElementById('info')
    var title = document.getElementById('title')
    title.innerHTML = ' Insertion Sort'
    info.innerHTML = "<br><br>    •   Insertion sort works similarly as we sort cards in our hand in a card game.<br><br>    •	We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left.<br>        In the same way, other unsorted cards are taken and put at their right place.<br><br>    •	A similar approach is used by insertion sort.<br><br>    •	Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.<br><br>    •	This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted.<br>        An element which is to be 'insert'ed in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort.<br><br>    •	The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as<br>        its average and worst-case complexity are of Ο(n2), where n is the number of items.    <br><br><h3 style='text-align: left;'>Complexity</h3><br>    •	Worst Case Complexity: O(n*n)<br><br>    •	Average Case Complexity: O(n*n)<br><br>    •	Best Case Complexity: O(n) <br><br>    •	Space Complexity: O(1) <br>"
    change_delay = 0;
    for(i = 0; i < arr_size; i++){
        var j = i-1;
        var key = div_sizes[i];
        update_div(divs[i],div_sizes[i],green);
        while (j>=0 && key < div_sizes[j]){
            update_div(divs[j],div_sizes[j],red);
            update_div(divs[j+1],div_sizes[j+1],red);
            div_sizes[j+1] = div_sizes[j];
            update_div(divs[j],div_sizes[j],blue);
            update_div(divs[j+1],div_sizes[j+1],blue);
            j-=1;
            if(j==(i-1))
            {
               update_div(divs[j+1],div_sizes[j+1],green);
            }
            else
            {
                update_div(divs[j+1],div_sizes[j+1],purple);
            }

        }
        div_sizes[j+1] = key;
        for(k = 0;k < i;k++){
        update_div(divs[k],div_sizes[k],teal);   
        }
    }
    update_div(divs[i+1],div_sizes[i+1],teal);   
    update_div(divs[arr_size-1],div_sizes[arr_size-1],teal);
    console.log(div_sizes)
    enable_buttons();
}


/*
green = yellow
before swap red = red
after swap red = blue
green = purple
*/