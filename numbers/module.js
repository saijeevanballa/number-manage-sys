const userModel = require("./model");
const numDB = userModel.numSchema;

const getNumbers = async function() {
  return await numDB.find({ is_active: true });
};
module.exports.getNumbers = getNumbers;

const likeIncrement = async function(id) {
  let data = await numDB.findById(id);
  return Object.assign(data, { likes: data.likes++ }).save();
};
module.exports.likeIncrement = likeIncrement;

const viewIncrement = async function(id) {
  let data = await numDB.findById(id);
  return Object.assign(data, { views: data.views++ }).save();
};
module.exports.viewIncrement = viewIncrement;

const disLikeIncrement = async function(id) {
  let data = await numDB.findById(id);
  return Object.assign(data, { disLikes: data.disLikes++ }).save();
};
module.exports.disLikeIncrement = disLikeIncrement;

const createNumber = async function(body) {
  console.log(body);
  return await numDB.create(body);
};
module.exports.createNumber = createNumber;
