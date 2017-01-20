import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Loop, Stage, World, Body, Sprite, TileMap } from 'react-game-kit';


class Game extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div style={{ height: '100vh' }}>
            <Loop>

                <Stage width={1024} height={576}>
                    <World>
                        <Body args={[0,0,75,75]} ref={(b) => this.body = b.body }>
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
                            <Sprite
                                repeat={true}
                                src="character-sprite-grid.png"
                                scale={this.context.scale * 2}
                                state={1}
                                steps={[9, 9, 0, 4, 5]}
                            />
                        </div>
                        </Body>
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


