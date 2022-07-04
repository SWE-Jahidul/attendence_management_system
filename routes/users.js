const router = require('express').Router();


const userController  = require('../controller/users')
/**
 * Get user by id or email 
 */

router.get('/:userId',userController.getUserById );

/**
 * Update User by Id
 * @method PUT
 */

 router.put('/:userId', () =>{

});

/**
 * Update User by Id
 * @method PATCH
 */

 router.patch  ('/:userId', () =>{

});



/**
 * Delete user by Id
 * @method Delete
 * 
 */

 router.delete('/:userId', () =>{

});





/**
 * get all users , include 
 * -filter 
 * -sort
 * -pagination 
 * -select propertices 
 * @route /api/users?sort=["by",'name']
 * @method GET 
 * @visibility Private 
 * 
 */



router.get('/' ,userController.getUsers);


//
/**
 * Create a new User
*/
router.post('/', userController.postUser);




module.exports = router;
