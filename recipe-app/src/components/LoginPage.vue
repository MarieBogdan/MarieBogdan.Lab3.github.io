<template>
    <div class="my-form">
    <h1>Login Form</h1>
    <form id="myForm">
        <div class="mb-3" id="email_div">
            <label class="form-label">Email address</label>
            <input class="form-control" name="Email" id="inputEmail">
            <div id="email_error"></div>
          </div>
        <div class="mb-3" id="password_div">
            <label class="form-label">Password</label>
            <input class="form-control" name="Password" id="inputPassword">
            <div id="password_error"></div>
          </div>
        <button type="submit" class="btn btn-light mt-3">LOGIN</button>
        <p>Not a member? <a href="register.html">Sign Up now</a></p>
    </form>
  </div>
  </template>
  
  <script>

</script>
  
  <style scoped>
  body {
    background-color: #00457E;


}
.my-form{
    padding: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    color: #fff;
    border: 3px solid #806491;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
    line-height: 20px;
    background-color:#02315E;   
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Courier New', monospace;
   
}
h1{
    font-size: 40px;
    text-align: center;
    font-family: 'Allura';    
}

.form-control{
    background-color: inherit;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    border-radius: 0;
    padding-left: 0;
}
.form-control:focus{
    background-color: inherit;
    color: #fff;
    border-color: #fff;
}
.btn{
    cursor: pointer;
    outline: 0;
    width: 100%;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: #806491;
    border: 1px solid #806491;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #ffffff;
    border-color: #ffffff;
    :hover {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
}

.input-group-append {
    cursor: pointer;
  }


  </style>
