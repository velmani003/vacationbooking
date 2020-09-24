import React from "react";


export class Login extends React.Component {
 
        constructor(props){
            super();
        }
    render() {
        return (
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="image">
                <img src={'images/pic4.svg'} alt="" />
            </div>
            <div className="content">
              <div className="form">
                <div className="form-group">
                   <label htmlFor="username">User Name</label>
                   <input type="text" name="username" placeholder="username" />
                </div>
                <div className="form-group">
                   <label htmlFor="password">Password</label>
                   <input type="password" name="password" placeholder="password" />
                </div>
                 </div>  
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
           );
           }
}