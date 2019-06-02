import React from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';

const posts = [{ id: 'e8arha', title: 'Hello Next.js' }, { id: 'f77ajar', title: 'Learning Next.js is fun' }, { id: 'rer88a', title: 'Deploy with Zeit' }];

const PostLink = ({ id, title }) => (
  <li>
    <Link href={`/post?id=${id}&title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {
        posts.map(({ id, title }) => (
          <PostLink
            key={id}
            id={id}
            title={title}
          />
        ))
      }
    </ul>
  </Layout>
);

export default Index;
