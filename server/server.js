const PORT = process.env.PORT || 5050;
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const supabase = require('./supabaseClient');

app.use(cors({
  origin: '*',
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/products', async (req, res) => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});