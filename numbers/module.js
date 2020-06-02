const userModel = require("./model");
const numDB = userModel.numSchema;

const getNumbers = async function() {
  return await numDB.find({ is_active: true });
};
module.exports.userGet = getNumbers;

const likeIncrement = async function(id) {
  let data = await numDB.findById(id);
  return Object.assign(data, { likes: data.likes++ }).save();
};
module.exports.userPost = likeIncrement;

const viewIncrement = async function(id) {
  let data = await numDB.findById(id);
  return Object.assign(data, { views: data.views++ }).save();
};
module.exports.userDelete = viewIncrement;

const disLikeIncrement = async function(id) {
  let data = await numDB.findById(id);
  return Object.assign(data, { disLikes: data.disLikes++ }).save();
};
module.exports.userDelete = disLikeIncrement;

const createNumber = async function(body) {
  return await numDB.create(body);
};
module.exports.userDelete = createNumber;
