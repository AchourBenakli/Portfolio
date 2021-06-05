const controlleursRoutes = (req, res) => {
  res.status(200).json({
    body: 'Hello from the server!'
  });
};

module.exports.controlleursRoutes = controlleursRoutes;