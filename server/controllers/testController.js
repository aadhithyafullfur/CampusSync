const testAPI = (req, res) => {
  res.json({
    success: true,
    message: "CampusSync API is working 🚀"
  });
};

module.exports = { testAPI };
