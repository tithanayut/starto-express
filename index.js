const express = require("express");
const path = require("path");
const middlewareOne = require("./middleware/middleware-one");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(middlewareOne);

// Routes
app.use("/route-one", require("./routes/route-one"));

// Static
app.use("/static-one", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
	// return res.status(200).json({ key: "value" });
	return res.send("Hello");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
