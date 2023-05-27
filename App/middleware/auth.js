const conn = require("../config/db");


verifyToken = (req, res, next) => {
    //  let token = req.headers["x-access-token"];
      let api_key = req.headers["x-api-key"];
      
      if (!api_key) {
        return res.status(403).send({
          message: "No token provided!"
        });
      }
    
        conn.query( "select api_key FROM api_keys WHERE api_key = ? and status = ?", [api_key, '0' ],
          function (err, data, fields) {
            //if (err) return next(new AppError(err, 500));
            // console.log(data?.length);
            if  ( data?.length) {         
                next()       
              }else{
               res.json({
                       status_code: "1",                  
                       message: "Invalid Api Key"
               });
    
              }
          //  });
          }
        );
       
    };

    verifyAdmin = (req, res, next) => {
        //  let token = req.headers["x-access-token"];
        //  console.log(req);
          let customer_id = req.body.customer_id;
          console.log(customer_id, constant.url);
          if (!customer_id) {
            return res.status(403).send({
              message: "No customer_id provided!"
            });
          }
         conn.query( "select email FROM admin_accounts WHERE email = ? and status = ?", [customer_id, '0' ],
              function (err, data, fields) {
                //if (err) return next(new AppError(err, 500));
                console.log(data?.length);
                if  ( data?.length) {         
                    next()       
                  }else{
                   res.json({
                           status_code: "1",                  
                           message: "Invalid customer_id"
                  });
        
                  }
              //  });
              }
            );
       }  

       const authJwt = {
        verifyToken: verifyToken,
        //isAdmin: isAdmin,
        //isModerator: isModerator,
        //isModeratorOrAdmin: isModeratorOrAdmin,
        verifyCustomer : verifyAdmin
      };
      module.exports = authJwt;