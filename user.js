class User {
    constructor(name, image, species) {
        this.name = name;
        this.image = image;
        this.species = species;
    }

    getname () {
        return this.name;
    }

    getimage() {
        return this.image;
    }

    getspecies() {
        return this.species;
    }

    getInfo() {
        return `${this.name} ${this.image} ${this.species}`
    }
}

