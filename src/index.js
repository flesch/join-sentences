const defaults = { join: ' ', punctuation: '.', pattern: /[!,.:;\?\-]+$/ };

export default (sentences, options) => {
  if (typeof sentences !== 'undefined' && Array.isArray(sentences)) {
    const opts = { ...defaults, ...options };
    return sentences
      .map((sentence) => {
        return sentence.match(opts.pattern)
          ? sentence
          : `${sentence}${opts.punctuation}`;
      })
      .join(opts.join);
  }
  throw new Error('The `sentences` parameter must be an array of strings');
};
