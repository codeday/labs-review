import React, { useState } from 'react';
import { Heading } from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import FormControl, { Label } from '@codeday/topo/Molecule/FormControl';
import { default as Input } from '@codeday/topo/Atom/Input/Text';
import { Link } from '@codeday/topo/Atom/Text';
import Button from '@codeday/topo/Atom/Button';
import Page from '../components/page';

export default function Home() {
  const [link, setLink] = useState();
  const [loading, setLoading] = useState();
  const [password, setPassword] = useState();
  const [base, setBase] = useState();
  const [table, setTable] = useState();
  const [track, setTrack] = useState();
  const [initialState, setInitialState] = useState();
  const [resultStates, setResultStates] = useState();
	return (
		<Page slug="/link">
			<Content>
				<Heading as="h2" fontSize="5xl" textAlign="center">Make Review Link</Heading>
          {link && <Link href={`/${link}`}>Sharable link</Link>}
          <FormControl>
            <Label>Password</Label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl>
            <Label>Base</Label>
            <Input value={base} onChange={(e) => setBase(e.target.value)} />
          </FormControl>
          <FormControl>
            <Label>Table</Label>
            <Input value={table} onChange={(e) => setTable(e.target.value)} />
          </FormControl>
          <FormControl>
            <Label>Track</Label>
            <Input value={track} onChange={(e) => setTrack(e.target.value)} />
          </FormControl>
          <FormControl>
            <Label>Initial State</Label>
            <Input value={initialState} onChange={(e) => setInitialState(e.target.value)} />
          </FormControl>
          <FormControl>
            <Label>Result States</Label>
            <Input value={resultStates} onChange={(e) => setResultStates(e.target.value)} />
          </FormControl>
          <Button
            variantColor="green"
            disabled={loading || !(password && initialState && resultStates && track && base && table)}
            isLoading={loading}
            onClick={async (e) => {
              setLoading(true);
              try {
                const link = await fetch('/api/link', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ password, base, table, track, initialState, resultStates }),
                });
                setLink(await link.text());
              } catch (err) {
                console.error(err);
              }
              setLoading(false);
            }}
          >Submit</Button>
			</Content>
		</Page>
	)
}
