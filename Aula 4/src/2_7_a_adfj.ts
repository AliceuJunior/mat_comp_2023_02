class Veiculos_adfj{
    latitude:number;
    longitude:number;
    constructor(longitude:number,latitude:number){
        this.longitude = longitude;
        this.latitude = latitude
    }
    moverHorizontal(longitude: number, latitude: number): void {
        this.longitude += longitude;
        this.latitude += latitude;
}
}
class VeiculoEletrico extends Veiculos_adfj{
    bateria: number;
    constructor(longitude: number, latitude: number, capacidadeBateria: number) {
        super(longitude, latitude);
        this.bateria = capacidadeBateria;
    }

    StatusBateria():void{
        this.bateria = 100;
    }
}

class VeiculoEletricoVoador extends VeiculoEletrico{
    altitude:number;
    constructor(latitude:number,longitude:number,altitude:number,capacidadeBateria:number){
        super(latitude,longitude,capacidadeBateria);
        this.altitude = 0;

    }

    MoverVertical(altitude:number):void{
        this.altitude +=altitude;
    }
}

export{Veiculos_adfj,VeiculoEletrico,VeiculoEletricoVoador};