obj = {
    name : `shahed`,
    age : 25,
    message : 'tired of this assignment'

}


function incrementAge(objToIncrement) {
   
    if (obj.age) {
        obj.age++;
    } else {
      obj.age = 0;
    }
    
    updated_at = new Date()
    console.log(updated_at)
    return obj; 
  }

  console.log (incrementAge(obj))
  
  function incrementAgeCopied(objToIncrement) {
   const copiedObject = {...obj}

    if (copiedObject.age) {
        copiedObject.age++;
    } else {
        copiedObject.age = 0;
    }
    updated_at = new Date()
    console.log(updated_at)

    return copiedObject; 
  }

  console.log (incrementAgeCopied(obj))
  // im  tired no more pls 
  