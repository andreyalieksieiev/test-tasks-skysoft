let brackets = {
  "[": "]",
  "{": "}",
  "(": ")",
  "<": ">"
}

const correctBrackets = (str) => {
  const vals = Object.keys(brackets).map(key => brackets[key]);
  const keys = Object.keys(brackets);
  
  if (vals.indexOf(str[0]) + 1) {
    return null;
  }
  
  let mass = str.split('');
  let stack = [];
  
  for (let i = 0; i < mass.length; i++) {
    const l = mass[i];
    
    if (keys.indexOf(l) + 1) {
      stack.push(l);
    } else {
      if (stack.length) {
        mass[i] = brackets[stack.shift()];
      } else {
        return null;
      }
    }
  }
  
  if (stack.length) {
    return null;
  }
  
  return mass.join('');
}

console.log('correctBrackets', correctBrackets("{[()}]"));