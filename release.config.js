/* eslint-disable no-template-curly-in-string */

module.exports = {
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  prepare: [
    {
      path: '@semantic-release/exec',
      cmd: 'OCLIF_NEXT_VERSION=${nextRelease.version} yarn run version',
    },
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'CHANGELOG.md', 'README.md', 'compiled/index.js', 'docs'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    },
  ],
  publish: [
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
}
