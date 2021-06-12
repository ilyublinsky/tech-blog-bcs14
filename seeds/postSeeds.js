const { Post } = require('../models');

const postData = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae interdum est, vitae egestas arcu. Phasellus gravida libero ut leo condimentum consequat. Ut sodales placerat eros et porta. Praesent sed tincidunt nibh. Donec consectetur vulputate mauris vitae vulputate. Mauris sed egestas sem. Maecenas sagittis nisi sed pharetra varius.',
    user_id: 1,
    title: 'What makes you a great coder?',
    id: 1,
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula scelerisque mauris, laoreet ornare est. Fusce porta diam quis facilisis faucibus.',
    user_id: 2,
    title: 'What are some of your best people management moments?',
    id: 2,
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a augue dictum, vehicula sem eget, iaculis turpis. Nullam pellentesque sit amet metus sodales molestie. Nam felis elit, volutpat vitae risus eget.',
    user_id: 1,
    title: 'What languages should you learn in 2021?',
    id: 3,
  },
];

const seedPosts = () =>
  Post.bulkCreate(postData, {
    returning: true,
  });

module.exports = seedPosts;
