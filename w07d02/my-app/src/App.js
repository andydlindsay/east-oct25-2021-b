import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';

const App = () => {
  const username = 'Alice';

  const myArr = [
    <h4 key="abc">Element Zero</h4>,
    <p key="def">Element One</p>
  ];

  return (
    <div className="App">
      <Header className="header" username={username} />
      {/* Header({ username: 'Alice' }) */}
      {/* <Header username="Bob"/>
      <Header username="Carol"/>
      <Header>
        <h2 className="hello">Whatever this is</h2>
        <p>We are the children!</p>
      </Header> */}
      <h2>Welcome to my site!</h2>

      { myArr }

      <Counter />
    </div>
  );
};

export default App;
