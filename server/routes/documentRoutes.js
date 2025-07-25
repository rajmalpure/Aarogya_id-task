const express = require("express");
const router = express.Router();

const { extractDocumentData } = require("../controllers/documentController");

router.post("/", extractDocumentData);

module.exports = router;
