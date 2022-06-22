import React, { Component } from 'react';
import { Record } from './type'
import Wrapper from './components/Wrapper'

const records: Record[] = [
  { id: 1, name: 'Alice', gender: 'female', age: 24, introduction: 'developer' },
  { id: 2, name: 'Bob', gender: 'male', age: 25, introduction: 'tercher' },
  { id: 3, name: 'Lily', gender: 'female', age: 23, introduction: 'developer' },
  { id: 4, name: 'Jack', gender: 'male', age: 26, introduction: 'designer' },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {records.map(record => <Wrapper key={record.id} {...record} />)}
      </div>
    )
  }
}

export default App;
