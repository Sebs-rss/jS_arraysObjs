document.write('<h2>Estadisticas centro medico ñuñoa</h2>' + '<hr>');

var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí

// 2.1 - agregar horas a arreglo de Traumatología

// Convierto nueva data a un array
var newTraumatologiaData = [
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'},
];

// Alt. A) Agrego la nueva data usando el método Concat, para tener un nuevo arreglo que combine ambos, sin perder la data original
/*traumatologia = traumatologia.concat(newTraumatologiaData);*/

// Alt. B)  Adding the new data to the traumatologia array using push
for (var i = 0; i < newTraumatologiaData.length; i++) {
    traumatologia.push(newTraumatologiaData[i]);
}

// Actualizo listados anteriores
document.write('<h3>(Update) Cantidad de pacientes por especialidad</h3>');
document.write(`<li>Cantidad de atenciones para Radiología: ${radiologia.length}</li>`);
document.write(`<li>Cantidad de atenciones para Traumatología: ${traumatologia.length}</li>`);
document.write(`<li>Cantidad de atenciones para Dental: ${dental.length}</li>`);

document.write('<h3>(Update) Primeras atenciones</h3>');
document.write(`<li>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</li>`);
document.write(`<li>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</li>`);
document.write(`<li>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</li>`);

// 2.2 - Elimino el 1er y último elemento del arreglo de Radiología, sin perder el original

//☝🏻Copia de seguridad para no perder datos, trabajo sobre ella
var newRadiologia = radiologia.slice(); // Create a shallow copy to avoid mutating the original array

newRadiologia.shift(); // quito el 1er elemento del nuevo array
newRadiologia.pop();   // quito el último elemento

//Actualizo el listado de Radiología
document.write('<h3>(Update) Radiología (sin primer y último paciente)</h3>');
for (var i = 0; i < newRadiologia.length; i++) {
    document.write(`<li>${newRadiologia[i].hora} - ${newRadiologia[i].paciente} - ${newRadiologia[i].rut} - ${newRadiologia[i].prevision}</li>`);
}

// 2.3 - Re-estilizando listado de atenciones de Dental

// Copia del array 'Dental'
var newDental = dental.slice(); // Create a shallow copy to avoid mutating the original array

//Re-escribo listado de pacientes
document.write('<h3>(Update) Lista de pacientes para Dental</h3>');
for (var i = 0; i < newDental.length; i++) {
    var entry = `${newDental[i].hora} - ${newDental[i].paciente} - ${newDental[i].rut} - ${newDental[i].prevision}`;
    document.write(`<p>${entry}</p>`);
}

// 2.4 - Listado de todas las atenciones


// Nuevo arreglo tomando todas las actualizaciones de arreglos
var allSpecialties = newRadiologia.concat(traumatologia, dental);

// Imprimo el listado
document.write('<h3>(Updated) Lista de todos los pacientes</h3>');
for (var i = 0; i < allSpecialties.length; i++) {
    var entry = `${allSpecialties[i].hora} - ${allSpecialties[i].paciente} - ${allSpecialties[i].rut} - ${allSpecialties[i].prevision}`;
    document.write(`<p>${entry}</p>`);
}

// 2.5 - Filtro de pacientes de dental cuya previsión es "Isapre"

var isapreDental = dental.filter(function(appointment) {
    return appointment.prevision === 'ISAPRE';
});

document.write('<h3> (Fitro) Pacientes de Dental con previsión ISAPRE</h3>');
for (var i = 0; i < isapreDental.length; i++) {
    var entry = `${isapreDental[i].paciente} - ${isapreDental[i].rut} - ${isapreDental[i].prevision}`;
    document.write(`<p>${entry}</p>`);
}

// 2.6 - Filtro de pacientes de traumatología cuya previsión es "Fonasa"

var fonasaTraumatologia = newTraumatologiaData.filter(function(appointment) {
    return appointment.prevision === 'FONASA';
});

document.write('<h3>(Filtro) Pacientes de Traumatología con previsión FONASA</h3>');
for (var i = 0; i < fonasaTraumatologia.length; i++) {
    var entry = `${fonasaTraumatologia[i].hora}- ${fonasaTraumatologia[i].paciente} - ${fonasaTraumatologia[i].rut} - ${fonasaTraumatologia[i].prevision}`;
    document.write(`<p>${entry}</p>`);
}

//Agregar código para el desafio 2 aquí // --> no entendí por qué se estructuraba así el código, con un espacio al medio para mis respuestas 

document.write('<hr><h3>Cantidad de pacientes por especialidad</h3>');
document.write(`<li>Cantidad de atenciones para Radiología: ${radiologia.length}</li>`);
document.write(`<li>Cantidad de atenciones para Traumatología: ${traumatologia.length}</li>`);
document.write(`<li>Cantidad de atenciones para Dental: ${dental.length}</li>`);


document.write('<h3>Primeras atenciones</h3>');
document.write(`<li>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</li>`);
document.write(`<li>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</li>`);
document.write(`<li>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</li>`);
