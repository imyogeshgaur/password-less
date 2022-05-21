<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Canteen Management System</title>
</head>
<style>
  .carousel-control-prev-icon{
    background-color:red;
  }
  .carousel-control-next-icon{
    background-color:red;
  }
  </style>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Canteen Management System</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/happyRestraunt/login.php">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/happyRestraunt/register.php">Register</a>
              </li>
             </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
    <h1 class="text-center" style="color:red">Items Avaliable</h1>
    <div class="carousel-item d-flex active mt-5">
    <div class="card" style="width:30%;margin-left:15%">
  <img src="https://shorturl.at/eksLM" class="card-img-top" alt="Chole Bhature" width="100px" height="100px">
  <div class="card-body">
    <h5 class="card-title">Chole Bhature</h5>
    <p class="card-text">Price: $160</p>
    <a href="login.php" class="btn btn-danger">Buy</a>
  </div>
</div>
<div class="card" style="width: 30%;margin-left:5%">
  <img src="https://rb.gy/e7ktot" class="card-img-top" alt="..." width="100px" height="100px">
  <div class="card-body">
    <h5 class="card-title">Pizza</h5>
    <p class="card-text">Price: $250</p>
    <a href="login.php" class="btn btn-danger">Buy</a>
  </div>
</div>
<div class="card" style="width: 30%;margin-left:5%;margin-right:15%">
  <img src="https://rb.gy/ukdeqr" class="card-img-top" alt="..." width="100px" height="100px">
  <div class="card-body">
    <h5 class="card-title">Veg Burger</h5>
    <p class="card-text">Price: $50</p>
    <a href="login.php" class="btn btn-danger" width="100px" height="100px">Buy</a>
  </div>
</div>
    </div>
    <div class="carousel-item d-flex mt-5">
    <div class="card" style="width:30%;margin-left:15%">
  <img src="https://rb.gy/ssfkh6" class="card-img-top" alt="..." width="100px" height="100px">
  <div class="card-body">
    <h5 class="card-title">Veg Momos</h5>
    <p class="card-text">Price : $65</p>
    <a href="login.php" class="btn btn-danger">Buy</a>
  </div>
</div>
<div class="card" style="width: 30%;margin-left:5%">
  <img src="https://rb.gy/1rhvba" class="card-img-top" alt="Veg Biryani" width="100px" height="100px">
  <div class="card-body">
    <h5 class="card-title">Veg Biryani</h5>
    <p class="card-text">Price : $140</p>
    <a href="login.php" class="btn btn-danger">Buy</a>
  </div>
</div>
<div class="card" style="width: 30%;margin-left:5%;margin-right:15%">
  <img src="https://tinyurl.com/2aannbf7" class="card-img-top" alt="Cold Coffee" width="100px" height="100px">
  <div class="card-body">
    <h5 class="card-title">Cold Coffee</h5>
    <p class="card-text">Price : $60</p>
    <a href="login.php" class="btn btn-danger">Buy</a>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>   
</body>
</html>
