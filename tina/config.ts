import "dotenv/config";

import { format, parseISO } from "date-fns";
import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.GITHUB_BRANCH ||
  process.env.HEAD ||
  "main";
const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const token = process.env.TINA_TOKEN;

export default defineConfig({
  client: { skip: true },
  branch,
  clientId,
  token,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        defaultItem() {
          return {
            title: "",
            date: parseISO(`${format(Date.now(), "yyyy-MM-dd")}T09:00:00.000Z`),
            template: "post",
            draft: false,
            slug: `/posts/${format(Date.now(), "yyMMdd")}-todo`,
          };
        },
        fields: [
          {
            name: "title",
            label: "Title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            label: "Date",
            type: "datetime",
            ui: {
              timeFormat: "HH:mm",
            },
            required: true,
          },
          {
            name: "template",
            label: "Template",
            type: "string",
            required: true,
          },
          {
            name: "draft",
            label: "Draft",
            type: "boolean",
            required: true,
          },
          {
            name: "slug",
            label: "Slug",
            type: "string",
            required: true,
          },
          {
            name: "category",
            label: "Category",
            type: "string",
          },
          {
            name: "tags",
            label: "Tags",
            type: "string",
            list: true,
          },
          {
            name: "description",
            label: "Description",
            type: "string",
            ui: {
              component: "textarea",
            },
          },
          {
            name: "socialImage",
            label: "Social Image",
            type: "string",
          },
          {
            name: "body",
            label: "Body",
            type: "rich-text",
            isBody: true,
          },
        ],
      },
    ],
  },
});
