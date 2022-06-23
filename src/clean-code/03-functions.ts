(() => {

    function getMovieById(id: string) {
        console.log({ id });
    }

    function getMovieCastById(id: string) {
        console.log({ id });
    }

    function getActorBioById(id: string) {
        console.log({ id });
    }

    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({ cast, description, rating, title }: Movie) {
        console.log({ cast, description, rating, title });
    }

    function checkFullName(fullName: string): boolean {
        if (fullName == null) {
            return false;
        }

        return true;
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        if (checkFullName(fullName)) return false;

        console.log('Crear actor', birthdate);
        return true;

    }

    // Continuación: Check getPayAmount file

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return (isRetired) ? 3000 : 4000;
    }

})();
