

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

/**
 * Zadanie 2
   Napisz skrypt, który co kilka sekund ustawi losową wartość jako tytuł strony.
 */

function setRandomTitle() {
  setInterval(function() {
    var title = Math.random().toString(36);
    document.title = title;
  }, 1000);
}


function newWindow() {

  var newWindowObject = window.open('/child.html', 'nazwaOkna1', 'status,width=300,height=300');
  console.log(newWindowObject);

}

/*
 * Zadanie 3
  Napisz funkcję, która otwiera nowe okno przeglądarki
  i wyświetla w nim przekazany w argumencie tekst.
*/

function openWindowWithText(text) {
  var win = window.open('/child.html', 'child', 'status,width=300,height=300');
  win.document.write('<h1>' + text + '</h1>');
  win.document.close();
}

var p1 = document.getElementById('p1'); // 1 element o podanym id

var headings = document.getElementsByClassName('section-heading'); // kolekcja elementów z daną klasą

var passwords = document.getElementsByName('password'); // lista elementów o podanej nazwie

var links = document.getElementsByTagName('a'); // kolekcja elementów z tagiem <a>

var firstHeading = document.querySelector('.section-heading'); // pierwszy element z klasą section-heading

var queriedHeadings = document.querySelectorAll('.section-heading'); // lista elementów z klasą section-heading
