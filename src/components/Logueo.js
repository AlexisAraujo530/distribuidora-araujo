import React, { useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

import  getFirestore  from "../firebase/firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth(getFirestore);
const googleProvider = new GoogleAuthProvider();

const Logueo = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    if (estaRegistrandose) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
      console.log(usuario);
    } else {
      // si está iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    <Container>
      <Stack gap={3}>
        <h1>{estaRegistrandose ? "Regístrate" : "Iniciar sesión"}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><h3>Correo Electronico</h3></Form.Label>
            <Form.Control type="email" placeholder="Escriba aqui su correo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label ><h3>Contraseña</h3></Form.Label>
            <Form.Control type="password" placeholder="Escribe aqui su contraseña" />
          </Form.Group>

          <Button variant="success" type="submit">
            {estaRegistrandose ? "Regístrarse" : "Iniciar sesión"}
          </Button>
        </Form>

        <Button className="botonGogle"
          variant="primary"
          type="submit"
          style={{ width: "300px", margin: "10px",
        padding: "10px" }}
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          Acceder con Google
        </Button>

        <Button
          style={{ width: "300px", margin: "10px",
        padding: "10px" }}
          variant="secondary"
          onClick={() => setEstaRegistrandose(!estaRegistrandose)}
        >
          {estaRegistrandose
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </Button>
      </Stack>
    </Container>
  );
};

export default Logueo;