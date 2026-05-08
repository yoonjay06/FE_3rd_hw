const horse = {
    name : "적토마",
    age : 3,

    person : {
        name : "아기사자",
        age : 13,

        introduce() {
            console.log(`안녕! 나는 ${this.name}이고 나이는 ${this.age}살이야!`);
        }
    },

    introduce()  {
        console.log(`안녕! 내 말의 이름은 ${this.name} 이고, 나이는 ${this.age}야!`);
    }
};

horse.introduce();

horse.person.introduce();