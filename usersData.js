import mongoose from 'mongoose';
import assert from 'assert';
import userModel from './api/users/userModel';
import config from './config';

const users =[
{
  "name": "John McCarthy",
  "address": "123 Main street, ",
  "phone_number": "085 123 4567",
  "email": "john@yahoo.com",
  "age": "20"
},
{
  "name": " Jane Lynch",
  "address": "2 Gracedieu",
  "phone_number": "086 987 6543",
  "email": "jane@yahoo.com",
  "age": "30"
},
{
  "name": "Dona Brain",
  "address": "4 Willamstown",
  "phone_number": "086 345 6254",
  "email": "dona@yahoo.com",
  "age": "44"
},
{
  "name": "Jimmy McGrath",
  "address": "23 Main street",
  "phone_number": "087 345 7263",
  "email": "jimmy@yahoo.com",
  "age": "34"
}
];

export const loadUsers = () =>{userModel.find({}).remove(function() {
    userModel.collection.insert(users, (err,docs)=>{
    if (err){
      console.log(`failed to Load User Data`);
    }
    else{
      console.info(`${users.length} users were successfully stored.`);
    }
  })
});
}
