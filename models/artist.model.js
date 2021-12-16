import db from '../config/db.config.js';

class ArtistModel {
    constructor() {

    }

    //alle af dem (liste)
    list = (req, res) => {
        return new Promise ((resolve,reject) => {
            const orderBy = req.query.orderBy || 'a.id';
            const limit = req.query.limit ? `LIMIT ${req.query.orderBy}` : '';
            const dir = req.query.dir || 'ASC'
            const sql = `SELECT *   
                        FROM artist a
                        ORDER BY ${orderBy} ${dir}
                        ${limit}
                        `;
            db.query(sql,(err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    }

    //efter ID (1stk)
    get = (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT *
                            FROM artist a
                            WHERE a.id = ?`;
            db.query(sql, [req.params.id], (err, result) => {
                if(err){
                    reject(err)
                }else {
                    resolve(...result) 
                }
            });
        })
    }

    //POST opret en ny artist CREATE
    create = (req, res) => {
        return new Promise((resolve, reject) => {
            const arrValues = Object.values(req.body)
            const sql = `INSERT INTO artist(name, artist_id)
                            VALUES(?,?)`
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
            const sql = `UPDATE artist
                            SET name = ?,
                            id = ?,
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
            const sql = `DELETE FROM artist
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
            const search = req.params.keyword ? `WHERE a.name LIKE '%${req.params.keyword}%'` : ''
            const sql = `SELECT *
                            FROM artist a
                            WHERE a.name = ?
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
export default ArtistModel;