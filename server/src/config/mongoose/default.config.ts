import {IMDBOptions} from "@tsed/mongoose/lib/interfaces/MDBOptions";

export const defaultOptions: IMDBOptions = {
  url: "mongodb+srv://user:user@clustersofstars-renyu.mongodb.net/SIMIS?retryWrites=true&w=majority",
  connectionOptions: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
};
