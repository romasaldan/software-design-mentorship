import { Shipment } from "../shipment";

export class MockGUI {
  private listeners: { [key: string]: Array<(state: Shipment) => void> } = {}

  on(eventType: string, callback: (state: Shipment) => void) {
    if (this.listeners[eventType]) {
      this.listeners[eventType].push(callback)
    } else {
      this.listeners[eventType] = [callback]
    }
  }

  trigger(eventType: string, state: Shipment) {
    this.listeners[eventType].forEach((callback: (state: Shipment) => void) => {
      callback(state)
    });
  }
}

