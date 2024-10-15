import React from 'react';
import { useParams } from 'react-router-dom';
import { datas } from './ListUsers';

const DetailsUtilisateur = () => {
  const { id } = useParams(); // Récupération de l'ID de l'utilisateur depuis l'URL
  const user = datas[id]; // Récupération de l'utilisateur correspondant à l'ID

  if (!user) {
    return <div>Aucun utilisateur trouvé.</div>;
  }

  const {
    name,
    age,
    city,
    avatar
  } = user;

  return (
    <div className="details-utilisateur">
      <h2>Détails de l&apos;utilisateur</h2>
      <img src={avatar} alt={`${name} avatar`} />
      <p><strong>Nom :</strong> {name}</p>
      <p><strong>Âge :</strong> {age} ans</p>
      <p><strong>Ville :</strong> {city}</p>
    </div>
  );
};

export default DetailsUtilisateur;
