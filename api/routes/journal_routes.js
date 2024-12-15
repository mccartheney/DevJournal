const express = require ("express")
const router = express.Router()
const journalControllers = require("../controllers/journalControllers")

router.post("/create", journalControllers.create_journal)
router.get("/list", journalControllers.list_journals)

module.exports = router