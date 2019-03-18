// ćwiczenia podstawy 2

var n = 5; 
var stars="";

for(let i =0; i<n; i++){
stars = "";
if(i==0 || i==n-1){
	for(let j = 0; j<n; j++){
	
	stars+="*"
	}
	}else{
	
	for(let j = 0; j<n; j++){
	if(j==0 || j==n-1){
		stars+="*"
	}else{
		
		stars+=" "
	}
		
	}
		
};
console.log(stars);
stars = "";
};


for(let i =0; i<n ; i++){
	stars+="*";
	console.log(stars);
}

var arr =[];

var numb =[5,4,2,8];

for(let i=0; i<4; i++){
arr.push(numb);

}

console.log(arr);

console.log(arr[2][2]);


/*for(let i=0; i<arr.length; i++){
	for(let j =0; j<arr.length ; j++){
	console.log(arr[i][j]);
	}
};
*/


var n = 4;
for(let i = 1; i<n+1; i++){
	for(let j=1; j<n+1; j++){
		
		var result = i * j;
		console.log( i + " * " + j + " = " + result);
	
	}
	
	
}


var arr2 = ["bmw", "audi", "merc"];

console.log(arr2[0]);
console.log(arr2[arr2.length-1]);
for(let i = 0 ; i<arr2.length; i++){
	console.log(arr2[i]);
	
}


var arr3 = [1,2,3,4,5,6,7,8,9,10]; 
var sum=0;

for(let i = 0; i<arr3.length; i++){
	
	sum+=arr3[i];
}
console.log(sum);

for (let i = 0; i<arr3.length; i ++ ){
	
	if(arr3[i]% 2 == 0){
		console.log(arr3[i]+ " Element tablicy parzysty");
	}
	
}




/*var random4 = [5,8,3,3,8,8,6,76,2,9];

var firstIndex= 0;

for (var i = 0 ; i<random4.length ; i++){

    firstIndex=random4[i];

    for(var j=i+1 ; j<random4.length; j++){

         if(firstIndex===random4[j]){

             break;

         }

    }

}

console.log("First index is:" + firstIndex); */

var numbers= [4,3,2,4,5,2,5,2]

for(let i = numbers.length; i>=0; i-- ){
	
	console.log(numbers[i]);
	
}

var number = 345;
var result = number/2;
console.log(result);
console.log(Math.floor(result));
console.log(Math.ceil(result));

var random = Math.random()*(10-1)+1;

console.log(Math.floor(random));

var widthBox ="23px";
var widthPanel="3px";
var widthResult= widthBox+widthPanel;

console.log(widthResult);

if(random >5){
	console.log("Random wieksza od 5");
}else{
	console.log("Random mniejszy od 5");
}

/*var get = prompt("ile masz lat?");

if(get<18){
console.log("Masz mniej niż 18")	
}else{
	console.log("Masz więcej niż 18");
}*/

var numb1 = 4;

var numb2 = 5;

if(numb1>numb2){
	console.log(numb1);
}else{
	console.log(numb2);
}


/*var rand1 = Math.floor(Math.random()*(10-1)+1);
var userChoice= prompt("Wpisz liczbę od 1 do 10");

if(rand1==userChoice){
	console.log("Wygrałeś")
}else{
	console.log(" Spróbuj jeszcze raz");
}

var liczba = prompt("Podaj liczbę");
var powered=1;
for(let i=1; i<=liczba; i++){
	
	powered = powered*i;
	
}
console.log(powered);
*/




