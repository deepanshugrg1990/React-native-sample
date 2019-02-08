export function getListData() {
    let value = [
        {
            icon: require('../assets/drawable/profile.png'),
            text: "Manage Profile"
        },
        {
            icon: require('../assets/drawable/contacts.png'),
            text: "Phone Calls Only"
        },
        {
            icon: require('../assets/drawable/block.png'),
            text: "Block Callers"
        },
        {
            icon: require('../assets/drawable/allowCalls.png'),
            text: "Always Allow Calls"
        },
        {
            icon: require('../assets/drawable/calendar.png'),
            text: "Schedule Profile"
        }];

    return value;
}


export function getViewData() {
    let value = [
        {
            icon: require('../assets/drawable/medicine.png'),
            title: "Medicine",
            subTitle: "When you are now well take Medicine."

        },
        {
            icon: require('../assets/drawable/meditation.png'),
            title: "Meditation",
            subTitle: "When you need focus plz do Meditation."
        },
        {
            icon: require('../assets/drawable/praying.png'),
            text: "prayer",
            subTitle: "When going to pray select this profile."
        }

    ];
    return value;
}