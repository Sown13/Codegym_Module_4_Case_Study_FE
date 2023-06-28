function loadGameIdle(gameSessionId){
    getAlivePlayer(gameSessionId);
    getDeadPlayer(gameSessionId);
    getAliveEnemy(gameSessionId);
    getDeadEnemy(gameSessionId);
    getAliveCharacterDetail(gameSessionId);
    getDeadCharacterDetail(gameSessionId);
    getAliveEnemyDetail(gameSessionId);
    getDeadEnemyDetail(gameSessionId);
    getInventory(gameSessionId);
    getItemInInventory(gameSessionId);
    getItemPool();
    removeKeyframe();
    removeIcon('enemy-inside');
    // displayIcon('char-1-inside',char1Idle);
    // displayIcon('char-2-inside',char2Idle);
    // displayIcon('char-3-inside',char3Idle);
    // displayIcon('char-4-inside',char4Idle);
    displayAllAlivePlayer(alivePlayerDetailList,charIdle);
    displayInventory(inventoryList,itemInInventoryList);
    console.log("alive")
    console.log(alivePlayerDetailList)
    displayAllPlayerStatus(alivePlayerDetailList);
    removeEnemyStatus();
}


function loadGameTravel(gameSessionId){
    getAlivePlayer(gameSessionId);
    getDeadPlayer(gameSessionId);
    getAliveEnemy(gameSessionId);
    getDeadEnemy(gameSessionId);
    getAliveCharacterDetail(gameSessionId);
    getDeadCharacterDetail(gameSessionId);
    getAliveEnemyDetail(gameSessionId);
    getDeadEnemyDetail(gameSessionId);
    getInventory(gameSessionId);
    getItemInInventory(gameSessionId);
    getItemPool();
    movingBackground();
    removeIcon('enemy-inside');
    // displayIcon('char-1-inside',char1Walk);
    // displayIcon('char-2-inside',char2Walk);
    // displayIcon('char-3-inside',char3Walk);
    // displayIcon('char-4-inside',char4Walk);
    displayAllAlivePlayer(alivePlayerDetailList,charWalk);
    displayInventory(inventoryList,itemInInventoryList);
    displayAllPlayerStatus(alivePlayerDetailList);
    removeEnemyStatus();
}

function loadGameCombat(gameSessionId){
    getAlivePlayer(gameSessionId);
    getDeadPlayer(gameSessionId);
    getAliveEnemy(gameSessionId);
    getDeadEnemy(gameSessionId);
    getAliveCharacterDetail(gameSessionId);
    getDeadCharacterDetail(gameSessionId);
    getAliveEnemyDetail(gameSessionId);
    getDeadEnemyDetail(gameSessionId);
    getInventory(gameSessionId);
    getItemInInventory(gameSessionId);
    getItemPool();
    removeKeyframe();
    displayIcon('enemy-inside',enemySrc);
    // displayIcon('char-1-inside',char1Combat);
    // displayIcon('char-2-inside',char2Combat);
    // displayIcon('char-3-inside',char3Combat);
    // displayIcon('char-4-inside',char4Combat);
    displayAllAlivePlayer(alivePlayerDetailList,charCombat);
    displayInventory(inventoryList,itemInInventoryList);
    displayAllPlayerStatus(alivePlayerDetailList);
    displayEnemyStatus(0);
}