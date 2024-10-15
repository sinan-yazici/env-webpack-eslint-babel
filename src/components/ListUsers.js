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
const getAgeClass = (age) => {
  if (age < 18) {
    return 'red'; // Classe pour moins de 18 ans
  } if (age >= 19 && age <= 30) {
    return 'green'; // Classe pour 19-30 ans
  }
  return 'blue'; // Classe pour 31 ans et plus
};
export const datas = await usersFormat();
const User = ({ user, index }) => {
  const {
    name,
    age,
    city,
    avatar
  } = user;

  const ageClass = getAgeClass(age); // Obtenir la classe en fonction de l'âge
  return (
    <li key={index} className={ageClass}>
      <Link to={`/details/${index}`} className='nameUser'>{name}</Link> {/* Lien vers les détails de l'utilisateur */}
      <span> | {age} ans</span>
      <span> | {city}</span>
      <img src={avatar} alt="avatar" />
    </li>
  );
};
const CompteurPersonnes = ({ users }) => <h2>Nombre de personnes : {users.length}</h2>;

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
      <CompteurPersonnes users={filteredUsers} />
      <ul className='ulUsers'>
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
    <Header />
    <Main>
      <Users />
    </Main>
  </>
);
export default Home;
