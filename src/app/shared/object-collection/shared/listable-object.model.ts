import { TypedObject } from '../../../core/cache/object-cache.reducer';

export interface ListableObject extends TypedObject {
  getRenderTypes(): string[];
}
