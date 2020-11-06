import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const MyApplication =  () => <div>
  <p className="normal-paragraph">
    Hello, I am regular paragraph styled with basic CSS.
  </p>
  <p className="special-paragraph">
    Hello, I another paragraph styled differently.
  </p>
</div>;

ReactDOM.render(
  <MyApplication/>,
  document.getElementById('root')
);