import axios from "axios";

export const getPostsFromBlogCategory = async () => {
  //  the blog post category ID is 8
  //  this is hard coded for now
  // you could also get a list of all categories and loop thru their names to find the ID
  try {
    const res = await axios({
      method: "get",
      url: "community.omnivector.solutions/c/8.json",
    });
    return res;
  } catch (error) {
    return error;
  }
};
