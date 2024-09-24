import { css } from "styled-components";

import LinkButton from "../ui/LinkButton";
import styled from "styled-components";

const flexColCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroSection = styled.section`
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 100rem;
`;

const HeroLeft = styled.div`
  ${flexColCenter}
  background-color: var(--tea-green);

  > img {
    width: 100%;
  }
`;

const HeroRight = styled.div`
  ${flexColCenter}
  align-items: center;
  gap: 1rem;
  padding: 4rem;
  background-color: var(--beige);

  p {
    ${flexColCenter}
    color: var(--black);
    font-size: 1.5rem;
    font-family: var(--sans);
  }

  p > span {
    text-align: center;
    line-height: 2.5rem;
  }
`;

const Title = styled.h1`
  color: var(--black);
  font-family: var(--serif);
  font-size: 4.5rem;
  letter-spacing: 4px;
`;

function Home() {
  return (
    <>
      <HeroSection>
        <HeroLeft>
          <img src="src/assets/pucioasa-1.jpg" />
        </HeroLeft>
        <HeroRight>
          <Title>Pucioasa</Title>
          <p>
            <span>
              Cele mai bune lenjerii din lume vandute de Sobocangurul,
              Aligatorul si Grasul66
            </span>
            <span>
              Va asteptam cu drag in magazinul nostru sa va luam banii pe niste
              carpe chinezesti din Dragonul{" "}
              <span style={{ color: "red", fontWeight: "700" }}>Rosu</span>!
            </span>
          </p>

          <LinkButton to="/shop">Magazin</LinkButton>
        </HeroRight>
      </HeroSection>
    </>
  );
}

export default Home;
