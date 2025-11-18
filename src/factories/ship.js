function ship(length){
    let hits=0;
    function getHits(){
        return hits;
    }

    function getLength(){
        return length;
    }
    
    function hit(){
        if(hits<length){
            hits++;
        }
    }

    function isSunk(){
        return (hits==length)? true:false;
    }

    return{getLength,hit,getHits,isSunk};   
}
module.exports = ship;