const pool = require('../config/db.ts');

exports.profilesGet = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM profiles');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.profilesAdd = async (req, res) => {
    try {
        console.log(req);
        const { name } = req.body;
        const result = await pool.query('INSERT INTO profiles (name) VALUES ($1)', [name]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
