const { db, User } = require('../server/db');

const seed = async () => {
  await db.sync({ force: true });
  console.log('db synced and data dropped');

  console.log('creating users');
  await User.create({
    email: 'tcflux@gmail.com',
    password: 'hello'
  });
  console.log('users created');
}

console.log('seeding...');
seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log('closing db connection');
    db.close();
    console.log('db connection closed.')
  });
