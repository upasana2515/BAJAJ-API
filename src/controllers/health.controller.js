exports.healthCheck = (req, res) => {
  res.status(200).json({
    is_success: true,
    officialemail: "upasana@chitkara.edu.in"
  });
};
