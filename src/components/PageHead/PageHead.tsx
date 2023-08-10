import Head from "next/head";

type TPageHead = {
  title: string;
  description: string;
};

const PageHead = ({ title, description }: TPageHead): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Michael Davies, author, personal website"
      />
      <meta name="author" content="Michael Davies" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.mrgdavies.com/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@mrgdavies" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default PageHead;
