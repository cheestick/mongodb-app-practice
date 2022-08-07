const router = require('express').Router()
const { ctrlWrapper } = require('../../middlewares/')
const { products: ctrl } = require('../../controllers')

router.get('/', ctrlWrapper(ctrl.getAll))
router.post('/', ctrlWrapper(ctrl.add))

module.exports = router
