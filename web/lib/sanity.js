import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "tgu4asx0", // you can find this in sanity.json
  dataset: process.env.NODE_ENV, // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});