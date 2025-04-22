const orderController = require('../controllers/orderController');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { addVarBody, addQuery } = require('./../middlewares/dynamicMiddleware');
const { RoleCode } = require('./../utils/enum');
const { USER, ADMIN, DELIVERY } = RoleCode;
const express = require('express');
const router = express.Router();
router.use(protect);
router
  .route('/mine')
  .get(
    restrictTo(USER),
    addQuery('userId', 'userId'),
    orderController.getAllOrder,
  );
router
  .route('/')
  .get(restrictTo(ADMIN), orderController.getAllOrder)
  .post(
    restrictTo(USER, ADMIN),
    addVarBody('userId', 'userId'),
    orderController.createOrder,
  );
router
  .route('/:id')
  .get(restrictTo(USER, ADMIN, DELIVERY), orderController.getOrder)
  .patch(restrictTo(USER, ADMIN), orderController.updateOrder)
  .delete(restrictTo(USER, ADMIN), orderController.deleteOrder);
module.exports = router;
