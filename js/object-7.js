const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
        return true;
    } else {
        if (Object.keys(obj1).length != Object.keys(obj2).length) { 
            return false;
        }
        for (var propName in obj1) {
            if (!obj2.hasOwnProperty(propName)) { 
                return false;
            }
            if (obj1[propName].valueOf() !== obj2[propName].valueOf()) {  
                if(!deepEqual(obj1[propName], obj2[propName])) { 
                    return false;
                }
            }
        }
    } 
    return true; 
}
console.log('deepEqualy', deepEqual( {a: 1, b: 2} ,{b: 2, a: 1}) );