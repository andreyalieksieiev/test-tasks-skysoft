const vowels = () => { 
  const vowels_list = ['a', 'e', 'i', 'o', 'u'];
  let total = 0;
  let chars = [];
  let current;
     
  const file = document.getElementById('tester').value;

  for (let i = 0; i < file.length; i += 1) {
    for (let v = 0; v < 5; v += 1) {
      if (file[i] == vowels_list[v]) {
        chars.push(file[i]); 
        total += 1;
      }
      let result = {};
      chars.forEach((el) => {
        result[el] = result[el] + 1 || 1;
      });
      current = result;
    }
  }

  Object.keys(current).forEach((key) => {
    console.log(key, ':', current[key]);
  }, current);
  console.log('total: ', total);
} 
