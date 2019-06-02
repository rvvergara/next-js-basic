import React from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';

const titles = [{ id: 'e388n22', title: 'Hello Next.JS' }, { id: 'e64arar7', title: 'Learn Next.js is awesome' }, { id: 'e5117arara', title: 'Deploy Apps with Zeit' }];

const PostLink = ({ id, title }) => (
  <li>
    <Link href={`/posts/${id}/?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {
          titles.map(({ title, id }) => (
            <PostLink
              key={title}
              title={title}
              id={id}
            />
          ))
        }
    </ul>
  </Layout>
);

export default Index;
