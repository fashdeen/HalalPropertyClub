// delear all the variables

const conn = require("../config/db") // set up DB connection

// set up email connection

const external = require("../externalservice/external");

// get validation check into form

const { Validator } = require('node-input-validator');  // install npm i node-input-validator  


// create API

// API to get details from test_user table

exports.get_user =(req, res, next) =>{

    conn.query("Select * from test_users", function(err, displaydata){
        if(!err){
            res.send(displaydata);
        } else{
            res.send(err);
        }
    });
};


// API for inserting interest details into the DB

exports.create_interest=(req, res) =>{
    
    let firstname = req.body.firstname;
    let surname = req.body.surname;
    let econtact = req.body.econtact;
    let whatsappno = req.body.whatsappno;
    let gender = req.body.gender;
    let occupation= req.body.occupation;
    let address = req.body.address;
    let country = req.body.country;
    

    // validate the entry

    const v = new Validator(req.body,{
         firstname: 'required',
         surname: 'required',
         econtact: 'required|email',
         whatsappno: 'required',
         gender: 'required',
         occupation: 'required',
         address: 'required',
         country: 'required',
         
    });
     
    v.check().then((matched)=>{
        if (!matched){
            res.status(422).send(v.errors);
        }
        else{
            const values = [firstname,surname,econtact,whatsappno,gender,occupation,address,country];
            conn.query("Insert into interestdetails (firstname, surname, email,whatsappno,gender,occupation,address,country) values(?)",[values], function(err, datafileds){
                if(!err){
                    external.email_sender(econtact,'Expression of Interest', 
                    "<h4> Dear "+  firstname + 
                    ",<p>We acknowledge the receipt of your express of interest to join Halal Property Club - HPC. <br> We are going to review your application and reach out to you via email and or whatsapps to discuss the next step toward getting you on board as a registered member. <p> Once again we thank you for your interest.</h4> <p> <strong>Regards, <p> HPC <br> Management Team</strong>");
                    res.status(200).json({
                    status_code: "0", message: "successful",
                  }); 
                }else
                {
                    res.send(err);
                }
                 } );
            }
        });
    }


    // API to get all the details stored in the interestdetails table


    exports.get_interestdetails=(req, res)=>{

        conn.query("select * from interestdetails", function(err,displaydata){
            if(!err){
                res.send(displaydata);
            }else{
                res.send(err);
            }
        });

    };


    // API to get specific intersetdetails record

    exports.get_interestdetailsbyID=(req, res)=>{

        var getid = req.params.interestid;
        conn.query("select * from interestdetails where interestid = ?", [getid],
        function(err, getdata){
            if (getdata.length == 0){
              //res.send("No data");
              res.json({message: 'No Data'});
              return
            }
            else if (!err) {
                res.send(getdata);
            }
            else    
            {
                res.send(err);
            }
        })
    }

    //API to update Regpasscode.

    exports.put_updateregpasscode=(req, res)=>{

    
        var getid = req.params.interestid;
        var regpasscode = req.body.regpasscode;

        const dataset = [regpasscode,getid]

        conn.query("update interestdetails set regpasscode = ? where interestid = ?", dataset,
        
        function(err, getdata){
            if(!err){
                res.send(getdata);
            } else
            res.send(err);
        }
        );

    }