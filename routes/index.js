/* GET home page. */
module.exports = function(app) {
  /* GET home page. */
    app.route("/").get(function(req, res, next) {
        res.render('index', { title: 'Express' });
    });
}