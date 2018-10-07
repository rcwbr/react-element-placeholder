import React from 'react'
import ImagePlaceholder from '../ImagePlaceholder/index.jsx'

class ScaledImagePlaceholder extends React.Component {
	render () {
		const widthRatio = this.props.metadata.width / this.props.metadata.height
		const heightRatio = this.props.metadata.height / this.props.metadata.width
		return (
			<div
				style={{
					'--availableWidth': `min(${this.props.metadata.width}px, ${this.props.maxWidth})`,
					'--ratioWidth': `calc(${widthRatio} * ${this.props.maxHeight})`,
					width: 'min(var(--availableWidth), var(--ratioWidth))',
					'--availableHeight': `min(${this.props.metadata.height}px, ${this.props.maxHeight})`,
					'--ratioHeight': `calc(${heightRatio} * ${this.props.maxWidth})`,
					height: 'min(var(--availableHeight), var(--ratioHeight)',
					display: 'block'
				}}
			>
				<ImagePlaceholder // TODO allow for component composition; load image placeholder type as prop
					metadata={this.props.metadata}
					width='100%'
					height='100%'
				/>
			</div>
		)
	}
}

export default ScaledImagePlaceholder
