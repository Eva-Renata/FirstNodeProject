//i controllen har vi metoder, hvor vi kan liste, oprette, slette , osv. sange

import SongModel from '../models/song.model.js';
const model = new SongModel();

//vi opretter en klasse hvor vi kan have forskellige funktioner, variabler
class SongController {
    // constructor er en funktion, som er kørt, når vi kalder klassen
    constructor() {
        //console.log('Class songcontroller model is loaded');
    }

    //SONG CONTROLLER METHODS BEGIN
    //list af sange
    list = async (req, res) => {
        const result = await model.list(req, res);
        res.json(result)  //vi udskriver i browseren
    }

    //sang efter id med detaljer (1stk)
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
export default SongController;

