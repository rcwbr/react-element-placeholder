import React from 'react'

class ImagePlaceholder extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			loaded: false
		}
	}
	delay () {
		setTimeout(() => {
			this.imageLoaded()
		}, 2000)
	}
	imageLoaded () {
		this.setState({
			loaded: true
		})
	}
	render () {
		return (
			<div
				style={{
					backgroundColor: 'red', // TODO add SVG placeholder as prop | load both placeholder and placeheld as props -- SVG to thumb to full image will be defined with two nested placeholder components
					width: this.props.width,
					height: this.props.height
				}}
			>
				<img
					style={{
						width: '100%',
						height: '100%',
						display: this.state.loaded ? 'block' : 'none'
					}}
					src={this.props.metadata.src}
					onLoad={() => { this.delay() }} // TODO add thumbnail placeholder component to render thumbnail image (this.props.metadata.src here) until fullsize image is loaded.
				/>
			</div>
		)
	}
}

export default ImagePlaceholder
