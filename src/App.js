import logo from './logo.svg';
import './App.css';
import Image from './Image';
import DogCard from './DogCard';
import Person from './components/Person';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <>
    <div className="App">
      <DogCard name="bruno" image="https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D" />
      <DogCard name="tiger" image="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg" />
      <Person name="Arun Kumar" age="31" />
      <Button text="Click me" onClick={() => console.log('Button clicked!')} />
      <Header title="Welcome to my website" />
      <List items={['Home', 'About', 'Contact Us']} />
    </div>
    </>
    
  );
}

export default App;
