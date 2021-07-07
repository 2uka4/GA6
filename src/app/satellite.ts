// STEP 1 //

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

constructor(type: string, launchDate: string, orbitType: string, operational: boolean, name: string,){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
    public shouldShowWarning(){
        if(this.type==="Space Debris")
        {
            return true
        }else{
            return false
        }
    }
}

