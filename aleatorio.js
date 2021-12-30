
var  ale = Math.random() * (60 - 1) + 1
//console.log(ale);

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for(i = 0; i<2 ; i++){
        console.log(i+1 + "° Numero sorteado: " + sorteia(1,60));
  }
