const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validte(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    }
    next();
  };
};

module.exports = validation;
