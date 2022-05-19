function sortInSuffle(arr){
    const n = arr.length;

    for(let i=0;i<n;i+=2){
        if(i>0 && arr[i-1]>arr[i]){
            swap(arr,i-1,i);
        }
        if(i<n-1 && arr[i]< arr[i+1]){
            swap(arr,i,i+1);
        }
    }
    return arr;
}
function swap(arr,x,y){
    let temp = arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

const array = [2, 1, 5, 3, 11, 7];
const result = sortInSuffle(array);
console.log(result);