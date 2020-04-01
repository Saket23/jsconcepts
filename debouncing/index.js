//Debouncing in Javascript

let counter = 0;
function getData(data) {
  //calls an api and get data
  console.log("fetching data", data, counter++);
}

function debounce(fn, d) {
  let timer;
  return function() {
    const context = this;
    const keyUpArgument = arguments[0].value;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.call(context, keyUpArgument);
    }, d);
  };
}

const betterFunction = debounce(getData, 300);

//Understanding why to use context run the code and correct it
//Ref: https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e
/*

function debounce(fn, d) {
  let timer;
  return function() {
    const context = this;
    const keyUpArgument = arguments[0];
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn(keyUpArgument);
    }, d);
  };
}

function sayHello(arg) {
    console.log('My name is', this.name)
  }
  
  const amy = {
    name: 'amy',
    speak: debounce(sayHello, 200),
  }
  
  amy.speak("Good morning")
  */
