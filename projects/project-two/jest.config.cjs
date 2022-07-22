module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: './svelte.config.js'
      }
    ],
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  setupFilesAfterEnv: ['./jest-setup.ts']
};
