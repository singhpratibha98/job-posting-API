const express = require("express");

const router = express.Router();
const jobController = require("../Controller/job");




router.post("",jobController.createJob);

router.get("",jobController.getJOb);

router.patch("",jobController.editJob);

router.delete("",jobController.deleteJob);



module.exports= router;
