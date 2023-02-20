const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const adminControllers = require("./controllers/adminControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);

router.post("/admins", hashPassword, adminControllers.add);

// /!\ login should be a public route

router.post(
  "/login",
  adminControllers.getAdminByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// then the routes to protect

router.use(verifyToken); // authentication wall : verifyToken is activated for each route after this line

router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.get("/admins", adminControllers.browse);
router.get("/admins/:id", adminControllers.read);
router.put("/admins/:id", adminControllers.edit);
router.delete("/admins/:id", adminControllers.destroy);

module.exports = router;
