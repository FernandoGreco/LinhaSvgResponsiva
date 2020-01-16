function btnTxtArea(){

 //pega o texto que esta no text area
 let texto = document.getElementById("exampleFormControlTextarea1").value;
 
 let i = 0;
 let vetorX1 = [];
 let vetorY1 = [];
 let vetorX2 = [];
 let vetorY2 = [];

 //preenche o vetor com valores de x1 (width) e y1 (heigh)
 vetorX1 =  editTxt('x1',texto);
 vetorY1 =  editTxt('y1',texto);
 vetorX2 =  editTxt('x2',texto);
 vetorY2 =  editTxt('y2',texto);

 console.groupCollapsed('x1');
  for (i = 0; i < vetorX1.length; i++) {
    console.log("Array X1 - " +  vetorX1[i]);
  }
  console.groupEnd();



console.groupCollapsed('y1');
  for (i = 0; i < vetorY1.length; i++) {
    console.log("Array Y1 - " +  vetorY1[i]);
  }
console.groupEnd();
  


  console.groupCollapsed('x2');
  for (i = 0; i < vetorX2.length; i++) {
    console.log("Array X2 - " +  vetorX2[i]);
  }
  console.groupEnd();


console.groupCollapsed('y2');
  for (i = 0; i < vetorY2.length; i++) {
    console.log("Array Y2 - " +  vetorY2[i]);
  }
console.groupEnd();


    //função para inserir valores depois de editados em texto
    insereValoresEmTxt(texto,vetorX1,vetorX2,vetorY1,vetorY2);

  }



//busca recebe o valor a ser pesquisado no texto e encontra a posição que ele esta na string
function editTxt(busca,texto){

  var i = 0;

  //vetor onde será armazenado valores buscados no texto
  var vetor=[];

 while (texto.search(busca) != -1) {

   //busca parte do texto onde têm o valor enviado na busca
    var local =  texto.search(busca);
  
    
   //Pega os 4 caracteres após o local q se encontra na busca (ou seja o valor width/heigth)
   vetor[i] = texto.substr(local+4,4);


   vetor[i]=vetor[i].slice(0,local);

   
  // console.log(vetor[i]);

   //verifica se têm ponto na string
   if(vetor[i].indexOf(".") != -1){
    
    //encontra o local onde esta o ponto  
     var place = vetor[i].indexOf(".");

    //pega valor apos e antes o ponto
    var valorAposPonto = place;
    var valorAntesPonto = place-1; 

      //corta string apos o ponto (ex. 35.6 fica 35)
      vetor[i] = vetor[i].slice(0,place);

   // console.log("valor antes do ponto "+vetor[i][valorAntesPonto]);
   // console.log("valor depois do ponto "+vetor[i][valorAposPonto+1]);
   }
      if(vetor[i][valorAposPonto]>5){
 
        //corta string apos o ponto (ex. 35.6 fica 35)
        vetor[i] = vetor[i].slice(0,valorAntesPonto+1);

       //soma vetor se valor após o ponto for maior que 5. Ex.: 35.6 fica 36 e  35.4 fica 35
        vetor[i]++;

      }
      else {
     //array valores 
     vetor[i]=vetor[i].slice(0,place);

   //tira numeros do vetor
   //vetor[i]= vetor[i].match(/\d/g);

   vetor[i] = vetor[i].split("").filter(Number).join("");

   vetor[i] = vetor[i].replace(/[^0-9]/g,'');
   //tira espaços do vetor

   //console.log(vetor[i]);
  // vetor[i] = vetor[i].join("");
  }

  
  console.log("Sem o ponto "+vetor[i]);
  
   //tranforma em porcentagem o valor width em relação ao tamanho do box que foi criado no illustrator (depois coloca o box em 100%)
   vetor[i] = (vetor[i] / 841*100).toFixed(2);
   
     //corta a parte do texto que já achou o x1 o procura o próximo x1 
      texto = texto.slice(local+5, texto.length);
      i++;
    }
    //retorna vetor com valores
    return vetor;
  }
/*
function insereValoresEmTxt(texto,vetorX1,vetorX2,vetorY1,vetorY2){
  
  var txt = texto;
  var i = 0;
  var somaLocal =0;
  var cortes = [];
  //busca parte do texto onde têm o valor enviado na busca


    //local onde se inicia os parametros do sgv fill, stroke....
    var localParametro = txt.search('line');

    //variavel que guarda valores do parametro
    var txtParametro = txt.slice(localParametro-1,txt.search('x1'));
    

  while (txt.search('x1') != -1) {

    //encontra o local na string onde se encontra o x1='1234'
    var local =  txt.search('x1');

  
      somaLocal = somaLocal +parseInt(local);
   ////   console.log("soma local "+somaLocal);

      
      cortes[i]   = somaLocal;
     
     // console.log("tamanho do texto "+txt.length);

       //só preciso ir somando vetorLocal num outro vetor (esses valores serão os locais para inserir o x1,x2etc...)
    //  console.log("vetor local x1 achado "+ local + "que fica em "+txt[local]);

    

     
         //corta a parte do texto que já achou o x1 o procura o próximo x1 
      txt = txt.slice(local+5, txt.length);
      i++;

    
  }


  texto = texto.slice(0,localParametro-1);


// texto = texto + 'x1="'+vetorX1[0]+'%" '+'x2="'+vetorX2[0]+'%" '+'y1="'+vetorY1[0]+'%" '+'y2="'+vetorY2[0]+'%"/>';
 // texto = texto.push('qualquer coisa');



    for(i=0;  i < cortes.length; i++){
     // console.log(cortes[i]+'x1="'+vetorX1[i]+'%" '+'x2="'+vetorX2[i]+'%" '+'y1="'+vetorY1[i]+'%" '+'y2="'+vetorY2[i]+'%"/>');

     
    texto = texto + txtParametro+'x1="'+vetorX1[i]+'%" '+'x2="'+vetorX2[i]+'%" '+'y1="'+vetorY1[i]+'%" '+'y2="'+vetorY2[i]+'%"/>';
    }
    texto=texto+'</sgv>'
    console.log(texto);

  

  //  console.log("teste insere valor função" + res);
}
*/
