import React, { Component } from 'react';
import { Card,  CardBody, Col, Row,  UncontrolledCarousel  } from 'reactstrap';
import axios from 'axios'

const apiUrl = 'http://yb-api.technow.id/api/'; 
const token = 'Bearer ' + localStorage.getItem('token')
const config = {
  headers: { "Authorization": token }
};

const items = [
  {
    src : './images/1.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: './images/2.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: './images/3.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '3'
  },
  {
    src: './images/4.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '4'
  }
];


class Dashboard extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        error:null,
        cluster1: '',  
        cluster2: '',  
        cluster3: '',
        countCluster1: '',  
        countCluster2: '',  
        countCluster3: '', 
        response: {}
    };
  }

  componentDidMount(){
    axios.get(apiUrl + 'cluster-count', config)
    .then(response => response.data).then(  
      (result)=>{
        this.setState({  
            cluster1: result.data[0].cluster,  
            cluster2: result.data[1].cluster,  
            cluster3: result.data[2].cluster, 
            countCluster1: result.data[0].count,  
            countCluster2: result.data[1].count,  
            countCluster3: result.data[2].count,   
          });  
      },  
      (error)=>{  
          this.setState({error});  
      }
    )
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  

  render() {
    const { error, cluster1, cluster2, cluster3, countCluster1, countCluster2, countCluster3 } = this.state
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
                <div className="text-value" style={{ fontSize : 50 }}>{countCluster1}</div>
                <div style={{ fontSize : 20 }}>{cluster1}</div>             
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0" style={{ marginBottom:35, textAlign:'center'}}>
                <div className="text-value" style={{ fontSize :50 }} >{countCluster2}</div>
                <div style={{ fontSize : 20 }}>{cluster2}</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0" style={{  marginBottom:35, textAlign:'center'}}>
                <div className="text-value" style={{ fontSize : 50 }} >{countCluster3}</div>
                <div style={{ fontSize : 20 }}>{cluster3}</div>
              </CardBody>
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
