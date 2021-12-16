import express from 'express';  //importerer express, efter den har været installeret i terminalen. (npm install express)
import SongController from '../controllers/song.controller.js'  //vi har ikke {} fordi den er default

const router = express.Router();  //kalder på router
//constanten bærer express.Router objekt

//instans (forekomst) af SangController
const controller = new SongController();

//SONG ROUTES BEGIN

//kalder routes med controller functions.
//GET LISTEN med sange (med id og artist)
router.get('/api/songs', (req, res) => {controller.list(req, res)});

// GET 1 STK song sammen med flere info
//regex så vi kan kalde på id. (fra 0-9 tal)
router.get('/api/songs/:id([0-9]*)', (req, res) => {controller.get(req, res)});

//POST en sang (ADD/CREATE)
router.post('/api/songs', (req, res) => {controller.create(req, res)});

//PUT (UPDATE) en sang
router.put('/api/songs', (req, res) => {controller.update(req, res)});

//DELETE 
router.delete('/api/songs/:id([0-9]*)', (req, res) => {controller.delete(req, res)});

//SEARCH
//we type in and search
router.get('/api/songs/search/:keyword([a-zA-Z0-9]*)', (req, res) => {controller.search(req, res)});

router.post('/api/songs/search', (req, res) => {
    req.params.keyword = req.body.keyword;
    controller.search(req, res)
});

//SONG ROUTES END

export {router}


