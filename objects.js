

const sanger = {
    district: 5,
    platformStatements: {
        "taxes": true,
        "jobs": "I believe in jobs",
        "infrastructure": true,
        "healthCare": true,
        "crimeEnforcement": false
    },

    urldonationForm: { website: "www.site.com" },
    calendarOfEvents: "calendar",
    volunteerInfo: {
        "name": "Bob Smith",
        "address": "1234 address ln",
        "email": "email@website.com",
        "phoneNumber": "234-234-2300",
        "availability": true,
        "activities": "polls",
    },
    biography: "this is a bio",
    imageGallery: {
        "headShot": "photo",
        "familyPhoto": "photo",
        "Picture of consttuents": "photo",
    },
    missionStatement: "This is my mission statement",
    urlForRegistering: "www.url.com"
}




function changeDistrict(anyDistrict) {
    sanger.district = anyDistrict
    console.log(sanger.district)
}
changeDistrict("4th")

function changeVolInfo(newEmail,newName) {
    sanger.volunteerInfo.email = newEmail;
    sanger.volunteerInfo.name = newName
    console.log(sanger.volunteerInfo)
}
changeVolInfo("New Email", "Bobby Smith");

function changePlatform(healthCareProperty,taxesProperty) {
    sanger.platformStatements.healthCare = healthCareProperty
    sanger.platformStatements.taxes = taxesProperty
    console.log(sanger.platformStatements)
}
changePlatform(false, false)

function changeImageGallery(headshotProperty,familyPhotoProperty) {
  sanger.imageGallery.headShot = headshotProperty;
  sanger.imageGallery.familyPhoto = familyPhotoProperty;
  console.log(sanger.imageGallery)
}
changeImageGallery ("New Headshot Photo", "new Family Photo")

function changeMission (changeMissionStatement) {
    sanger.missionStatement = changeMissionStatement;
    console.log(changeMissionStatement)
} 
changeMission("This is a new mission statement")

function newBio (changeBio) {
    sanger.biography = changeBio;
    console.log(changeBio)
}
newBio("This is a new bio")


let newArticle = document.createElement("article")
let newNode = document.createTextNode("This is a new article")

newArticle.appendChild(newNode)
console.log(newNode)