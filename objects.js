

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
            "HeadShot": "photo",
            "Picture of family":"photo",
            "Picture of consttuents": "photo",
    },
    missionStatement: "This is my mission statement",
    urlForRegistering: "www.url.com"
}

function changeDistrict (anyDistrict) {
    sanger.district = anyDistrict
    console.log(sanger.district)
}
changeDistrict("4th")

function changeVolInfo (myObject,myProperty) {
 myObject = "userInfo"
 myProperty = "Bobby Smith"
 console.log(sanger.volunteerInfo)
 console.log(volunteerInfo.name)
}

changeVolInfo(sanger.volunteerInfo),volunteerInfo.name;