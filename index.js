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

