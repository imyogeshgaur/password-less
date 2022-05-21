<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Slot</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <style>
    .hidden {
      display: none;
    }

    .show {
      display: block;
    }
  </style>
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand mx-auto" href="#">Canteen Management System</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      </nav>
  <h1 class="text-center my-3">Book Your Slot </h1>
  <div class="alert alert-success alert-dismissible hidden" role="alert" id="alert" style="width:50%;margin-left: 25%;">
    <strong>Yeahhh !!!</strong>. Slot is Booked
  </div>
  <div class="card mt-3 show" style="width:50%;margin-left:25%" id="card1">
    <div class="card-body">
      <label class="my-3 ">Select Your Date of booking </label>
      <input type="date" name="" class="form-select" id="date">
      <label class="my-3 ">Select Your Slot </label>
      <select class="form-select form-select-md" aria-label=".form-select-md example" id="time">
        <option value="1"></option>
        <option value="10am - 12pm">10am - 12pm</option>
        <option value="2pm -4pm">2pm -4pm</option>
        <option value="6pm - 8pm">6pm - 8pm</option>
      </select>
      <label class="my-3 ">Select Type of Table </label>
      <select class="form-select form-select-md" aria-label=".form-select-md example" id="pers">
        <option value="1"></option>
        <option value="Single">Single</option>
        <option value="Couple">Couple</option>
        <option value="Family">Family</option>
        <option value="Large Family">Large Family</option>
      </select>
      <label class="my-3 ">Select Your Seating Type</label>
      <select class="form-select form-select-md mb-4" aria-label=".form-select-md example" id="pref">
        <option value="1"></option>
        <option value="Smoking">Smoking</option>
        <option value="Non Smoking">Non Smoking</option>
      </select>
      <button class="btn btn-danger" style="width:100%" onclick="bookSlot()">Submit</button>
    </div>
  </div>
  <div class="card mt-3 hidden" style="width:50%;margin-left:25%" id="card2">
    <div class="card-body">
      <label class="mb-3 ">Your Seating Type</label>
      <input type="text" name="" class="form-select" id="ip1">
      <label class="my-3 ">Your Date of booking </label>
      <input type="date" name="" class="form-select" id="ip2">
      <label class="my-3 ">Your Slot </label>
      <input type="text" name="" class="form-select" id="ip3">
      <label class="my-3 ">Type of Table</label>
      <input type="text" name="" class="form-select mb-4" id="ip4">
      <button class="btn btn-danger" style="width:100%" onclick="print()">Print Slip</button>
    </div>
  </div>
  <script>
    const bookSlot = () => {
      const card1 = document.getElementById("card1");
      const card2 = document.getElementById("card2");
      const pref = document.getElementById("pref");
      const time = document.getElementById("time");
      const pers = document.getElementById("pers");
      const date = document.getElementById("date").value;
      const ip1 = document.getElementById("ip1");
      const ip2 = document.getElementById("ip2");
      const ip3 = document.getElementById("ip3");
      const ip4 = document.getElementById("ip4");
      const alert = document.getElementById("alert");
      var prefVal = pref.options[pref.selectedIndex].text;
      var timeVal = time.options[time.selectedIndex].text;
      var persVal = pers.options[pers.selectedIndex].text;
      card1.classList.add("hidden");
      card1.classList.remove("show");
      card2.classList.remove("hidden");
      card2.classList.add("show");
      alert.classList.remove("hidden");
      alert.classList.add("show");
      ip1.value = prefVal
      ip2.value = date
      ip3.value = timeVal
      ip4.value = persVal;
    }
  </script>
</body>

</html>