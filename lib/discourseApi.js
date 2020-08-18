import axios from "axios";

// NOTE: paginated response 30 records per
// NEED TO ADD LOGIC TO LOOP THRU PAGES TO GET ALL POSTS!
// CURENT CODE ONLY GRABS FIRST PAGE

export const getTopics = () =>
  axios
    .get("https://community.omnivector.solutions/c/8.json")
    .then((res) => res.data.topic_list.topics)
    .catch(() => null);

export const getTopicPosts = (topics) => {
  const topicPosts = Promise.all(
    topics.map((topic) => {
      return axios
        .get(`https://community.omnivector.solutions/t/${topic.id}/posts.json`)
        .then((res) => {
          return {
            topic_id: topic.id,
            title: topic.title,
            fancy_title: topic.fancy_title,
            slug: topic.slug,
            image_url: topic.image_url,
            created_at: topic.created_at,
            posters: topic.posters,
            post_id: res.data.post_stream.posts[0].id,
            avatar_template: res.data.post_stream.posts[0].avatar_template,
            cooked: res.data.post_stream.posts[0].cooked,
          };
        })
        .catch(() => null);
    })
  );
  return topicPosts;
};

export const getSinglePosts = (topicPosts) => {
  const singlePosts = Promise.all(
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
  return singlePosts;
};

export const getAllPostData = async () => {
  const topics = await getTopics();
  const topicPosts = await getTopicPosts(topics);
  const posts = await getSinglePosts(topicPosts);
  return { posts };
};
