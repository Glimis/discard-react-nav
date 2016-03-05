import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NavLink from './components/NavLink'




class Nav extends React.Component {
    render() {
      let {nav,onClick}=this.props;
      var html=[];
       
      nav.forEach(function(value,index){
         html.push(<NavLink key={index} data={value} onClick={onClick}></NavLink>);
      })
    
      return (<table className="table table-bordered table-hover">
        {html}</table>)
    }
}




const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    dispatch:dispatch,
    onClick:function(){
        dispatch({
          type:'NAV-ChangeName'
        })
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)