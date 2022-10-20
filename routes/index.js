const express = require("express");
const router = express.Router();

const controller = require("../chatController/chatMain");
router.get("/", controller.chatMain);
router.post("/login", controller.login);
router.post("/chat", controller.chatIndex);
router.get("/signup", controller.signUp);
router.post("/signupdata", controller.signupdata);

module.exports = router;
