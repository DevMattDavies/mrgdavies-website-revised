import { GetStaticProps, NextPage } from "next";

export const HomePage: NextPage = ({posts}) => {
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
};

// use getStaticProps to fetch data from an API at build time
const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
