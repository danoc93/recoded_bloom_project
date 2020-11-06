import Head from "next/head";
import React from "react";

const MyStaticPage = (props) => (
    <div>
        <Head>
            <title>Hello Static Page</title>
        </Head>
        <main>
            <h1>Hello {props.myName}, this is a statically generated page.</h1>
        </main>
    </div>
);

export const getStaticProps = async () => {
    return {
        props: {
            myName: "Re:Coded",
        },
    };
};

export default MyStaticPage;
