/*Массив имен всех пользователей у которых есть друг с указанным именем.*/
import users from './users.js';

const getUsersWithFriend = (users, friendName) =>
  users.reduce((mixFriends, user) => {
    for (let friend of user.friends) {
      friend === friendName ? mixFriends.push(user.name) : mixFriends;
    }
    return mixFriends;
  }, []);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
