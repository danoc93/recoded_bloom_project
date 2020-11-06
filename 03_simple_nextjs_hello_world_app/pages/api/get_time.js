
export default (req, res) => {
  res.statusCode = 200
  res.json({ currentServerTime: new Date().toISOString() });
}