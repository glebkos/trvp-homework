const pool = require('../config/db.ts');

exports.settingsGet = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM settings WHERE id=1');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.settingsUpdate = async (req, res) => {
    const {N} = req.body;
    try {
        const result = await pool.query('UPDATE settings SET N=$1 WHERE id=1', [N]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
