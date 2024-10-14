const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 4000;

// PostgreSQL 연결 설정
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "player_synergy",
  password: "postgres",
  port: 5432,
});
console.log(pool);
// 타자 데이터 조회 API
app.get("/batters", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM batters");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// 투수 데이터 조회 API
app.get("/pitchers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM pitchers");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
