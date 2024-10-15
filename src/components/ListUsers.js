import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

const usersFormat = async () => {
  const users = await axios.get('https://randomuser.me/api?results=10');
  return users.data.results.map((user) => {
    const {
      dob: { age },
      location: { city },
      name: { first },
      picture: { large }
    } = user;
    return {
      age,
      city,
      name: first,
      avatar: large
    };
  });
};

// const getAgeClass = (age) => {
//   if (age < 18) {
//     return 'red';
//   } if (age >= 19 && age <= 30) {
//     return 'green';
//   }
//   return 'blue';
// };

export const datas = await usersFormat();

const User = ({ user, index }) => {
  const {
    name,
    age,
    city,
    avatar
  } = user;
  // const ageClass = getAgeClass(age);
  const style = age >= 18 && age <= 30 ? 'blue' : 'green';
  return (
    <li key={index} className={style}>
      <Link to={`/details/${index}`} className='nameUser'>{name}</Link>
      <span> | {age} ans</span>
      <span> | {city}</span>
      <img src={avatar} alt="avatar" />
    </li>
  );
};
const CompteurPersonnes = ({ users }) => <h2>Nombre de personnes : {users.length}</h2>;

const Users = ({ ageMin, order }) => {
  const filteredUsers = datas
    .filter((user) => (user.age >= ageMin))
    .sort((a, b) => {
      if (order === 'desc') {
        return b.name.localeCompare(a.name);
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <>
      <CompteurPersonnes users={filteredUsers} />
      <ul className='ulUsers'>
      {filteredUsers.map((user, index) => (
        <User key={index} user={user} index={index}/>
      ))}
      </ul>
    </>
  );
};

const Main = ({ children }) => <> {children} </>;
const ListUsers = ({ ageMin, order }) => (
  <>
    <Header />
    <Main>
      <Users ageMin={ ageMin } order={ order } />
    </Main>
  </>
);
export default ListUsers;
