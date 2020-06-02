const userModel = require("./model");
const numDB = userModel.numSchema;

const getNumbers = async function() {
  return await numDB.find({ is_active: true }).sort({ updatedAt: -1 });
};
module.exports.getNumbers = getNumbers;

const likeIncrement = async function(id) {
  let data = await numDB.findById(id);
  return await numDB.findByIdAndUpdate(
    id,
    { likes: data.likes + 1 },
    { new: true }
  );
  // Object.assign(data, { likes: data.likes++ }).save();
};
module.exports.likeIncrement = likeIncrement;

const viewIncrement = async function(id) {
  let data = await numDB.findById(id);
  return await numDB.findByIdAndUpdate(
    id,
    { views: data.views + 1 },
    { new: true }
  );
  //Object.assign(data, { views: data.views++ }).save();
};
module.exports.viewIncrement = viewIncrement;

const disLikeIncrement = async function(id) {
  let data = await numDB.findById(id);
  return await numDB.findByIdAndUpdate(
    id,
    { disLikes: data.disLikes + 1 },
    { new: true }
  );
  //Object.assign(data, { disLikes: data.disLikes++ }).save();
};
module.exports.disLikeIncrement = disLikeIncrement;

const createNumber = async function(body) {
  console.log(body);
  return await numDB.create(body);
};
module.exports.createNumber = createNumber;
