import React from 'react';
// import { Layout, Menu, Breadcrumb } from 'antd';

import 'bootstrap/dist/css/bootstrap.min.css';


const { Header, Content, Footer } = Layout;


class Dashboard extends React.Component{
    render(){
        // const image = require('https://res.cloudinary.com/dejzo3x6l/image/upload/v1462601844/login%20page%20design/3.png')
        return(
            // <Layout className="layout" style={{minHeight: 667}}>
            //     <Content style={{ marginLeft:'500px', marginRight:'500px', marginTop:'100px', padding: '0 50px' }}>
            //         <div className="site-layout-content">
            //             <form>
            //                 {/* <img src={image}/> */}
            //                 <h3>Login</h3>
            //                 <br></br>
            //                 <div className="form-group">
            //                     <input type="email" className="form-control" placeholder="Enter email" />
            //                 </div>

            //                 <div className="form-group">
            //                     <input type="password" className="form-control" placeholder="Enter password" />
            //                 </div>

            //                 <div className="form-group">
            //                     <div className="custom-control custom-checkbox">
            //                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
            //                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            //                     </div>
            //                 </div>

            //                 <button type="submit" className="btn btn-primary btn-block">Submit</button>
            //                 <p className="forgot-password text-right">
            //                     Forgot <a href="#">password?</a>
            //                 </p>
            //             </form>
            //         </div>
            //     </Content>
            //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            // </Layout>
        )
    }
}

export default Dashboard;
