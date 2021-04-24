import { EOL } from 'os';
import { State } from './client';
import { Shipment } from './shipment';

export function addMarks(target: Shipment, _propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (): string {
    const result = originalMethod.call(this);
    const state: State = target.getState.call(this);

    if (state.marks) {
      const marksDescription = state.marks.map((mark) => `**MARK ${mark.toUpperCase()}**`).join(EOL);

      return result + EOL + marksDescription;
    } else {
      return result;
    }
  };

  return descriptor;
}
