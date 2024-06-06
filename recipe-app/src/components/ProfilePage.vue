<template>
    <div class="m-4">
      
  
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-md-4">
              <img src="images/profile.jpg" style="width: 100%;">
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6">
              <h3>User information</h3>
              <table class="table-information">
                <tbody>
                  <tr>
                    <td>
                      <p>Name</p>
                    </td>
                    <td>
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" id="validationCustom01" value="Serena Montgomery" required>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Email</p>
                    </td>
                    <td>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" id="validationCustom01" value="noreply@email.com" required>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Birthday</p>
                    </td>
                    <td>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="mm/dd/yyyy" aria-label="Birthday" id="validationCustom01" value="11/11/2001" required>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button @click="goToAddRecipePage" class="btn">Add Recipe</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  
      <h1>4 Created Recipes</h1>
      <div class="recipes-container">
        <div class="recipes-content">
          <div class="row justify-content-center">
            <div class="recipe-card">
              <div class="img-wrapper"><img src="images/1.jpg" class="d-block w-100" alt="Recipe image"> </div>
              <div class="card-body">
                <h5 class="card-title">Lemon Garlic Butter Chicken</h5>
                <button class="btn">See whole recipe</button>
              </div>
            </div>
            <div class="recipe-card">
              <div class="img-wrapper"><img src="images/2.jpg" class="d-block w-100" alt="Recipe image"> </div>
              <div class="card-body">
                <h5 class="card-title">Healthy Sesame Chickent</h5>
                <button class="btn">See whole recipe</button>
              </div>
            </div>
            <div class="recipe-card">
              <div class="img-wrapper"><img src="images/3.jpg" class="d-block w-100" alt="Recipe image"> </div>
              <div class="card-body">
                <h5 class="card-title">Tomato gnocchi with burrata</h5>
                <button class="btn">See whole recipe</button>
              </div>
            </div>
            <div class="recipe-card">
              <div class="img-wrapper"><img src="images/4.jpg" class="d-block w-100" alt="Recipe image"> </div>
              <div class="card-body">
                <h5 class="card-title">Chicken with Roasted Tomatoes</h5>
                <button class="btn">See whole recipe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <section class="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" class="me-4 text-reset"><i class="fab fa-facebook"></i></a>
            <a href="" class="me-4 text-reset"><i class="fab fa-twitter"></i></a>
            <a href="" class="me-4 text-reset"><i class="fab fa-google"></i></a>
            <a href="" class="me-4 text-reset"><i class="fab fa-instagram"></i></a>
            <a href="" class="me-4 text-reset"><i class="fab fa-linkedin"></i></a>
            <a href="" class="me-4 text-reset"><i class="fab fa-github"></i></a>
          </div>
        </section>
        <div class="text-center p-3">© 2024 Recipes & Inspiration; Created by Marie Bogdan</div>
      </footer>
    </div>
  </template>
  
  <script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    goToAddRecipePage() {
      this.$router.push({ path: '/addRecipe' });
    },
    init() {
      this.trackScroll();
    },
    showNavbar() {
      var navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.style.top = "0";
      }
    },
    hideNavbar() {
      var navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.style.top = "-70px";
      }
    },
    trackScroll() {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          this.showNavbar();
        } else {
          this.hideNavbar();
        }
        prevScrollpos = currentScrollPos;
      };
    },
  },
};
  </script>
  
  <style scoped>
  body {
    background-color: #00457E;
  }
  .navbar {
    background-color: #2F70AF;
    font-family: 'Oswald';
    font-size: 20px;
  }
  .input-group button {
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    color: #ffffff;
    border-color: #ffffff;
  }
  .input-group button:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .container, .recipes-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    padding: 15px;
    font-family: 'Courier New', monospace;
  }
  .table-information td {
    padding-right: 15px;
    color: #fff;
  }
  .content {
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
    margin-top: 100px;
    color: #fff;
    font-family: 'Courier New', monospace;
    border: 3px solid #806491;
  }
  .content img {
    width: 100%;
  }
  .form-control:focus {
    background-color: inherit;
    color: #fff;
    border-color: #fff;
  }
  .table-information .form-control {
    background-color: inherit;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    border-radius: 0;
    padding-left: 0;
  }
  .recipes-content {
    margin-top: 50px;
    color: #fff;
    font-family: 'Courier New', monospace;
    display: flex;
  }
  .recipes-container {
    display: flex;
  }
  h1 {
    text-align: center;
    margin-top: 40px;
    font-family: 'Allura';
    font-size: 60px;
    color: #fff;
  }
  .recipe-card {
    background-color: #fff;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
    height: 550px;
    margin: 10px;
  }
  .recipe-card .img-wrapper {
    max-width: 100%;
    height: 25em;
    display: flex;
    justify-content: left;
    align-items: left;
    padding-top: 10px;
  }
  .recipe-card img {
    width: 100%;
  }
  .card-body .card-text {
    position: absolute;
    bottom: 70px;
  }
  .card-body .card-title {
    color: #000;
    height: auto;
    font-size: 17px;
    font-weight: bold;
    text-transform: capitalize;
  }
  .btn {
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: #806491;
    border: 1px solid #806491;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    color: #ffffff;
    border-color: #ffffff;
  }
  .btn:hover {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
  }
  .recipe-card {
    width: 23%;
  }
  @media (max-width: 1200px) {
    .recipe-card {
      width: 30%;
    }
  }
  @media (max-width: 1000px) {
    .recipe-card {
      width: 45%;
    }
    .content img {
      width: 100%;
    }
    h3 {
      padding: 10px;
    }
  }
  footer {
    background-color: #2F70AF;
    color: #fff;
    font-family: 'Oswald';
  }
  </style>