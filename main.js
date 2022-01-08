

function delayedHello(text) {
  console.log(text);
}

// delayedHello();
// setTimeout(delayedHello, 5000, 'Hello!');

var intervalId = setInterval(delayedHello, 1000, 'Hello Interval!');
clearInterval(intervalId);


/**
 * Zadanie 1
   Napisz funkcję, która po wywołaniu wyświetli przekazany jako
   argument komunikat po upływie losowego czasu (do kilku sekund).
 */

function delayMessage(text) {
  var timeout = Math.round(Math.random() * 10) * 1000;

  setTimeout(function() {
    console.log(text, '(', timeout, ')');
  }, timeout);
}
