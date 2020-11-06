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
    Hello, I am regular paragraph styled with basic CSS.
  </StyledNormalParagraph>
  <StyledSpecialParagraph>
    Hello, I another paragraph styled differently.
  </StyledSpecialParagraph>
</div>;

ReactDOM.render(
  <MyApplication/>,
  document.getElementById('root')
);