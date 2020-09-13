const initialState: object = {
  annotations: {
    points: [],
  },
  chart: {
    height: 380,
    type: "line",
    id: "areachart",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  series: [
    {
      data: [121, 97, 113, 143, 148, 167, 190, 227, 157, 200, 175, 309, 254, 364],
    },
  ],
  title: {
    text: "Annotation Chart",
    align: "left",
  },
  labels: [
    "02 Jun 2017",
    "05 Jun 2017",
    "06 Jun 2017",
    "07 Jun 2017",
    "08 Jun 2017",
    "09 Jun 2017",
    "12 Jun 2017",
    "13 Jun 2017",
    "14 Jun 2017",
    "15 Jun 2017",
    "16 Jun 2017",
    "19 Jun 2017",
    "20 Jun 2017",
    "21 Jun 2017",
  ],
  xaxis: {
    type: "datetime",
  },
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPTION":
      return state;
    default:
      return state;
  }
};

export default optionsReducer;
