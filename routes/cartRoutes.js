const cartController = require('../controllers/cartController');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { RoleCode } = require('./../utils/enum');
const { USER, ADMIN, DELIVERY } = RoleCode;
const express = require('express');
const router = express.Router();
router.use(protect);
router
  .route('/')
  .get(restrictTo(USER, ADMIN), cartController.getAllCart)
  .post(restrictTo(USER, ADMIN), cartController.createCart);
router
  .route('/:id')
  .get(restrictTo(USER, ADMIN), cartController.getCart)
  .patch(restrictTo(USER, ADMIN), cartController.updateCart)
  .delete(restrictTo(USER, ADMIN), cartController.deleteCart);
module.exports = router;
