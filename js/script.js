
// Powtórka podstawy

console.log('Hello world');

console.log(typeof(4));

var number  = 3;
var number2 = 5;
var number3 = 2;
var strint = "5";
var name = "Mat";
var surName="Domeracki";
var mix = number +name;
var bool= true;
var bool2= false;
var special = null;
var und ;
var resultModulo = number%number2;
var joinedStrings="";
joinedStrings = name+surName;
var result = number+number2;
var counter=145;

console.log(number,name,mix,bool,special);
console.log(result);
console.log(und);
console.log(bool=bool2);
console.log(resultModulo);
console.log(joinedStrings);
console.log(typeof(joinedStrings));
console.log(strint==number2);
console.log(strint===number2);
console.log(counter--);
console.log(counter++);

if(number>number2){
    console.log(number);
}else{
    console.log(number2);
}

if(number>number2&& number>number3){
    console.log(number);
}else if(number2>number && number2>number3){
    console.log(number2);
}else{
    console.log(number3);
}

for(var i = 0 ; i<19; i++){
    console.log("I like sushi");
}

var result1 = 0;
var plus=1;

for(var i =0; i<10; i ++){
   
    result1+=plus;
    plus++;
}

console.log(result1);

var n =5;


for(var i=1; i<=n; i++){

    if(i%2==0){
    console.log( i + " parzysta");
}else{
    console.log( i + " nieparzysta");
}
}

var lineStar="";

for(var i =0; i<n ; i++){
lineStar="";
    for(var j=0;j<n;j++){

        lineStar= lineStar + "*";
    }

    console.log(lineStar);
    lineStar="";
}

for(var i=0; i<n;i++){

    lineStar=lineStar+"*";
    console.log(lineStar);

}
























