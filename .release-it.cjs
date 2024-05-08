module.exports = {
  git: {
    commitMessage: 'release: v${version}'
  },
  github: {
    release: true,
    releaseNotes(context) {
      // NOTE: remove the first, redundant line with version and date
      return context.changelog.split('\n').slice(1).join('\n')
    }
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: {
        name: 'angular'
      }
    }
  }
}