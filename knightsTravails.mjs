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
        return edges
    };
    function getEdgesArray(){
        return Array.from(edges)
    };

    function bfs(start, finish) {
        let count = 0;
        let attemptedMoves = new Set();
      
        const queue = [start];
        while (queue.length > 0) {
            count++
            const space = queue.shift();
            console.log(`count: ${count++} for ${space}`);
            const moves = edges.get(space.toString());
        
            for (const move of moves) {
            if (!attemptedMoves.has(move)) {
                attemptedMoves.add(move);
                console.log(`Attempting move to ${move}`);
        
                if (move == finish) {
                console.log('Finish found!');
                console.log(`It will take ${count} moves`)
                return;
                }
        
                queue.push(move); // Add to queue only if not attempted before
            }
            }
        }
      }
      
    
    return {
        addNode,
        addEdge,
        createGridNodes,
        createAllEdges,
        getNodes,
        getEdges,
        getEdgesArray,
        bfs,
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

// console.log(myGraph.getEdges())


myGraph.bfs('0,0', '7,7')
// myGraph.edges.get('2,1')