// TODO: format?

    // fire up the plugin
    videojs('video', {
      controls: true,
      fluid: true,
      plugins: {
        videoJsResolutionSwitcher: {
          default: 'low', // Default resolution [{Number}, 'low', 'high'],
          dynamicLabel: true
        }
      }
    }, function(){
      var player = this;
      window.player = player
      player.updateSrc([
        {
          src: 'https://vjs.zencdn.net/v/oceans.mp4?SD',
          type: 'video/mp4',
          label: 'SD',
          res: 360
        },
        {
          src: 'https://vjs.zencdn.net/v/oceans.mp4?HD',
          type: 'video/mp4',
          label: 'HD',
          res: 720
        }
      ])
      player.on('resolutionchange', function(){
        console.info('Source changed to %s', player.src())
      })
    })
    
    
    
    // flash tech
    videojs('video_flash', {
      controls: true,
      techOrder: ['flash'],
      preload: 'auto',
      plugins: {
        videoJsResolutionSwitcher: {
          default: 'low', // Default resolution [{Number}, 'low', 'high'],
          dynamicLabel: true
        }
      }
    }, function(){
      var player = this;
      window.player = player
      player.updateSrc([
        {
          src: 'https://vjs.zencdn.net/v/oceans.mp4?SD',
          type: 'video/mp4',
          label: 'SD',
          res: 360
        },
        {
          src: 'https://vjs.zencdn.net/v/oceans.mp4?HD',
          type: 'video/mp4',
          label: 'HD',
          res: 720
        }
      ])
      player.on('resolutionchange', function(){
        console.info('Source changed to %s', player.src())
      })
    })
		
		// Youtube tech
		videojs('video_youtube', {
		controls: true,
		techOrder:  ["youtube"],
		sources: [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=iD_MyDbP_ZE"}],
		plugins: {
			videoJsResolutionSwitcher: {
				default: 'low',
				dynamicLabel: true
			}
		}
	}, function(){
		var player = this;
		player.on('resolutionchange', function(){
			console.info('Source changed')
		})
	});

    videojs('video_1').videoJsResolutionSwitcher()
