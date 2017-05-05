const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  address: String,
  phone_number:String,
  age: { type: Number, min: 0, max: 120 },
  email: String,
  updated: { type: Date, default: Date.now }
});

UserSchema.path('address').validate((v)=>{
	if(v.length>50||v.length<5){
		return false;
	}
	return true;
});


export default mongoose.model('users', UserSchema);
