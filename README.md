#auth


#OVERVIEW--
This project is a simple example to showcase the Autherization of Client-Server through JWT tokens. However I have passed the the secret key to decode the token in the Hardcode way which is avoidable, secret key have to be put in .env(safe environment file).


#For this project I have used the HTTP REST API.

#Payload(BODY)THE USER_DATA IN JSON FORMAT
------IN MY PROJECT I HAVE MADE A DUMMY USER IN MODELS/dummyUser.js.

#PREREQUISITE - HAVING NODE INSTALLED IN YOUR SYSTEM, NOW IN THE FOLDER STRUTURE YOU MUST HAVE SOME DEPENDENCIES -- EXPRESS, JSONWEBTOKEN, FS, NODEMON.

#TO START -- IN TERMINAL GO TO THE SERVER FOLDER AND TYPE nodemon server.js.


#WHAT IS JWT:-
JSON WEB TOKEN IS SECURABLE WAY TO TRANSMIT DATA IN IN THE FORM OF JSON OBJECTS BETWEEN TWO SIDES (CLIENT-SERVER).

IT USES TWO FUNCTIONS (JWT.SIGN) AND (JWT.VERIFY) TO GET THE WORK DONE.
BASICALLY JWT.SIGN CREATES THE JWT TOKEN AND ASSIGN IT TO USER. AND JWT.VERIFY VERIFIES THE TOKEN TO GIVE ACCESS TO PROTECTED ROUTES.

IN JWT.SIGN THERE IS -- 
PAYLOAD-THE JSON DATA OF USER TO GET THE THE UNIQUE TOKEN.


SECRET KEY.


OPTIONS & CALLBACK = (IN OPTION YOU CAN PASS THE EXPIRATION TIME OF TOKEN).


ALSO I HAVE PASSED THE JWT TOKEN WITH THE AUTHRIZATION (HEADER) BEARER (TYPE) --(BEARER AUTHENTICATION).

