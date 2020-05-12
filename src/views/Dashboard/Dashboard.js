import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
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
    // altText: 'Slide 1',
    // caption: 'Science',
    header: '',
    key: '1'
  },
  {
    src: './images/hallway.jpg',
    // altText: 'Slide 2',
    // caption: 'Social',
    header: '',
    key: '2'
  },
  {
    src: './images/basketball.jpg',
    // altText: 'Slide 3',
    // caption: 'Language',
    header: '',
    key: '3'
  },
  {
    src: './images/corridor.jpg',
    // altText: 'Slide 3',
    // caption: 'Language',
    header: '',
    key: '4'
  },
  {
    src: './images/pipel.jpg',
    // altText: 'Slide 3',
    // caption: 'Language',
    header: '',
    key: '5'
  },
  {
    src: './images/corridor-1.jpg',
    // altText: 'Slide 3',
    // caption: 'Language',
    header: '',
    key: '6'
  },
  {
    src: './images/yard.jpg',
    // altText: 'Slide 3',
    // caption: 'Language',
    header: '',
    key: '7'
  },
  {
    src: './images/auditorium.jpg',
    // altText: 'Slide 3',
    // caption: 'Language',
    header: '',
    key: '8'
  }
];


// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

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
