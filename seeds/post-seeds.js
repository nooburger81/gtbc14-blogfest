const { Post } = require("../models");

const postData = [
  {
    title: "Why is AI such a big deal?",
    post_text:
      "Because we've been freaking out about it since the film 2001: A Space Odyssey when that computer just derailed everything.",
    user_id: 1,
  },
  {
    title: "What is the difference between GEC and GED?",
    post_text: "GEC stands for Global Execution Context, and is used to create global(window) objects, and inludes ordering functions to run outside of other functions. GED stands for General Education, or something, and is what you get when you drop out of high school.",
    user_id: 3,
  },
  {
    title: "OMG, MongoDB is so hot right now!",
    post_text:
      "Ok, so is it just me, or is MongoDB, like, the it thing right now?",
    user_id: 4,
  },
  {
    title: "Looking for help...",
    post_text:
      "Does anyone in here know anything about bubble sorting?  We had this test the other day and it was waaaaay over my head. Any advice on how to make it work would be very welcomed!",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;