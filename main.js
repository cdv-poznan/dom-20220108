

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

// inner text
var lorem = document.getElementById('p1');
lorem.innerText = 'Nowa wartość tekstowa';

p1.style.backgroundColor = '#f0f';

/**
 * Zadanie 4
Napisz funkcję ustawiającą przekazany jako argument tekst dla wskazanego elementu drzewa DOM.
*/

function setElementText(text) {
  var element = document.getElementById('p1');
  element.innerText = text;
}

setElementText('Hello element');


// STATYCZNA lista elementów: NodeList
var nodeList = document.querySelectorAll('.section-heading');

// DYNAMICZNA kolekcja elementów: HTMLCollection
var links = document.getElementsByTagName('a');

document.getElementById('scroll-container').scrollHeight

document.getElementById('scroll-container').scrollTop


/**
 * Zadanie 5
Napisz funkcję, która dla przekazanego w argumencie elementu
zwróci liczność wszystkich elementów w jego poddrzewie wraz z nim samym.
*/

function countElements(element) {
  var count = 1;

  for (var i = 0; i < element.children.length; i++) {
    count += countElements(element.children[i]);
  }

  return count;
}

var element1 = document.createElement('div');
element1.id = 'element1';
element1.classList.add('box');
element1.innerText = 'Dynamicznie stworzony element1'

var element2 = document.createElement('span');
element2.id = 'span1';
element2.innerText = 'zawartość elementu span';

/**
 * Zadanie 6
Napisz skrypt który wygeneruje tabelę table posiadającą
100 wierszy po 10 kolumn wypełnionych kolejnymi liczbami naturalnymi.
*/

function generateTable() {
  var table = document.createElement('table');
  var counter = 0;

  for (var i = 0; i < 100; i++) {
    var tr = document.createElement('tr');

    for (var j = 0; j < 10; j++) {
      var td = document.createElement('td');
      td.innerText = counter++;
      tr.append(td);
    }

    table.append(tr);
  }

  var container = document.getElementById('table-container');
  container.append(table);
}

generateTable();

var span3 = document.createElement('span');
span3.id = 'span3';
span3.innerText = 'span 3 content'
span3.style.backgroundColor = '#ff0';

document.getElementById('parent1').append(span3) // dodanie spana do parent1
document.getElementById('parent2').append(span3) // dodanie spana do parent2 (+ usunięcie z parent1)

// var span4 = span3.cloneNode(); // klon elementu span3 bez zawartości
var span4 = span3.cloneNode(true); // klon elementu span3 z zawartością

document.getElementById('parent1').append(span4) // dodanie spana do parent1

span3.remove(); // kasowanie elementu z drzewa

// Wydarzenia

/*
document.addEventListener('DOMContentLoaded', function(event) {
  console.log(event);
});

window.addEventListener('load', function(event) {
  console.log(event);
});
*/

var clickListener = function(event) {
  console.log('click', event);
}

// document.addEventListener('click', clickListener);

var parent2 = document.getElementById('parent2');
parent2.addEventListener('click', function(event) {
  console.log(event.type);
  console.log(event.target);
  console.log(event.currentTarget);
});

var button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  console.log('button has been clicked!');
});

var link1 = document.getElementById('child-link');
link1.addEventListener('click', function(event) {
  event.preventDefault();
});

/* Zadanie 7
Napisz skrypt pozwalający na oznaczenie przerywaną ramką klikniętego elementu na dwie sekundy.
*/

/*
document.addEventListener('click', function(event) {
  var target = event.target;
  target.style.border = '1px dotted';

  setTimeout(function(){
    target.style.border = 'none';
  }, 2000);
});
*/

document.getElementById('button2').addEventListener('mousemove', function(event) {
  console.log(event.type, event.clientX, event.clientY);
});


/*
 * Zadanie 8
Napisz skrypt pozwalający na zaznaczenie danego elementu w drzewie DOM
podwójnymkliknięciem myszki a następnie na przeniesienie go w
miejsce wystąpienia kolejnego pojedynczego kliknięcia.
*/

var movable = document.getElementById('movable');

movable.addEventListener('dblclick', function(event) {
  event.target.style.border = '2px dotted #110';

  document.addEventListener('click', function(secondEvent) {
    event.target.style.position = 'fixed';
    event.target.style.border = 'none';
    event.target.style.top = secondEvent.clientY + 'px';
    event.target.style.left = secondEvent.clientX + 'px';
  }, { once: true });

});

var tableContainer = document.getElementById('table-container');

tableContainer.addEventListener('scroll', function(event) {
  console.log('table scroll', event.target.scrollTop);
});

var buttons = document.getElementsByClassName('button-test');

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];

  button.addEventListener('click', function(event) {
    event.target.innerText = 'clicked';
    console.log(event.target.id);
  });

}


// document.addEventListener('scroll', function(event) {
//   console.log('document scroll', event.target.scrollTop);
// });

/*
 * Zadanie 9
  Napisz skrypt pozwalający na wyświetlenie obok scrollowanego elementu wskaźnik postępu przewijania w procentach.
*/

var scroller = document.getElementById('table-container');
var progress = document.getElementById('progress');

scroller.addEventListener('scroll', function(event) {
  var percent = Math.round((event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight)) * 100);

  progress.innerText = percent + ' %';

});
