import React, { Component } from 'react';
import {connect} from 'react-redux';

export class List extends Component {
    render() {
        return (
            <div>
               Username:  <span>{this.props.username}</span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      username : state.username
    }
}

export default connect(mapStateToProps)(List);
