class Graph {
    constructor(){
        this.nodes = [];
        this.adjList = {}
    }

    addNode(node){
        this.nodes.push(node)
        this.adjList[node] = []
    }

    addEdge(node1, node2){
        this.adjList[node1].push(node2)
        this.adjList[node2].push(node1)
    }

    printGraph(){
        console.log(this.adjList)
    }

    searchNode(value){
        if(!this.nodes.length){
            return
        }
        return this.nodes.find(item => item === value)
    }

    printAdjacency(value){
        if(this.searchNode(value)){
            console.log(this.adjList[value])
        }else{
            return
        }
    }

}

let grafo = new Graph();

let ciudad1 = "Cali";
let ciudad2 = "Bogotá";
let persona1 = {nombre: "Edwin", edad: 25, ciudad: "Bogota"};
let persona2 = {nombre: "Santiago", edad: 30, ciudad: "Cali"};
let persona3 = {nombre: "Muñoz", edad: 35, ciudad: "Cali"};

grafo.addNode(ciudad1);
grafo.addNode(ciudad2);
grafo.addNode(persona1);
grafo.addNode(persona2);
grafo.addNode(persona3);

grafo.addEdge(persona1, ciudad1);
grafo.addEdge(persona2, ciudad1);
grafo.addEdge(persona3, ciudad2);

function obtenerPersonasEnCiudad(grafo, nombreCiudad){
    let personasEnLaCiudad = [];
    
    for(let node of grafo.nodes){
        if(node.ciudad && node.ciudad === nombreCiudad){
            personasEnLaCiudad.push(node.nombre);
        }
    }
    
    console.log(`Personas en ${nombreCiudad}: ${personasEnLaCiudad.join(", ")}`);
}

obtenerPersonasEnCiudad(grafo, "Cali");