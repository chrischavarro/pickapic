import express from "express";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";
// @ts-ignore
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
// @ts-ignore
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { finished } from "stream/promises";
import { ReadStream } from "fs";

export type File = {
  filename: string;
  mimetype: string;
  encoding: string;
  stream?: ReadStream;
};

export type UploadedFileResponse = {
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
  createReadStream: () => ReadStream;
};

export type SearchTerm = "dog" | "capybara";

export interface IUploader {
  singleFileUploadResolver: (
    parent: any,
    { file }: { file: Promise<File> }
  ) => Promise<UploadedFileResponse>;
}

const typeDefs = gql`
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type Query {
    search: String
  }
  type Mutation {
    searchImages(imageName: String!): [String]
    uploadImage(file: Upload!): File!
  }
`;

const resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    searchImages: (_: any, { imageName }: { imageName: string }) => {
      const searchTerm = imageName as SearchTerm;
      const imageResponseMap = {
        dog: [
          "https://i.ibb.co/pXrTPtD/2022-06-27-21-04-36.jpg",
          "https://i.ibb.co/MpZxXL2/2022-06-26-17-30-52.jpg",
          "https://i.ibb.co/CBTt1FD/2022-06-26-17-29-19-1.jpg",
          "https://i.ibb.co/K7R0ThC/2022-06-24-08-40-51.jpg",
          "https://i.ibb.co/7K4pJPF/2022-06-23-12-39-40.jpg",
        ],
        capybara: [
          "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdRbxo-MMTKa345APPsH9ULQHN5apVGjUM7HA4yUSEeUX_rWoakOJ07N0qemmj4sxkVU&usqp=CAU",
          "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=300&h=400&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2011%2F08%2Fcapybara-1-300.jpg",
          "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2016/08/09/57aa32c1e2617846e20540e1_Capybara-Olympics.jpg.rend.hgtvcom.966.644.suffix/1573406535033.jpeg",
          "https://i0.wp.com/www.laketobias.com/wp-content/uploads/2021/03/capybara-sq.jpg?fit=1080%2C1080&ssl=1",
          "https://mongabay-images.s3.amazonaws.com/1200/colombia/colombia_5964.jpg",
          "https://i.etsystatic.com/15332298/r/il/da85ac/1935059239/il_fullxfull.1935059239_l0ky.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bristol.zoo.capybara.arp.jpg/1200px-Bristol.zoo.capybara.arp.jpg",
          "https://a-z-animals.com/media/2022/01/shutterstock_1246729561-1024x535.jpg",
          "https://www.zooborns.com/.a/6a010535647bf3970b0263e9600fa6200b-800wi",
        ],
      };
      return imageResponseMap[searchTerm];
    },
    uploadImage: async (
      _: any,
      { file }: { file: Promise<UploadedFileResponse> }
    ) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const out = require("fs").createWriteStream(`./uploads/${filename}`);
      stream.pipe(out);
      await finished(out);

      return { filename, mimetype, encoding };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, csrfPrevention: true });

const app = express();
app.use(cors());
app.use(graphqlUploadExpress());
server.start().then(() => server.applyMiddleware({ app }));

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
