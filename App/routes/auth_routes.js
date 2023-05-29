// this is where all the API routes are defined, every API must be defined here
//and this is just a definition in terms of the name of the API and how its called


const { verify_admin , auth } = require("../middleware");

const controller = require("../controller/controller")  // invoke the location where API are fully defined in terms of functionality



module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
          );
          next();
    });

    // API route without API Key defined.
        // app.get("/api/get_articles",controller.get_articles);
        // app.post("/api/create_article", controller.create_articles);

    //API Route with API key defined.
    app.get("/api/get_users", [auth.verifyToken], controller.get_user);

    app.post("/api/create_interest", [auth.verifyToken], controller.create_interest);

    app.get("/api/get_interestdetails", [auth.verifyToken], controller.get_interestdetails);
    
    app.get("/api/get_interestdetailsbyid/:interestid",[auth.verifyToken],controller.get_interestdetailsbyID);

    app.put("/api/put_updateregpasscode/:interestid", [auth.verifyToken], controller.put_updateregpasscode);

    // app.get("/api/get_articles", [ auth.verifyToken], controller.get_articles);
    // app.post("/api/create_article",[auth.verifyToken],controller.create_articles);
    // app.post("/api/create_user",[auth.verifyToken],controller.create_user);
    // just adding
};