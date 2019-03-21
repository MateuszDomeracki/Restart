

//Kalkulator

function Calculator(){
	this.operations =[];
	this.counter=0;
	
	this.addNum = function (num1,num2){
		
		var result = num1+num2;
		this.operations[this.counter]= "Dodano do siebie " + num1 +" i " + num2 + " ,otrzymano wynik "+ result; 
		this.counter++;
		return result;
	},
	
	this.multiple = function(num1,num2){
		var result = num1*num2;
		this.operations[this.counter]= "Pomnozono " + num1 +" i " + num2 + " ,otrzymano wynik "+ result; 
		this.counter++;
		return result;
	},
	
	this.substract = function(num1,num2){
		var result = num1-num2;
		this.operations[this.counter]= "Od " + num1 +" odjeto " + num2 + " ,otrzymano wynik "+ result;
		this.counter++;
		return result;
		
	},
	this.divide = function(num1,num2){
		var result = num1/num2;
		this.operations[this.counter]= "Podzielono " + num1 +" przez " + num2 + " ,otrzymano wynik "+ result;
		this.counter++;
		return result;
		
	},
	
	this.showOperations = function (){
		
		return this.operations;
	},
	
	this.clearMemory = function(){
		this.operations=[];
		
	}
}

var calc = new Calculator();


// Koszyk zakupów

function Basket(){
	
	this.products = [];
	this.price=0;
	
	this.addProducts = function(product,price){
		this.products+=product;
		this.price+=price;
	}
	this.showBasket = function(){
		console.log(this.products, this.price );
	}
}

var bil	 = new Basket();
bil.addProducts("kiwi",60);	


var ben = new Basket();
ben.addProducts("banana",20);
ben.addProducts(", rice", 10);
ben.addProducts(", grzyby mun",50);
ben.addProducts(", tofu",20);


var tab = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];



var checArray= arr =>{

for(let i =0; i<arr.length;i++){
	for(let j=0; j<arr[i].length; j++){
		if(arr[i][j] %2 != 0){
			
			arr[i][j]= false;
		}else{
			arr[i][j] = true;
		}
		
	}
	
}

return arr;
};

for(let i =0; i<tab.length;i++){
	if(i==0){
		console.log(tab[i])
	}else if (i==1){
		console.log(tab[i].length)
	}
}

var printArray= tab =>{
	
	
for(let i=0;i<tab.length;i++){
	for(let j =0; j<tab[i].length;j++){
		console.log(tab[i][j]);
	}
}
	
	
}

// stwórz funkcję tworzącą tablicę o podanej ilości wierszy/kolumn

var createArray = (row,col) =>{
	var newArr=[];
	var cont=0;
	for(let i=0; i<row; i++){
			newArr[i]=[];
		for(let j =0; j<col; j++){
			cont++;
			newArr[i][j] = cont;
		}
	}
	return newArr;
}
	
	// obiekty podstawy
var country ={
	
	capital: "Warsaw" ,
	population: 89,
	president: "Kaczafi",
	primeMInisters: ["Minister 1","Minister 2", "Minister 3"]
	
};

console.log(country.capital);
console.log(country.population);
console.log(country.president);
console.log(country.primeMInisters);


var timeMachine ={
	
	shape: "Oval",
	model: "Extra",
	run: (date,place)=>{
		
		console.log("Przeniosles sie do " + place + "w rok " + date);
		
		
	}
	
}

var books = {
	title:"Powrót",
	author: "John",
	pages: 192,
	
	getInfo:() =>{
		
		console.log(books.title);
		console.log(books.author);
		console.log(books.pages);
	}	
};



for (let key in books) {
    console.log("Klucz: ", key);
    console.log("Wartosc: ", books[key]);
}

for(let key in country){
	
	console.log("Klucz: "+ key);
	console.log("Wartosc: "+ country[key])
;	
}

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon);

var car= {
	brand: "Audi",
	color: "grey",
	km: 0,	
	
	printInfo :  function(){
		
		for (var key in car){
			console.log(key , car[key]);
		}		
	},
	addKM : function(x){
		
		this.km += x;
	},
	
	addTo : function(x){
	
	var newElement = this.check.length ;
	
	this.check[newElement] = x;
	
}
	
}

car.check = ["Przeglad 1","Przeglad 2", "Przeglad 3", "Przeglad 4" ];


var stairs = {
	step:0,
	
	up: function(){
		this.step++
	},
	down: function(){
		this.step--
	},
	state: function(){
		
		console.log(this.step);
	}	
	
}








