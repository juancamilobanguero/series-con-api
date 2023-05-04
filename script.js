// cantidad de series que se cargaran cada vez que se presione siguiente
const cantidadSeries = 7;
const pagenFinal = cantidadSeries;
const pageinicial = 0;
const temaActual = "series"

const series = {
    "apiKey":"4c5e3b7fd39343d5a04a529a1ee34ecc",
      fetchSeries:function(cateforias){
        fetch(
            "https://newsapi.org/v2/everything?q="
            +Categoria+
           "&lenguaje=es&apiKey="+this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displaySeries(data));

      },

      displaySeries:function(data){
        //Elimino todo si se hace selecionado un tema nuevo
        if(pageinicial==0){
            document.querySelector(".container-series").textContent ="";
        }
      }
}