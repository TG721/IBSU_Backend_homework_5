import produce from 'immer';

export default function copyObjectValues(source) {
  return produce(source, (draft) => {});
}
