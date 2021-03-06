const Router = require("express");
const userModule = require("./module");
const mail = require("../utils/email");
const router = Router();

router.get("/hello", async (req, res, next) => {
  try {
    res.status(200).send("from router");
  } catch (error) {
    next(error);
  }
});

// NUmbers Get Method
router.get("/", async (req, res, next) => {
  try {
    res.status(200).send(await userModule.getNumbers(req.query.value));
  } catch (error) {
    next(error);
  }
});

// Numbers likes Method
router.get("/:id/like", async (req, res, next) => {
  try {
    res.status(200).send(await userModule.likeIncrement(req.params.id));
  } catch (error) {
    next(error);
  }
});

// Numbers dislike Method
router.get("/:id/dislike", async (req, res, next) => {
  try {
    res.status(200).send(await userModule.disLikeIncrement(req.params.id));
  } catch (error) {
    next(error);
  }
});

// Numbers view Method
router.get("/:id/view", async (req, res, next) => {
  try {
    res.status(200).send(await userModule.viewIncrement(req.params.id));
  } catch (error) {
    next(error);
  }
});

// User Delete Method
router.post("/", async (req, res, next) => {
  try {
    res.status(200).send(await userModule.createNumber(req.body));
  } catch (error) {
    next(error);
  }
});

// feedback email Method
router.post("/email", (req, res, next) => {
  try {
    mail.sendMail(req.body);
    res.status(200).send({ success: true, message: "mail set successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
