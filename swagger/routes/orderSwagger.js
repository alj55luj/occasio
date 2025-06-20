/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management and retrieval
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a order
 *     description: USER,ADMIN can create order.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createOrder'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Order'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all orders
 *     description: USER,ADMIN,DELIVERY can retrieve all orders.
 *     tags: [Orders]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: what fields do you want to show (ex. name,price)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of orders
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: key-words you want to search about it
 *       - in: query
 *         name: agg
 *         schema:
 *           type: string
 *         description: group data by any field  (ex. {group=[brand],max=price,min= price,sum=price,avg=price})
 *       - in: query
 *         name: aggDate
 *         schema:
 *           type: string
 *         description: group data by date fields   (ex. {group=[createdAt],date=month,max=price,min=price,avg=price,year=2022})
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name,-price)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Order'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get a order
 *     description: USER,ADMIN,DELIVERY can use this router.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Order'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a order
 *     description: USER,ADMIN can use this router.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateOrder'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Order'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  order.
 *     description: USER,ADMIN can use this router.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   example: null
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

exports.Order = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    methodPayment: { type: 'string', enum: ['cash', 'creditcard'] },
    cart: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  properties cart
          price: { type: 'number' },

          quantity: { type: 'number' },

          product: { type: 'string' },
        },
      },
    },
    user: { type: 'string' },
    total: { type: 'number' },
    address: { type: 'string' },
  },
  example: {
    _id: '5ebac534954b54139806c112',
    // property example
    methodPayment: 'cash',

    cart: [
      {
        // property example cart
        price: 16000,

        quantity: 4,

        productId: '673c40cd59e293827f79e398',
      },
    ],

    userId: '673c40cd59e293827f79e398',

    total: 100000,

    address: 'halap aljadideh ',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
exports.createOrder = {
  type: 'object',
  properties: {
    // create property
    methodPayment: { type: 'string', enum: ['cash', 'creditcard'] },
    cart: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  create  properties cart
          price: { type: 'number' },

          quantity: { type: 'number' },

          product: { type: 'string' },
        },
      },
    },

    total: { type: 'number' },
    address: { type: 'string' },
  },
  example: {
    // create property example
    methodPayment: 'cash',

    cart: [
      {
        // create property example cart
        price: 16000,

        quantity: 4,

        productId: '673c40cd59e293827f79e398',
      },
    ],

    total: 100000,

    address: 'halap aljadideh ',
  },
  required: [
    // required property

    'cart.price',

    'cart.quantity',

    'cart.product',

    'user',

    'total',

    'address',
  ],
};
exports.updateOrder = {
  type: 'object',
  properties: {
    // update property
    methodPayment: { type: 'string', enum: ['cash', 'creditcard'] },
    cart: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          //  update properties cart
          price: { type: 'number' },

          quantity: { type: 'number' },

          product: { type: 'string' },
        },
      },
    },

    total: { type: 'number' },
    address: { type: 'string' },
  },
  example: {
    // update property example
    methodPayment: 'cash',

    cart: [
      {
        // update property example cart
        price: 16000,

        quantity: 4,

        productId: '673c40cd59e293827f79e398',
      },
    ],

    total: 100000,

    address: 'halap aljadideh ',
  },
};
