function validateAssignmentData(req, res, next) {
  const { title, description, categories } = req.body;
  if (req.method === "POST" || req.method === "PUT") {
    if (!title) {
      return res.status(400).json({
        message: "Assignment title is required",
      });
    }
    if (title.length > 35) {
      return res.status(411).json({
        message: "Title must not be over 35 characters",
      });
    }
    if (!description) {
      return res.status(400).json({
        message: "Assignment description is required",
      });
    }
    if (description.length > 150) {
      return res.status(411).json({
        message: "Description must not exceed 150 characters",
      });
    }
    if (!categories || categories.length === 0) {
      return res.status(400).json({
        message: "Categories must be an array with at least 1 value",
      });
    }
  }
  next();
}

export default validateAssignmentData;
