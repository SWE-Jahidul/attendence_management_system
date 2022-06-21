const { model, Schema, trusted } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          v
        );
      },

      message: (prop) => `Invalid Email : ${prop.value}`,
    },
  },
  password: {
    type: String,
    minlength: [6, "Pssword is To short"],
    required: true,
  },

  roles: {
    type: [String],
    required: true,
    default: ["STUDENT"],
  },
  accountStatus: {
    type: String,
    enum : ['PENDING', 'ACTIVE' , 'REJECTED' ],
    default : 'PENDING',
    required : true
  },
});

const User = model("User", userSchema);
module.exports = User;
