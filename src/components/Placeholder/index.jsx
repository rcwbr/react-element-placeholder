import React from 'react'
// TODO add independent readme for Placeholder, RingSpinner, ScaledComponent, and LoadableImage
import RingSpinner from '../RingSpinner/index.jsx'
import ScaledComponent from '../ScaledComponent/index.jsx'

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
			: (
				<div
					style={{
						width: '100%',
						height: '100%'
					}}
				>
					<RingSpinner
						circleRadius1={15}
						circleRadius2={22}
						strokeWidth={1.8}
					/>
				</div>
			)

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
