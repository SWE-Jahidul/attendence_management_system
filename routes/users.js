const router = require('express').Router();

/**
 * Get user by id or email 
 */

router.get('/:userId', () =>{

});

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



router.get('/' , () =>{

});


/**
 * Create a new User
*/
router.post('/' , () =>{

});




module.exports = router;
