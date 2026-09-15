import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(join(__dirname, '../public')));



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

app.listen(PORT, () => {
  console.log(`my supa cool app on port ${PORT}`)
})
