const Vacation = require("../../models/vacation");

module.exports = {
  create,
};

function create(req, res) {
  req.body.user = req.user._id;
  var vacation = new Vacation(req.body);
  vacation.save(function (err) {
    res.json(vacation);
  });
}
