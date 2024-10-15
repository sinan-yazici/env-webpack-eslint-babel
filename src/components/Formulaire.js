import React, { useRef } from 'react';
import Header from './Header';

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Récupération des valeurs des champs
    // const name = nameRef.current.value;
    // const email = emailRef.current.value;
    // const message = messageRef.current.value;
    // console.log(name, email, message);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={nameRef} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" ref={messageRef} />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

const CompteurClic = () => {
  const count = useRef(0);

  const handleClick = (e) => {
    e.preventDefault();
    count.current += 1;
  };

  return (
    <>
      <h2>Nombre de clics : {count.current}</h2>
      <button onClick={handleClick}>Cliquez ici</button>
    </>
  );
};

const Main = ({ children }) => <> {children} </>;
const Formulaire = () => (
  <>
    <Header />
    <Main>
      <Form />
      <CompteurClic count={0} />
    </Main>
  </>
);
export default Formulaire;
