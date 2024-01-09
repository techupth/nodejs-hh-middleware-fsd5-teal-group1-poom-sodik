function Validation(req, res, next) {
  if (!req.body.description || !req.body.title || !req.body.categories) {
    return res.json({
      message:
        "Plese check request body. Body must have title, description and categories.",
    });
  }
  if (req.body.title.length > 35) {
    res.json({
      message: "Title must not be over 35 characters",
    });
  }
  if (req.body.description.length > 150) {
    res.json({
      message: "Description must not exceed 150 characters",
    });
  }
  if (
    req.body.categories.length < 1 ||
    !Array.isArray(req.body.categories) ||
    req.body.categories[0].length < 1
  ) {
    res.json({
      message: "Categories must be an array with at least 1 value",
    });
  }

  next();
}
export default Validation;
