import React from 'react'


export default class NavLink extends React.Component {
    render() {
        var {data,onClick}=this.props;
        return (<tr className="pointer" onClick={onClick}>
        		    <td className="info">{data.title}</td>
                <td className="warning">{data.username}</td>
                <td className="danger">{data.password}</td>
               </tr>)
    }
}

 // <td className="success"><iframe className="iframe" src={data.url}></iframe></td>

// {()=>{
//            window.open(data.url+"?username="+data.username+"&password="+data.password);
//         }}