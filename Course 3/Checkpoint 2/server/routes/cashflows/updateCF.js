let express = require('express')
let router = express.Router()
const db = require('../../queries')

  
router.put('/api/investors/invid/:InvID/cf', (request, result, next) => {
    let { row } = request.body
    console.log([row.InvID, row.CID, row.CFID, row.CF_Amount, row.CF_Date, row.ID])
    let updateCF = 
    'UPDATE "tblIDB_Investments_CF" '+
    'SET "InvID" = $1, "CID" = $2, "CFID"= $3, "CF_Amount" = $4 , "CF_Date" = $5 '+
    'WHERE "ID" = $6'
    db.query(updateCF, [row.InvID, row.CID, row.CFID, row.CF_Amount, row.CF_Date, row.ID] , (err, res2) => {
    if (err) {
        return next(err)
    }
    result.send("Cashflows Updated")
    })
})
module.exports = router
