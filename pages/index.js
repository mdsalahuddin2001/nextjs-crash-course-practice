import { server } from '../config/';
import ArticleList from '../components/ArticleList';
function HomePage({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}
export default HomePage;

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
};
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
