import PetOwner from '../Models/PetOwner'
import PetLover from '../Models/PetLover'

// get user info
// TODO Implement authenticator
exports.getPetOwnerInfo = (req, res, next) => {
   let token = req.headers.token; //token
   jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
         title: 'unauthorized'
      })
      return res.status(200).json
      //token is valid
   });
};
