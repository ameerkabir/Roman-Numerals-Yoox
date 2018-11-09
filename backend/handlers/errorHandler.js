  const catchErrors = (fn) => {
    return function(req, res, next) {
      return fn(req, res, next).catch(next);
    };
  };
  const notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
   res.status(404).send({ message: `Page ${req.url} does not exist`});
  next(err);

};
// 

  module.exports = {catchErrors, notFound}