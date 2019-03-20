// Funkcja licząca koszt pobytu w zależności od ilości dni


var rentCostDays = a =>{
	
	var variant;
	
	if(a == 1){
		variant = 200;
	}else if(a <3 && a>1){
		variant = 180;
	}else if(a >2 && a<8){
		variant =160;
	}else{
		variant = 150;
	}
		return a* variant;
}



// papier/kamień/nożyce

var rock = (a,b)=>{
		
	
	switch(a,b){
		
	case "papier","kamień":
	case "nożyce","papier":
	case "kamień","nożyce" :	
		console.log( "Uzytkownik 1 wygral");
		break;
		
	case "kamień","papier":
	case "papier","nożyce" :
	case "nożyce", "kamień" :
		console.log( "Uzytkownik 2 wygral");
		break;	
		
	default:	
		"Podaj poprawną wartość"	
		}
		
}


//rock (prompt("uzytkownik1"), prompt("Użytkownik 2"));

// Calculate tip amount


var calculateTipAmount = (amount,rating) =>{
	
	

	var rate = ["Bardzo dobra obsługa","Dobra obsługa", "Średnia o obsługa", "Zła obsługa"]
	var tip ;
	
	
	if(rate.indexOf(rating)=== -1){
		console.log("Podaj poprawny opis")
	}
	
	if(rating=="Bardzo dobra obsługa"){
		tip = amount * 0.25;
		return  tip
	}else if(rating == "Dobra obsługa"){
		tip = amount * 0.20;
		return tip;
	}else if(rating == "Średnia obsługa"){
		tip = amount * 0.10;
		return tip;
	}else{
		tip= 0;
		return tip;
	}
		
}

/*

var calculateTipAmount = (amount,rating) =>{
	
	var tip=0;
	
	
	switch (rating) {
		
	case "Bardzo dobra obsługa":
		tip = amount * 0.25;
		return tip;
		break;
	
	case "Dobra obsługa" :
		tip = amount * 0.20;
		return tip;
		break;
		
	case "Średnia obsługa" :
		tip = amount * 0.10;
		return tip;
		break;
	case "Średnia obsługa" :
		tip =0;
		return tip;	
		break;
		
	default:
		"Podaj poprawną wartość"
	}
	
	
}

*/

// Parzyste.nieparzyste

var zmienna = 5;

for(let i=0; i<=zmienna; i++){
	if( i%2==0){
		console.log(i + "parzysta");
	}else{
		console.log(i + "nieparzysta");
	}
}

//Suma z przedziału 

var zmienna2= 10;
var result=0;
for(let i=zmienna; i<=zmienna2;i++){
	
	result+=i;
	
}
console.log(result);

//zadanie 3


/*for(let i=0; i<zmienna; i++){
	var stars;
	for(let j=0; j<zmienna; j++){
		
		if((j-i)%2==0){
			stars+=" ";
		}else if(j==zmienna-1){
			stars+= "\n";
		}else{
			stars+="*";
		}
				
	}
}
console.log(stars);

*/

//

var tab1= [];

for(let i =0; i<10;i++ ){
	
	tab1.push(Math.floor(Math.random()*(10-1)+1));	
	
}
console.log(tab1);

//Znajdź powtórzenia w tablicy

for(let i=0; i<tab1.length; i++){
	for( let j=i+1; j<tab1.length;j++){
		if(tab1[i]==tab1[j]){
		console.log(tab1[i] + "Powtórzenie");
		}				
	}
}

// Oblicz długość poszczególnych wyrazów ze zdania
var ex = "It's perfect day";

var exDivided = ex.split(" ");
console.log(exDivided);

for(let i = 0; i<exDivided.length; i++){
	
	console.log(exDivided[i].length);	
	
}


//Oblicz średnią z tablicy

var randTab = [2,3,4,5,6];
var sum=0;

for(let i=0; i<randTab.length;i++){
	
	sum+=randTab[i];
	
}

var average = sum/randTab.length;

console.log(average);



// Randomowa tablica + zamiana nieparzystych elementów na parzyste

var randomTab=[]
var element
for( let i=0; i<60; i++){
	
	element = Math.floor(Math.random()*(60-1)+1);
	randomTab.push(element);
}


for(let i= 0; i<randomTab.length; i++){
	if(randomTab[i]%2!=0){
	randomTab[i] ++;
	}
}
console.log(randomTab)


// Porównywanie dwóch tablic

var arr1 = [23,27,25,26];
var arr2 = [25,27,23,12];


for(let i=0;i<arr1.length;i++){
	
	for(let j=0; j<arr2.length; j++){
		
		if(arr1[i]==arr2[j]){
			console.log(arr1[i]);
		}
		
	}
	
}

// Tekst w zależności od podzielności

var foobar = x =>{
	
	var text =""; 
	for(let i =1; i<=x; i++){
		
		if(i%3==0 && i%5==0){
			text+="FooBar";
		}else if(i%5==0){
			
			text+= "Bar"
			
		}else if(i%3==0 ){
			text+= "Foo"
		}else{
			text+= i;
		}
		
		
	}
	console.log(text);
	
}


foobar(20);


// Funkcja power

var power = (int1, int2)=>{
	
	var result = int1;
	for(let i=1;i<int2;i++){
		
		result*=int1;		
		}	
	 return result;
}

// Funkcja mix


var mix = a =>{
	
	return ("zmiksowane " + a);
	
}

var veg = "szparagi"
mix(veg);

//

// Funkcja n razy console.log

var nth = n =>{
	
	for(let i=0; i<n; i++){
		console.log("I'm n");
	}
	
}

// Funkcja zwróć największą

var theBiggest = (a,b,c)=>{
	
	if(a>b && a>c){
		return a;
	}else if(b>a && b>c){
		return b;
	}else{
		return c;
	}
	
}

// Funkcja sumArr

var sumArr = a =>{
	
	var sum =0;
	for(let i=0; i<a.length; i++){
		
		sum+=a[i];
		
	}
	return sum;
	
}













	
