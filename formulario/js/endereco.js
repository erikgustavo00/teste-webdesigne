// script do endereço
var json_bairros = {
    "cidades":[
        {
        "sigla": "SJC",
        "nome": "São José dos campos",
        "bairros":[
            'Jardim Aquarius',
            'Jardim Esplanada',
            'Urbanova',
            'Vila Ema',
            'Vila Adyana',
            'Floradas de São José',
            'Jardim das Indústrias',
           ' Jardim Alvorada',
           'JARDIM DAS COLINAS',
           'BOSQUE DOS EUCALIPTOS',
        ]
        },
        {
        "sigla": "CAÇAP",
        "nome": "Caçapava",
        "bairros":[
            'Aldeias da Serra',
            'Bairro do Grama',
            'Boa Vista',
            'Borda da Mata',
            'Caçapava Velha',
            'Centro',
            'Chacara Germana',
            'Chácara Recreio Taquaral',
            'Chácaras Santa Rita',
            'Chácaras santo Antônio',
            'Condomínio Bom Jesus',
            'Guadalupe',
        ]
        }

]

}

function selectBairros(e){
    document.querySelector('#bairros_id').innerHTML = '';

    var bairros_select = document.querySelector('#bairros_id');
    var num_estados = json_bairros.cidades.length;
    var j_index = -1;

    for(i = 0; i < num_estados; i++){
        if(json_bairros.cidades[i].sigla == e){
            j_index = i;
         }

    }

    if(j_index != -1){
        // aqui eu percorro todos os bairros e crio os OPTIONS
        json_bairros.cidades[j_index].bairros.forEach(function(bairros){
           var cid_opts = document.createElement('option');

           cid_opts.setAttribute('value',bairros)
           cid_opts.innerHTML = bairros;
           
           bairros_select.appendChild(cid_opts);
        });
     }else{
        document.querySelector("#bairros_id").innerHTML = '';
     }
}
