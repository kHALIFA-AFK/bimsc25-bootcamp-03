console.log('hello')

const myConstVar = 5


let foo = 93
console.log(foo)

foo = "my string"
console.log(foo)

let foodArray = ["pizza", "pasta", "salad"]
console.log(foodArray)

let foodItem = foodArray[1]
console.log("foodItem:" , foodItem)

let objectVariable = {
    key: 'value',
    foods: foodArray
}
console.log(objectVariable)

let foods = objectVariable['foods']
console.log('foods:', foods)