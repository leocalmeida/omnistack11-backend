const generateUniqID = require("../Util/generateUniqueID");
const connection = require('../database/connection');

module.exports = {
    async create(request,response) {
        const {nome, email, whatsapp, cidade, uf} = request.body;
        const id = generateUniqID();

        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf
        });

        return response.json({id});
    },

    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    }
}
