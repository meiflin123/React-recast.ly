/*var VideoList = () => (
  <div className="video-list">
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
  </div>
);*/
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((videosItemName, index) => <div><h5><em><VideoListEntry video={videosItemName} key={index}/></em></h5></div>)}
  

{videoListEntry</em> view goes here</h5></div>}

  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;