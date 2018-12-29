#!/usr/bin/env node

const head = [
'   /////////',
'  /ʗ/---▭-▭ ',
'  \\\\\\     ᔨ ',
'   \\\\\\\\/╰─╯|',
'  /  \\\\\\/// ',
' /  \\    \\  ',
]

const text = [
  'James Steinbach',
  'https://jamessteinbach.com',
  'https://jdsteinbach.com',
  'https://github.com/jdsteinbach',
  'https://twitter.com/jdsteinbach',
  'https://linkedin.com/jdsteinbach'
]

console.log([
  `╭${'─'.repeat(54)}╮`,
  `│${' '.repeat(54)}│`,
  text
    .map((text, i) => `│ ${head[i] || ' '.repeat(12)}${' '.repeat(39 - text.length)}${text}  │`)
    .join('\n'),
  `│${' '.repeat(54)}│`,
  `╰${'─'.repeat(54)}╯`,
].join('\n'))

