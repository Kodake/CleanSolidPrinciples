interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}

interface RunnningBird {
    run(): void;
}

class Tucan implements Bird, FlyingBird {
    fly(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }

}

class Hummingbird implements Bird, FlyingBird {
    fly(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }

}

class Ostrich implements Bird, RunnningBird {
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
}

class Penguin implements Bird, SwimmingBird {
    eat(): void {
        throw new Error("Method not implemented.");
    }
    swim(): void {
        throw new Error("Method not implemented.");
    }

}