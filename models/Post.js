const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = model('post', PostSchema);