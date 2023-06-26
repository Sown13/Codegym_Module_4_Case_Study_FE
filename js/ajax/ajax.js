// Lấy thông tin character (isAlive=true; isEnemy=false, thuộc game session mình đang làm việc )
function getAlivePlayer() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/(URI querry ra player thỏa mãn yêu cầu trên)",
        success(gameCharacter) {
            playerList = gameCharacter;
        }
    })
}




