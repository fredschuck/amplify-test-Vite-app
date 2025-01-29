const calculate = async (req, res) => {
  const { num } = req.body;
  const result = num * 2;
  res.json({ result });
};

export { calculate };
