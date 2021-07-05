const finalPosition = function(moves) {
    const final = [];
    let x = 0; let y = 0;
    for (const move of moves) {
      switch(move) {
        case "north":
          y++;
          break;
        case "south":
          y--;
          break;
        case "east":
          x++;
          break;
        case "west":
          x--;
          break;
      }
    }
    final.push(x);
    final.push(y);
    return final;
};

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));