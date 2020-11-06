import Head from "next/head";
import React from "react";

const IndexPage = (props) => {

    const [time, setTime] = React.useState(null);
    React.useEffect(
        () => {
            setTime(new Date().toISOString())
        }, []
    );
    return (
    <div>
      <Head>
        <title>Hello Next App</title>
      </Head>
      <main>
        <h1>Hello Re:Coded</h1>
        <p>{"The server returned this at " + props.serverRenderedTime}</p>
        <p>{"This was updated on the browser at " + time}</p>
      </main>
    </div>
  );
};

export const getServerSideProps = () => {
  console.log("Current time", new Date().toISOString());
  return {
    props: { serverRenderedTime: new Date().toISOString() },
  };
};

export default IndexPage;
