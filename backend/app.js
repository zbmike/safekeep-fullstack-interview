const express = require("express");

const { Participant } = require("./db/models");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// R
app.get("/api/participants", async (req, res) => {
  try {
    const data = await Participant.findAll();
    res.json({ success: "Read", data });
  } catch (error) {
    console.log(error);
  }
});

// C
app.post("/api/participants", async (req, res) => {
  const { name, surName, hour } = req.body;
  try {
    const data = await Participant.create({ name, surName, hour });
    res.json({ success: "Created", data });
  } catch (error) {
    console.log(error);
  }
});

// D
app.delete("/api/participants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Participant.destroy({ where: { id } });
    res.json({ success: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000);
