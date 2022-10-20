const express = require("express");
const app = express();
const router = require("./routes");

const port = 8000;

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.set("view engine", "ejs");
let user = { all: "전체" };

io.on("connection", (socket) => {
	// 최초 입장
	console.log("server connected, socket id:", socket.id);
	// user 퇴장시에
	socket.on("disconnect", () => {
		io.emit("notice", `${user[socket.id]}님이 퇴장했습니다.`);
		delete user[socket.id];
	});

	socket.on("sendMsg", (data) => {
		// msg 받아서 전체 클라이언트한테 전송
		if (data.to === "all") {
			io.emit("send", data.msg);
			// delete
		} else {
			io.to(data.to).emit("send", data.msg);
			socket.emit("send", data.msg);
		}
	});

	socket.on("sendUserId", (usernickname) => {
		if (Object.values(user).indexOf(usernickname) === -1)
			user[socket.id] = usernickname;

		// usernickname 받아서 전체 클라이언트한테 전송
		io.emit("notice", `${usernickname}님이 입장했습니다.`);
		// console.log(user);

		io.emit("userChange", user);
	});
});

http.listen(port, () => {
	console.log("Server port : ", port);
});
