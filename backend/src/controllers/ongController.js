const crypto = require('crypto');
const conenction = require('../database/connection');

module.exports = {

    async list(req, res) {
        const ongs = await conenction('ongs').select('*');
        return res.json(ongs);
    },

    async create(req, res) {
        const {name, email, whatsapp, city, uf } = req.body;
    
        const id = crypto.randomBytes(4).toString('HEX');

        await conenction('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });


    return res.json({ id });

    }
};
