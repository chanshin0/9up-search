import { SerializedStyles } from '@emotion/react';

export interface FilterConditions {
  $and: Array<Record<string, unknown>>;
}

export type searchArea = {
  base: SerializedStyles;
  textBox: SerializedStyles;
  icon: SerializedStyles;
};
