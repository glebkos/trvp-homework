const pool = require('../config/db.ts');

exports.clientsGet = async (req, res) => {
    try {
        const {profile} = req.query;
        let result;
        if (profile) {
            result = await pool.query('SELECT clients_id as id, clients_name as name, clients_profile as profile, clients_manager as manager FROM clients WHERE clients_profile=$1', [profile]);
        } else {
            result = await pool.query('SELECT clients_id as id, clients_name as name, clients_profile as profile, clients_manager as manager FROM clients');
        }
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.clientGet = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query('SELECT clients_id as id, clients_name as name, clients_profile as profile, clients_manager as manager FROM clients WHERE clients_id=$1', [id]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.clientsUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, profile, manager} = JSON.parse(req.body);
        const curProfile = (await pool.query('SELECT clients_profile as profile FROM clients WHERE clients_id=$1', [id])).rows?.[0].profile;
        if (manager){
            const N = (await pool.query('SELECT * FROM settings WHERE id=1'))?.rows?.[0]?.n;
            const clientsCount = (await pool.query('SELECT * FROM clients WHERE clients_manager=$1', [manager]))?.rowCount;
            if (clientsCount >= N){
                res.status(400).json({error: "Bad request", status: 400});
                return;
            }
        }
        await pool.query('UPDATE clients SET clients_name=$1, clients_profile=$2, clients_manager=$3 WHERE clients_id=$4', [name, profile, manager, id]);
        const result = await pool.query('SELECT clients_id as id, clients_name as name, clients_profile as profile, clients_manager as manager FROM clients WHERE clients_profile=$1', [curProfile]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.clientsAdd = async (req, res) => {
    try {
        const {name, profile, manager} = JSON.parse(req.body);
        await pool.query('INSERT INTO clients (clients_name, clients_profile, clients_manager) VALUES($1, $2, $3)', [name, profile, manager]);
        const result = await pool.query('SELECT clients_id as id, clients_name as name, clients_profile as profile, clients_manager as manager FROM clients WHERE clients_profile=$1', [profile]);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.clientsDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = (await pool.query('SELECT clients_profile FROM clients WHERE clients_id=$1', [id])).rows?.[0].clients_profile;
        await pool.query('DELETE FROM clients WHERE clients_id=$1 RETURNING *', [id]);
        const result = await pool.query('SELECT clients_id as id, clients_name as name, clients_profile as profile, clients_manager as manager FROM clients WHERE clients_profile=$1', [profile]);
            res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
