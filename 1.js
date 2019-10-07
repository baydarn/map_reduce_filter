
var arr =[5,6,8,20,3,63];
var arr2= arr.map(x => x*2);
console.log(arr2);

var arr3 = arr.filter(function (element){
  return element > 5;
})
console.log(arr3);


var arr = [2,5,8,40];
var arr2 = arr.reduce(function(result,value){
  return result + value ;
})
console.log(arr2)

const items = ["list", "of", "words"];
const wordLengths = items.reduce(function(result,element){
  result[element] = element.length;
  return result;
},{});
console.log(wordLengths);


//REDUCE FUNCION(ECMAScript 5.1 ile gelmiş ve diziler üzerinde işlem yapmayı sağlıyor)
///EXAMPLE1:
const sum = [0,2,3,4,5].reduce( (prev, curr) => prev + curr) 
console.log(sum);
///OUTPUT:14

///<----------REDUCE() with FUNCTIONS-------->

const plus3 = x => x + 3


const double = x => x * 2


const minus5 = x => x - 5


const result = [plus3, double, minus5].reduce( (value, nextFunction) => nextFunction(value), 0 )

console.log(result);
/*
OUTPUT:We start at 0 and call plus3 => 0 + 3 = 3

We then call double with that value => 3 * 2 = 6

Finally we call minus5 => 6 - 5 = 1
*/

//<------------Creating map() from reduce()------------------>

const double = [1, 2, 3, 4].map( x => x *2 )
console.log(double);
//OUTPUT: [2 4 6 8]
////We can re-create this functionality with reduce:///////

const double = item => item * 2


const map = ( mappingFunction, array ) => array.reduce( (acc, item ) => {
 
   return acc.concat( mappingFunction( item ) )

}, [])


const doubleWithReduce = map( double, [2, 4, 6] )


console.log( doubleWithReduce )
//OUTPUT: [4 8 12]

//<----------WRITE MAP USING REDUCE---------->
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
); 
//OUTPUT:[5, 7, empty, 10]
//<------------MAP FUNCTION--------->
var array1 = [1, 4, 9, 16];

// pass a function to map

const map1 = array1.map(x => x * 2);


console.log(map1);

// expected output: Array [2, 8, 18, 32]



//<-----------MAP FUNCTION------------>(Converting a String to an Array)
 const name = "Chuloo"
const map = Array.prototype.map

const newName = map.call(name, eachLetter => {
    return `${eachLetter}a`
})

console.log(newName) // ["Ca", "ha", "ua", "la", "oa", "oa"]
