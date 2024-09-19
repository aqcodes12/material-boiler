import axios from "axios";
import React, { useState } from "react";

const Mailsender = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data: ", { firstName, lastName, phone, email, message });
    const reqbody = {
      adminEmail: "qayyummulla786@gmail.com",
      subject: "from neodeals user",
      name: `${firstName} ${lastName}`,
      phoneNumber: phone,
      queryText: message,
    };

    try {
      console.log("Sending request to the server...");
      const res = await axios.post(
        "https://mailsender.neodeals.in:8443/hpUser/send",
        reqbody,
        {
          headers: {
            "Content-Type": "application/json",
            // Add other headers if needed
          },
        }
      );
      console.log("Response from server:", res);
      alert("Email Sent Successfully");
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Email Not Sent");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Mailsender;
