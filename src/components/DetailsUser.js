import React from 'react';
import { useParams } from 'react-router-dom'; // Import de useParams pour récupérer les paramètres d'URL

const DetailsUtilisateur = ({ users }) => {
  const { id } = useParams(); // Récupération de l'ID de l'utilisateur depuis l'URL
  const user = users[id]; // Récupération de l'utilisateur correspondant à l'ID

  if (!user) {
    return <div>Aucun utilisateur trouvé.</div>; // Message si aucun utilisateur n'est trouvé
  }

  const {
    name,
    age,
    city,
    avatar
  } = user; // Déstructuration des propriétés de l'utilisateur

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

export default DetailsUtilisateur; // Ajout d'un point-virgule ici

// Ajoutez une nouvelle ligne ici
