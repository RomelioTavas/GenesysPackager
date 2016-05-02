

var AssetCollection = React.createClass({
    render: function() {
        return (
          <div class="ui four column relaxed grid">
            <div class="ui link cards">
              <div class="card column">
                <div class="image">
                  <img src="http://s3.amazonaws.com/genesyscloud/scene_assets/thumbnails/000/000/019/medium/2016-03-23_21_28_07-Blender__C__Users_Tavas_Desktop_82638_LOW_POLY_TREE_LOW_POLY_TREE.blend_.png?1458739789">
                </div>
                <div class="content">
                  <div class="header">Matt Giampietro</div>
                <div class="meta">
                  <a>Friends</a>
                </div>
                <div class="description">
                  Matthew is an interior designer living in New York.
                </div>
                <div class="extra content">
                  <span class="right floated">
                    Joined in 2013
                  </span>
                  <span>
                    <i class="user icon"></i>
                    75 Friends
                  </span>
                </div>
              </div>
          </div>
        );
    }
});

ReactDOM.render(
  <AssetCollection  />,
  document.getElementById('AssetCollection')
);
