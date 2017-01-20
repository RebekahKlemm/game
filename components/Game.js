import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Loop, Stage, World, Body, Sprite, TileMap, KeyListener} from 'react-game-kit';
import Character from './Character';
import GameStore from '../stores/game-store';


class Game extends Component {
    constructor(props){
        super(props)
        this.keyListener = new KeyListener();

    }

    componentDidMount() {

        this.keyListener.subscribe([
            this.keyListener.LEFT,
            this.keyListener.RIGHT,
            this.keyListener.UP,
            this.keyListener.SPACE,
            65,
        ]);
    }

    componentWillUnmount() {
        this.keyListener.unsubscribe();
    }

    render() {
        return (
            <div style={{ height: '100vh' }}>
            <Loop>

                <Stage width={1024} height={576}>
                    <World>
                        <div>
                            <TileMap
                                style={{ top: 0 }}
                                sourceWidth={200}
                                src="bluetile.jpg"
                                tileSize={30}
                                columns={16}
                                rows={16}
                                layers={[
                                    [
                                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                                    ],
                                ]}
                            />
                            <TileMap
                                style={{ top: 0 }}
                                sourceWidth={200}
                                src="blacktile.jpg"
                                rows={16}
                                columns={16}
                                tileSize={30}
                                layers={[
                                    [
                                        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
                                        1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0,
                                        0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0,
                                        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0,
                                        0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
                                        0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0,
                                        0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1,
                                        0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
                                        0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0,
                                        1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
                                        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
                                        0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
                                        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
                                        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,


                                    ],
                                ]}
                            />
                        </div>
                            <Character
                                keys={this.keyListener}
                                //store={GameStore}
                            />
                    </World>
                </Stage>
            </Loop>
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Game);


