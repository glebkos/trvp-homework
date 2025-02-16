const pool = require('../config/db.ts');

exports.managerListGet = async (req, res) => {
    try {
        const result = (await pool.query('SELECT manager_id as id, manager_name as name, manager_profile as profile FROM manager'));
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.managerGet = async (req, res) => {
    try {
        const { id } = req.params;
        const result = (await pool.query('SELECT (manager_id as id, manager_name as name, manager_profile as profile) FROM manager WHERE manager_id=$1', [id]));
        const clients = await pool.query('SELECT * FROM clients WHERE clients_manager=$1', [id]);
        result.rows[0].clients = clients ? clients.rows : {};
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.managerUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, profile} = req.body;
        const result = await pool.query('UPDATE manager SET manager_name=$1, manager_profile=$2 WHERE manager_id=$3', [name, profile, id]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.managerAdd = async (req, res) => {
    try {
        const {name, profile} = req.body;
        const result = await pool.query('INSERT INTO manager (manager_name, manager_profile) VALUES($1, $2)', [name, profile]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.managerDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM manager WHERE manager_id=$1', [id]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
