import React from 'react'

class ScaledComponent extends React.Component {
	render () {
		const widthRatio = this.props.width / this.props.height
		const heightRatio = this.props.height / this.props.width

		const ComponentType = this.props.componentType

		return (
			<div
				style={{
					'--availableWidth': `min(${this.props.width}px, ${this.props.maxWidth})`,
					'--ratioWidth': `calc(${widthRatio} * ${this.props.maxHeight})`,
					width: 'min(var(--availableWidth), var(--ratioWidth))',
					'--availableHeight': `min(${this.props.height}px, ${this.props.maxHeight})`,
					'--ratioHeight': `calc(${heightRatio} * ${this.props.maxWidth})`,
					height: 'min(var(--availableHeight), var(--ratioHeight)',
					display: 'block'
				}}
			>
				<ComponentType
					{...this.props.componentProps}
				/>
			</div>
		)
	}
}

export default ScaledComponent
