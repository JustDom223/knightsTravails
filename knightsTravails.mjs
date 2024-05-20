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

//     Function BFS(start, finish):
//     Initialize visited as an empty set
//     Initialize queue with the pair (start, 0)
//     Initialize parentMap as an empty map

//     While queue is not empty:
//         Dequeue the first pair (currentNode, steps) from queue

//         If currentNode is equal to finish:
//             Initialize path as an empty list

//             While node is not equal to start:
//                 Insert node at the beginning of path
//                 Set node to the parent of node in parentMap

//             Insert start at the beginning of path
//             Return an object with steps and path

//         If currentNode is not in visited:
//             Add currentNode to visited
//             Retrieve moves (neighbors) of currentNode or initialize as empty list

//             For each move in moves:
//                 Convert move to string and store in moveStr

//                 If moveStr is not in visited:
//                     Enqueue the pair (moveStr, steps + 1) to queue
//                     Set currentNode as the parent of moveStr in parentMap

//     Return an object with steps as -1 and path as an empty list
// End Function


      function bfs(start, finish) {
        const visited = new Set();
        const queue = [[start.toString(), 0]]; // convert start to string as it wont work with the array as an input
        const parentMap = new Map();
        
        while (queue.length > 0) {
          const [currentNode, steps] = queue.shift();
          
          if (currentNode === finish.toString()) {
            // reconstruct the path
            const path = [];
            let node = currentNode;
            while (node !== start.toString()) {
              path.unshift(node);
              node = parentMap.get(node);
            }
            path.unshift(start.toString());
            
            return { steps, path };
          }
          
          if (!visited.has(currentNode)) {
            visited.add(currentNode);
            const moves = edges.get(currentNode) || [];
            
            for (const move of moves) {
              const moveStr = move.toString();
              if (!visited.has(moveStr)) {
                queue.push([moveStr, steps + 1]);
                parentMap.set(moveStr, currentNode);
              }
            }
          }
        }
        function bfs
        
        return { steps: -1, path: [] }; // Return -1 if the finish is not reachable
      }

      
      //dfs gets there. but because the map prevents repeated use it doesnt find the shortest path. and without the map it dose not stop. 
      function dfs(start, finish, visited = new Set(), steps = 0){
          console.log(start)
          
          visited.add(start)
          
          
          const moves = edges.get(start)
          // console.log(moves)
          for(let move of moves){
              move = move.toString()
              if (move == finish){
                  console.log(`${finish} has been found in ${steps} steps`)
                }
                if (!visited.has(move)){
                    steps++
                    dfs(move,finish,visited, steps + 1)
                }
            }
        }
        function knightMoves(start,finish){
          const {steps, path} = bfs(start, finish)
          console.log(`You made it in ${steps}! Here your path`)
          console.log(path)
  
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
        dfs,
        knightMoves,
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


myGraph.knightMoves('0,0', '3,3')

// myGraph.dfs('0,0', '0,7')
// myGraph.edges.get('2,1')