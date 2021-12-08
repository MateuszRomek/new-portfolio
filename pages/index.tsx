import styled from "@emotion/styled";
import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "react-i18next";

import { Layout } from "../components/Layout";
import { Navigation } from "../components/Navigation";
import { Bar } from "../components/Bar";
import { Content } from "../components/Content";
import { GhProjects } from "../components/GhProjects";
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

const P = styled.p`
  margin: 0;
`

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Navigation />
      <ContentContainer>
        <Link href="mailto:mateuszromek.net@gmail.com">
          <Bar text={t('about:contactMe')} />
        </Link>

        <NamePosition />

        <Content title={t('about:aboutTitle')}>
          <P>
          {t('about:aboutDescription')}
          </P>
          <P>
          {t('about:aboutDescriptionAdditional')}
          </P>
          
        </Content>

        <Content title={t('about:technologies')}>
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

        <Content title={t('about:sideProjectsTitle')}>
          <GhProjects />
        </Content>

        <Content title={t('about:onTheWebTitle')}>
          <ContactLinks />
        </Content>

        <Copyright />
      </ContentContainer>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetStaticProps= async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common','about'])),
    },
  };
}