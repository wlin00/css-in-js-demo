import React, { Component } from 'react';
import { Record } from './type'
import styled from 'styled-components'
import './App.css';

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
        {records.map(this.wrapper)}
      </div>
    )
  }

  wrapper(record: Record, index?: number) {
    return (
      <div key={record.id} className={`contact contact--${record.gender}`}>
        <h2 className="contact__name">{record.name}</h2>
        <p className="contact__intro">
          <span>{record.name} is a <strong>{record.age} years</strong> old</span>
          <strong>{record.introduction}</strong>
        </p>
      </div>
    )
  }
}

export default App;
