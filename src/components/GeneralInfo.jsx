import { useState } from "react";

export default function GeneralInfo() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  console.log("Render:", { name, location, isSubmitted });

  return (
    <>
      {!isSubmitted ? (
        <>
          <form id="general-info" onSubmit={handleSubmit}>
            <h2 className="form-heading">Personal Details</h2>
            <div className="form-question">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-question">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-question">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-question">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Location: {location}</p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              console.log("penis");
            }}
          >
            Edit
          </button>
        </>
      )}
    </>
  );
}
