const mongoose = require('mongoose'),
      bcrypt = require('bcrypt');

// 定义user Schema
const Schema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  // clients: [{}]
});

Schema.pre('save', function(next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error);

      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);

        user.password = hash; // 加密存储密码
        next();
      });
    });
  } else {
    return next();
  }
});

//判断password的正确性
Schema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, (error, matches) => {
    if(error) return callback(error);
    callback(null, matches);
  });
};

mongoose.model('User', Schema);