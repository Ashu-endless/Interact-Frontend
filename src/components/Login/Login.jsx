import React from "react";
// import './Login.css'; 
class Login extends React.Component {



  
  render() {
    return <form>
    <label>
      Username
      <input type="text" name="name" />
    </label>
    <label>
      Password:
      <input type="text" name="password" onSubmit={()=>{console.log('submit')}} />
    </label>
    <input type="submit" value="Submit"  />
  </form>
  }
}
 

export default Login;