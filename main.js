const url = 'https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=185.65.135.230';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9173d6d0amsha609b0d3d697bb3p17696djsna9f1e0d22738',
		'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
	}
};

const $form = document.querySelector('#formulario'); // "$" para indicar que es un elemento del DOM
const $input = document.querySelector('#input-box');
const $submit = document.querySelector('#btn');
const $results = document.querySelector('#results');

const fetchIpInfo = ip => {
    return fetch(`https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`, options) // Concatenamos ip con template string
        .then(res => res.json()) //Como es una promesa, hay respuesta. Convertimos la respuesta a JSON
        .then(data => data) // Devolvemos los datos
        .catch(err => console.log(err)); // Si hay error, lo mostramos en consola 
};

$form.addEventListener('submit', async (event) => {

    event.preventDefault(); // Evitamos que se recargue la página
    const ip = $input.value; // Obtenemos el valor del input

    if (!ip) return; // Si no hay valor, no hacemos nada

    $submit.setAttribute('disabled', 'true'); // Deshabilitamos el botón
    $submit.setAttribute('aria-busy', 'true'); // Deshabilitamos el botón
    
    const ipInfo = await fetchIpInfo(ip); // Llamamos a la función fetchIpInfo con el valor del input
    //Cuando utilizamos un fetch se usa el await. Para utilizar await, la función debe ser async

    if (ipInfo){
        $results.innerHTML = JSON.stringify(ipInfo, null, 2); // Mostramos los datos en el DOM
    } 

    $submit.removeAttribute('disabled'); 
    $submit.removeAttribute('aria-busy');

});

