class Project95Storage {

    static save(key, value) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }

    static load(key, fallback) {

        const value = localStorage.getItem(key);

        if(value === null){

            return fallback;

        }

        try{

            return JSON.parse(value);

        }catch{

            return fallback;

        }

    }

}

const AppData = {

    profile: Project95Storage.load("profile",{

        name:"Nelson",
        weight:81,
        targetWeight:95,

        calories:0,
        calorieGoal:3300,

        protein:0,
        proteinGoal:180,

        water:0,
        waterGoal:3,

        sleep:0,
        sleepGoal:8,

        debt:5000,
        savings:0

    }),

    save(){

        Project95Storage.save(
            "profile",
            this.profile
        );

    }

};