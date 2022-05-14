import readlineSync from 'readline-sync';

const sayHello = () => {
  const userName = readlineSync.question('May I have your name?: ');
  /* eslint-disable no-console */
  console.log(`Hello, ${userName} !`);
};

export default sayHello;
