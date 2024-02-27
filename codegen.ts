import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./src/services/api/gradeviserServer.ts": {
      schema: "/graphql",
      documents: "./src/graphql/gradeviserServer/*.gql",
      plugins: [
        {
          add: {
            content: "//@ts-nocheck",
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: "graphql-request",
        exposeQueryKeys: true,
        exposeFetcher: true,
      },
    },
  },
};

export default config;
