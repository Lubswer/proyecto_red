function inicializarBuscador() {
  const header = document.querySelector('.facultades-header');
  
  if (!header) {
    console.error('Header no encontrado');
    return;
  }
  
  const searchDiv = document.createElement('div');
  searchDiv.style.cssText = 'margin: 20px 0; text-align: center;';
  searchDiv.innerHTML = `
    <input type="text" id="buscador-fac" placeholder=" Buscar facultad..." 
    style="padding: 10px 15px; width: 300px; border-radius: 8px; border: none; 
    background-color:#282c30c2; color:white; font-size: 14px; font-family: 'Courier New', monospace;">
  `;                                                                                                                                                                                                                            
  header.appendChild(searchDiv);

  const buscador = document.getElementById('buscador-fac');
  const tarjetas = document.querySelectorAll('.fac-card');

  buscador.addEventListener('keyup', function() {
    const texto = this.value.toLowerCase();
    
    tarjetas.forEach(tarjeta => {
      const img = tarjeta.querySelector('img');
      const alt = img ? img.alt.toLowerCase() : '';
      
      if (texto === '' || alt.includes(texto)) {
        tarjeta.style.display = 'block';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', function() {
  inicializarBuscador();
});