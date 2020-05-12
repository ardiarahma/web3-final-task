import React, { Component, lazy, Suspense } from 'react';
import { Card,  CardBody, Col, Row,  UncontrolledCarousel } from 'reactstrap';

import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import axios from 'axios'

const apiUrl = 'http://yb-api.technow.id/api/'; 
const token = 'Bearer ' + localStorage.getItem('token')
const config = {
  headers: { "Authorization": token }
};

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const items = [
  {
    src : './images/1.jpg',
    header: '',
    key: '1'
  },
  {
    src: './images/2.jpg',
    header: '',
    key: '2'
  },
  {
    src: './images/3.jpg',
    header: '',
    key: '3'
  },
  {
    src: './images/4.jpg',
    header: '',
    key: '4'
  }
];


class Dashboard extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        error:null,
        users: [],
        response: {}
    };
  }

  componentDidMount(){
    axios.get(apiUrl + 'cluster-count', config)
    .then(response => response.data).then(  
      (result)=>{  
          this.setState({  
              users:result.data  
          });  
      },  
      (error)=>{  
          this.setState({error});  
      }
    )
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  

  render() {
    const{error,users}=this.state;
    if(error){  
        return(  
            <div>Error:{error.message}</div>  
        )  
    }  
    else {
    return (      
      <div className="animated fadeIn">        
        <Row>
          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0" style={{ marginBottom:35, textAlign:'center'}}>  
                <div className="text-value" style={{ fontSize : 50 }}>xxx </div>
                <div style={{ fontSize : 20 }}>Science</div>             
              </CardBody>
              {/* <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div> */}
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0" style={{ marginBottom:35, textAlign:'center'}}>
                <div className="text-value" style={{ fontSize :50 }} >9.823</div>
                <div style={{ fontSize : 20 }}>Social</div>
              </CardBody>
              {/* <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div> */}
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0" style={{  marginBottom:35, textAlign:'center'}}>
                <div className="text-value" style={{ fontSize : 50 }} >9.823</div>
                <div style={{ fontSize : 20 }}>Language</div>
              </CardBody>
              {/* <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div> */}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <UncontrolledCarousel items={items} style={{maxHeight:20}}/>
            </Card>
          </Col>
        </Row>
      
      </div>
      
    );
    }
  }
}

export default Dashboard;
