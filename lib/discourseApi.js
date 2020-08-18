import axios from "axios";

// NOTE: paginated response 30 records per
// NEED TO ADD LOGIC TO LOOP THRU PAGES TO GET ALL POSTS!
// CURENT CODE ONLY GRABS FIRST PAGE

export const getAllPosts = async () => {
  const topics = await getTopics();
  console.log("all topics ", topics);
  let topicPosts = await Promise.all(
    topics.map((topic) => {
      return axios
        .get(`https://community.omnivector.solutions/t/${topic.id}/posts.json`)
        .then((res) => {
          return { ...topic, post_id: res.data.post_stream.posts[0].id };
        })
        .catch(() => null);
    })
  );
  console.log("topicPosts: ", topicPosts);
  let posts = await Promise.all(
    topicPosts.map((post) => {
      return axios
        .get(
          `https://community.omnivector.solutions/posts/${post.post_id}.json`
        )
        .then((res) => {
          return { ...post, raw: res.data.raw };
        })
        .catch(() => null);
    })
  );
  return posts;
};

import axios from "axios";

// NOTE: paginated response 30 records per
// NEED TO ADD LOGIC TO LOOP THRU PAGES TO GET ALL POSTS!
// CURENT CODE ONLY GRABS FIRST PAGE

export const getTopics = () =>
  axios
    .get("https://community.omnivector.solutions/c/8.json")
    .then((res) => res.data.topic_list.topics)
    .catch(() => null);

export const getAllPosts = async () => {
  const topics = await getTopics();
  let topicPosts = await Promise.all(
    topics.map((topic) => {
      return axios
        .get(`https://community.omnivector.solutions/t/${topic.id}/posts.json`)
        .then((res) => res.data.post_stream.posts[0])
        .catch(() => null);
    })
  );
  let posts = await Promise.all(
    topicPosts.map((post) => {
      return axios
        .get(`https://community.omnivector.solutions/posts/${post.id}.json`)
        .then((res) => res.data)
        .catch(() => null);
    })
  );
  return posts;
};
