const kit_dpaE = document.getElementById('kit_dpa');
const litros_aguaE = document.getElementById('litros_agua');
const resultContainer = document.getElementById('result');
const fruta_opcionE = document.getElementById('option');
let ppm_fruta = 1500;

fruta_opcionE.addEventListener('change',()=>{
    if(fruta_opcionE.value === 'manzana')
        ppm_fruta =1700;
    else if(fruta_opcionE.value === 'pera')
        ppm_fruta = 1500;
});

function calculate()
{
    const kit_dpa = parseFloat(kit_dpaE.value);
    const litros_agua = parseFloat(litros_aguaE.value);
    resultContainer.innerHTML += 
    `<p class="mb-0">Cantidad DPA en tanque: ${((kit_dpa * litros_agua)/310000).toFixed(2)} Litros.</p>
    <p class="mb-0">Degradacion: ${ppm_fruta-kit_dpa}PPM -${100 - ((kit_dpa*100) / ppm_fruta).toFixed(2)}%</p>
    <p class="mb-3">DPA a recargar: ${((ppm_fruta-kit_dpa)*4000/310000).toFixed(2)} Litros.</p>`;
}