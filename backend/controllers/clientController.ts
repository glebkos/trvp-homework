const pool = require('../config/db.ts');

exports.clientsGet = async (req, res) => {
    try {
        const {profile} = req.body;
        const result = (await pool.query('SELECT * FROM clients WHERE clients_profile=$1', [profile]));
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.clientsUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, profile, manager} = req.body;
        const result = await pool.query('UPDATE clients SET clients_name=$1, clients_profile=$2, clients_manager=$3 WHERE clients_id=$4', [name, profile, manager, id]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.clientsAdd = async (req, res) => {
    try {
        const {name, profile, manager} = req.body;
        const result = await pool.query('INSERT INTO clients (clients_name, clients_profile, clients_manager) VALUES($1, $2, $3)', [name, profile, manager]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.clientsDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM clients WHERE clients_id=$1', [id]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
