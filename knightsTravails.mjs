function createDirectedGraph(){
    const nodes = [];
    const edges = [];

    // add node
    function addNode(id, position){
        nodes.push({id, position})
    }
    // add edge for specific node
    function addEdge(sourceId, targetId){
        edges.push({source: sourceId, target: targetId})
    }
}

// function createGrid(rows, col){
//     let gridArray = []
//     for(let i = 0; i < rows; i++){
//         let column = []
//         gridArray.push(column)
//         for(let j = 0; j < col; j++){
//             let row = [j]
//             column.push(row)
//         }
//     }
//     return gridArray

// }

// const chessboard = createGrid(8,8)

// console.log(chessboard)


// //legal moves. 
// const legalMoves = [
//     [2,1],
//     [1,2],
//     [-1,2],
//     [-2,1],
//     [-2,-1],
//     [-1,-2],
//     [1,-2]
//     [2,-1],
// ]



// //the graph
// const adjacencyList = new Map()

// // add node

// function addNode(coordinates){
//     adjacencyList.set(coordinates, [])
// }

// function addEdge(origin,legalMove){
//     adjacencyList.get(origin).push(legalMove)
//     adjacencyList.get(legalMove).push(origin)
// }


// //Create the graph
// chessboard.forEach(row =>{row.forEach(col =>addNode([row,col]))})
// legalMoves.forEach(move => addEdge(...move))


// console.log(adjacencyList)

