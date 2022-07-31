/*Create an object, then write a JavaScript function that checks 
whether an object contains the specified key. */

let spaceship = {
    
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } 
    
    }  
};

// Write a function with 2 parameters 
function verifyInfo(obj, item) {
    if(obj.hasOwnProperty(item)) {
        return ("item is available.")
    } else {
        return ("Item is not available")
    }
}

console.log(verifyInfo(spaceship, "captain"));