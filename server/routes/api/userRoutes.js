const jwt = require('jsonwebtoken');
const user = require('../../models/dummyUser');

module.exports = (app) => {

    app.post('/user/login',(req,res) => {
        const { body } = req;
        const { username } = body;
        const { password } = body;

        //checking the user credentials

        if(username === user.username && password === user.password){
            //if login then jwt token is generated

            // adding expiration time of token for better security, however it can be avioded in certain scenerios.

            jwt.sign({user}, 'privatekey', {expiresIn: '15min'},(err,token) =>{
                if(err) {console.log(err)}
                res.send(token);
            });
        } else {
            console.log("Error: User credentials are wrong");
        }
    })

    //protected route

    app.get('/user/data', checkToken, (req,res) => {
//verifying the token
        jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
            if(err) {
                console.log("Error: couldn't connect to route");
                res.sendStatus(403);
            }else {
                res.json({
                    message: 'Logged In',
                    authorizedData
                });
                console.log("Successfully connected to route");
            }
        })

    });
}

//Checking if header is not defined return forbidden

const checkToken = (req,res,next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else{
        //if header is undefined 
        res.sendStatus(403)

    }

}