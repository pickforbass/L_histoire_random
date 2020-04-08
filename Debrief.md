# Etapes de construction

Objectif : faire apparaitre une phrase du type "[nom] est en train [transitif] [verbe] [article] [item] [détail lieu] [lieu]"

### 1 on crée des tableaux :
- les noms,
- Les verbes,
- Les items féminins, masculins et un tableau pour fusionner les deux,
- Les températures,
- Les lieux,
- un vide pour stocker le résultat des randoms,
- un vide pour créer l'historique des phrases générées,


### 2 créer les variables
- une pour récupérer le tirage au sort 
- une pour stocker le résultat final pour affichage
- une pour l'historique
- celles pour récupérer les id présents dans l'HTML


### 3 Déroulé global (les fonctions principales)
- On récupère dans chaque tableau un élèment de base et on l'insère dans un tableau
- On contrôle les masculins et féminins, console et voyelle, détails du lieu pour choisir les bons articles et rendre la phrase correcte grammaticalement
- On crée la phrase, elle s'affiche et est stockée dans l'historique. 

###4 les plus 
- On peut mettre ses propres noms, verbes, item etc... 



    