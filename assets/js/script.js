

let radiologia = [{
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA',
},
{
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE',
},
{
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE',
},
{
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA',
},
{
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA',
}];

let traumatologia = [{
    hora: '08:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA',
}, {
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE',
},
{
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE',
},
{
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE',
},
{
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'CECILIA BUDNIK',
    rut: '16554741-K',
    prevision: 'FONASA',
},
{
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE',
},
{
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE',
}
];

console.log(radiologia.length);

recorre1();
recorre2();

function recorre1() {
    document.write('<p class="text-center">'+radiologia[0].paciente + '-' + radiologia[0].prevision + ' | ' + radiologia[radiologia.length - 1].paciente + ' - ' + radiologia[radiologia.length - 1].prevision+'</p">');
    let texto = '<div class="align-middle m-5"><table id="cuerpo-tabla" class="table table-bordered"><thead class="thead-dark"><tr><th>hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr></thead><tbody>';
    for (let i = 0; i < radiologia.length; i++) {
        texto += `<tr><td>${radiologia[i].hora}</td><td>${radiologia[i].especialista}</td><td>${radiologia[i].paciente}</td><td>${radiologia[i].rut}</td><td>${radiologia[i].prevision}</td></tr>`;
    }
    texto += '</tbody></table></div>';
    //document.getElementById("cuerpo-tabla").innerHTML = texto;
    document.write(texto);
}

function recorre2() {
    document.write('<p class="text-center">'+traumatologia[0].paciente + '-' + traumatologia[0].prevision + ' | ' + traumatologia[traumatologia.length - 1].paciente + ' - ' + traumatologia[traumatologia.length - 1].prevision+'</p">');
    let texto = '<div class="align-middle m-5"><table id="cuerpo-tabla" class="table table-bordered"><thead class="thead-dark"><tr><th>hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr></thead><tbody>';
    for (let i = 0; i < traumatologia.length; i++) {
        texto += `<tr><td>${traumatologia[i].hora}</td><td>${traumatologia[i].especialista}</td><td>${traumatologia[i].paciente}</td><td>${traumatologia[i].rut}</td><td>${traumatologia[i].prevision}</td></tr>`;
    }
    texto += '</tbody></table></div>';
    //document.getElementById("cuerpo-tabla").innerHTML = texto;
    document.write(texto);
}