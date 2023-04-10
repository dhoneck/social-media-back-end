const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Schema.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    // TODO: TEST - Add 280 character max validation
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const thoughtSchema = new mongoose.Schema({
  thoughText: {
    type: String,
    required: true,
    // TODO: TEST - Add 1 to 280 character validation
    minLength: [1, 'Please add 1 to 280 characters'],
    maxLength: [280, 'Please add 1 to 280 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // TODO: Use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema],
});

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
      return this.reactions.length;
    });

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;