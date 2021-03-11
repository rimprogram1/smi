Fonction qui récupère l'élement par son Id
function recupid(id){
    var elm=document.getElementById(id);
    return elm;
    }

//*************


    
//******
            function echanger(id1,id2){
            var temp;
            temp=recupid(id1).value;
            recupid(id1).value=recupid(id2).value;
            recupid(id2).value=temp;
            }
            
//******        
//Fonction qui retourne si un nombre est premier ou pas                
        function premier1(id1,id2){
               var Rep='Oui';
                var p=recupid(id1).value;
                var n=Number(p);
                    var j;            
                
                for(j=2;j<n;j++){
                if(n%j==0) Rep='Non';
                 }
                recupid(id2).value=Rep;
                
                }
  
//Fonction qui retourne les nombres premiers 
                              
    function premier2(id) {
                var nbrPremier = "";
                var valeur = recupid(id1).value;
                for (var n = 2; n <= valeur; n++) {
                    var i = 2;
                    while (n % i != 0 && i <= n) {
                        i++;
                        if (i == n) {
                        
                            nbrPremier = nbrPremier + n+ "  ";
                        }
                    }
                }
            
                document.getElementById("id2").innerHTML = nbrPremier;
   
            }
            