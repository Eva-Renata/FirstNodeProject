import express from 'express';
import ArtistController from '../controllers/artist.controller.js'

const router = express.Router();

const controller = new ArtistController();

//kalder routes med controller functions. ARTIST ROUTES BEGIN
//alle af dem (liste)
router.get('/api/artists', (req, res) => {
    controller.list(req, res)
});

//efter ID (1stk)
router.get('/api/artists/:id([0-9]*)', (req, res) => {
    controller.get(req, res)
});

//POST en sang (ADD/CREATE)
router.post('/api/artists', (req, res) => {controller.create(req, res)});

//PUT (UPDATE) en sang
router.put('/api/artists', (req, res) => {controller.update(req, res)});

//DELETE 
router.delete('/api/artists/:id([0-9]*)', (req, res) => {controller.delete(req, res)});

//SEARCH
//we type in and search
router.get('/api/artists/search/:keyword([a-zA-Z0-9]*)', (req, res) => {controller.search(req, res)});

router.post('/api/artists/search', (req, res) => {
    req.params.keyword = req.body.keyword;
    controller.search(req, res)
});

export {router}