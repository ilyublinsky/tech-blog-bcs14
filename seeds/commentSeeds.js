const { Comment } = require('../models');

const commentData = [
  {
    content: 'You have no idea what you are talking about.',
    user_id: 1,
    post_id: 1,
  },
  {
    content: 'I love when my directs show empathy!',
    user_id: 1,
    post_id: 2,
  },
  {
    content: 'Python or bust.',
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () =>
  Comment.bulkCreate(commentData, {
    returning: true,
  });

module.exports = seedComments;
