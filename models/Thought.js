const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,

  },
  reactionBody: {
    type: String,
  },
  username: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

const thoughtSchema = new mongoose.Schema({
  thoughText: { type: String },
  createdAt: { type: Date },
  username: { type: String },
  reactions: { type: String },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;