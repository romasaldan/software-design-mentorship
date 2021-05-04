import { Shipment } from '../../src/shipment';

export class MockGUI {
  private static singleton: MockGUI;
  private listeners: { [key: string]: Array<(state: Shipment) => void> } = {};

  private constructor() {}

  public static getInstance(): MockGUI {
    if (MockGUI.singleton === undefined) {
      MockGUI.singleton = new MockGUI();
    }

    return MockGUI.singleton;
  }

  public on(eventType: string, callback: (state: Shipment) => void) {
    if (this.listeners[eventType]) {
      this.listeners[eventType].push(callback);
    } else {
      this.listeners[eventType] = [callback];
    }
  }

  public trigger(eventType: string, state: Shipment) {
    this.listeners[eventType].forEach((callback: (state: Shipment) => void) => {
      callback(state);
    });
  }
}
