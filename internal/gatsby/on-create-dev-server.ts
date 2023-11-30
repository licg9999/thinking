import express from "express";
import { GatsbyNode } from "gatsby";

export const onCreateDevServer: GatsbyNode["onCreateDevServer"] = ({ app }) => {
  app.use("/admin", express.static("public/admin"));
};
