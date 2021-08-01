import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface Istate {
  note: {
    heading: string
    description: string
    speaker: string
    date?: string
  }[]
}

function App() {

  const [note, setNote] = useState<Istate["note"]>([])

  return (
    <div className="App">
      <h1>Quick Notes</h1>
      <List note={note}/>
      <AddToList note={note} setNote={setNote} />
    </div>
  );
}

export default App;
