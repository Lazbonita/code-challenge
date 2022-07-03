//Two red beads are placed between every two blue beads. There are N blue beads.
//Implement count_red_beads(n)so that it returns the number of red beads.
//If there are less than 2 blue beads return 0

function countRedBeads(n) {
    return n>1? (n-1)*2:0
   }
