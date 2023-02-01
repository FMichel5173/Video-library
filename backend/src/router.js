const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const adminControllers = require("./controllers/adminControllers");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.get("/admins", adminControllers.browse);
router.get("/admins/:id", adminControllers.read);
router.put("/admins/:id", adminControllers.edit);
router.post("/admins", adminControllers.add);
router.delete("/admins/:id", adminControllers.destroy);

module.exports = router;
