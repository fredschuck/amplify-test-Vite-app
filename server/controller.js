const calculate = async (req, res) => {
  const { number } = req.body;
  const result = number * 2;
  return res.json({ result });
};

export { calculate };
