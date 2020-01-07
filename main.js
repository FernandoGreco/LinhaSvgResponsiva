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

   //verifica se têm ponto na string
   if(vetor[i].indexOf(".") != -1){
    
    //encontra o local onde esta o ponto  
     var place = vetor[i].indexOf(".");

    //pega valor apos a antes o ponto
    var valorAposPonto = place+1;
    var valorAntesPonto = place-1; 

   // console.log("valor antes do ponto "+vetor[i][valorAntesPonto]);
   // console.log("valor depois do ponto "+vetor[i][valorAposPonto]);
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
   vetor[i]= vetor[i].match(/\d/g);
   //tira espaços do vetor
   vetor[i] = vetor[i].join("");
 
  }
     //corta a parte do texto que já achou o x1 o procura o próximo x1 
      texto = texto.slice(local+5, texto.length);
      i++;
    }
    //retorna vetor com valores
    return vetor;
  }



