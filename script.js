let ppm_fruta = 1782;
const part_por_millon_constante = 310000;

const kit_dpaE = document.getElementById('kit_dpa');
const litros_aguaE = document.getElementById('litros_agua');

const resultContainer = document.getElementById('result');
const fruta_opcionE = document.getElementById('option');
const dpa_recalc_val = document.getElementById('dpa_recalc_val');
const dpa_recalc_container = document.getElementById('dpa_recalc_container');
const recalcButt = document.getElementById('recalc');
const ppm_update = document.getElementById('ppm');

ppm_update.innerText = ppm_fruta;

function calculate()
{
    if(!kit_dpaE.value | !litros_aguaE.value)
    {
        alert("Faltan valores"); 
        return;
    }

    const kit_dpa = parseFloat(kit_dpaE.value);
    const litros_agua = parseFloat(litros_aguaE.value);

    let cant_dpa_tanque = kit_dpa * litros_agua/part_por_millon_constante;
    let degradacion = ppm_fruta-kit_dpa;
    let porcentaje_degradacion = (100 - (kit_dpa*100) / ppm_fruta);
    let dpa_a_recargar = ((ppm_fruta-kit_dpa)*litros_agua/310000); 

    //recalculando PPM Fruta
    calcPPMFruta(dpa_a_recargar,cant_dpa_tanque,litros_agua);

    resultContainer.innerHTML += 
    `<p class="mb-0">Cantidad DPA en tanque: ${(cant_dpa_tanque).toFixed(2)} Litros.</p>
    <p class="mb-0">Degradacion: ${degradacion.toFixed(2)} PPM <|> ${porcentaje_degradacion.toFixed(2)}%</p>
    <p class="mb-3">DPA a recargar: ${dpa_a_recargar.toFixed(2)} Litros.</p>`;
}

function recalcDPA()
{
    const dpaRecalcVal = parseFloat(dpa_recalc_val.value);
    const kit_dpa = parseFloat(kit_dpaE.value);
    const litros_agua = parseFloat(litros_aguaE.value);
    let cant_dpa_tanque = kit_dpa * litros_agua/part_por_millon_constante;

    calcPPMFruta(dpaRecalcVal,cant_dpa_tanque,litros_agua);
    showPanelRecalc();
}

function calcPPMFruta(dpa_a_recargar,cant_dpa_tanque,litros_agua)
{
    let ppm_recalc = ((dpa_a_recargar + cant_dpa_tanque)*part_por_millon_constante)/litros_agua; 
    ppm_fruta = ppm_recalc;  
    ppm_update.innerText = ppm_recalc.toFixed(2);
    //showPanelRecalc();
}


function showPanelRecalc()
{
    dpa_recalc_container.classList.toggle('d-none');
    ppm_update.toggleAttribute('hidden');
}

function cancelRecalcDPA()
{
    dpa_recalc_container.classList.toggle('d-none');
    ppm_update.toggleAttribute('hidden');
}

function reset()
{
    kit_dpaE.value='';
    resultContainer.innerHTML='';
    litros_aguaE.value='';
    ppm_fruta = 1782;
    document.getElementById('ppm').innerText = ppm_fruta.toString();
}