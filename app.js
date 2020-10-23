import models from './models';

(async () => {
  // Data Retrieve
  const userInfo = await models.User.findOne({ where: {id: 1} });
  console.log('Existing User::', userInfo);

  // Data Insert
  /* const newUserInfo = await models.user.create({
    id: 3,
    firstname: 'John',
    lastname: 'Doe',
    email: 'jon.doe@mailinator.com',
    password: 'pw'
  });
  console.log('New User::', newUserInfo); */

})();