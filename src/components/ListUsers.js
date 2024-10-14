import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
const datas = await usersFormat();
const User = ({ user, index }) => {
  const {
    name,
    age,
    city,
    avatar
  } = user;
  return (
    <li key={index}>
      <Link to={`/details/${index}`}>{name}</Link> {/* Lien vers les détails de l'utilisateur */}
      <span> | {age} ans</span>
      <span> | {city}</span>
      <img src={avatar} alt="avatar" />
    </li>
  );
};

const Users = ({ minAge = 0, sortOrder = 'asc' }) => {
  const filteredUsers = datas
    .filter((user) => user.age > minAge)
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      }
      return nameB.localeCompare(nameA);
    });

  return (
    <>
      <ul>
      {filteredUsers.map((user, index) => ( // Assurez-vous que 'index' est passé ici
        <User key={index} user={user} index={index}/> // Passer 'index' au lieu de 'key'
      ))}
      </ul>
    </>
  );
};

const Main = ({ children }) => <> {children} </>;
const Home = () => (
  <>
    <Main>
      <Users />
    </Main>
  </>
);
export default Home;
