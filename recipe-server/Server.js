const { Pool } = require('pg');
const express = require("express");
const path = require("path"); 

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../recipe-app/dist')));

const pool = new Pool({
  user: 'postgres',
  password: 'marichka1104',
  host: 'localhost',
  port: 5432,
  database: 'Recipes'
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../recipe-app/dist', 'index.html'));
});
app.get('/recipes', async (req, res) => {
  try {
    const author = req.query.author;
    const rows = await readRecipes(author);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(rows));
  } catch (e) {
    console.error('Error reading recipes:', e);
    res.status(500).send('Internal Server Error');
  }
});

app.post("/recipes", async (req, res) => {
  let result = {};
  try {
    const recipe = req.body;
    const success = await createRecipe(recipe);
    result.success = success;
    if (!success) {
      result.error = 'Failed to create recipe';
    }
  } catch (e) {
    console.error('Error creating recipe:', e);
    result.success = false;
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

app.delete("/recipes", async (req, res) => {
  let result = {};
  try {
    const { Name } = req.body;
    const success = await deleteRecipe(Name);
    result.success = success;
  } catch (e) {
    result.success = false;
  } finally {
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(result));
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

async function readRecipes(author) {
  try {
    const results = await pool.query('SELECT "Name", "Steps", "Author", "Calories" FROM "Recipe" WHERE "Author" = $1', [author]);
    return results.rows;
  } catch (e) {
    return [];
  }
}

async function createRecipe(recipe) {
  const { Name, Steps, Author, Calories } = recipe;
  try {
    await pool.query('INSERT INTO "Recipe" ("Name", "Steps", "Author", "Calories") VALUES ($1, $2, $3, $4)', 
      [Name, Steps, Author, Calories]);
    return true;
  } catch (e) {
    console.error('Error creating recipe:', e);
    return false;
  }
}

async function deleteRecipe(name) {
  try {
    await pool.query('DELETE FROM "Recipe" WHERE "Name" = $1', [name]);
    return true;
  } catch (e) {
    console.error('Error deleting recipe:', e);
    return false;
  }
}

process.on('SIGINT', async () => {
  await pool.end();
  process.exit(0);
});