import { Record } from '../type'
import styled from 'styled-components'

const Wrapper = (record: Record, index?: number) => {
  return (
    <Contact {...record} key={record.id}>
      <Name>{record.name}</Name>
      <Introduction>
        <span>{record.name} is a <strong>{record.age} years</strong> old</span>
        <strong className="inner">{record.introduction}</strong>
      </Introduction>
    </Contact>
  )
}

const Contact = styled.div<{ props: Record }>`
  border: 1px solid #DEDEDE;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: ${(props: Record) => props.gender === 'female' ? 'tomato' : 'green'};
  color: white;
`

const Name = styled.h2`
  font-size: 20px;
  margin-top: 0;
`

const Introduction = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  strong {
    font-weight: 600;
    &.inner {
      margin-left:5px;
    }
  }
`

export default Wrapper