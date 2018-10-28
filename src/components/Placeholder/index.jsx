import React from 'react'
// TODO add independent readme for Placeholder, ScaledComponent, and LoadableImage

class Placeholder extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			loaded: false
		}
		this.loaded = this.loaded.bind(this)
	}
	loaded () {
		this.setState({
			loaded: true
		})
	}
	render () {
		const PlaceholderType = this.props.placeholderType
		const ComponentType = this.props.componentType
		const placeholder = this.props.placeholderType ?
			<PlaceholderType {...this.props.placeholderProps} />
			: <div
				style={{
					backgroundColor: 'green', // TODO add SVG placeholder as prop | load both placeholder and placeheld as props -- SVG to thumb to full image will be defined with two nested placeholder components
					width: '100%',
					height: '100%'
				}}
			/>

		// TODO make placeholder null element when this.state.loaded is true
		return (
			<div
				style={{
					width: this.props.width,
					height: this.props.height
				}}
			>
				<div style={{ display: this.state.loaded ? 'none' : 'block' }} >
					{placeholder}
				</div>
				<div style={{ display: this.state.loaded ? 'block' : 'none' }} >
					<ComponentType
						{...this.props.componentProps}
						loaded={this.loaded}
					/>
				</div>
			</div>
		)
	}
}

export default Placeholder
