import React, { useState, useEffect } from 'react';
import Text, { Heading } from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import Box, { Grid } from '@codeday/topo/Atom/Box';
import Spinner from '@codeday/topo/Atom/Spinner';
import Button from '@codeday/topo/Atom/Button';
import getConfig from 'next/config';
import { verify } from 'jsonwebtoken';
import Page from '../components/page';

const { serverRuntimeConfig } = getConfig();

const safeBr = (str) => str
          .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;")
         .replace(/\n/g, "<br />");


export const getServerSideProps = async ({ params: { jwt } }, res) => {
  let resultStates;
  try {
    resultStates = verify(jwt, serverRuntimeConfig.appSecret).resultStates;
  } catch (err) {
    res.statusCode = 404;
    return { props: { error: true } };
  }

  return { props: { jwt, resultStates: resultStates.split(',') } };
}

export default function Home({ error, jwt, resultStates }) {
  const [entry, setEntry] = useState();
  const [loading, setLoading] = useState(true);

  const updateEntry = async () => {
    setLoading(true);
    const result = await fetch('/api/get-entry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jwt })
    });
    setEntry(await result.json());
    setLoading(false);
  };
  useEffect(() => { updateEntry(); }, []);

	if (error) return (
		<Page slug={`/${jwt}`}>
			<Content>
				<Heading as="h2" fontSize="5xl" textAlign="center">Not found</Heading>
			</Content>
		</Page>
  );

  if (loading) return (
		<Page slug={`/${jwt}`} title="Loading... - Labs Application Review">
			<Content>
        <Box textAlign="center">
          <Spinner />
        </Box>
			</Content>
		</Page>
  );

  if (!entry) return (
		<Page slug={`/${jwt}`} title="Labs Application Review">
			<Content>
				<Heading as="h2" fontSize="5xl" textAlign="center">All done for now!</Heading>
			</Content>
		</Page>
  );

  return (
		<Page slug={`/${jwt}`} title={`#${entry['Cognito ID']} - Labs Application Review`}>
			<Content>
				<Heading as="h2" fontSize="5xl" textAlign="center">Reviewing #{entry['Cognito ID']}</Heading>
        <Grid templateColumns={{ base: '1fr', md: '3fr 1fr' }}>
          <Box p={8}>
            <Box as="table">
              {Object.keys(entry).filter((key) => !['id', 'Cognito ID'].includes(key)).map((key) => (
                <Box as="tr">
                  <Box as="th" textAlign="right" verticalAlign="top">{key}</Box>
                  <Box as="td" pl={4} pb={4}>
                    {Array.isArray(entry[key]) && (
                      <ul>
                        {entry[key].map((item) => <li>{item}</li>)}
                      </ul>
                    )}
                    {typeof entry[key] === 'number' && entry[key]}
                    {typeof entry[key] === 'boolean' && (entry[key] ? 'TRUE' : 'FALSE')}
                    {(typeof entry[key] === 'string' && !Array.isArray(entry[key])) && (['http://', 'https:/'].includes(entry[key].substr(0, 7)) ? (
                      <Button as="a" href={entry[key]} variant="outline" target="_blank">Link</Button>
                    ) : <div dangerouslySetInnerHTML={{ __html: safeBr(entry[key]) }} /> )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Box backgroundColor="yellow.50" p={4} borderRadius="sm" mb={8} pb={4}>
              <Heading as="h3">Criteria</Heading>
              <Heading as="h4" size="md" pt={4}>Accept students who...</Heading>
              <Box as="ul" ml={4}>
                <li>Have the experience to succeed in this track.</li>
                <li>Have little access to other opportunities.</li>
              </Box>
              <Heading as="h4" size="md" pt={8}>Don't accept those who...</Heading>
              <Box as="ul" ml={4}>
                <li>Will succeed either way.</li>
                <li>Have previous internships or industry experience.</li>
                <li>Are professionals, grad students, etc.</li>
              </Box>
            </Box>
            {resultStates.map((state) => (
              <Button
                d="block"
                mb={2}
                onClick={async (e) => {
                  setLoading(true);
                  await fetch("/api/judge-entry", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({ jwt, id: entry.id, state }),
                  });
                  updateEntry();
                }}
              >
                {state}
              </Button>
            ))}
          </Box>
        </Grid>
			</Content>
		</Page>
  );
}
