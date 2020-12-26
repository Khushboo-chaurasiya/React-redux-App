import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import "./AppLogin.css";

var userNameGlobal = "";
var pass = "";
var property = "";
const Login = {   
"username":"hruday@gmail.com",
"password" :"hruday123"
} 

function AppLogin(props) {  
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  property = props;

  useEffect(() => {
    userNameGlobal = loginName;
    pass = password;
  }, [loginName, password])


  return (
    <div className="Container">
    <form className="form-horizontal">
      <br/>
      <div className="form-group">
        <div className="form-group">
          <label className="control-label col-sm-4"><b>Username:</b></label>
          <div className="col-sm-12">          
              <input type="email" className="form-control" id="email" placeholder="Enter username" name="email" value={loginName}
              onChange={(e) => setLoginName(e.target.value)} />
          </div>
          {loginName==="" && <p className="control-label col-sm-12 ErrorPara">*Username is mandetory*</p>}
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2"><b>Password:</b></label>
          <div className="col-sm-12">          
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          {password==="" && <p className="control-label col-sm-12 ErrorPara">*Password is mandetory*</p>}
        </div>

        <div className="form-group">        
          <div className="btnCenter">
             {
               loginName && password ? <button type="button" className="btn btn-danger" onClick={props.onLoginClicked}>Login</button> : <button type="button" disabled className="btn btn-danger">Login</button>
             } 
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    username : state.username
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    onLoginClicked : () => {
      if(userNameGlobal === Login.username && pass === Login.password){
        dispatch({type:"LOGIN_CLICKED", value:userNameGlobal})
        property.history.push('/employeeList')
        
      } else {
        alert("You are not authorised to login!!")
      }
    } 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLogin);
