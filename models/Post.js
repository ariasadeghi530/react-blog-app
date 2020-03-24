const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
  title: String,
  post: String,
  owner: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
});

module.exports = model('post', PostSchema);