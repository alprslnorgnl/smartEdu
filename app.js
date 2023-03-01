//express modülü bir nesne return eden bir fonksiyon içerir ve bu fonksiyonu biz express değişkenine atarız.
const express = require("express");



// Bu kod bize object döndürür.
const app = express();

//Template Engine
app.set("view engine","ejs")

//MIDDLEWARES

//app.use() Herhangi bir HTTP isteği için çalıştırılacak fonksiyonları belirler
app.use(express.static("public"))


//ROUTES
app.get("/", (req, res) => {
  res.status(200).render('index',{
    page_name: 'index'
  });
});

app.get("/about", (req, res) => {
  res.status(200).render('about',{
    page_name: 'about'
  });
});




const port = 3000;
app.listen(port, () => {
  console.log(`App started on --> http://localhost:${port}`);
});
