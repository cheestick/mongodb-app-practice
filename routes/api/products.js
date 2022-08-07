const router = require('express').Router()
const { ctrlWrapper, validation } = require('../../middlewares/')
const { products: ctrl } = require('../../controllers')
const { joiSchema } = require('../../models/product')

router.get('/', ctrlWrapper(ctrl.getAll))
// router.get('/:id', ctrlWrapper(ctrl.getById))
router.post('/', validation(joiSchema), ctrlWrapper(ctrl.add))
// router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateById))
// router.delete('/:id', ctrlWrapper(ctrl.removeById))

module.exports = router
