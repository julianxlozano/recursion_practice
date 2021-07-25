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

