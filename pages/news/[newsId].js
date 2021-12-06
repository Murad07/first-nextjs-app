import { useRouter } from "next/router";

const NewPage = () => {
  const router = useRouter();

  return <h1>This is News Page {router.query.newsId} </h1>;
};

export default NewPage;
