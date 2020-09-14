import ApexCharts from 'apexcharts'

import './css/styles.css';
import {changeOptions, updatePoint} from './actions/index';
import store from './store';




const buttonNewAnnotation = document.querySelector('#new-annotation');


if(buttonNewAnnotation) {
  buttonNewAnnotation.addEventListener('click', () => {
    store.dispatch(changeOptions({
      markers: {
        size: 8,
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
        hover: {
          size: 8
        }
    },
    fill: {
      type: 'solid',
      opacity: 0.2,
      colors: ['#cccccc']
    }
  }
    
  ))
  console.log(store.getState())
})
}

let state:any = store.getState()
const chart = new ApexCharts(document.querySelector("#chart"), state.options);



chart.render();
const pointsAnnotations = Array.from(document.querySelectorAll('.apexcharts-point-annotations'));
chart.updateOptions({
  chart: {
    events: {
      dataPointSelection: function(event, chartContext, config) {

        const labels = state.options.labels
        const prices =  state.options.series[0].data
        const index = config.dataPointIndex

        console.log(config)
        
        const formAnnotation = document.querySelector('.annotation-form')
        formAnnotation?.classList.add('active')
        
        store.dispatch(changeOptions({
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
        }
        }))


        const dateTitle = formAnnotation?.querySelector('.annotation-form__date')

        if(dateTitle) dateTitle.innerHTML = `<span>Date: </span> ${labels[index]}`

        const datePrice = formAnnotation?.querySelector('.annotation-form__price')

        if(datePrice) datePrice.innerHTML = `<span>Price: </span> $ ${prices[index]}.00 USD`

        store.dispatch(updatePoint({
          price: prices[index],
          date: labels[index]
        }))
      }
    }
  }
})

pointsAnnotations.forEach( point => {
  const circles = Array.from(point.querySelectorAll('circle'))
  const rects = Array.from(point.querySelectorAll('rect'))
  const texts = Array.from(point.querySelectorAll('text'))



  circles.forEach( circle => {
    
    const rect = circle.nextElementSibling
    const text = rect?.nextElementSibling
    circle.addEventListener('mouseover', () => {
      rect?.classList.add('show-point')
      console.log('fdsf')
    })

    circle.addEventListener('mouseout', () => {
      rect?.classList.remove('show-point')
    })
  })

})

const form = document.querySelector('.annotation-form')


form?.addEventListener('submit', e => {
  e.preventDefault()

  const annotationValue:any = form.querySelector('#annotation')
  const value = annotationValue.value;


  store.dispatch(updatePoint({
    text: value
  }))

  annotationValue.value = ''
  chart.addPointAnnotation( {
    x: new Date(state.point.date).getTime(),
    y: state.point.price,
    marker: {
      size: 8,
    },
    label: {
      borderColor: '#c2c2c2',
      borderWidth: 1,
      borderRadius: 2,
      text: state.point.text,
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
  })

})


const renderApp = () => {

  state = store.getState()
  chart.updateOptions(state.options)
}


store.subscribe(renderApp)