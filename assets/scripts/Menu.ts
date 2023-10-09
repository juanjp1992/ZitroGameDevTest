
import { _decorator, Component, Node, Label, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Menu')
export class Menu extends Component {
    
    @property({
        type: Label,
        tooltip: 'actualTime'
    })
    public actualTime: Label;

    //Realiza una petición a WorldTimeApi para pintarlo en actualTime
    async getTime() {
        try {
          const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Madrid");
          const data = await response.json();
          const datetime = data.datetime;
          const time = datetime.split("T")[1].split(".")[0];
          // Actualiza el Label con la hora obtenida
          this.actualTime.string = time;
        } catch (error) {
          console.error("Error al obtener la hora:", error);
        }
    }
    //Este te envia al escena quiz
    goToQuiz() {
        director.loadScene('quiz');
    }
    //Este te envia a la escena slot
    goToSlot() {
        director.loadScene('slot');
    }
   
    start () {
        this.getTime()
    }

    update (deltaTime: number) {
        
    }
}
