import React from "react";

import { Link } from "gatsby";

import { useSiteMetadata } from "@/hooks";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p className={styles.bio}>
        {author.bio}

        <Link className={styles.name} to="/">
          <strong className={styles.name}>{author.name}</strong>
        </Link>
      </p>
    </div>
  );
};

export default Author;
