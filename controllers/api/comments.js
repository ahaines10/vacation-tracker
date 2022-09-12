const Vacation = require("../../models/vacation");

module.exports = {
  create,
  edit,
  delete: deleteComments,
};

async function create(req, res) {
  req.body.user = req.user._id;
  console.log(req.body);
  let vacation = await Vacation.findById(req.params.id);
  vacation.comments.push(req.body);
  await vacation.save();
  let vacations = await Vacation.find({});
  console.log(vacations);
  res.json(vacations);
}

async function edit(req, res) {}

async function deleteComments(req, res, next) {
  console.log("delete comment");
  try {
    const vacation = await Vacation.findOne({ _id: req.params.vid });

    vacation.comments.remove(req.params.cid);
    await vacation.save();
    let vacations = await Vacation.find({});
    console.log(vacations);
    res.json(vacations);
  } catch (err) {
    return next(err);
  }
}
