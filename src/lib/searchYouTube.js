var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    type: 'get',
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    data: {
      maxResults: options.max || 5,
      q: options.query || 'react',
      key: options.key || YOUTUBE_API_KEY,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    },
    success: function(data) {
      callback( data.items );
    },
  });
};

window.searchYouTube = searchYouTube;
// https://www.googleapis.com/youtube/v3/search

// search({
//   query: 'cats'
//   key: 'uierwbfg;wagrw'
// }, function(){

// })