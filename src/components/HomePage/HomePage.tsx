import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import getAllPosts from "@/utils/getAllPosts";
import getAbbreviatedPosts from "@/utils/getAbbreviatedPosts";
import ReactMarkdown from "react-markdown";
import { Post } from "@/types/posts";
import { Text } from "@/styles/Text/Text.styles";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

type Props = {
  outline?: boolean;
};

export const HomePage: NextPage = (
  { abbreviatedPosts }: PageProps,
  { outline }: Props
) => {
  return (
    <div>
      {abbreviatedPosts.map((post: Post) => {
        return (
          <>
            <h2>{post.post.title}</h2>
            <img style={{ width: "200px" }} src={post.post.cover} />
            <ReactMarkdown key={post.post.id}>{post.markdown}</ReactMarkdown>
            <br />
            <Text>This should be Lora</Text>
          </>
        );
      })}
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();
  const slugs = allPosts.slice(0, 2).map((post) => {
    return post.slug;
  });
  const abbreviatedPosts = await getAbbreviatedPosts(slugs);

  return {
    props: {
      abbreviatedPosts,
    },
    revalidate: 60,
  };
};
