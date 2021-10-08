const db = require('../config/db');





class Post {
    constructor(name, budget,sex) {
        this.name = name;
        this.budget = budget;
        this.sex = sex;

    }
    async save() {

        let sql = `
        INSERT INTO users(
            Name,
            Budget,
            Sex
        )
        VALUES(
           '${this.name}',
            '${this.budget}',
            '${this.sex}'
        )
        `;
        const newPost = await db.execute(sql);
    }
    static findAll() {

    }


}


// Post.findAll();