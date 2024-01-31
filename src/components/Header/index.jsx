import { Container, Profile, Logout } from "./styles";

import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/yRomulo.png" alt="Foto de usuario" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Romulo Dias</strong>
        </div>
      </Profile>

      <Logout to="/">
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
