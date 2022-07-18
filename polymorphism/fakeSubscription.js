class User {
    constructor(email, currentSubscription = null) {
        this.email = email;
        // BEGIN (write your solution here)
        this.currentSubscription = currentSubscription ?? new FakeSubscription(this);
        // END
    }

    getCurrentSubscription() {
        return this.currentSubscription;
    }

    isAdmin() {
        return this.email === 'rakhim@hexlet.io';
    }
}

class FakeSubscription {
    constructor(user) {
        this.user = user;
    }

    hasProfessionalAccess() {
        return this.user.isAdmin();
    }

    hasPremiumAccess() {
        return this.user.isAdmin();
    }
}