document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    filter: '',
    get groups() {
      let playlists = window.playlistData.filter((p) => !this.filter || p.slug.replace(/-/g, ' ').includes(this.filter.toLowerCase().trim()))
      return Object.entries(_.groupBy(playlists, 'group')).map(([ group, playlists ]) => ({
        name: group,
        playlists,
      }))
    },
    buildHref({ id, slug }) {
      return `https://music.apple.com/us/playlist/${slug}/pl.${id}`
    },
  }))
})
