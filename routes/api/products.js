const router = require('express').Router()
const { ctrlWrapper, validation } = require('../../middlewares/')
const { products: ctrl } = require('../../controllers')
const { joiSchema, statusJoiSchema } = require('../../models/product')

router.get('/', ctrlWrapper(ctrl.getAll))
router.get('/:id', ctrlWrapper(ctrl.getById))
router.post('/', validation(joiSchema), ctrlWrapper(ctrl.add))
router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateStatus))
router.patch(
  '/:id/status',
  validation(statusJoiSchema),
  ctrlWrapper(ctrl.updateById)
)
router.delete('/:id', ctrlWrapper(ctrl.removeById))

module.exports = router
