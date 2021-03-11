var gameData = {
  shards: 0,
  shardsclick: 1,
  shardsclickcost: 10
}

function getshards() {
  gameData.shards += gameData.shardsclick
  document.getElementById("shardsmined").innerHTML = "you've got " + gameData.shards + " shards"
}

function buyshardsclick() {
  if (gameData.shards >= gameData.shardsclickcost) {
    gameData.shards -= gameData.shardsclickcost
    gameData.shardsclick += 1
    gameData.shardsclick *= 2
    document.getElementById("shardsmined").innerHTML = gameData.shards + " shards collected"
    document.getElementById("pickaxe").innerHTML = "upgrade pickaxe (" + gameData.pickaxename + ")[" + gamedata.shardsclick + "] costs " + shardsclickcost + " shards"
  }
  if (gamedata.shardsclick >=10 && gamedata.shardsclick <=50) {
    var pickaxename = "wooden";
  }
  if (gamedata.shardsclick >=49 && gamedata.shardsclick <=100) {
    var pickaxename = "stone";
  }
  if (gamedata.shardsclick >=99 && gamedata.shardsclick <=200) {
    var pickaxename = ";
  }
}

var mainGameLoop = window.setInterval(function() {
  getshards()
}, 1000)
