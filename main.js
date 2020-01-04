function btnTxtArea(){

 //pega o texto que esta no text area
 let texto = document.getElementById("exampleFormControlTextarea1").value;
 
 let i = 0;
 let vetorX1 = [];
 let vetorY1 = [];

 //preenche o vetor com valores de x1 (width) e y1 (heigh)
 vetorX1 =  editTxt('x1',texto);
 vetorY1 =  editTxt('y1',texto);

 
 console.groupCollapsed('x1');
  for (i = 0; i < vetorX1.length; i++) {
    console.log("Array X1 - " +  vetorX1[i]);
  }
  console.groupEnd();



console.groupCollapsed('y2');
  for (i = 0; i < vetorY1.length; i++) {
    console.log("Array Y1 - " +  vetorY1[i]);
  }
console.groupEnd();

  }



//busca recebe o valor a ser pesquisado no texto e encontra a posição que ele esta na string
function editTxt(busca,texto){

  var largura = [];
  var i = 0;

  //vetor onde será armazenado valores buscados no texto
  var vetor=[];

 while (texto.search(busca) != -1) {

   //busca parte do texto onde têm o valor enviado na busca
    let local =  texto.search(busca);
  
    
   //Tira os aspas do texto
   largura[i] = texto.substr(local+4,9).replace('"','');
  
    //se caso a string tiver espaço executa o if
    if(largura[i].search(" ") != -1){
     
      //encontra o local onde esta  espaço  
       let local = largura[i].search(" ");
    
  
       //array valores 
       vetor[i]=largura[i].slice(0,local);

       //corta a string após final do valor
       largura[i].slice(0,local);
     
       } 
    
     //corta a parte do texto que já achou o x1 o procura o próximo x1 
      texto = texto.slice(local+5, texto.length);
      i++;
    }
    //retorna vetor com valores
    return vetor;
    
  
  }



