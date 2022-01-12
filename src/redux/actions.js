const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    //returns a function called dispatch 
    return (dispatch) => {
        // the bit around the action creator is just a fetch request
      fetch(url)
        .then(res => res.json())
        .then(data => {
            //this is just an action creator
          const action = {
              // we have a function called FETCH_MAKES
              //it's only job is to return a function 
            type: 'FETCH_MAKES',
            value: data.Results
          }
          //dispatch the action, bc you need access to the action
          dispatch(action)
        })
    }
  }