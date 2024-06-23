// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.


// myNumber = 42 
// myName = "sam"


// tempName = myName
// tempNum = myNumber
// myName =tempNum
// myNumber = tempName


// console.log(myNumber)
// console.log(myName)

// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

bigNum = 2016

divider = 4

num = 0

array = []

end = 0


while (bigNum > end){

    bigNum = bigNum - 4 
    num = bigNum
    array.push(num)
}
console.log(array)



// division = (x,y) =>{


//     let j = 0
//     if (j < x ){

//         num = x/y
//         console.log(num)
//     }
//     // x - 4 
//     // num =  j - y
//     // console.log(num) 
    
// }

// division(2016,4)


// Print integers from 2000 to 5280, using a WHILE.


x = 2000
end = 5280
myArray = []
while (x < end){

        x = x+1
        num = x 
        myArray.push(num)
}
    console.log(myArray)