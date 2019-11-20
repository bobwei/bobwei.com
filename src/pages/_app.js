import React from 'react';
import NextApp from 'next/app';
import Layout from '../components/Layout';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default App;
