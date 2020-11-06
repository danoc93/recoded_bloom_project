import Head from 'next/head'
import React, { Component } from 'react';

const DynamicTimeElement = () => {

  const [currentLocalTime, setCurrentLocalTime] = React.useState(new Date().toISOString());

  return (
    <>
      <p>
        {
          'This was refreshed at ' + currentLocalTime
        }
      </p>
      <button onClick={() => {
        setCurrentLocalTime(new Date().toISOString());
      }}>Refresh time!</button>
    </>
  );

}


class Page extends Component {

  render() {
    return (
      <div>
        <Head>
          <title>Hello Next App</title>
        </Head>
        <main>
          <h1>
            Hello Re:Coded
          </h1>
          <p>
            {
              'The server returned this at ' + this.props.serverRenderedTime
            }
          </p>
          <DynamicTimeElement />
        </main>
      </div>
    );
  }

};

Page.getInitialProps = (query, res, req) => {
  return {
    serverRenderedTime: new Date().toISOString()
  };
}

export default Page;
