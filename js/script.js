let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
          }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

function act45(nimage) {
    var acol4=[
        "Infantil B femenino - desde 8 a 9 años",
        "Infantil B masculino - desde 8 a 9 años",
        "Infantil A femenino - desde 10 a 11 años",
        "Infantil A masculino - desde 10 a 11 años",
        "Cadete femenino - desde 12 a 14 años",
        "Cadete masculino - desde 12 a 14 años",
        "Juvenil femenino - desde 15 a 17 años",
        "Juvenil masculino - desde 15 a 17 años",               
        "Senior 1 femenino - desde 18 a 30 años",
        "Senior 1 masculino - desde 18 a 30 años",
        "Senior 2 femenino - desde 31 a 45 años",
        "Senior 2 masculino - desde 31 a 45 años",               
        "Master 1 femenino - desde 46 a 60 años",
        "Master 1 masculino - desde 46 a 60 años",
        "Master 2 femenino - desde 61 en adelante",
        "Master 2 masculino - desde 61 en adelante"               
    ]
    var contenido="";
    // arma contenido seccion 4 - categoria
    document.getElementById('col4categ').innerHTML=acol4[nimage-1];
    // campo oculto para levantar el dato
    document.getElementById('col4ncateg').innerHTML=nimage;
    // asignamos imagen col 5
    var url="./image/f"+nimage+".jpg";
    document.getElementById('imgcol5').src=url;
    return;
 }

 function act67(nseccion) {
    acol6=[ // gral
            // tabla 1 - infantil femenino B
             [
                [ // clasificacion 2023  
                    ["Benitez Juana","155"],["Benitez Juana","255"],["Benitez Juana","355"]
                ],
                [ // clasificacion 2022
                    ["Rosales Mariana","145"],["Benitez Juana","255"],["Perez Betiana","655"]
                ]
             ],
             // tabla 2 - infantil masculino B   
             [
                [ // clasificacion 2023  
                    ["Roa Rosalio","155"],["Benitez Juan","455"],["Lassi Jose","455"]
                ],
                [ // clasificacion 2022  
                    ["Rosales Mario","555"],["Benitez Juan","355"],["Carlio Anibal","155"]
                ]
             ],
             // tabla 3 - infantil femenino A   
             [
                [ // clasificacion 2023  
                    ["Benitez Juana","155"],["Benitez Juana","255"],["Benitez Juana","355"]
                ],
                [ // clasificacion 2022
                    ["Rosales Mariana","145"],["Benitez Juana","255"],["Perez Betiana","655"]
                ]
             ],
             // tabla 4 - infantil masculino B   
             [
                [ // clasificacion 2023  
                    ["Soria Sandro","155"],["Arquio Laureano","455"],["Rossi Pedro","455"]
                ],
                [ // clasificacion 2022  
                    ["Rosales Andres","455"],["Benitez Juan","355"],["Carlio Anibal","155"]
                ]
             ]
             // siguienets categ hasta la 12

         ];
    acol7=[ // gral
              [ // datos ganador - infantil femenino B - 2023 
                  [ "Formada en la academia de Maria Laura Shang comenzo a competir en 2018","Usa la fuerza de tu oponente"],
                  [ "Oriunda de Formosa se inicio en la disciplina en 2016","Nunca olvides las enseñanzas recibidas"]
              ],
              [ // datos ganador - infantil masculino B - 2023 
                  [ "Formado en la academia de Osvaldo Ching comenzo a competir en 2018","Honor y dignidad"],
                  [ "Oriundo de Carro Quemado, la Pampa se inicio en la disciplina en 2016","La lucha fortaleza el espiritu"]
              ]
              // agregar las categorias que faltan
          ];
    // arma contenido seccion 6 - categoria
    // levanta en ncateg de un parafo oculto el codigo de la categoria activa
    var ncateg=document.getElementById('col4ncateg').innerHTML;
    // oculta todos los elementos 
    var contenido='<table class="table"><thead><tr>';
    contenido+="<th scope='col'>N°</th><th scope='col'>Nombre</th><th scope='col'>Puntos</th>";
    contenido+='</tr></thead><tbody>';
    // levanta en un array dentro de la categoria la seccion    
    var atabla=acol6[ncateg-1][nseccion-1];
    // barre los registros
    // el array es correcto - console.log(atabla);
    for (var i = 0; i < atabla.length; i++) {
        contenido+='<tr';
        if ( Number.isInteger(i/2) ) {
            contenido+=' class="table-light"';
        }
        contenido+='><th scope="row">'+parseInt(i+1)+'</th>';
        contenido+='<td>'+atabla[i][0]+'</td>';
        contenido+='<td>'+atabla[i][1]+'</td></tr>';
    };
    // cierra la tabla
    contenido+="</tbody></table>";
    // envia la tabla al div
    document.getElementById('tabla').innerHTML=contenido;
    // seccion 7 arma parafo con datos del ganador
    var aganador=acol7[ncateg-1][nseccion-1]
    contenido='<p class="fw-bold">'+atabla[0][0]+'</p>';
    contenido+='<p class="">'+aganador[0]+'<p>';
    contenido+='<p class="">'+aganador[1]+'<p>';
    document.getElementById('parrafo').innerHTML=contenido;
    return;
 }

