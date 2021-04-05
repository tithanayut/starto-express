const middlewareOne = (req, res, next) => {
	console.log("[middleware-one]");
	next();
};

module.exports = middlewareOne;
