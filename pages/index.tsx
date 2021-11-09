import styled from "@emotion/styled";
import type { NextPage } from "next";

import { Layout } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { BarLink } from "../components/BarLink";
import { Avatar } from "../components/Avatar";
import { Content } from "../components/Content";

const ContentContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing(10)}px
    ${(props) => props.theme.spacing(3)}px;
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  margin: ${(props) => props.theme.spacing(5)}px 0 0;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`;

const AuthorName = styled.h2`
  font-size: ${(props) => props.theme.spacing(4.5)}px;
  color: ${(props) => props.theme.text};
  transition-duration: 0.3s;
  transition-property: color;
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.text};
  margin: ${(props) => props.theme.spacing(1)}px 0;
  font-size: ${(props) => props.theme.fontSize};
  transition-duration: 0.3s;
  transition-property: color;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  ul {
    line-height: 1.8rem;
    padding-left: ${(props) => props.theme.spacing(2)}px;
  }

  & ul:nth-child(2) {
    margin-left: ${(props) => props.theme.spacing(3)}px;
  }
`;

const Copyright = styled.p`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontSize};
  transition-duration: 0.3s;
  transition-property: color;
  position: absolute;
  bottom: ${(props) => props.theme.spacing(2)}px;
  left: 50%;
  transform: translateX(-50%);
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Navigation />
      <ContentContainer>
        <BarLink
          href="mailto:mateuszromek.net@gmail.com"
          text="Would you like to have your website? Feel free to contact me"
        />

        <AuthorContainer>
          <div>
            <AuthorName>Mateusz Romek</AuthorName>
            <Subtitle>Frontend Developer</Subtitle>
          </div>
          <Avatar imgSrc="/image.png" displayName="MR" />
        </AuthorContainer>

        <Content title="Work">
          Hello, I'm Mateusz and as you can see I'm a frontend developer,
          currently working at Boldare as Frontend engineer. I've been building
          stuff on the web for several years, I've made countless side projects
          and I also posses magical powers to build delightful user interfaces.
          I'm very comfortable with a variety of tools. Typically I'll be
          digging in with React, TypeScript, RxJs but Node.js is also no
          stranger to me.
        </Content>

        <Content title="Techonogies">
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

        <Content title="Sample side project">Projects with gh button</Content>

        <Content title="On the web">Links</Content>

        <Copyright>© 2021 Mateusz Romek. All Rights Reserved.</Copyright>
      </ContentContainer>
    </Layout>
  );
};

export default Home;
