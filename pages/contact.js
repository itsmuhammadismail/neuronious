import Head from "next/head";
import Layout from "../components/Layout";
import Top from "../components/Top";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Neuronious</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
      <Top
          heading="We are Experts in"
          desc="Websites, landing pages, interactive campaigns, or just about any
            other digital media needed, we can merge innovative ideas with
            beautiful designs to reach the hearts and minds of your core
            audiences."
          img="/images/abt-bg.jpg"
        />
      </Layout>
    </div>
  );
};

export default Contact;
