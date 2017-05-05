// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


// 1. divide
//    write a function named "divide" that takes in two parameters and returns their quotient
function divide(x,y) {
	//Write your code below this line
	 return x/y;
	}
// 2. multiply
// write a function named
// "multiply" that takes in two
// parameters and returns
// their product
    function multiply(x,y) {
        return x*y;
        }

// 3. subtract 
//    write a function named
//    "subtract" that takes in two
// parameters and returns
// their difference
    function subtract(x,y) {
        return x-y;
        }

// 4. add
//    write a function named "add" that takes in two parameters and returns their sum
    function add(x,y) {
        return x+y;
        }

// 5. power
//    write a function named "power" that takes in two parameters and returns their result
    function power(x,y) {
        return Math.pow(x,y);
        }

// 6. square_root
//    write a function named "square_root" that takes in one parameter and returns their result
    function square_root(x) {
        return Math.sqrt(x);
        }

// 7. logBase10
//    write a function named "logBase10" that takes in one parameter and returns their result
    function logBase10(x){
        return Math.log10(x);
        }

// 8. generateRandomNumber
//    write a function named "generateRandomNumber" that takes in no parameters and returns a random number
    function generateRandomNumber(){
        return Math.random(Math.round());
        }

// BONUS: write assertions to test whether your functions work!
// Here are some examples for divide(x,y), can you write more for the other functions?
//
// console.assert(divide(1,1) === 1, "1/1 should equal 1");
// console.assert(divide(1,2) === 0.5, "1/2 should equal 0.5");
    console.assert(divide(20,5) === 4, "20/5 should equal 4");
    console.assert(multiply(10,10) === 100, "10*10 should equal 100");
    console.assert(subtract(5,3) === 2, "5 - 3 should equal 2");
    console.assert(add(999,1) === 1000, "999+1 should equal 1000");  
    console.assert(power(2,2) === 4, "2 ^ 2 should equal 4"); 
    console.assert(square_root(4) === 2, " 4  should equal 2");
    console.assert(logBase10(10) === 1, "10 should equal 1"); 

