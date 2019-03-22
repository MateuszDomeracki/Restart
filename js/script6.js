document.addEventListener("DOMContentLoaded", function() {
function sortArray() {
         var points = [41, 3, 6, 1, 114, 54, 64];
        points.sort(function(a, b){
              return a-b;
        });
         
        return points;
    }
    

sortArray();


 function callOtherFunction( nameOfFunction ) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1,randomNumber2);
}

callOtherFunction( function(a,b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b)
    console.log("Wynik", a + b)
})

  sayWitaj();
  
  function sayWitaj (){
	  console.log("Witaj");
  }

  sayWitaj();
 
 var sayHello =()=>{
	 
	 console.log("Hello");
 }
 
 sayHello();
 
 
 
 
 var firstH = document.getElementById('home');
 console.log(firstH);
 
 
 var offers = document.querySelectorAll('oferts');
 
 var offer = document.querySelector('oferts');
 
 console.log(offers);
 
 console.log(offer);
 
 

 
 
 
 
 
});
 
 