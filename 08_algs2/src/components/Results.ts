import {CitiesGraph, WeightedGraphItem} from '../graph-lib/CitiesGraph';
import {PubSub} from '../utils/PubSub';

export interface TableData {
    distance: number;
    path: string[];
}

export class Results extends PubSub {
    private graph: CitiesGraph;
    constructor(private chosenCity: string, private items: WeightedGraphItem[]) {
        super();

        this.graph = new CitiesGraph(items);
    }

    get rootElement() {
        const rootElem = document.getElementById('result');

        if (rootElem) {
            return rootElem;
        } else {
            const rootElement = document.createElement('div');
            rootElement.setAttribute('id', 'result');

            return rootElement;
        }
    }

    private getTemplate() {
        const tableData = this.getTableData();

        return tableData.length !== 0
            ? `
              <div style="margin: 20px">
                <div>
                  <div>Матриця</div>
                  ${this.graph.getGraphView()}
                </div>
                <span>Таблиця вартості і найкоротших маршрутів для ${this.chosenCity}</span>
                <table>
                  <tr>
                    <th>Маршрут</th>
                    <th>Вартість</th>
                  </tr>
                  ${this.getTableRow(tableData)}
                </table>
              </div>`
            : `<div style="margin: 20px">Некоректно складений граф</div>`;
    }

    private getTableRow(tableData: TableData[]) {
        return `
          ${tableData
              .filter((data) => data.distance > 0)
              .map(
                  (data) => `
                      <tr>
                        <td>${data.path.join(' - ')}</td>
                        <td>${data.distance}</td>
                      </tr>
                  `
              )}
      `;
    }

    getTableData() {
        try {
            const distances = this.graph.getShortestDistancesFrom(this.chosenCity);
            const pathes = this.graph.getAllShortestPathes(this.chosenCity);
            const tableData: TableData[] = [];

            for (let i = 0; i < distances.length; i++) {
                tableData.push({
                    distance: distances[i],
                    path: pathes[i],
                });
            }

            return tableData;
        } catch (error) {
            alert('Некоректно складений граф, можливо "острів" присутній');

            return [];
        }
    }

    getElement() {
        const rootElement = this.rootElement;
        rootElement.innerHTML = this.getTemplate();

        return rootElement;
    }
}
