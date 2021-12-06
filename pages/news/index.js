import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <h1>This is News Page {router.query.newsId} </h1>
      <ul>
        <Link href="/news/news-one">
          <li>News One</li>
        </Link>
        <Link href="/news/news-two">
          <li>News Two</li>
        </Link>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
