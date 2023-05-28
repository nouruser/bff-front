import React from "react";
import AssocInput from "../components/AssocInput";
import { Link } from "react-router-dom"; 
import Footer from "../components/Footer";

const Login = () => {

  return (
    <>
      <div className="py-5" style={{ background: "#ffd333", minHeight: "80vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Authentification</h3>
        <p className="text-center">Connectez-vous à votre compte pour continuer.</p>
        <form action="" >
          <AssocInput type="text" label="Adresse Email" id="email"  />
          <AssocInput type="password" label="Mot de passe" id="pass" />
          <Link to="/assocbff"
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            AUTHENTIFIER
          </Link>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
