function Quick()
{   var info = document.getElementById('info')
	var title = document.getElementById('title')
    title.innerHTML = ' Quick Sort<br>'
    info.innerHTML = "<br>    •	Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller<br>        than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.<br><br>    •	Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and <br>        best-case complexity are O(n*log n), respectively.<br><br>    •	Quicksort uses recursion for sorting the sub-parts.<br><br><b> •	On the basis of Divide and conquer approach, quicksort algorithm can be explained as:</b><br><br><b>o	Divide</b><br><br>       The array is divided into subparts taking pivot as the partitioning point. The elements smaller than the pivot are placed to the left of the pivot and the elements greater than the pivot are placed to the right. <br><br><b>o	Conquer</b><br><br>       The left and the right subparts are again partitioned by selecting pivot elements for them. This can be achieved by recursively passing the subparts into the algorithm. <br><br><b>o	Combine</b><br><br>        This step does not play a significant role in quicksort. The array is already sorted at the end of the conquer step.<br><br><h3 style='text-align: left;'>Complexity</h3><br>    •   Worst Case Complexity [Big-O]: O(n2). <br><br>    •	Best Case Complexity [Big-omega]: O(n*log n). It occurs when the pivot element is always the middle element or near to the middle element.<br><br>    •	Average Case Complexity [Big-theta]: O(n*log n). It occurs when the above conditions do not occur. <br><br>    •	Space Complexity: O(log n). <br><br>"    
    change_delay=0;
    quick_sort(0,arr_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;
    update_div(divs[start],div_sizes[start],green);

        for(var j =start + 1; j <= end ; j++ )
        {
            if (div_sizes[ j ] < piv)
            {
                update_div(divs[j],div_sizes[j],green);//Color update

                update_div(divs[i],div_sizes[i],red);//Color update
                update_div(divs[j],div_sizes[j],red);//Color update

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;

                update_div(divs[i],div_sizes[i],red);//Height update
                update_div(divs[j],div_sizes[j],red);//Height update

                update_div(divs[i],div_sizes[i],blue);//Height update
                update_div(divs[j],div_sizes[j],blue);//Height update
                update_div(divs[i],div_sizes[i],purple);
                update_div(divs[j],div_sizes[j],purple);
                i += 1;
            }
    }
    update_div(divs[start],div_sizes[start],red);//Color update
    update_div(divs[i-1],div_sizes[i-1],red);//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    update_div(divs[start],div_sizes[start],red);//Height update
    update_div(divs[i-1],div_sizes[i-1],red);//Height update

    for(var t=start;t<=i;t++)
    {
        update_div(divs[t],div_sizes[t],teal);//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }


// function quick_sort(arr,low,high){
//     if (arr.length == 1) {
//         return;
//     }
//     else if (low < high){
//         var pi = partition(arr,low,high);
//         update_div(divs[pi],div_sizes[pi],'purple');
//         quick_sort(arr,low,pi-1);
//         quick_sort(arr,pi+1,high);
//     } 
// }

// function partition(arr,low,high){
//     var i = low - 1;
//     var pivot = arr[high];
//     // var len_arr = arr.length
//     for(j = low; j < high; j++){
//         update_div(divs[j],div_sizes[j],'green');

//         if (arr[j] <= pivot){
//             i+=1;
//             update_div(divs[i],div_sizes[i],'red');
//             update_div(divs[j],div_sizes[j],'red');
//             [arr[i],arr[j]] = [arr[j],arr[i]];
//             update_div(divs[i],div_sizes[i],'blue');
//             update_div(divs[j],div_sizes[j],'blue');
//          }

//     }
//     update_div(divs[high],div_sizes[high],'red');
//     update_div(divs[j],div_sizes[j],'red');
//     [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
//     update_div(divs[i+1],div_sizes[i+1],'blue');
//     update_div(divs[high],div_sizes[high],'blue');
//     return i+1
// }

// function Quick(){
//     change_delay=0;
//     help = div_sizes.slice(0,arr_size);
//     div_sizes = help;
//     console.log(div_sizes)
//     quick_sort(div_sizes,0,arr_size-1);
//     update_div(divs[0],div_sizes[0],'purple');
//     console.log(div_sizes)
//     enable_buttons();

// }
// /*
// green = yellow
// before swap red = red
// after swap red = blue
// green = purple
// */