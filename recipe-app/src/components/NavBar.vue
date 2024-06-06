<template>
    <nav class="navbar fixed-top  navbar-expand-lg navbar-dark pt-0.7 pb-1" id="navbar">
      <div class="container-fluid">
        <a href="" class="navbar-brand">
          <img src="images/logo2.jpg" alt="Avatar Logo" style="width:60px;" class="rounded-pill">
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/profile" class="nav-item nav-link">Profile</router-link>
            <router-link to="/about" class="nav-item nav-link active">About us</router-link>
          </div>
          <form class="d-flex">
            <div class="input-group">
              <input class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search">
              <button class="btn btn-outline my-2 my-sm-0" type="submit">Search</button>
            </div>
          </form>
          <div class="navbar-nav">
            <router-link to="/register" class="nav-item nav-link">Sign up</router-link>
            <router-link to="/login" class="nav-item nav-link">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
export default {
  mounted() {
    this.init();
  },
  methods: {
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
.navbar {
    background-color: #2F70AF;
    font-family: 'Oswald';
    font-size: 20px;

}

/* 
    search button
*/

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

    :hover {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }

}
  </style>
  