const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I know right?! I so want to marry BSON and have like 10,000 of its babies!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "I agree, but don't bother watching the sequel--it's horrible.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "I had to drop out of school because I was chosen to join American Idol in Los Angeles.",
    post_id: 2,
    user_id: 5
  },
  {
    comment_text: "Sure! Bubble sort, sometimes referred to as sinking sort, is named for the way the larger elements bubble up to the top of the list. Yay, bubbles!",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Oh, jeeze thanks. I could have read that from Wikipedia...",
    post_id: 4,
    user_id: 5
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;