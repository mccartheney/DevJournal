const express = require ("express")
const router = express.Router()
const journalControllers = require("../controllers/journalControllers")

router.post("/create", journalControllers.create_journal)
router.get("/list", journalControllers.list_journals)
router.get("/view", journalControllers.view_Journal)
router.delete("/delete", journalControllers.delete_journal)
router.put("/edit", journalControllers.edit_Journal)

module.exports = router