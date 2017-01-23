import { observable } from 'mobx';

class GameStore {
  constructor(){
      this.characterPosition = { x: 500, y: 200 };
      this.stageX = 0;
  }




  setCharacterPosition(position) {
    this.characterPosition = position;
  }

  setStageX(x) {
    if (x > 0) {
      this.stageX = 0;
    } else if (x < -2048) {
      this.stageX = -2048;
    } else {
      this.stageX = x;
    }
  }
}

export default new GameStore();
