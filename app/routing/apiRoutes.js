var friend = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friend);
  });

  app.post("/api/friends", function(req, res) {

      friend.push(req.body);
      res.json(true);
    
  });

};