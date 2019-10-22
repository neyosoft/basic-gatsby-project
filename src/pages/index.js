import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
    <Layout>
        <h1>Welcome,</h1>
        <p>Let unlock the power of Gatsby!</p>
        <Link to="/about">About Us</Link>
    </Layout>
);
