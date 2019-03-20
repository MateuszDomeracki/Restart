// count interval

var countHello=(a)=>{
    var counter=0;
var interval = setInterval(function(){
    counter++;
console.log("Hello" + counter);

if(counter==a){
    clearInterval(interval);
}
},1000)
}

// zwróć tablice zwiększoną o średnią


var pomTab=(a)=>{
var sum =0;

for(let i=0;i<a.length;i++){
    sum+=a[i];
}
var avg=Math.floor(sum/a.length);

for(let i =0; i<a.length; i++){
    a[i]+=avg;
}

return a;
}

var arr1 = [5,2,3,5,4,5];
console.log(pomTab(arr1));

// pomnóż wszystkie elementy tablicy

var mnoTab = a =>{

var multi =1;
for(let i=0; i<a.length; i++){

    multi*=a[i];
    }
    return multi;
}

console.log(mnoTab(arr1));

// suma parzystych liczb w tablicy

var evnAvg = a=>{
var sum =0;

for(let i = 0; i<a.length; i++){

    if(a[i]%2==0){
        sum+=a[i]
    }

}
    if(sum!=0){
    var avg = Math.floor(sum/a.length);
    return avg;
    }else{
        return null;
    }
}

console.log(evnAvg(arr1));

// zwróć posortowaną tablicę

var sortArray= a =>{

var sorted = a.sort(function(a,b){
    return a-b;
    });

    return sorted;
}

console.log(sortArray(arr1))

// dodawanie elementów tablicy o tym samym indeksie

var arr = [2,3,2,1,4,5];
var arr2 = [4,3,3];

var addArr = (a,b)=>{
var result=[];    

if(a.length>b.length){
    var maxLength = a.length;
}else{
    var maxLength= b.length;
}

for(let i =0; i<maxLength ; i++){
    if(a[i]===undefined){
        result.push(b[i])
      }else if(b[i]===undefined){
        result.push(a[i])
      }else{
         var sum = a[i]+b[i];
         result.push(sum);
      }

    }

    return result;
}

console.log(arr);
console.log(arr2);
console.log(addArr(arr,arr2));


