function loopyLighthouse(range, multiples, words) {

  if(range && multiples && words && range.length === 2 && multiples.length === 2 && words.length === 2) {
    
    let start = range[0];
    let end = range[1];
    let multiple1 = multiples[0];
    let multiple2 = multiples[1];

    while (start <= end) {
      if ( start % multiple1 === 0 && start % multiple2 === 0 ) {
        console.log(words[0]+words[1]);
      }
      else if ( start % multiple1 === 0 ) {
        console.log(words[0]);
      }
      else if ( start % multiple2 === 0 ) {
        console.log(words[1]);
      }
      else {
        console.log(start);
      }
      start++;
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);