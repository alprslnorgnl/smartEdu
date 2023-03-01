const express = require("express");
//express modülü bir nesne return eden bir fonksiyon içerir ve bu fonksiyonu biz express değişkenine atarız.



const app = express();
// Bu kod bize object döndürür.

app.get("/", (req, res) => {
  res.send("INDEX SAYFASI");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started on --> http://localhost:${port}`);
});
