const Vacation = require("../../models/vacation");

module.exports = {
  create,
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
