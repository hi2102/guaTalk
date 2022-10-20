const { User } = require("../chatModel");

exports.chatMain = (req, res) => {
	res.render("loginPage");
};

exports.chatIndex = async (req, res) => {
	const result = await User.findOne({
		where: {
			id: req.body.id,
		},
	});
	if (result) res.render("index", { data: result });
	else res.redirect("/");
};

exports.login = async (req, res) => {
	const result = await User.findAll({
		where: {
			id: req.body.id,
			pw: req.body.pw,
		},
	});
	result.length > 0 ? res.send(true) : res.send(false);
};

exports.signUp = (req, res) => {
	res.render("signUp");
};

exports.signupdata = async (req, res) => {
	const result = await User.create({
		id: req.body.id,
		pw: req.body.pw,
		nick: req.body.nickname,
	});
	res.send("성공", result);
};
