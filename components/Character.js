import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import Matter, { World, Bodies } from 'matter-js';
import {connect} from 'react-redux';

import {
    AudioPlayer,
    Body,
    Sprite,
} from 'react-game-kit';


export default class Character extends Component {
    //
    // static propTypes = {
    //     keys: PropTypes.object,
    //     onEnterBuilding: PropTypes.func,
    //     store: PropTypes.object,
    // };
    //
    // static
    //
    handlePlayStateChanged(state){
        this.setState({
            spritePlaying: state ? true : false,
        });
    };
    //
    move(body, x) {
         Matter.Body.setVelocity(body, { x, y: 0 });
    };
    //
    jump(body){
    //     this.jumpNoise.play();
    //     this.isJumping = true;
    //     Matter.Body.applyForce(
    //         body,
    //         { x: 0, y: 0 },
    //         { x: 0, y: -0.15 },
    //     );
    //     Matter.Body.set(body, 'friction', 0.0001);
    };
    //
    punch(){
    //     this.isPunching = true;
    //     this.setState({
    //         characterState: 4,
    //         repeat: false,
    //     });
    }
    //
    getDoorIndex(body){
    //     let doorIndex = null;
    //
    //     const doorPositions = [...Array(6).keys()].map((a) => {
    //         return [(512 * a) + 208, (512 * a) + 272];
    //     });
    //
    //     doorPositions.forEach((dp, di) => {
    //         if (body.position.x + 64 > dp[0] && body.position.x + 64 < dp[1]) {
    //             doorIndex = di;
    //         }
    //     });
    //
    //     return doorIndex;
    }
    //
    enterBuilding(body){
    //     const doorIndex = this.getDoorIndex(body);
    //
    //     if (doorIndex !== null) {
    //         this.setState({
    //             characterState: 3,
    //         });
    //         this.isLeaving = true;
    //         this.props.onEnterBuilding(doorIndex);
    //     }
    };
    //
    checkKeys(shouldMoveStageLeft, shouldMoveStageRight){
        window.onkeydown = function (e) {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code === 38) { //up key
                alert('up');
            } else if (code === 40) { //down key
                alert('down');
            }
            else if(code === 37){
                // this.move(this.body, -5);
                // characterState = 1;
                // this.props.store.setStageX(this.props.store.stageX + 5);
                console.log('here is body', body)
                if(this.body){
                    Matter.Body.setPosition(this.body, {x:500, y:500})
                }

            }
            else if(code === 39){
                alert('right');
            }
        };





        // const  keys  = this.props.keys;
        // const { body } = this.body;

        // let characterState = 2;
        //
        // if (keys.isDown(65)) {
        //     return this.punch();
        // }
        //
        // if (keys.isDown(keys.SPACE)) {
        //     this.jump(body);
        // }
        //
        // if (keys.isDown(keys.UP)) {
        //     return this.enterBuilding(body);
        // }
        //
        // if (keys.isDown(keys.LEFT)) {
        //     if (shouldMoveStageLeft) {
        //         store.setStageX(store.stageX + 5);
        //     }
        //
        //     this.move(body, -5);
        //     characterState = 1;
        // } else if (keys.isDown(keys.RIGHT)) {
        //     if (shouldMoveStageRight) {
        //         store.setStageX(store.stageX - 5);
        //     }
        //
        //     this.move(body, 5);
        //     characterState = 0;
        // }
        //
        // this.setState({
        //     characterState,
        //     repeat: characterState < 2,
        // });
    }
    //
    update(){
        const { store } = this.props;
        const { body } = this.body;
        // debugger;

        if(this.body) {
            Matter.Body.setPosition(this.body.body, {x:500, y:500})

            //     console.log('got into if inside update')
        //     console.log('here is this.body', this.body)
        //     this.body.body.position.x= this.body.body.position.x + 20;
        //     this.body.body.position.y=20;
        //     // this.move(this.body.body, 0)

        }



    //
    //     const midPoint = Math.abs(store.stageX) + 448;
    // //
    //     const shouldMoveStageLeft = body.position.x < midPoint && store.stageX < 0;
    //     const shouldMoveStageRight = body.position.x > midPoint && store.stageX > -2048;
    // //
    //     const velY = parseFloat(body.velocity.y.toFixed(10));
    // //
    //     if (velY === 0) {
    //         this.isJumping = false;
    //         Matter.Body.set(body, 'friction', 0.9999);
    //     }
    // //
    //     if (!this.isJumping && !this.isPunching && !this.isLeaving) {
    //
    //
    //         this.checkKeys(shouldMoveStageLeft, shouldMoveStageRight);
    //
    //         store.setCharacterPosition(body.position);
    //     } else {
    //         if (this.isPunching && this.state.spritePlaying === false) {
    //             this.isPunching = false;
    //         }
    //
    //         const targetX = store.stageX + (this.lastX - body.position.x);
    //         if (shouldMoveStageLeft || shouldMoveStageRight) {
    //             store.setStageX(targetX);
    //         }
    //     }
    //
    //     this.lastX = body.position.x;

    };
    //
    constructor(props) {
        super(props);
    //
        this.loopID = null;
        this.isJumping = false;
        this.isPunching = false;
        this.isLeaving = false;
        this.lastX = 0;
    //
        this.state = {
            characterState: 2,
            loop: false,
            spritePlaying: true,
        };

        this.handlePlayStateChanged = this.handlePlayStateChanged.bind(this);
        this.update = this.update.bind(this);
    }
    //
    componentDidMount() {
        this.update();
    //     this.jumpNoise = new AudioPlayer('/assets/jump.wav');
        Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
    }
    //
    componentWillUnmount() {
        this.update();
        Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
    }
    //
    getWrapperStyles() {
        // const { characterPosition, stageX } = this.props.store;
        // const { scale } = this.context;
        // const { x, y } = characterPosition;
        // const targetX = x + stageX;
        //
        // return {
        //     position: 'absolute',
        //     transform: `translate(${targetX * scale}px, ${y * scale}px)`,
        //     transformOrigin: 'left top',
        // };
    }
    //
    render() {
        // const x = this.props.store.characterPosition.x;
        console.log(this.props);


        return (
            <div style={this.getWrapperStyles()}>
                <Body
                    //args={[x, 384, 64, 64]}
                    inertia={Infinity}
                    ref={(b) => { this.body = b; }}

                >
                <Sprite
                    repeat={this.props.repeat}
                    onPlayStateChanged={this.handlePlayStateChanged}
                    src="character-sprite-grid.png"
                    scale={this.context.scale * 2}
                    state={this.props.characterState}
                    steps={[9, 9, 0, 4, 5]}
                />
                </Body>
             </div>
        );
    }
}

Character.contextTypes = {
    engine: PropTypes.object,
    scale: PropTypes.number,
};

// const mapStateToProps = (state, ownProps) => {
//     return {
//         repeat: state.game.repeat,
//         characterState: state.game.characterState,
//     };
// }
//
//
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//
//     }
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Character);


