// Code your solution here!

function printString(string){
    if(string.length === 1){
        console.log(string[0])
    }else{
        console.log(string[0])
        let new_string = string.substring(1)
        printString(new_string)
    }
}

function reverseString(str) { 
     if (str.length === 0){
     return ''}else{
       return str[str.length - 1] + reverseString(str.substr(0, str.length - 1))
     }
    }

function isPalindrome(str){
        if (str.length === 1){
            return true
        }else{
            return str[str.length - 1] === str[0] ? isPalindrome(str.substring(1,str.length -1)) : false
            }
}
 
function includesNumber(array,numToFind){
    if (array.length === 0){
        return false
    }else{
        if (array[0] === numToFind){
            return true 
        }else{ 
            array.shift()
          return includesNumber(array,numToFind)
        }
    }
}

function addUpTo(array,index){
    if(index === 0){
        return array[index]
    }else{
        return array[index] + addUpTo(array, index-1)
    }
}

/*function addUpTo(array,index){
    if (array.length -1  === index ){
        return array.reduce((a, b) => a + b, 0)
    }else{
        return addUpTo(array.splice(0,index + 1),index)
    }
}*/
 
function maxOf(array){
    if (array.length === 1){
        return array[0]
    }else{
        if (array[0] > array[1]){
            array.splice(1,1)
            return maxOf(array)
        }else{ 
            array.shift()
            return maxOf(array)
        }
    }
   
}

