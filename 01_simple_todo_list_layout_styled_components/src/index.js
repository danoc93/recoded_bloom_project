import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const StyledNormalParagraph = styled.p`
  text-align: center;
`;

const StyledSpecialParagraph = styled(StyledNormalParagraph)`
  font-weight: bold;
`;

const MyApplication =  () => <div>
  <StyledNormalParagraph>
    Hello, this is my to-do list.
  </StyledNormalParagraph>
</div>;

ReactDOM.render(
  <MyApplication/>,
  document.getElementById('root')
);