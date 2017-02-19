const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$jp9iIvO4raZwMsxMiQZLjesxvdZT5XnvBkwav7eDmp.qdwMX3eMJm';

bcrypt.compare(password, hashedPassword, (err, result) => {
  console.log(result);
});

// var data = {
//   id: 10,
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var message = "I am user number 3";
// var hash = SHA256(message).toString();
//
// console.log(message);
// console.log(hash);
//
// var data = {
//   id: 4,
// };
// var token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'somesecretSALT').toString(),
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(data) + 'somesecretSALT').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust.');
// }
