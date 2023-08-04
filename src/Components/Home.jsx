import { useState } from "react";

const Home = () => {
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
  return (
    <div className="container-app">
      <div className="form-content align-center">
        <h1 className="text-light">Enter User Information</h1>

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
          Submit
        </button>
        <h1 className="text-light">User Information</h1>
        {people.map((person) => {
          return (
            <div className="show" index={person.id} key={person.id}>
              <label>User Name:</label>
              <p>{person.username}</p>
              <label>Email:</label>
              <p>{person.email}</p>
              <label>User Password:</label>
              <p>{person.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
