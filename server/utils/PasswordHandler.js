const bcrypt = require('bcrypt')

// Hashes password
exports.hashPassword = async (password) => {
   const saltRounds = 10; // How secure the password hashing should be
   const hashedPassword = await bcrypt.hash(password, saltRounds)

   return hashedPassword
}

// Takes two passwords and compares them. returns true if success
exports.comparePassword = async (loginPass, dbPass) => {
   const comparison = await bcrypt.compare(loginPass, dbPass)

   return comparison
}