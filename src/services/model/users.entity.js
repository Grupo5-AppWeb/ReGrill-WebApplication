export class User {
    constructor(id=0, name='', lastname='', email='', password='') {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    static fromApiResponse(apiData) {
        return new User(apiData.id, apiData.name,
            apiData.lastname, apiData.email, apiData.password);
    }
}
