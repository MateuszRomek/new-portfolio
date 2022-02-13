import styled from "@emotion/styled";
import type { NextPage } from "next";

import { Layout } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Bar } from "../components/Bar";
import { Content } from "../components/Content";
import { NamePosition } from "../components/NamePosition";
import { Copyright } from "../components/Copyright";
import { ContactLinks } from "../components/ContactLinks";

const ContentContainer = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 8rem 2rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  ul {
    line-height: 2.3rem;
    padding-left: ${(props) => props.theme.spacing(2)}px;
  }

  & ul:nth-child(1) {
    margin-right: ${(props) => props.theme.spacing(3)}px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Navigation />
      <ContentContainer>
        <Link href="mailto:mateuszromek.net@gmail.com">
          <Bar text="Would you like to have your website? Feel free to contact me!" />
        </Link>

        <NamePosition />

        <Content title="About">
          Hello, I&apos; m Mateusz and as you can see I&apos;m a frontend
          developer, currently working at Boldare as Frontend engineer.
          I&apos;ve been building stuff on the web for several years, I&apos;ve
          made countless side projects and I also posses magical powers to build
          delightful user interfaces. I&apos;m very comfortable with a variety
          of tools. Typically I&apos;ll be digging in with React, TypeScript,
          RxJs but Node.js is also no stranger to me.
        </Content>

        <Content title="Technologies">
          <Flex>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>React & Redux</li>
            </ul>
            <ul>
              <li>Gatsby</li>
              <li>Next.js</li>
              <li>Docker</li>
              <li>Styled Components & SASS</li>
            </ul>
          </Flex>
        </Content>

        <Content title="On the web">
          <ContactLinks />
        </Content>

        <Copyright />
      </ContentContainer>
    </Layout>
  );
};

export default Home;
