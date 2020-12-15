const transformTracks = (tracks) => {
         return  tracks.map(track => {
               return{
                   name:track.name,
                   artist:track.artist,
                   image:track.image[2]['#text'],
                   url:track.url
               }
           })
}

export default transformTracks;