// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const name = 'hoge';

interface Human {
  name: string;
  legs: number;
  say: () => void;
};

class People implements Human {

  legs: number;

  constructor(public name: string) {
    this.legs = 2;
  }

  say() {
    console.log('Hello, ' + this.name + '!');
  }
}

new People('Bob').say();