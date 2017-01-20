import {Component} from 'react';

export default class Sprite extends Component {
    render() {
        console.log('inside custom sprite')
        return (
            <div style={{
                width: 64,
                height: 64,
                overflow: 'hidden',
                position: 'relative'
                }}>
                <img src={this.props.src} style={this.getImageStyles()}/>
            </div>
        )
    }
}
