import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [people, setPeople] = useState([]);
  const handleClick = () => {
    let person = {
      id: Math.floor(Math.random() * 100),
      username,
      email,
      password,
    };
    setPeople([...people, person]);
    setUsername("");
    setEmail("");
    setPassword("");
    console.log(person);
  };
  const deletePerson = (key) => {
    let newPerson = [...person];
    newPerson.splice(key, 1);
    setPerson([...newPerson]);
  };
  return (
    <div className="container-app">
      <div className="form-content mt-4">
        <h2 className="text-light">User Register</h2>
        <input
          type="text"
          className="form-control mb-2"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          placeholder="User Name"
          required
        />
        <input
          type="email"
          className="form-control mb-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="User Email"
          required
        />
        <input
          type="password"
          className="form-control mb-2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="User Password"
          required
        />
        <button className="btn btn-primary" onClick={handleClick}>
          Register Now
        </button>
        {people.map((person) => {
          return (
            <div className="show" index={person.id} key={person.id}>
              <p>{person.username}</p>
              <p>{person.email}</p>
              <p>{person.password}</p>
              <span
                className="delete"
                onClick={(e) => {
                  deletePerson(person.id);
                }}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Register;
