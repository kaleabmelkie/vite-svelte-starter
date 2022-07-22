module.exports = {
  transform: {
    '^.+\\.svelte$': [
      '../../node_modules/svelte-jester/dist/transformer.mjs',
      {
        preprocess: './svelte.config.js'
      }
    ],
    '^.+\\.ts$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      'jest-transform-stub'
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  extensionsToTreatAsEsm: ['.ts', '.svelte'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  }
};
