const express = require ("express")
const router = express.Router()

const journalRoutes = require("./journal_routes")

router.use ("/api", journalRoutes)

module.exports = router