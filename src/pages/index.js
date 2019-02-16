import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Divider from '../components/Divider';

const IndexPage = ({ data }) => (
  <Layout>
    <Header />
    <Landing />
    <Divider />
    <About />
    <Divider />
    <Experience />
    <Footer />
  </Layout>
);

export default IndexPage;
