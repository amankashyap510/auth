module.exports = {
    username: 'aman',
    password: '1234',
    firstName: 'Aman',
    lastName: 'Kashyap',
    email: 'aman@gmail.com',
    dob: "05/05/05",
    address:{
        city: "chg",
        country: "India"
    }
};


// (issued at) and (expiration time) on logging In -- iat & exp while performing==

// {
//     "message": "Logged In",
//     "authorizedData": {
//         "user": {
//             "username": "aman",
//             "password": "1234",
//             "firstName": "Aman",
//             "lastName": "Kashyap",
//             "email": "aman@gmail.com",
//             "dob": "05/05/05",
//             "address": {
//                 "city": "chg",
//                 "country": "India"
//             }
//         },
//         "iat": 1646810553,
//         "exp": 1646811453
//     }
// }