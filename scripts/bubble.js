function Bubble(){
    var info = document.getElementById('info')
    var title = document.getElementById('title')
    title.innerHTML = ' Bubble Sort<br>'
    info.innerHTML = '<br>    •  Bubble sort is often used to introduce the concept of a sorting algorithm.<br><br>    •  This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.This algorithm is not suitable<br>        for large data sets as its average and worst-case complexity are of Ο(n2) where n is the number of items.<br><br>    •  After every iteration the highest values settles down at the end of the array. Hence, the next iteration need not include already sorted elements. For this purpose, in our implementation, we restrict <br>        the inner loop to avoid already sorted values.<br><br><h3 style="text-align: left;">Complexity</h3><br>    •  Worst and Average Case Time Complexity: O(n2). Worst case occurs when array is reverse sorted.<br><br>    •  Best Case Time Complexity: O(n). Best case occurs when array is already sorted.<br><br>    •  Space Complexity: O(1)<br>'
    change_delay = 0;
    for (var i = 0;i<arr_size-1;i++){
        for (var j = 0;j<arr_size-i-1;j++){
            update_div(divs[j],div_sizes[j],green);
            if (div_sizes[j]>div_sizes[j+1]){
                update_div(divs[j],div_sizes[j],red);
                update_div(divs[j+1],div_sizes[j+1],red);
                [div_sizes[j],div_sizes[j+1]] = [div_sizes[j+1],div_sizes[j]];
                update_div(divs[j],div_sizes[j],blue);
                update_div(divs[j+1],div_sizes[j+1],blue);
            }
            update_div(divs[j],div_sizes[j],purple);
        }
        update_div(divs[j],div_sizes[j],teal);
    }
    update_div(divs[0],div_sizes[0],teal);
    enable_buttons();
    
}

/*
green = yellow
before swap red = red
after swap red = blue
green = purple
*/