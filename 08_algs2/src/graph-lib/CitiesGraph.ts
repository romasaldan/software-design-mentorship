import {AdjacencyMatrix} from './AdjacencyMatrix';
import {dijkstra, printPath} from './dijkstra';

export interface WeightedGraphItem {
    from: string;
    to: string;
    weight: number;
}

export class CitiesGraph {
    protected registeredNames: string[];
    protected matrix = new AdjacencyMatrix();

    constructor(edges: WeightedGraphItem[]) {
        this.registeredNames = this.getRegisteredNames(edges);
        this.formMatrix(edges);
    }

    private getRegisteredNames(items: WeightedGraphItem[]) {
        return [...new Set([...items.map((item) => item.to), ...items.map((item) => item.from)])].sort();
    }

    private formMatrix(edges: WeightedGraphItem[]) {
        this.matrix.addVertexTimes(this.registeredNames.length - 1);

        edges.forEach((edge) => {
            const fromIndex = this.registeredNames.indexOf(edge.from);
            const toIndex = this.registeredNames.indexOf(edge.to);

            this.matrix.addEdge(fromIndex, toIndex, edge.weight);
        });
    }

    getShortestDistancesFrom(city: string) {
        const cityIndex = this.registeredNames.indexOf(city);
        const {shortestDistances} = dijkstra(this.matrix, cityIndex);

        return shortestDistances;
    }

    getShortestPath(from: string, to: string) {
        const fromCityIndex = this.registeredNames.indexOf(from);
        const toCityIndex = this.registeredNames.indexOf(to);
        const {parentPath} = dijkstra(this.matrix, fromCityIndex);
        const citiesList = [...printPath(toCityIndex, parentPath).reverse(), toCityIndex];

        return citiesList.map((cityIndex) => this.registeredNames[cityIndex]);
    }

    getAllShortestPathes(from: string) {
        return this.registeredNames.map((city) => this.getShortestPath(from, city));
    }

    getGraphView() {
        return this.matrix.print();
    }
}
