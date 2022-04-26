import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 1,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      callback(data);
    },
    error: function(response) {
      console.log("Search Failed");
    }
  });
};

export default searchYouTube;
