const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let userGoal = 'Học Docker!';
let userResult = "Để biết DevOps!"

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send(`
    
      
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      
        <div class="row align-items-center" style="height: 100vh;">
          <div class="mx-auto col-4">
            <section class="border border-success rounded-5 p-3">
              <h2 class="h2 text-success">Đỗ Minh Đăng</h2>
              <h3 class="h3 text-secondary">${userGoal}</h3>
              <h2 class="h2 text-info">Kết quả</h2>
              <h3 class="h3 text-secondary">${userResult}</h3>
            </section>
            <form action="/store-goal" method="POST">
              <div class="form-control p-5 border border-primary rounded-5 mt-5 mb-5">
                <div class = "mb-3 row">
                  <label class="form-label">Mục tiêu</label>
                  <input type="text" class = "form-control border rounded-pill p-3 text-lg-start" name="goal">
                </div>
                <div class ="mb-3 row">
                  <label class="form-label">Kết quả</label>
                  <input type="text" class="form-control border rounded-pill p-3 text-lg-start" name="result">
                </div>
              </div>
              <button class="btn btn-lg btn-primary w-100 border rounded-pill">Đặt mục tiêu</button>
            </form>
          </div>
        </div>
    
  
`);
});
app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  const enteredResult = req.body.result;
  console.log(enteredGoal);
  console.log(enteredResult);
  userGoal = enteredGoal;
  userResult = enteredResult;
  res.redirect('/');
});


app.listen(80);