import getConfig from 'next/config';
import { sign } from 'jsonwebtoken';

const { serverRuntimeConfig } = getConfig();

export default async (req, res) => {
  const { password, base, table, initialState, resultStates, track } = req.body;

  if (password !== serverRuntimeConfig.appPassword) return res.send('bad password');
  return res.send(sign({ base, table, initialState, resultStates, track }, serverRuntimeConfig.appSecret, { expiresIn: "7d" }));
}
