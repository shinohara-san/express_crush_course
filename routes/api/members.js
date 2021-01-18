const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");

//Get all members
// router.get("/api/members", (req, res) => res.json(members));.
router.get("/", (req, res) => res.json(members));

//Get single member
// router.get("/api/members/:id", (req, res) => {
router.get("/:id", (req, res) => {
  //このgetはget送信のget
  // res.send(req.params.id);
  const found = members.some(member => member.id === parseInt(req.params.id));
  //someは存在するかをbooleanで返す
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

//Create Members
router.post("/", (req, res) => {
  // res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name, 
    email: req.body.email
  }

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
    //returnつければelseで書かなくてもいいheader already sentが出てこないようになる
  }
  members.push(newMember);
  res.send(members);
  // res.redirect("/");
});

//Update Member == putを使う
router.put("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  //someは存在するかをbooleanで返す
  if (found) {
    const updateMember = req.body; //get name and email
    members.forEach(member => {
      if (member.id == parseInt(req.params.id)) {
        member.name = updateMember.name ? updateMember.name : member.name;
        member.email = updateMember.email ? updateMember.email : member.email;

        res.send({ msg: "Member updated", member })
        //== member : member
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

//Delete member
router.delete("/:id", (req, res) => {
  //このgetはget送信のget
  // res.send(req.params.id);
  const found = members.some(member => member.id === parseInt(req.params.id));
  //someは存在するかをbooleanで返す
  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter(member => member.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;