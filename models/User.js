const { model, Schema } = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  username: String,
  email: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post'
    }
  ]
});

UserSchema.plugin(passportLocalMongoose);


module.exports = model('user', UserSchema);