// class of map component

//Legend : 0 = Empty ; 1 = Pacman ; 2 = Cherry;
//         3 = Bomb ; 4 = Coins;

class GameMap{
  // initializare

  constructor(){
    this.grid = [ 0,4,0,0,0,1,3,0,0,2 ];
    //                      6 ( index )

  }
  render(){
    var div = document.getElementById('map');

    var html =``;


    for (var i=0; i<10; i++){
      if(this.grid[i] == 1){
        html += `<div><img src="images/pacman-icon.png"></div>`;
      }
      else if(this.grid[i] == 2){
        html += `<div><img src="images/Coin-icon.png"></div>`  ;
      }
      else if(this.grid[i] == 3){
        html += `<div><img src="images/cherry-icon.png"></div>`;
      }
      else if(this.grid[i] == 4){
        html += `<div><img src="images/bomb.png"></div>`       ;
      }


      else{
        html += `<div></div>`;
      }
    }

    div.innerHTML = html;
  }
}
