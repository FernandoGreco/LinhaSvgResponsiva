function btnTxtArea(){

 let texto = document.getElementById("exampleFormControlTextarea1").value;


 let buscaLarguraTotal = texto.search("width");


 //console.log(busca);
 var larguraTotal = texto.substr(buscaLarguraTotal+7,5);


    var larguraSgvX1 = [];
    var larguraSgvY1 = [];
    var i = 0;
    var x1=[];
    var y1=[];

 //  var localX1 =  buscaTexto('x1',texto);
 //  console.log("local X1 achado no função busca Texto"+localX1);

 while (texto.search("x1") != -1) {
   //busca parte do texto onde têm x1
   // let buscaLarguraSvgX1 = texto.search("x1");
  
   let buscaLarguraSvgX1 = editTxt('x1',texto);
   console.log("local X1 achado no função busca Texto"+buscaLarguraSvgX1);
   
   let buscaLarguraSvgY1 = texto.search("y1"); 


   //Tira os aspas do texto
     larguraSgvX1[i] = texto.substr(buscaLarguraSvgX1+4,7).replace('"','');
     larguraSgvY1[i] = texto.substr(buscaLarguraSvgY1+4,7).replace('"', '');


     //se caso a string tiver espaço executa o if
     if(larguraSgvX1[i].search(" ") != -1 || larguraSgvY1[i].search(" ") != -1){
     
    //encontra o local onde esta  espaço  
     let localX1 = larguraSgvX1[i].search(" ");
     let localY1 = larguraSgvY1[i].search(" "); 

     //array valores x1 e y1
     x1[i]=larguraSgvX1[i].slice(0,localX1);
     y1[i]=larguraSgvY1[i].slice(0,localY1);
     //corta a string após final do valor
     console.log("aqui cortado X1 - " + larguraSgvX1[i].slice(0,localX1));
     console.log("aqui cortado Y1 - " + larguraSgvY1[i].slice(0,localY1));
     } 
  
   //corta a parte do texto que já achou o x1 o procura o próximo x1 
    texto = texto.slice(buscaLarguraSvgX1+5, texto.length);
    console.log("X1 - "+larguraSgvX1[i]);
    console.log("Y1 - "+larguraSgvY1[i]);
    i++;
  }

  for (i = 0; i < x1.length; i++) {
    console.log("Array X1 - " +  x1[i]);
    console.log("Array Y1 - " +  y1[i]);
  }

/*
 var txtCut = texto.slice(buscaLarguraSvg+4, texto.length);
 let buscaLarguraSvg2 = txtCut.search("x1");
 var larguraSgv2 = txtCut.substr(buscaLarguraSvg2+4,3);


 console.log(n[0]);
 //console.log(typeof(busca));
 console.log(larguraTotal);
 console.log(larguraSgv);
console.log(larguraSgv2);*/
}

function editTxt(local,texto){

 while (texto.search(local) != -1) {

   //busca parte do texto onde têm x1
    return texto.search(local);
  
  
  
  }

}

