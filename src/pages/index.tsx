import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import {
  Button,
  Card,
  Community,
  CTA,
  Description,
  Highlight,
  Stats,
  Title,
  Wrapper
} from '../styles/Home.styles';

function App() {
  const [stars, setStars] = useState<number>(2);
  const [forks, setForks] = useState<number>(4);
  const [isCopyClicked, setIsCopyClicked] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/repos/Sn0wye/snowye-ui')
      .then(res => res.json())
      .then(data => {
        setStars(data.stargazers_count);
        setForks(data.forks_count);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Snowye UI</title>
      </Head>

      <Header
        links={[
          {
            href: '/docs',
            label: 'Documentation'
          },
          {
            href: 'https://github.com/Sn0wye/snowye-ui',
            label: 'GitHub'
          }
        ]}
      />

      <Wrapper>
        <Title>
          <Highlight>React Powered</Highlight> Component UI,{' '}
          <Highlight>accessible</Highlight> by default and built on top of{' '}
          <Highlight as='a' href='https://www.radix-ui.com/' target='_blank'>
            Radix
          </Highlight>
          .
        </Title>

        <Description>
          Snowye UI is open source and made to be easy to use.
        </Description>

        {/* <Download>
          <Code>$ pnpm i @snowye-ui/react</Code>
          <Copy
            isClicked={isCopyClicked}
            onClick={() => {
              setIsCopyClicked(true);
              navigator.clipboard.writeText('pnpm i @snowye-ui/react');
            }}
          >
            Copy {isCopyClicked && <Check size={18} />}
          </Copy>
        </Download> */}

        <CTA>
          <Button as='a' href='/docs/overview/getting-started'>
            Get Started ➡
          </Button>
          <Button
            as='a'
            href='https://github.com/Sn0wye/snowye-ui'
            target='_blank'
            variant='secondary'
          >
            GitHub
          </Button>
        </CTA>

        <Community>
          <h1>
            Supported by the <Highlight>community</Highlight>
          </h1>

          <Stats>
            <Card>
              <strong>{stars}</strong>
              <h3>Stars on Github</h3>
            </Card>
            <Card>
              <strong>1+</strong>
              <h3>Contributors</h3>
            </Card>
            <Card>
              <strong>{forks}</strong>
              <h3>Forks on Github</h3>
            </Card>
          </Stats>
        </Community>
      </Wrapper>
    </>
  );
}

export default App;
