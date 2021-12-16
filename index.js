import express from 'express';
import dotenv from 'dotenv';

import {router as SongRouter} from './Routes/song.router.js';
import {router as ArtistRouter} from './Routes/artist.router.js';

//kalder environment vars
dotenv.config();

const app = new express();

//we write this, when we want to post,update
app.use(express.urlencoded({
    extended:true
}))

const port = process.env.PORT || 3030;

app.use(SongRouter);
app.use(ArtistRouter);

app.listen(port, () => {
    console.log(`Server kører på port http://localhost:${port}`);
})

