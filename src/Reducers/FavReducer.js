const initialState = JSON.parse(localStorage.getItem("favDentistas")) || [];

export const favRedu = (state = initialState, action) => {
  switch (action.tipo) {
    case "AGREGAR":
      return [...state, action.payload];
    case "QUITAR":
      return state.filter((dentista) => dentista.id !== action.payload);
    case "CARGAR":
      return action.payload;
    default:
      return state;
  }
};

//Agregar
export const agrFav = dentista => {
  localStorage.setItem('favDentistas', JSON.stringify([...initialState, dentista]))
  return{type: "AGREGAR", payload: dentista}
}
//Quitar
export const quiFav = (id) => {
  const actFav = initialState.filter(dentista => dentista.id !== id)//Actualiza fav
  localStorage.setItem('favDentistas', JSON.stringify(actFav))
  return{type: "QUITAR", payload: id}
};
//Cargar
/* useEffect(() => {
  const storedFavs = JSON.parse(localStorage.getItem("favDentistas")) || []
  dispatch({ type: "CARGAR", payload: storedFavs });
}, []);
 */



//Favorito
/* const [favDentistas, dispatch] = useReducer(reducer, []);

//Revolver
useEffect(() => {
  localStorage.setitem("favDentistas", JSON.stringify(favDentistas))
}, [favDentistas]);
 */
