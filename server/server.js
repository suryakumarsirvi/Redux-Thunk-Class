import app from './src/app.js';
import { CONFIG } from './src/configs/env.config.js';
import { users } from './src/data/users.data.js';

app.get('/api/users', (req, res) => {
  res.json(users);
})

app.listen(CONFIG.SERVER_PORT, () => {
  console.log(`Server is running on host ${CONFIG.SERVER_HOST} and port ${CONFIG.SERVER_PORT}`);
});
