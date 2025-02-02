const calculate = async (req, res) => {
  const { number } = req.body;
  console.log("Request Body:", req.body);
  const result = number * 2;
  return res.json({ result });
};

export { calculate };
