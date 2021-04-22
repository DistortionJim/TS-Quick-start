enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipRevers = Membership[2]
console.log(membership)
console.log(membershipRevers)

enum SocialMedia {
    LI = 'LI',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social);