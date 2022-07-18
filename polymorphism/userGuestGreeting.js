// my
class Guest1 {
    constructor() {
        this.name = 'Guest';
    }

    getName() {
        return this.name;
    }

    isUser() {
        return false;
    }

    isGuest() {
        return true;
    }

}

class User1 {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    isUser() {
        return true;
    }

    isGuest() {
        return false;
    }
}

const greetings1 = (anybody) => {
    return anybody.isGuest() ? `Nice to meet you ${anybody.getName()}!` : `Hello ${anybody.getName()}!`
};

// teacher

class Guest {
    constructor() {
        this.name = 'Guest';
        this.type = 'guest';
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

}

class User {
    constructor(name) {
        this.name = name;
        this.type = 'user';
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }
}

const mapping = {
    guest: (guest) => `Nice to meet you ${guest.getName()}!`,
    user: (user) => `Hello ${user.getName()}!`,
};

export default (someUser) => (
    mapping[someUser.getTypeName()](someUser)
);