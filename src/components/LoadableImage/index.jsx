import React from 'react'

class LoadableImage extends React.Component {
	delay () {
		setTimeout(() => {
			this.props.loaded()
		}, 1000 + 10000 * Math.random())
	}
	render () {
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
