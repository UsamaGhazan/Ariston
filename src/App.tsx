import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage'; // Example additional page

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      {/* <Route path="/about" element={<Layout><AboutPage /></Layout>} /> */}
    </Routes>
  );
};

export default App;
