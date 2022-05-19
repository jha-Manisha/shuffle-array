function swap(arr,x,y){
    let temp = arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

function sortInWaveForm(arr){
    const n = arr.length

    for(let i=0;i<n;i+=2){

        // if current even is smaller than prev odd
        if(i>0 && arr[i-1]>arr[i]){
            swap(arr,i-1,i)
        }

        // if current even is smaller than next odd
        if(i<n-1 && arr[i]< arr[i+1]){
            swap(arr,i,i+1)
        }
    }
    return arr;
}

const questionArr = [10,90,2,1,5,23];
const answerArr = sortInWaveForm(questionArr)
console.log(answerArr)