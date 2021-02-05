import simpleText from './simpleText';

export default {
  name: 'simpleEditor',
  title: 'simpleEditor',
  type: 'array',
  of: [
    simpleText(),
  ]
}

export function simpleEditorToPlainText(blocks = []) {
  return blocks
  .map(block => {
    if (block._type === 'simpleText' && block.children) {
      return block.children.map(child => child.text).join('');
    }

    return '';
  })
  .join('\n\n');
}
