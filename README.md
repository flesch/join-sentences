# join-sentences

```shell
$ npm install --save join-sentences
```

```javascript
import joinSentences from 'join-sentences';
// const joinSentences = require('join-sentences');

const sentencesArray = [
  'Will it ever stop?',
  "Yo, I don't know",
  "Turn off the lights and I'll glow!",
  'To the extreme, I rock a mic like a vandal,',
  'light up a stage and wax a chump like a candle',
];

console.log(joinSentences(sentencesArray));
// => Will it ever stop? Yo, I don't know. Turn off the lights and I'll glow! To the extreme, I rock a mic like a vandal, light up a stage and wax a chump like a candle.
```
