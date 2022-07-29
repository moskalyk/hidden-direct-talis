import {library, prefixes, suffixes} from './direction.js'
import ob from 'urbit-ob'
import EventEmitter from 'events'
import chalk from 'chalk';
import ora from 'ora'

// A mixin based mailbox JS OS
// TODO: MINA Onchain Calculator, Fluence Off-Chain Network
class Talis extends EventEmitter {
      constructor(){
            super()
            this.on('event', (vt, hex) => {
                  const pen = (vt == 1 ) ? this.I()
                  :      
                  (vt == 2 ) ? this.II()
                  : 
                  (vt == 3 ) ? this.III()
                  : 
                  (vt == 4 ) ? this.IV()
                  : 
                  (vt == 5 ) ? this.V()
                  : 
                  (vt == 6 ) ? this.VI()
                  : 
                  (vt == 7 ) ? this.VII()
                  : 
                  (vt == 8 ) ? this.VIII()
                  : 
                  (vt == 9 ) ? this.IX()
                  : 
                  (vt == 10 ) ? this.X()
                  : 
                  (vt == 11 ) ? this.XI()
                  : 
                        this.XII()
                  const prism = chalk.hex(hex)
                  console.log(prism(`; ${pen} is not good, not bad`));
            })
      }

      O(event){
            console.log('🃠')
      }

      // 1 // add 
      I(){
            return '🃡 ~ I'
      }
      // 2 // sub
      II(){
            return '🃢 ~ II'
      }
      // 3 // mul
      III(){
            return '🃣 ~ III'
      }
      // 4 // square
      IV(){

            return '🃤 ~ IV'
      }
      // 5 // mint
      V(){
            return '🃥 ~ V'
            // some nftport bit
      }
      // 6 // 
      VI(){
            return '🃦 ~ VI'
      }
      VII(){
            return '🃧 ~ VII'
      }

      VIII(){
            return '🃨 ~ VIII'
      }
      IX(){
            return '🃨 ~ IX'
      }
      X(){
            return '🃪 ~ X'
      }
      XI(){
            return '🃫 ~ XI'
      }
      XII(){
            return '🃬 ~ XII'
      }
}

console.log('✯')
console.log('')
console.log('matter.direct %V.0')
console.log('')
console.log('::> boot')

// display connected neighbours and peers
console.log('')

// loading for replaying logs of transactions yet to be rolled up
console.log('')

// What's Happening?
const talis = new Talis()

const hex = {
      0: '#5EE',
      1: '#C0FFEE',
      2: '#BOD',
      3: '#0FF',
      4: '#FEE',
      5: '#FED',
      6: '#A55'
}

var indexFrame = 1;
function frame() {
      const frames = ['  ☰', '  ☱', '  ☲', '  ☳', '  ☴', '  ☵', '  ☶', '  ☷']
      let frame = frames[indexFrame];
      indexFrame = ++indexFrame % frames.length;
      const fullText = ' ::>';
      return frame + fullText;
}

setInterval(() => {
      setInterval(() => {
            process.stderr.write(frame())
            process.stderr.cursorTo(0);
      }, 2000/8)
      talis.emit('event', Math.floor(Math.random() * 12) + 1, hex[Math.floor(Math.random() * 7)])
}, 2000)