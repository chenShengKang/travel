

export default {
  handleCity(state,payload){
    state.city = payload
    // localStorage(city,payload)
    try{
      if(localStorage.city){
        localStorage.city = state.city
      }
    } catch(e){}
    

  }
}