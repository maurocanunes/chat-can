import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Form className="send-message"onSubmit={(event) => sendMessage(event)}>
    <InputGroup>
        <Form.Control
          placeholder="Escreva sua menssagem"
          aria-label="Recipient's username with two button addons"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="success">Enviar</Button>
        <Button variant="danger">Gravar</Button>
      </InputGroup>
    </Form>
  );
};

export default SendMessage;