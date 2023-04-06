const router = require('express').Router();

// /api/users/:userId/friends/:friendId
// TODO: GET to get all thoughts
// TODO: GET to get a single thought by its _id
// TODO: POST to create a new thought (push the created thought's _id to the associated user's thoughts array field)
// TODO: PUT to update a thought by its _id
// TODO: DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
// TODO: POST to create a reaction stored in a single thought's reactions array field
// TODO: DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
