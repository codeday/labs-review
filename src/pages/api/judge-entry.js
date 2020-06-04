import getConfig from 'next/config';
import Airtable from 'airtable';
import { verify } from 'jsonwebtoken';

const { serverRuntimeConfig } = getConfig();

export default async (req, res) => {
  const { jwt, id, state } = req.body;
  const { base, table, initialState, resultStates, track } = verify(jwt, serverRuntimeConfig.appSecret);
  const at = new Airtable({ apiKey: serverRuntimeConfig.airtableKey }).base(base)(table);

  if (!resultStates.split(',').includes(state)) throw new Error(`${state} is not an allowed state.`);

  const record = await at.find(id);
  if (record.fields.Status !== initialState) throw new Error(`Application is ${record.fields.State}, not ${initialState}.`);
  if (record.fields.Track !== track) throw new Error(`Entry is not in the ${track} Track`);

  try {
    await at.update([{
      id,
      fields: { Status: state },
    }]);
  } catch (err) {
    console.error(err);
    res.send('An error occurred');
  }

  res.send('ok');
}
