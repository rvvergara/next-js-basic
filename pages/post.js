import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Content = props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

const Page = withRouter(props => (
  <Layout>
    <Content {...props} />
  </Layout>
));

export default Page;
