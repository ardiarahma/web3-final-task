import React, { Component, lazy, Suspense } from 'react';
import {
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledCarousel
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const items = [
  {
    src : './images/building.jpg',
    header: '',
    key: '1'
  },
  {
    src: './images/hallway.jpg',
    header: '',
    key: '2'
  },
  {
    src: './images/basketball.jpg',
    header: '',
    key: '3'
  },
  {
    src: './images/corridor.jpg',
    header: '',
    key: '4'
  },
  {
    src: './images/pipel.jpg',
    header: '',
    key: '5'
  },
  {
    src: './images/corridor-1.jpg',
    header: '',
    key: '6'
  },
  {
    src: './images/yard.jpg',
    header: '',
    key: '7'
  },
  {
    src: './images/auditorium.jpg',
    header: '',
    key: '8'
  }
];


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  

  render() {

    // const { activeIndex } = this.state;
    // const slides = items.map((item) => {
    //   return (
    //     <CarouselItem
    //       onExiting={this.onExiting}
    //       onExited={this.onExited}
    //       key={item.src}
    //     >
    //       <img className="d-block w-100" src={item.src} alt={item.altText} />
    //       <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    //     </CarouselItem>
    //   );
    // });

    return (
      
      <div className="animated fadeIn">
        
        <Row>
          {/* <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">

                <div className="text-value">9.823</div>
                <div>All Students</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col> */}

          <Col xs="12" sm="6" lg="4">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0" style={{ marginBottom:35, textAlign:'center'}}>
                <div className="text-value" style={{ fontSize : 50 }} >9.823</div>
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
              {/* <Carousel 
                activeIndex={activeIndex} 
                next={this.next} 
                previous={this.previous}>
                  <CarouselIndicators 
                    items={items} 
                    activeIndex={activeIndex} 
                    onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl 
                    direction="prev" 
                    directionText="Previous" 
                    onClickHandler={this.previous} />
                  <CarouselControl 
                    direction="next" 
                    directionText="Next" 
                    onClickHandler={this.next} />
              </Carousel> */}
            </Card>
          </Col>
        </Row>
      
      </div>
      
    );
  }
}

export default Dashboard;
