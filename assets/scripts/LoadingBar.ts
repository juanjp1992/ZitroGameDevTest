import { _decorator, Component, ProgressBar, Label, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadingBar')
export class LoadingBar extends Component {
    
    numPercentage: number = 0;
    targetPercentage: number = 100;
    splashTimeDuration: number = 5; // Tiempo total en segundos
    elapsedTime: number = 0; // Tiempo transcurrido en segundos

    @property({ 
        type: ProgressBar, 
        tooltip: 'ProgressBar'
    })
    public progressBar: ProgressBar;

    @property({
        type: Label,
        tooltip: 'Percentage'
    })
    public percentage: Label;

    start() {
        this.progressBar.progress = 0;
        this.percentage.string = '0 %';
        this.numPercentage = 0;
        this.elapsedTime = 0;
    }


    update(deltaTime: number) {
        // Actualizar el tiempo transcurrido
        this.elapsedTime += deltaTime;
        console.log(this.elapsedTime);

        // Calcular el porcentaje actual basado en el tiempo transcurrido
        const currentPercentage = Math.floor((this.elapsedTime / this.splashTimeDuration) * this.targetPercentage);

        // Actualizar la barra de progreso y el porcentaje solo si ha cambiado
        if (currentPercentage !== this.numPercentage) {
            this.numPercentage = currentPercentage;
            this.progressBar.progress = currentPercentage / this.targetPercentage;
            this.percentage.string = `${currentPercentage} %`;
        }

        // Si la barra de progreso ha alcanzado el 100%, cambiar a la escena "Menu"
        if (this.numPercentage >= this.targetPercentage) {
            director.loadScene('menu');
        }
    }
}
