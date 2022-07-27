const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


module.exports.upload_Post = catchAsync(async (req, res, next) => {
    const image = req.file?.path;
    res.status(200).json(image)
  });