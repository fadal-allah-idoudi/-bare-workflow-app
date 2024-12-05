class Place {
    constructor(titele,imageURi,address,location){
        this.titele=titele,
        this.imageURi=imageURi,
        this.address=address,
        this.location=location,
        this.id=new Date().toString()+Math.random().toString();
    }
}