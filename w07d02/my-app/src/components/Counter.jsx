import {useState} from 'react';
// let counter = 0;

const Counter = () => {
  // const returnVal = useState(0);
  // const counter = returnVal[0];
  // const setCounter = returnVal[1];

  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = () => {
    // counter += 1;
    // counter = counter + 1
    // console.log(counter);
    console.log('updates!!!');
    if (counter >= 20) {
      alert('enter your credit card info')
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Counter: {counter}</h2>
      {/* <button onClick={() => {}}>Click Me!</button> */}
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
};

// const myFunc = () => {};
// $('btn').on('keypress', myFunc)
// $('btn').click(() => {})
// document.addEventListener('click', () => {})

export default Counter;
