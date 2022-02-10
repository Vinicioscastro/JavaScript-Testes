function impaoupar(numero) {
  if (numero % 2 == 0) {
    console.log(`O numero ${numero} e par:`);
  } else {
    console.log(`O numero ${numero} e impa:`);
  }
}

function intervalo(x, y) {
  for (x; x <= y; x++) {
    console.log(`Numero: ${x}`);
  }
}

impaoupar(5);
intervalo(4, 11);
