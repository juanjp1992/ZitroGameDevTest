
import { _decorator, Component, Node, resources, JsonAsset, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('QuizManager')
export class QuizManager extends Component {
    @property
    quizFileName = 'data/quiz_options'; 
    
    @property({
        type: Label,
        tooltip: 'Answer'
    })
    public answer: Label;

    onLoad() {
      resources.load(this.quizFileName, JsonAsset, (err, jsonAsset) => {
        if (err) {
          console.error('Error al cargar el archivo JSON', err);
          return;
        }
  
        const jsonData = jsonAsset.json;
        console.log('Datos del JSON cargado:', jsonData);
      });
    }
 
    start () {
        
    }

    update (deltaTime: number) {
    }
}

