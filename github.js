class GitHub {
    constructor() {
        this.client_id = 'b0aec4f58a365bda1aec';
        this.client_secret = '755d7bb7a90bdc24124cab9c7f051ad81c6c8d52';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return { profile }
    }
}