import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='descriptin' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Trending News',
  keywords: 'web development,programming,ui ux, html template , react,nextjs',
  description: 'Be first , Trending news to get',
};

export default Meta;
