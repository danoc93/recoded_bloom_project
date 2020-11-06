import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const myItems = [
  {
    id: 1,
    label: 'History of JavaScript frameworks'
  },
  {
    id: 2,
    label: 'Learning Styled Components'
  }
];

const MyParagraph = styled.p`
  text-align: center;
  font-weight: ${props => props.emphasize ? 'bold' : 'normal'};
`;

const MyApplication =  () => <div>
  <MyParagraph>
    This is my To-Do list
  </MyParagraph>
  <MyParagraph emphasize={true}>
    Re:Coded is great!
  </MyParagraph>
</div>;

ReactDOM.render(
  <MyApplication/>,
  document.getElementById('root')
);