import { Container } from "./styles";
import LogoImg from "../../assets/logo.svg";
import ArrowImg from "../../assets/arrow.svg";
import WelcomeImg from "../../assets/welcome.svg";

export function Home() {
  return (
    <Container>
      <div>
        <div>
          <img src={LogoImg} alt="" className="logo" />

          <form>
            <h1>Faça seu logon</h1>

            <input type="text" placeholder="Sua ID" />

            <button type="submit">Entrar</button>

            <div className="register">
              <img src={ArrowImg} alt="" /> <p>Não tenho cadastro</p>
            </div>
          </form>
        </div>
        <img src={WelcomeImg} alt="" />
      </div>
    </Container>
  );
}
