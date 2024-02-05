import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";

import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/yRomulo.png" alt="Foto de usuario" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Romulo Dias</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
