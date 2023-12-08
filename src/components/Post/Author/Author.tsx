import React from "react";

import { Link } from "gatsby";

import { useSiteMetadata } from "@/hooks";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p>
        <section>By {author.name}</section>
        <section>
          <Link to="/">Back to the article list</Link>
        </section>
      </p>
    </div>
  );
};

export default Author;
