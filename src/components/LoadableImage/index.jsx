import React from 'react'

class LoadableImage extends React.Component {
	delay () {
		// TODO: remove delay (used to simulate loading time in local environments)
		setTimeout(() => {
			this.loaded()
		}, 1000 + 10000 * Math.random())
	}
	componentWillUnmount() {
		// do not call loaded after the placeholder has been removed -- applicable when placeholders are nested
		this.loaded = () => {}
	}
	render () {
		this.loaded = this.props.loaded
		return (
			<img
				style={{
					width: '100%',
					height: '100%',
				}}
				src={this.props.imageProps.src}
				onLoad={() => { this.delay() }}
			/>
		)
	}
}

export default LoadableImage
