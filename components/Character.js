import React, {Component} from 'react'
import {  Sprite } from 'react-game-kit';


class Character extends Component {
    // static contextTypes = {
    //     loop: PropTypes.object,
    // };

    update = () => {
         window.onkeyup = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            if (key == 38) {
                playerSpriteX += 10;
            }else if (key == 40) {
                playerSpriteX -= 10;
            }
        }
    }

    render(){
        return(
        <Sprite
            repeat={true}
            src="character-sprite-grid.png"
            scale={this.context.scale * 2}
            state={1}
            steps={[9, 9, 0, 4, 5]}
        />
        )
    }

    componentDidMount() {
        this.context.loop.subscribe(this.update);
    }

    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }
}

module.exports = Character;

