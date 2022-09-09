const Vacation = require("../../models/vacation");

module.exports = {
  create,
  get,
};

function create(req, res) {
  req.body.user = req.user._id;
  console.log(req.body);
  var vacation = new Vacation(req.body);
  vacation.save(function (err) {
    console.log(vacation, "new vacation");
    Vacation.find({}).then((vacations) => {
      console.log(vacations, "vacations");
      res.json(vacations);
    });
  });
}

function get(req, res) {
  //to do: do i need to fetch user vacations or all vacations.This is currently fetching all vacations from every user
  Vacation.find({ user: req.user._id }).then((vacations) => {
    res.json(vacations);
  });
}
