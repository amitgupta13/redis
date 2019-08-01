class Greeting {
  english() {
    return "hello";
  }

  spanish() {
    return "hola";
  }
}

class moreGreeting {
  german() {
    return "hallo";
  }

  french() {
    return "bonjour";
  }
}

const greetings = new Greeting();
const moreGreetings = new moreGreeting();

const allGreetings = new Proxy(moreGreetings, {
  get: function(target, property) {
    return target[property] || greetings[property];
  }
});

// console.log(greetings.english());
console.log(allGreetings.english());
