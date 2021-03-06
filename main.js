function btnTxtArea(){
 //pega o texto que esta no text area
 let texto = document.getElementById("exampleFormControlTextarea1").value;
 
    let i = 0;
    let vetorX1 = [];
    let vetorY1 = [];
    let vetorX2 = [];
    let vetorY2 = [];


    //preenche o vetor com valores de x1/x2 (width) e y1/y2 (heigh)
    vetorX1 =  editTxt('x1=',texto);
    vetorY1 =  editTxt('y1=',texto);
    vetorX2 =  editTxt('x2=',texto);
    vetorY2 =  editTxt('y2=',texto);

 //width and heigth
 largura = AlturaLargura('width=',texto);
 altura = AlturaLargura('eight=',texto);
 

 //transforma o valor px em %
 //console logs para mostrar valores x1,y1,x2 e y2 retirados do texto
 console.groupCollapsed('x1');
 
  for (i = 0; i < vetorX1.length; i++) {
    console.log("Array X1 - " +  vetorX1[i]);
    vetorX1[i] = (vetorX1[i] / largura*100).toFixed(2)
  }
  console.groupEnd();



console.groupCollapsed('y1');
  for (i = 0; i < vetorY1.length; i++) {
    console.log("Array Y1 - " +  vetorY1[i]);
    vetorY1[i] = (vetorY1[i] / altura*100).toFixed(2)
  }
console.groupEnd();
  


  console.groupCollapsed('x2');
  for (i = 0; i < vetorX2.length; i++) {
    console.log("Array X2 - " +  vetorX2[i]);
    vetorX2[i] = (vetorX2[i] / largura*100).toFixed(2)
  }
  console.groupEnd();


console.groupCollapsed('y2');
  for (i = 0; i < vetorY2.length; i++) {
    console.log("Array Y2 - " +  vetorY2[i]);
    vetorY2[i] = (vetorY2[i] / altura*100).toFixed(2)
  }
console.groupEnd();


    //função para inserir valores depois de editados em texto
    insereValoresEmTxt(texto,vetorX1,vetorX2,vetorY1,vetorY2);
  }

//busca recebe o valor a ser pesquisado no texto e encontra a posição que ele esta na string
function editTxt(busca,texto){

  var i = 0;
  var valorAposPonto = 0;
  var valorAntesPonto =0;
  //vetor onde será armazenado valores buscados no texto
  var vetor=[];

 while (texto.search(busca) != -1) {

   //busca parte do texto onde têm o valor enviado na busca
    var local =  texto.search(busca);
  

   //Pega os 4 caracteres após o local q se encontra na busca (ou seja o valor width/heigth)
   vetor[i] = texto.substr(local+4,6);


   //verifica se têm ponto na string
   if(vetor[i].indexOf(".") != -1){
    
    //encontra o local onde esta o ponto  
     var place = vetor[i].indexOf(".");

    //pega valor apos e antes o ponto
     valorAposPonto = place+1;
     valorAntesPonto = place-1; 

    //console.log("valor antes do ponto "+vetor[i][valorAntesPonto]);
   // console.log("valor depois do ponto "+vetor[i][valorAposPonto]);
   
      if(vetor[i][valorAposPonto]<=5){
 
             //corta string apos o ponto (ex. 35.3 fica 35)
vetor[i] = vetor[i].slice(0,valorAntesPonto+1);
      }

     else if (vetor[i][valorAposPonto]>5) {

      //corta e somo string apos o ponto (ex. 35.6 fica 36) 
    vetor[i] = vetor[i].slice(0,valorAntesPonto+1);

    //soma vetor se valor após o ponto for maior que 5. Ex.: 35.6 fica 36 e  35.4 fica 35
    vetor[i]++;
      }
    
    }
   vetor[i] = parseInt(vetor[i]);

      //corta a parte do texto que já achou o x1 o procura o próximo x1 
      texto = texto.slice(local+5, texto.length);
            i++;
    }
 

    //retorna vetor com valores
    return vetor;
  }

function insereValoresEmTxt(texto,vetorX1,vetorX2,vetorY1,vetorY2){
  
  var txt = texto;
  var i = 0;
  var somaLocal =0;
  var cortes = [];
  //busca parte do texto onde têm o valor enviado na busca



    //local onde se inicia os parametros do sgv fill, stroke....
    var localParametro = txt.search('<line');
    var localX1 = txt.search('x1=');
  
    //variavel que guarda valores do parametro
    var txtParametro = txt.slice(localParametro-1,localX1);
    

  while (txt.search('x1') != -1) {

    //encontra o local na string onde se encontra o x1='1234'
    var local =  txt.search('x1');

  
      somaLocal = somaLocal +parseInt(local);
      console.log("soma local "+somaLocal);

      
      cortes[i]   = somaLocal;
       
      //corta a parte do texto que já achou o x1 o procura o próximo x1 
      txt = txt.slice(local+5, txt.length);
      i++;    
  }


  //texto = texto.slice(0,localParametro-1);
    for(i=0;  i < cortes.length; i++){
      console.log("Cortes "+cortes[i]+'x1="'+vetorX1[i]+'%" '+'x2="'+vetorX2[i]+'%" '+'y1="'+vetorY1[i]+'%" '+'y2="'+vetorY2[i]+'%"/>');

     
    texto = texto + txtParametro+'x1="'+vetorX1[i]+'%" '+'x2="'+vetorX2[i]+'%" '+'y1="'+vetorY1[i]+'%" '+'y2="'+vetorY2[i]+'%"/>';
    }
    texto=texto+'</svg>'

    //texto final
    //console.log("Total "+texto);

    texto = responsivoTelaToda(texto);

   // console.log(texto);
    
    //Copia texto (como se usuario tivesse feito um CRTL C)
    //Cria um elemento input (pode ser um textarea)
    let inputTest = document.createElement("input");
    inputTest.value = texto;
    //Anexa o elemento ao body
    document.body.appendChild(inputTest);
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
    //remove o elemento
    document.body.removeChild(inputTest);
}

function AlturaLargura(busca,texto){

    //txt achado e separado
    let achado;

   //busca parte do texto onde têm o valor enviado na busca
   var local =  texto.search(busca);
  
   //Pega os 4 caracteres após o local q se encontra na busca (ou seja o valor width/heigth)
   achado = texto.substr(local+7,10);

    //encontra o local na string onde se encontra o aspas
    var localAspas =  achado.search('"');

    var res = achado.slice(0, localAspas-2);
       
   return res;
  }

  //função para deixar width/heigth em 100% e tirar viewbox & enable-background
  function responsivoTelaToda(txt){

     //busca parte do texto q será feito primeiro corte
     let local1 =  txt.search('width="');
     local1--;

    //busca parte do texto q será feito o segundo corte
    let local2 =  txt.search('</svg>');

    //gambiarra pra resolver
    local2++;local2++;local2++;local2++;local2++;local2++;


    //corta primeira parte do texto
    let parte1 = txt.slice(0, local1);

    //corta segunda parte do texto
    let parte2 = txt.slice(local2,txt.length);

    console.log("parte 2 " +parte2);
      //erro ta na parte 2
     //texto a ser inserido no local cortado
     let txtInserido = 'width="100%" height="100%">';

     var txtFinal = parte1+txtInserido+parte2; 


     console.log("final "+txtFinal);
     
     return txtFinal;
  }





