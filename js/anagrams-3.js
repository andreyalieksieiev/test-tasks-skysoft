const annagram = (a, b) => [...a.toLowerCase()].sort().join('') === [...b.toLowerCase()].sort().join('');

console.log('annagram: ', annagram('сало', 'осла'));