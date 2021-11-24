document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    get groups() {
      return Object.entries(_.groupBy(window.playlistData, 'group')).map(([ group, playlists ]) => ({
        name: group,
        playlists,
      }))
    },
    buildHref({ id, slug }) {
      return `https://music.apple.com/us/playlist/${slug}/pl.${id}`
    },
  }))
})
