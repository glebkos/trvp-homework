const pool = require('../config/db.ts');

exports.profilesGet = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM profiles');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.profileGet = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM profiles WHERE id=$1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.profilesAdd = async (req, res) => {
    try {
        const { name } = JSON.parse(req.body);
        const result = await pool.query('INSERT INTO profiles (name) VALUES ($1) RETURNING *', [name]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.profilesDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM profiles WHERE id=$1 RETURNING *', [id]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
