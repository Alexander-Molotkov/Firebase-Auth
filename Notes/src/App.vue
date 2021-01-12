<template>

  <form action="action_page.php" style="border:1px solid #ccc">
    <div class="container">

      <input type="text" placeholder="Enter Email" name="email" required>
      <br />
      <input type="password" placeholder="Enter Password" name="psw" required>

      <div class="clearfix">
        <button type="submit" class="signupbtn">Sign Up</button>
        <button type="submit" class="loginbtn">Log In</button>
      </div>

      <button type="button" class="google" onclick="

      ">Sign In With Google</button>
    </div>
  </form>

</template>

<script>
    import Home from './components/Home.vue';

    export default {
        name: 'app',
    components: {
      Home
    }
      };



</script>

<style lang="css" scoped>
* {box-sizing: border-box}

/* Full-width input fields */
  input[type=text], input[type=password] {
  text-align:center;
  width: 50%;
  padding: 15px;
  margin-right: px;
  margin-left: auto;
  margin-bottom: 10px;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #808080;
  color: white;
  padding: 14px 20px;
  margin: 8px;
  margin-right: 8px;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: px 20px;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
    width: 100%;
  }
}
</style>
