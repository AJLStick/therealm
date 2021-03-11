var gameData = {
  shards: 0,
  shardsclick: 1,
  shardsclickcost: 10
}

function getshards() {
  gameData.shards += gameData.shardsclick
  document.getElementById("shardsmined").innerHTML = gameData.shards + " shards collected"
}

function buyshardsclick() {
  if (gameData.shards >= gameData.shardsclickcost) {
    gameData.shards -= gameData.shardsclickcost
    gameData.shardsclick += 1
    gameData.shardsclick *= 2
    document.getElementById("shards").innerHTML = gameData.shards + " shards collected"
    document.getElementById("pickaxe").innerHTML = "upgrade pickaxe (Currently Level " + gameData.shardsclick + ") costs " + costsshardsclickcost + " shards"
  }
}

var mainGameLoop = window.setInterval(function() {
  getshards()
}, 1000)
