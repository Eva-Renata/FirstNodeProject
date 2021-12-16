import ArtistModel from '../models/artist.model.js';
const model = new ArtistModel();

class ArtistController {
    constructor() {

    }

    //alle af dem (liste)
    list = async (req,res) => {
        const result = await model.list(req, res);
        res.json(result)
    }

    //efter ID (1stk)
    get = async (req, res) => {
        const result = await model.get(req, res);
        res.json(result)  //vi udskriver i browseren
    }

    //POST en ny sang  (CREATE)
    create = async (req, res) => {
        const result = await model.create(req, res);
        res.json(result)  //vi udskriver i browseren
    }

    //PUT en sang (updte)
    update = async (req, res) => {
        const result = await model.update(req, res);
        res.json(result)  //vi udskriver i browseren
    }

    //DELETE
    delete = async (req, res) => {
        const result = await model.delete(req, res);
        res.json(result)  //vi udskriver i browseren
    }

    //SEARCH
    search = async (req, res) => {
        const result = await model.search(req, res);
        res.json(result)  //vi udskriver i browseren
    }
}

export default ArtistController;