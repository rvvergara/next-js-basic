import React from 'react';
import Layout from '../components/MyLayout';

const content = (
  <div>
    <p>This is the about page</p>
  </div>
);

const About = () => (
  <Layout content={content} />
);

export default About;
