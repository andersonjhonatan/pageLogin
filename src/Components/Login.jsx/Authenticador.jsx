import React, { useEffect } from "react";
import {
  MAIN,
  INPUT,
  //EMAILOUT,
  ICONSLOGIN,
  LOGO,
  //PADLOCK,
  SIDE,
  MYFATHER,
  SECTION,
  BUTTON,
  Paragraph,
  Checkbox,
  LOGOMAIN,
} from "./Authen.styles";
import Logo from "../assets/logo.svg";
import sideImag from "../assets/side-image.jpg";
import { useContext } from "react";
import { contextAut } from "../../Context/AuthContext";

const Authenticador = () => {


const {login, setLogin, botaoHabilitado, setBotaoHabilitado } = useContext(contextAut)

const handleChange = ({target: { name, value }}) => {
  setLogin((prev) => ({
    ...prev, [name]: value
  }));
}

useEffect(() => {
  setBotaoHabilitado(login.email.length > 0 && login.email.includes('@') && login.senha.length > 6)
} , [login, botaoHabilitado, setBotaoHabilitado])

const handleClick = (e) => {
  e.preventDefault();
  setLogin({email: '', senha: "" })
}

  return (
    <MYFATHER small>
      <LOGOMAIN>
        <LOGO src={Logo} alt="" />
      </LOGOMAIN>
      <MAIN onSubmit={handleClick}>
        <div>
          <h2>
            <ICONSLOGIN /> Faça seu login
          </h2>
          <p>Entre com suas informações de cadastro</p>
        </div>
        <section>
          <label htmlFor="">
            <p>E-mail</p>
            <INPUT 
            type="email" 
            name="email"
            placeholder="Digite seu e-mail" 
            required
            value={login.email}
            onChange={handleChange}

          />
          </label>
          <label htmlFor="">
            <p>Senha</p>
            <INPUT 
            type="password" 
            name="senha"
            placeholder="Digite sua senha" 
            required 
            value={login.senha}
            onChange={handleChange}
          />
          </label>
        </section>
        <SECTION>
          <label htmlFor="">
            <Checkbox type="checkbox" /> 
            Lembre-me
          </label>
          <a href="#zxz">Esqueci minha senha</a>
        </SECTION>
        <BUTTON type='submit' disabled={!botaoHabilitado}>Entrar</BUTTON>
        <Paragraph>Não tem uma conta? Registre-se</Paragraph>
      </MAIN>
      <SIDE small>
        <img src={sideImag}  alt='imagem do site'/>
      </SIDE>
    </MYFATHER>
  );
};

export default Authenticador;
