function createDirectedGraph(){
    const nodes = [];
    const edges = new Map();

    // add node
    function addNode(id, position){
        nodes.push({id, position})
        edges.set(id, [])
    };

    function createGridNodes(rows, col){
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < col; j++){
                addNode(`${i},${j}`, [i,j])
            }
        }
        
    }
    // add edge for specific node
    function addEdge(sourceId, targetId) {
        if (!edges.has(sourceId)) {
          // If the sourceId doesnt exist create an entry for it
          edges.set(sourceId, []);
        }
      
        // check if targeId is already in the list of edges for sourceId
        const existingEdges = edges.get(sourceId);
        if (!existingEdges.includes(targetId)) {
          // Add the targetId only if its not already present
          existingEdges.push(targetId);
        }
      }
      
    function createAllEdges(moves){
//loop for each node in the graph
        nodes.forEach(node => {
            // loop for each viable move
            moves.forEach(move => {
                // the maths for creating the valid move based on the current position
                const legalMove = [node.position[0] + move[0], node.position[1] + move[1]]

                if(legalMove[0] >= 0 && legalMove[0] < 8 && legalMove[1] >= 0 && legalMove[1] < 8){
                    addEdge(node.id,legalMove)
                }else{
                    // console.log(`${legalMove} fails the test`)
                }
                // addEdge(node.id,legalMove)
            })
        })

    }  


    function getNodes(){
        return nodes
    };

    function getEdges(){
        return Array.from(edges)
    };
    
    return {
        addNode,
        addEdge,
        createGridNodes,
        createAllEdges,
        getNodes,
        getEdges,
      };
}

//legal moves. 
const legalMoves = [
    [2,1],
    [1,2],
    [-1,2],
    [-2,1],
    [-2,-1],
    [-1,-2],
    [1,-2],
    [2,-1],
]

const myGraph = createDirectedGraph()

myGraph.createGridNodes(8,8)


myGraph.createAllEdges(legalMoves)


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

