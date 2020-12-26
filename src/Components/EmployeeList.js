import React from "react";
import { connect } from "react-redux";
import DashBoardPage from "../Assets/Json/Listdata.json";

function EmployeeList(props) {
  return (
    <div>
      <p className="paraCSS">
        &nbsp; <span className="Left"> Welcome {props.username} </span>
        <span className="Right"> {props.username} </span>
      </p>
      {
    
          <table className="tableCenter styled-table">
            <thead>
              <tr>
                <th> ID </th> <th> Name </th> <th> Age </th> <th> Gender </th>
                <th> Email </th> <th> Phone </th>
              </tr>
            </thead>
            <tbody>
              
              {DashBoardPage.map((item) => (
                <tr key={item.id}>
                  <td> {item.id} </td> <td> {item.name} </td>
                  <td> {item.age} </td> <td> {item.gender} </td>
                  <td> {item.email} </td> <td> {item.phoneNo} </td>
                </tr>
              ))}
            </tbody>
          </table>
        
      }
      <p className="paraCSSEnd">&nbsp;
        <span>
          <small>
            &copy; Copyright {new Date().getFullYear()}, Khushboo Chaurasiya
          </small>
        </span>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps)(EmployeeList);
