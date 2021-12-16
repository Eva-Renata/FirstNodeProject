import db from '../config/db.config.js';

class SongModel {
    constructor() {
        //console.log('Class song model is loaded');
    }

    //SONG MODEL METHODS BEGIN
    //list of songs joined with artist
    list = ( req, res) => {
        return new Promise ((resolve,reject) => {
            const orderBy = req.query.orderBy || 's.id';
            const limit = req.query.limit ? `LIMIT ${req.query.limit}` : '';  //  ? betyder hvis limit har en værdi, : ellers, så den er tom
            const dir = req.query.dir || 'ASC';
            const search = req.query.keyword ? `WHERE s.title LIKE '%${req.query.keyword}%'` : ''

            const sql = `SELECT s.id, s.title, a.name AS artist   
                            FROM song s 
                            JOIN artist a
                            ON s.artist_id = a.id
                            ${search}
                            ORDER BY ${orderBy} ${dir}
                            ${limit}
                            `;
                            console.log(sql);
            db.query(sql,(err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    //get after ID
    //metoden get
    get = (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT s.id, s.title, s.content, s.artist_id, a.name AS artist, s.created
                            FROM song s
                            JOIN artist a
                            ON s.artist_id = a.id
                            WHERE s.id = ?`;
            db.query(sql, [req.params.id], (err, result) => {
                if(err){
                    reject(err)
                }else {
                    resolve(...result) 
                }
            });
        })
    }

    //POST opret en ny sang CREATE
    create = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrValues = Object.values(req.body)
            const sql = `INSERT INTO song(title, content, artist_id)
                            VALUES(?,?,?)`
            db.query(sql, arrValues, (err, result) => {
                if(err) {
                    reject(err)
                } else {
                    resolve({ status: true, id:result.insertId })
                }
            })
        })
    }

    //PUT  -> UPDATE
    update = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrValues = Object.values(req.body)
            console.log(arrValues);
            const sql = `UPDATE song
                            SET title = ?,
                            content = ?,
                            artist_id = ? 
                            WHERE id = ?`
            db.query(sql, arrValues, (err, result) => {
                if(err) {
                    reject(err)
                } else {
                    resolve({ status: true, id: req.body.id })
                }
            })
        })
    }

    //DELETE
    delete = (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM song
                            WHERE id = ? `;
            db.query(sql, [req.params.id], (err, result) => {
                if(err){
                    reject(err)
                }else {
                    resolve({status: true}) ;
                }
            });
        })
    }


    //SEARCH
    search = (req,res) => {
        return new Promise ((resolve,reject) => {
            const search = req.params.keyword ? `WHERE s.title LIKE '%${req.params.keyword}%'` : ''
            const sql = `SELECT s.id, s.title, a.name AS artist   
                            FROM song s 
                            JOIN artist a
                            ON s.artist_id = a.id
                            ${search}
                            `;
                            console.log(sql);
            db.query(sql,(err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
    }

    
}
export default SongModel;
