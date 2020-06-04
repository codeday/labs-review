import getConfig from 'next/config';
import Airtable from 'airtable';
import { verify } from 'jsonwebtoken';

const { serverRuntimeConfig } = getConfig();

export default async (req, res) => {
  const { base, table, initialState, track } = verify(req.body.jwt, serverRuntimeConfig.appSecret);
  const at = new Airtable({ apiKey: serverRuntimeConfig.airtableKey }).base(base)(table);
  const result = await (await at.select({
    maxRecords: 30,
    filterByFormula: `AND({Status} = '${initialState}', {Track} = '${track}')`,
    sort: [{field: "Cognito ID", direction: "asc"}],
    fields: [
      "Track",
      "Timezone",
      "Prior Experience",
      "Interests",
      "Past Project",
      "Anything Else",
      "LinkedIn",
      "Resume",
      "Student Type",
      "School",
      "Underrepresented",
      "Cognito ID",
    ]
  })).firstPage();
  if (result.length === 0) return res.send(null);

  const randomI = Math.floor(Math.random() * (result.length+1));

  return res.send({
    id: result[randomI].id,
    ...result[randomI].fields,
  });
}
