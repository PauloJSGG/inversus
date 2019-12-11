import React from 'react'

const Divider = (props) => {

  const {classs} = props

  return(
    // <svg width="200" height="150" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    //      viewBox="0 0 841.89 595.28" display='block'>

    //   <path
    //     fill="#fff" class={classs} stroke="#000000"  width='100%' height='100%'
    //     d="M458.56,324.841c-0.443,0.478-0.561,0.614-0.503,0.565c-6.112,6.824-11.211,16.779-2.912,24.201
    //       c7.608,6.804,18.747,6,24.985-2.154c6.882-9.753,8.889-22.04,8.62-33.755c32.718-15.931,71.949-21.616,107.949-17.018
    //       c17.31,2.211,34.559,7,50.894,13.075c15.515,5.769,30.546,13.036,44.294,22.289c12.969,8.729,24.896,18.856,33.054,32.327
    //       c2.215,3.627,7.818,0.28,5.711-3.386c-14.542-25.331-41.534-41.989-67.589-53.638c-34.181-15.281-71.46-23.592-108.926-19.783
    //       c-22.74,2.312-45.262,8.309-66.004,17.937c-2.045-17.307-8.81-34.25-21.211-46.762c-12.386-12.498-29.465-18.344-46.817-18.6
    //       c-16.328-0.24-32.893,3.385-48.499,7.805c-19.101,5.41-37.349,13.214-55.106,22.03c-17.262,8.57-34.029,18.078-50.929,27.327
    //       c-17.493,9.574-35.843,19.398-55.26,24.422c-28.348,7.334-75.983,4.174-83.679-30.939c-3.725-16.994,3.778-37.429,19.457-45.925
    //       c15.141-8.205,31.904-1.309,44.561,8.172c2.791,2.09,5.38,4.4,7.966,6.734c3.993,3.57,9.759-2.288,6.047-6.202
    //       c-11.731-12.398-26.22-23.318-43.944-24.166c-18.903-0.904-35.591,10.99-43.936,27.474c-8.613,17.011-8.255,38.299,2.956,54.065
    //       c11.787,16.577,32.389,22.821,51.881,23.62c17.629,0.722,34.871-2.175,51.454-8.1c19.977-7.138,38.745-17.444,57.546-27.162
    //       c36.871-19.059,74.875-38.292,116.265-45.031c15.762-2.566,31.989-4.16,47.15,2.11c16.935,7.004,28.224,22.475,33.199,39.755
    //       c1.272,4.419,2.12,8.937,2.581,13.512c-7.448,4.001-14.663,8.678-20.677,14.67C460.288,323.118,461.544,321.787,458.56,324.841z
    //       M459.657,337.362c0.874-4.408,5.056-7.985,8.314-10.734c3.777-3.187,7.926-5.921,12.205-8.381
    //       c-0.143,9.934-4.039,33.22-18.692,23.446C459.949,340.52,459.298,339.862,459.657,337.362z"/>

    // </svg>

    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="150"
    viewBox="0 0 841.89 595.28" enable-background="new 0 0 841.89 595.28" display='block' >

      <path class={classs} fill="#fff"  stroke="#000000"  width='100%' height='100%' d="M582.32,257.736c-19.961-14.81-48.18-11.85-69.354-1.648c-23.871,11.501-44.087,29.762-64.717,46.065
        c-37.724,29.809-82.115,62.892-133.173,56.289c-9.999-1.293-19.443-3.861-28.14-9.184c-12.171-7.449-20.018-19.188-24.553-32.497
        c-5.811-20.055-3.331-41.997,7.142-60.066c6.199-9.615,14.78-17.212,25.704-20.946c11.332-3.873,23.662-3.117,35.043,0.114
        c10.377,2.946,20.224,9.524,25.848,18.845c6.09,10.092,7.017,22.129,3.609,33.304c-3.744,12.276-13.532,20.926-26.546,21.689
        c-10.484,1.197-20.685-3.992-29.465-9.003c-2.673-1.517-5.085,2.586-2.437,4.167c9.56,5.75,20.522,11.651,32.065,11.091
        c23.995,0.304,42.037-22.707,39.271-45.821c-3.433-40.163-56.182-53.889-88.081-39.975c-9.91,4.323-18.184,11.353-24.652,19.964
        c-19.658,28.29-19.343,68.639,3.187,95.43c20.681,24.592,55.265,28.385,85.036,22.264c37.968-7.805,69.677-31.813,99.583-55.125
        c15.747-12.275,31.082-25.153,47.787-36.138c16.424-10.8,34.562-20.219,54.776-18.919c16.705,1.074,36.371,8.92,36.009,28.612
        c-0.327,17.791-16.44,30.238-32.523,33.814c-2.748,0.611-5.534,0.928-8.321,1.291c-2.825,0.367-2.653,4.682,0.213,4.801
        c6.758,0.276,13.272-0.172,19.81-2.068c13.672-4.548,25.388-14.718,29.444-28.858C598.868,281.344,594.053,266.323,582.32,257.736z"
      />

    </svg>

  )
}

export default Divider