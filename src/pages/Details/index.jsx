import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";

import { Section } from "../../components/Section";

import { ButtonText } from "../../components/ButtonText";

import { Button } from "../../components/Button";

import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            temporibus nostrum, nihil ducimus consequuntur eligendi a inventore
            quod eius veniam quisquam explicabo repellendus dicta facilis itaque
            ea? Atque, ad dolorem.
          </p>
          
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">http://google.com</a>
              </li>
              <li>
                <a href="#">http://google.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
