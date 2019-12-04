const threeFive = (begin, end) => {
  for (let i = begin; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('threefive');
    } else if(i % 5 === 0){
      console.log('five');
    } else if(i % 3 === 0){
      console.log('three');
    } else {
      console.log(i);
    }
  }
};

threeFive(1, 17);