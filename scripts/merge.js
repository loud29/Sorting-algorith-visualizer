function Merge()
{   var info = document.getElementById('info')
    var title = document.getElementById('title')
    title.innerHTML = ' Merge Sort'
    info.innerHTML = "<br>    •	Merge sort is a sorting technique based on divide and conquer technique. With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.<br><br>    •	Merge sort first divides the array into equal halves and then combines them in a sorted manner.<br><br>    •	Merge sort keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one element in the list, it is sorted.<br>        Then, merge sort combines the smaller sorted lists keeping the new list sorted too.<br><br>    •	The merge step is the solution to the simple problem of merging two sorted lists(arrays) to build one large sorted list(array).<br><br>    •	The algorithm maintains three pointers, one for each of the two arrays and one for maintaining the current index of the final sorted array.<br><br><h3 style='text-align: left;'> Merge Sort Applications</h3><br>    •	Inversion count problem <br><br>    •	External sorting <br><br>    •	E-commerce applications <br><br><h3 style='text-align: left;'> Complexity</h3><br>    •	Best Case Complexity: O(n*log n) <br><br>    •	Worst Case Complexity: O(n*log n)<br><br>    •	Average Case Complexity: O(n*log n)<br><br>    •	Space Complexity: O(n)<br>"

    change_delay=0;

    merge_partition(0,arr_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            update_div(divs[q-1],div_sizes[q-1],red);//Color update
            update_div(divs[q-1],div_sizes[q-1],blue);
            update_div(divs[q-1],div_sizes[q-1],purple);
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            update_div(divs[p-1],div_sizes[p-1],red);//Color update
            update_div(divs[p-1],div_sizes[p-1],blue);
            update_div(divs[p-1],div_sizes[p-1],purple);
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            update_div(divs[p-1],div_sizes[p-1],red);//Color update
            update_div(divs[p-1],div_sizes[p-1],blue);
            update_div(divs[p-1],div_sizes[p-1],purple);
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            update_div(divs[q-1],div_sizes[q-1],red);//Color update
            update_div(divs[q-1],div_sizes[q-1],blue);
            update_div(divs[q-1],div_sizes[q-1],purple);
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        update_div(divs[start-1],div_sizes[start-1],teal);//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        update_div(divs[mid],div_sizes[mid],green);//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}


// function merge_sort(arr){
//     var len = arr.length;
//     if (len == 1){
//         return
//     } 
//     else{
//         for(i = 0;i<mid;i++){
//             update_div(divs[i],div_sizes[i],'purple');
//         }
//         var mid = Math.floor(len/2);
//         update_div(divs[mid],div_sizes[mid],'green');
//         var left = arr.slice(0,mid);
//         var right = arr.slice(mid,len);
//         merge_sort(left);
//         merge_sort(right); 
//     }
//     i=0;
//     j=0;
//     k=0;
//     var left_len = left.length;
//     var right_len = right.length; 
//     while(i < left_len && j < right_len) {
//         if (left[i] < right[j]){
//             update_div(divs[i],div_sizes[i],'red');
//             arr[k] = left[i];
//             update_div(divs[i],div_sizes[i],'blue');
//             update_div(divs[k],div_sizes[k],'purple');
//             i+=1;
//         }
//         else{
//             update_div(divs[j],div_sizes[j],'red');
//             arr[k] = right[j];
//             update_div(divs[j],div_sizes[j],'blue');
//             update_div(divs[k],div_sizes[k],'purple');
//             j+=1;
//         }
//         k+=1;
//     }
//     while(i<left_len){
//         update_div(divs[j],div_sizes[j],'red');
//         arr[k] = left[i];
//         update_div(divs[i],div_sizes[i],'blue');
//         update_div(divs[k],div_sizes[k],'purple');
//         i+=1;
//         k+=1;
//     }
//     while(j<right_len){
//         update_div(divs[j],div_sizes[j],'red');
//         arr[k] = right[j];
//         update_div(divs[j],div_sizes[j],'blue');
//         update_div(divs[k],div_sizes[k],'purple');
//         j+=1;
//         k+=1;
//     }

// }

// function Merge(){
//     change_delay = 0
//     help = div_sizes.slice(0,arr_size)
//     div_sizes = help;
//     merge_sort(div_sizes);
//     for(i = 0;i<(Math.floor(arr_size) );i++){
//         update_div(divs[i],div_sizes[i],'purple');}
    


//     console.log(div_sizes)
//     enable_buttons();
// }
// /*
// green = yellow
// before swap red = red
// after swap red = blue
// green = purple
// */