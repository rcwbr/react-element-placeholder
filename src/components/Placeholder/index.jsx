import React from 'react'
import LoadableImage from '../LoadableImage/index.jsx' // TODO remove import

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
		const ModuleType = this.props.moduleType
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
					<ModuleType
						{...this.props.moduleProps}
						loaded={this.loaded}
					/>
				</div>
			</div>
		)
	}
}

export default Placeholder
