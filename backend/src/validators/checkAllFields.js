function checkAllFields(req, res, next) {
  const dataKeys = ['name', 'description', 'color', 'productCategory', 'price'];
  const keys = Object.keys(req.body);

  const productValidate = dataKeys.every(el => keys.includes(el));

  if (!productValidate) {
    return res.status(400).json({ message: 'Fill all the fields' });
  }

  for (let key of keys) {
    if (req.body[key] === '') {
      return res.status(400).json({ message: 'Fill all the fields' });
    }
  }

  next();
}

export default checkAllFields;
