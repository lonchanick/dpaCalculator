const kit_dpa = document.getElementById('kit_dpa');
const litros_agua = document.getElementById('litros_agua');
const resultContainer = document.getElementById('result');



function calculate()
{
    const parse_kit_dpa = parseFloat(kit_dpa.value);
    const parse_litros_agua = parseFloat(litros_agua.value);
    resultContainer.innerHTML += 
    `<p>Litros de DPA que actualmente tiene el tanque: ${((parse_kit_dpa * parse_litros_agua)/310000).toFixed(2)}</p>
    <p>Degradacion: ${1500-parse_kit_dpa}</p>
    <p>DPA recarga: ${((1500-parse_kit_dpa)*4000/310000).toFixed(2)}</p>`;
}