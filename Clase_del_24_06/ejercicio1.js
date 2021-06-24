const mostrar_vacunas = () => {
  const parrafo = document.querySelector("#p_parrafo");
  const parrafo2 = document.querySelector("#p_parrafo2")
  let vacunas = ['Pfizer','Moderna','AztraZeneca','Sinopharm','Sputnik V','Sinovac','Covishield']
  let longitud = (vacunas.length); 
  parrafo.textContent = `La longitud del arreglo es: ${longitud}
   `;
  let primero = vacunas [0];
  let ultimo = vacunas [6];
  parrafo2.textContent = `
  El primer elemento es: ${primero}
  El ultimo elemento es: ${ultimo}
  `
  vacunas.forEach(function(elemento, indice) {
      console.log(elemento, indice);
  });
  vacunas.push('Johnson & Johnson');
  vacunas.shift('Pfizer');
  vacunas.unshift('Novavax');
  let pos = vacunas.indexOf('AztraZeneca');
  let pos2 = vacunas.indexOf('Sinopharm');
  vacunas.splice(pos, pos2);
  vacunas.forEach(function(elemento, indice) {
    console.log(elemento, indice);
});
}
const btn_array = document.querySelector("#bt_mostrar_funcion");
btn_array.addEventListener("click", mostrar_vacunas);