module.exports = function(app) {
  // arg: next is for error handling
  app.get('/', function(req, res, next){
    res.send(["Laptop", "Bag"]);
  });
}
