const initialState: object = {
  annotations: {
    points: 
[
  {
    x: new Date('03 Apr 2019').getTime(),
    y: 143,
    marker: {
      size: 8,
    },
    label: {
      borderColor: '#c2c2c2',
      borderWidth: 1,
      borderRadius: 2,
      text: 'The company reported unaudited consolidated \t earnings results for the third quarter',
      textAnchor: 'middle',
      offsetX: 0,
      offsetY: -15,
      style: {
          background: '#fff',
          color: '#777',
          fontSize: '12px',
          width: '100px',
          fontWeight: 400,
          fontFamily: undefined,
          cssClass: 'apexcharts-point-annotation-label',
          padding: {
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          }
      },
  },
  }
],
  },
  chart: {
    height: 380,
    type: "line",
    id: "areachart",
  },
  tooltip: {
    intersect: true,
    shared: false
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  series: [
    {
      name: 'Price',
      data: [121, 97, 113, 143, 148, 167, 190, 227, 157, 200, 175, 309, 254, 364],
    },
  ],
  title: {
    text: "Annotation Chart",
    align: "right",
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: [ '#B6000E'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
  },
  colors: ['#FF6A33'],
  markers: {
    size: 0,
    strokeColors: '#fff',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
},
  labels: [
    "03 Jan 2019",
    "03 Feb 2019",
    "03 Mar 2019",
    "03 Apr 2019",
    "03 May 2019",
    "03 Jun 2019",
    "03 Jul 2019",
    "03 Aug 2019",
    "03 Sep 2019",
    "03 Oct 2019",
    "03 Nov 2019",
    "03 Dec 2019",
    "03 Jan 2020",
    "03 Feb 2020",
  ],
  xaxis: {
    type: "datetime",
  },
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_OPTION":
      return { ...state, ...action.payload.option,}
    default:
      return state;
  }
};

export default optionsReducer;
