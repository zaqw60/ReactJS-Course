import { Message } from './Message';
import './App.css';

const myMessage = 'Hello World!';

export function App() {
  return (
    <div className="App">
       <header className="App-header">  
        Message
      </header>
      <Message message = {myMessage}/>
    </div>
  );

}