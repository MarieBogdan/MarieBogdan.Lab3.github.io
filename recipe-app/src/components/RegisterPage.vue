<template>
    <div class="my-form">
    <h1>Registration Form</h1>
    <form name="myForm">
        <div class="mb-3" id="username_div">
          <label class="form-label">Full Name</label>
          <input class="form-control" name="Name" id="Name" placeholder="Name">
          <div id="name_error"></div>
        </div>
        <div class="mb-3">
          <label class="form-label">Gender</label>
          <div class="col-sm-10">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
          </div>
        </div>
        <div class="mb-3" id="birthday_div">
          <label class="form-label">Birthday</label>
          <input class="form-control" name="Birthday" id="inputDate"  placeholder="mm/dd/yyyy">
          <div id="birthday_error"></div>
        </div>
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
        <button type="submit" class="btn btn-light mt-3">SIGN UP</button>
        
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
