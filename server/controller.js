const calculate = async (req, res) => {
  console.log("Made it!");
  const { number } = req.body;
  console.log("num:", number);
  const result = number * 2;
  return res.json({ result });
};

export { calculate };
