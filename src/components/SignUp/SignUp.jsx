import React from "react";
// import './Login.css'; 
class SignUp extends React.Component {
  render() {
    return <form>
    <label>
      name
      <input type="text" name="name" />
    </label>
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
 

export default SignUp;