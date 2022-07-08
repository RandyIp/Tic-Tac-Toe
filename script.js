board=[[0,0,0],[0,0,0],[0,0,0]]

player_turn=1

function check(){
    for(i=0;i<3;i++){
        if (i==0){shape=board[0][0]}
        if(board[0][i]!=shape){break}
        if(i==2 && shape==1){alert('x wins')}
        if(i==2 && shape==2){alert('o wins')}
    }
    for(i=0;i<3;i++){
        if (i==0){shape=board[1][0]}
        if(board[1][i]!=shape){break}
        if(i==2 && shape==1){alert('x wins')}
        if(i==2 && shape==2){alert('o wins')}
    }
    for(i=0;i<3;i++){
        if (i==0){shape=board[2][0]}
        if(board[2][i]!=shape){break}
        if(i==2 && shape==1){alert('x wins')}
        if(i==2 && shape==2){alert('o wins')}
    }
    for(i=0;i<3;i++){
        if (i==0){shape=board[0][0]}
        if(board[i][0]!=shape){break}
        if(i==2 && shape==1){alert('x wins')}
        if(i==2 && shape==2){alert('o wins')}
    }
    for(i=0;i<3;i++){
        if (i==0){shape=board[0][0]}
        if(board[0][i]!=shape){break}
        if(i==2 && shape==1){alert('x wins')}
        if(i==2 && shape==2){alert('o wins')}
    }
}
function move(x,y){
    if(document.getElementById(x.toString()+','+y.toString()).value!='?'){return}
    if (player_turn==1){
    board[x][y]=1
    document.getElementById(x.toString()+','+y.toString()).value='x'
    player_turn=2
    }
    else{
    board[x][y]=2 
    document.getElementById(x.toString()+','+y.toString()).value='o' 
    player_turn=1
    }
    check()
}