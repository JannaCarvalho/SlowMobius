const intervals = require('../utils/intervals');
const voice = require('../utils/voice');
const path = require('path');
//ADD FOLDERS WITH THE SOUNDS AND JUST SUB FOLDER ROUTE - REQUIRE SERVER RESTART TO ASSUME NEW ARGUMENTS
const folder = 'rick';
		
class Invasion {
  constructor(connection) {
    this.timer = 1;
    this.interval = null;
    this.connection = connection;
  }

  cleanUpTask() {
    intervals.stopInterval(this.interval);
    voice.destroyConnection(this.connection);
  }

  startRespawnInterval() {
    this.interval = intervals.startInterval(() => {
      this.checkWaves();
    },1000);
  }
    
  checkWaves() {
//First Wave
    if (this.timer === 2) {
      console.log(
        `Wave 1 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
        );
      voice.playFile(path.resolve('resources','invasion', folder, 'Iwave1.mp3'));
  		}
//First Buy Time
    if (this.timer === 165) {
      console.log(
        `Last Spawn Wave 1 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
		);
      voice.playFile(path.resolve('resources','invasion', folder, 'Fwave1.mp3'));
  		}

//Second Wave
    if (this.timer === 225) {
      console.log(
        `Wave 2 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Iwave2.mp3'));
  		}
//Second Buy Time
    if (this.timer === 390) {
      console.log(
        `Last Spawn Wave 2 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Fwave2.mp3'));
  		}

//Third Wave
    if (this.timer === 450) {
      console.log(
        `Wave 3 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Iwave3.mp3'));
  		}
//Third Buy Time
    if (this.timer === 615) {
      console.log(
        `Last Spawn Wave 3 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Fwave3.mp3'));
  		}

//Fourth Wave
	if (this.timer === 675) {
      console.log(
        `Wave 4 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Iwave4.mp3'));
  		}
//Fourth Time
	if (this.timer === 840) {
      console.log(
        `Last Spawn Wave 4 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Fwave4.mp3'));
  		}

//Fifth Wave
	if (this.timer === 900) {
      console.log(
        `Wave 5 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Iwave5.mp3'));
  		}
//Fifth Buy Time
	if (this.timer === 1065) {
      console.log(
        `Last Spawn Wave 5 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Fwave5.mp3'));
  		}

//Sixth Wave
	if (this.timer === 1125) {
      console.log(
        `Wave 6 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Iwave6.mp3'));
  		}
//VOID DESTROYER MIDDLE GATE B
	if (this.timer === 1250) {
      console.log(
        `Void Destroyer Middle Gate Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'VBgate.mp3'));
  		}
//Sixth Buy Time
	if (this.timer === 1290) {
      console.log(
        `Last Spawn Wave 6 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Fwave6.mp3'));
  		}

//Seventh Wave
	if (this.timer === 1350) {
      console.log(
        `Wave 7 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Iwave7.mp3'));
  		}
//VOID DESTROYER MIDDLE GATE B
	if (this.timer === 1375) {
      console.log(
        `Void Destroyer Middle Gate Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'VBgate.mp3'));
  		}
//VOID DESTROYER A GATE
	if (this.timer === 1445) {
      console.log(
        `Void Destroyer Left Gate Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'VAgate.mp3'));
  		}
//Seventh Buy Time
	if (this.timer === 1515) {
      console.log(
        `Last Spawn Wave 7 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Fwave7.mp3'));
  		}

//Eighth Wave
	if (this.timer === 1575) {
      console.log(
        `Wave 8 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Iwave8.mp3'));
  		}
//VOID DESTROYER C GATE
	if (this.timer === 1590) {
      console.log(
        `Void Destroyer Right Gate Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'VCgate.mp3'));
  		}
//VOID DESTROYER A GATE
	if (this.timer === 1640) {
      console.log(
        `Void Destroyer Left Gate Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'VAgate.mp3'));
  		}
//VOID DESTROYER B GATE
	if (this.timer === 1590) {
      console.log(
        `Void Destroyer Middle Gate Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'VBgate.mp3'));
  		}
//Eighth Buy Time NO MORE SPAWNS
	if (this.timer === 1740) {
      console.log(
        `Last Spawn Wave 8 Starts at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'Fwave8.mp3'));
  		}

//End Invasion
	if (this.timer === 1800) {
      console.log(
        `Invasion Ending at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
      voice.playFile(path.resolve('resources','invasion', folder, 'EndInv.mp3'));   
     }
      
//Kill Connection
	if (this.timer === 1810) {
      console.log(
        `Leaving Channel at ${new Date().toLocaleString()}, timer=${this.timer}`
      );
	  	    
      this.cleanUpTask();
	} else {
      this.timer++;
      }
	}
}
module.exports = Invasion;