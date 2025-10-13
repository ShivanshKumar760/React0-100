import { useState } from "react";

import "./App.css";
function handleSubmit(e, setContactObject, name, phone, email, city, zip) {
  e.preventDefault();
  setContactObject({ name, phone, email, city, zip });
}
function ContactForm({ contactObject, setContactObject }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setContactObject({ name, phone, email, city, zip });
  //   setName("");
  //   setPhone("");
  //   setEmail("");
  //   setCity("");
  //   setZip("");
  // }
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e, setContactObject, name, phone, email, city, zip);
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="Phone"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder="City"
        />
        <input
          onChange={(e) => setZip(e.target.value)}
          value={zip}
          placeholder="Zip"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function RenderContact({ contactObject }) {
  const { name, phone, email, city, zip } = contactObject;
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name:{name} </p>
      <p>Phone:{phone}</p>
      <p>Email:{email} </p>
      <p>City:{city} </p>
      <p>Zip:{zip}</p>
    </div>
  );
}
function App() {
  const [contactObject, setContactObject] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    zip: "",
  });

  return (
    <>
      <ContactForm
        contactObject={contactObject}
        setContactObject={setContactObject}
      />
      <RenderContact contactObject={contactObject} />
    </>
  );
}

export default App;
