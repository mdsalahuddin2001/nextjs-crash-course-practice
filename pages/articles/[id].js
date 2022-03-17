import { server } from '../../config';

import Link from 'next/dist/client/link';

import { useRouter } from 'next/router';
import Meta from '../../components/Meta';

const article = ({ article }) => {
  // const router = useRouter()
  // const {id} = router.query

  return (
    <>
      <Meta />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Home</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await response.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/articles`);

  const articles = await response.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default article;
