let downArrow1 = document.getElementById('downArrow1');
let downArrow2 = document.getElementById('downArrow2');
let downArrow3 = document.getElementById('downArrow3');
let downArrow4 = document.getElementById('downArrow4');
let downArrow5 = document.getElementById('downArrow5');
let downArrow6 = document.getElementById('downArrow6');
let downArrow7 = document.getElementById('downArrow7');
let firstAboutCard = document.getElementById('firstAboutCard');

let strongTraing = document.getElementById('strongTraing');
let boxTraning = document.getElementById('boxTraning');
let kickboxTraning = document.getElementById('kickboxTraning');
let danceTraning = document.getElementById('danceTraning');
let fitnesTraning = document.getElementById("fitnesTraning");
let aerobicTranig = document.getElementById('aerobicTranig');
let eastDanceTraning = document.getElementById('eastDanceTraning');


function displayTraning(tr1, tr2, tr3, tr4, tr5, tr6, tr7) {
    tr1.classList = 'traningOn';
    tr2.classList = 'traningOff';
    tr3.classList = 'traningOff';
    tr4.classList = 'traningOff';
    tr5.classList = 'traningOff';
    tr6.classList = 'traningOff';
    tr7.classList = 'traningOff';
}

function topArrow1() {
    if (downArrow1.className == 'downArrow') {
        downArrow1.classList = 'topArrow';
        strongTraing.classList = 'traningOn'
    } else if (downArrow1.classList == 'topArrow') {
        downArrow1.classList = 'downArrow';
        strongTraing.classList = 'traningOff'
    }
}

function topArrow2() {
    if (downArrow2.className == 'downArrow') {
        downArrow2.classList = 'topArrow';
        boxTraning.classList = 'traningOn';
    } else if (downArrow2.classList == 'topArrow') {
        downArrow2.classList = 'downArrow';
        boxTraning.classList = 'traningOff';
    }
}

function topArrow3() {
    if (downArrow3.className == 'downArrow') {
        downArrow3.classList = 'topArrow';
        kickboxTraning.classList = 'traningOn';
    } else if (downArrow3.classList == 'topArrow') {
        downArrow3.classList = 'downArrow';
        kickboxTraning.classList = 'traningOff';
    }
}

function topArrow4() {
    if (downArrow4.className == 'downArrow') {
        downArrow4.classList = 'topArrow';
        danceTraning.classList = 'traningOn';
    } else if (downArrow4.classList == 'topArrow') {
        downArrow4.classList = 'downArrow';
        danceTraning.classList = 'traningOff'
    }
}

function topArrow5() {
    if (downArrow5.className == 'downArrow') {
        downArrow5.classList = 'topArrow';
        fitnesTraning.classList = 'traningOn';
    } else if (downArrow5.classList == 'topArrow') {
        downArrow5.classList = 'downArrow';
        fitnesTraning.classList = 'traningOff';
    }
}


function topArrow6() {
    if (downArrow6.className == 'downArrow') {
        downArrow6.classList = 'topArrow';
        aerobicTranig.classList = 'traningOn';
    } else if (downArrow6.classList == 'topArrow') {
        downArrow6.classList = 'downArrow';
        aerobicTranig.classList = 'traningOff';
    }
}

function topArrow7() {
    if (downArrow7.className == 'downArrow') {
        downArrow7.classList = 'topArrow';
        eastDanceTraning.classList = 'traningOn';
    } else if (downArrow7.classList == 'topArrow') {
        downArrow7.classList = 'downArrow';
        eastDanceTraning.classList = 'traningOff'
    }
}

let basicStrongTraning = document.getElementById('basicStrongTraning');
let familyStrong = document.getElementById('familyStrong');
let teenagerStrong = document.getElementById('teenagerStrong');
let trener8Strong = document.getElementById('trener8');
let trener12Strong = document.getElementById('trener12');

let firstSubscriotionStrong = document.getElementById('firstSubscriotionStrong');
let secondSubscribtionStrong = document.getElementById('secondSubscribtionStrong');
let thirdSubscribtionStrong = document.getElementById('thirdSubscribtionStrong');
let fourthSubscribtionStrong = document.getElementById('fourthSubscribtionStrong');
let fifthSubscribtionStrong = document.getElementById('fifthSubscribtionStrong');

basicStrongTraning.style.display = 'none';
familyStrong.style.display = 'none';
teenagerStrong.style.display = 'none';
trener8Strong.style.display = 'none';
trener12Strong.style.display = 'none';

function changeBackgroundSubscribeStrong(sub1, sub2, sub3, sub4, sub5) {
    sub1.style.backgroundColor = 'white';
    sub1.style.color = 'black';
    sub1.style.borderStyle = 'solid';
    sub1.style.borderColor = 'black';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
    sub3.style.backgroundColor = 'rgb(62, 62, 239)';
    sub3.style.color = 'white';
    sub3.style.border = 'none';
    sub4.style.backgroundColor = 'rgb(62, 62, 239)';
    sub4.style.color = 'white';
    sub4.style.border = 'none';
    sub5.style.backgroundColor = 'rgb(62, 62, 239)';
    sub5.style.color = 'white';
    sub5.style.border = 'none';
}

function deleteBackgroundStrong(sub1, sub2, sub3, sub4, sub5) {
    sub1.style.backgroundColor = 'rgb(62, 62, 239)';
    sub1.style.color = 'rgb(255,255,255)';
    sub1.style.border = 'none';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
    sub3.style.backgroundColor = 'rgb(62, 62, 239)';
    sub3.style.color = 'white';
    sub3.style.border = 'none';
    sub4.style.backgroundColor = 'rgb(62, 62, 239)';
    sub4.style.color = 'white';
    sub4.style.border = 'none';
    sub5.style.backgroundColor = 'rgb(62, 62, 239)';
    sub5.style.color = 'white';
    sub5.style.border = 'none';
}

function basicStrongTraningDisplay() {
    if (basicStrongTraning.style.display == 'none') {
        basicStrongTraning.style.display = 'block';
        familyStrong.style.display = 'none';
        teenagerStrong.style.display = 'none';
        trener8Strong.style.display = 'none';
        trener12Strong.style.display = 'none';
        changeBackgroundSubscribeStrong(firstSubscriotionStrong, secondSubscribtionStrong, thirdSubscribtionStrong, fourthSubscribtionStrong, fifthSubscribtionStrong);
    } else if (basicStrongTraning.style.display == 'block') {
        basicStrongTraning.style.display = 'none';
        familyStrong.style.display = 'none';
        teenagerStrong.style.display = 'none';
        trener8Strong.style.display = 'none';
        trener12Strong.style.display = 'none';
        deleteBackgroundStrong(firstSubscriotionStrong, secondSubscribtionStrong, thirdSubscribtionStrong, fourthSubscribtionStrong, fifthSubscribtionStrong);
    }
}

function familyStrongDisplay() {
    if (familyStrong.style.display == 'none') {
        familyStrong.style.display = 'block';
        basicStrongTraning.style.display = 'none';
        teenagerStrong.style.display = 'none';
        trener8Strong.style.display = 'none'
        trener12Strong.style.display = 'none';
        changeBackgroundSubscribeStrong(secondSubscribtionStrong, firstSubscriotionStrong, thirdSubscribtionStrong, fourthSubscribtionStrong, fifthSubscribtionStrong);
    } else if (familyStrong.style.display == 'block') {
        familyStrong.style.display = 'none';
        basicStrongTraning.style.display = 'none';
        teenagerStrong.style.display = 'none';
        trener8Strong.style.display = 'none';
        trener12Strong.style.display = 'none';
        deleteBackgroundStrong(secondSubscribtionStrong, firstSubscriotionStrong, thirdSubscribtionStrong, fourthSubscribtionStrong, fifthSubscribtionStrong)
    }
}

function teenagerStrongDisplay() {
    if (teenagerStrong.style.display == 'none') {
        teenagerStrong.style.display = 'block';
        familyStrong.style.display = 'none';
        basicStrongTraning.style.display = 'none';
        trener8Strong.style.display = 'none';
        trener12Strong.style.display = 'none';
        changeBackgroundSubscribeStrong(thirdSubscribtionStrong, secondSubscribtionStrong, firstSubscriotionStrong, fourthSubscribtionStrong, fifthSubscribtionStrong);
    } else if (teenagerStrong.style.display == 'block') {
        teenagerStrong.style.display = 'none';
        familyStrong.style.display = 'none';
        basicStrongTraning.style.display = 'none';
        trener8Strong.style.display = 'none';
        trener12Strong.style.display = 'none';
        deleteBackgroundStrong(thirdSubscribtionStrong, secondSubscribtionStrong, firstSubscriotionStrong, fourthSubscribtionStrong, fifthSubscribtionStrong);
    }
}

function trener8StrongDisplay() {
    if (trener8Strong.style.display == 'none') {
        trener8Strong.style.display = 'block';
        teenagerStrong.style.display = 'none';
        familyStrong.style.display = 'none';
        basicStrongTraning.style.display = 'none';
        trener12Strong.style.display = 'none';
        changeBackgroundSubscribeStrong(fourthSubscribtionStrong, thirdSubscribtionStrong, secondSubscribtionStrong, firstSubscriotionStrong, fifthSubscribtionStrong);
    } else if (trener8Strong.style.display == 'block') {
        trener8Strong.style.display = 'none'
        teenagerStrong.style.display = 'none';
        familyStrong.style.display = 'none';
        basicStrongTraning.style.display = 'none';
        trener12Strong.style.display = 'none';
        deleteBackgroundStrong(fourthSubscribtionStrong, thirdSubscribtionStrong, secondSubscribtionStrong, firstSubscriotionStrong, fifthSubscribtionStrong);
    }
}

function trener12StrongDisplay() {
    if (trener12Strong.style.display == 'none') {
        trener12Strong.style.display = 'block';
        trener8Strong.style.display = 'none'
        teenagerStrong.style.display = 'none';
        familyStrong.style.display = 'none';
        basicStrongTraning.style.display = 'none';
        changeBackgroundSubscribeStrong(fifthSubscribtionStrong, fourthSubscribtionStrong, thirdSubscribtionStrong, secondSubscribtionStrong, firstSubscriotionStrong);
    } else if (trener12Strong.style.display == 'block') {
        trener12Strong.style.display = 'none';
        trener8Strong.style.display = 'none'
        teenagerStrong.style.display = 'none';
        familyStrong.style.display = 'none';
        basicStrongTraning.style.display = 'none';
        deleteBackgroundStrong(fifthSubscribtionStrong, fourthSubscribtionStrong, thirdSubscribtionStrong, secondSubscribtionStrong, firstSubscriotionStrong);
    }
}

const adultBoxin = document.getElementById('adultBoxin');
let childBoxing = document.getElementById('childBoxing');
let trenerBoxing8 = document.getElementById('trenerBoxing8');
let trenerBoxing12 = document.getElementById('trenerBoxing12');

console.log(adultBoxin)

let firstSubscriotionBox = document.getElementById('firstSubscriotionBox');
let secondSubscriotionBox = document.getElementById('secondSubscriotionBox');
let thirdSubscriotionBox = document.getElementById('thirdSubscriotionBox');
let fourthSubscribtionBox = document.getElementById('fourthSubscribtionBox');

adultBoxin.style.display = 'none';
childBoxing.style.display = 'none';
trenerBoxing8.style.display = 'none';
trenerBoxing12.style.display = 'none';
console.log(adultBoxin)

function changeBackgroundSubscribeBox(sub1, sub2, sub3, sub4) {
    sub1.style.backgroundColor = 'white';
    sub1.style.color = 'black';
    sub1.style.borderStyle = 'solid';
    sub1.style.borderColor = 'black';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
    sub3.style.backgroundColor = 'rgb(62, 62, 239)';
    sub3.style.color = 'white';
    sub3.style.border = 'none';
    sub4.style.backgroundColor = 'rgb(62, 62, 239)';
    sub4.style.color = 'white';
    sub4.style.border = 'none';
}

function deleteBackgroundBox(sub1, sub2, sub3, sub4) {
    sub1.style.backgroundColor = 'rgb(62, 62, 239)';
    sub1.style.color = 'rgb(255,255,255)';
    sub1.style.border = 'none';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
    sub3.style.backgroundColor = 'rgb(62, 62, 239)';
    sub3.style.color = 'white';
    sub3.style.border = 'none';
    sub4.style.backgroundColor = 'rgb(62, 62, 239)';
    sub4.style.color = 'white';
    sub4.style.border = 'none';
}
function adultBoxinDisplay() {
    console.log(adultBoxin)
    if (adultBoxin.style.display == 'none') {
        adultBoxin.style.display = 'block';
        childBoxing.style.display = 'none';
        trenerBoxing8.style.display = 'none';
        trenerBoxing12.style.display = 'none';
        changeBackgroundSubscribeBox(firstSubscriotionBox, secondSubscriotionBox, thirdSubscriotionBox, fourthSubscribtionBox);
    } else if (adultBoxin.style.display == 'block') {
        adultBoxin.style.display = 'none';
        childBoxing.style.display = 'none';
        trenerBoxing8.style.display = 'none';
        trenerBoxing12.style.display = 'none';
        deleteBackgroundBox(firstSubscriotionBox, secondSubscriotionBox, thirdSubscriotionBox, fourthSubscribtionBox);
    }
}

function childBoxingDisplay() {
    if (childBoxing.style.display == 'none') {
        childBoxing.style.display = 'block';
        adultBoxin.style.display = 'none';
        trenerBoxing8.style.display = 'none';
        trenerBoxing12.style.display = 'none';
        changeBackgroundSubscribeBox(secondSubscriotionBox, firstSubscriotionBox, thirdSubscriotionBox, fourthSubscribtionBox);
    } else if (childBoxing.style.display == 'block') {
        childBoxing.style.display = 'none';
        adultBoxin.style.display = 'none';
        trenerBoxing8.style.display = 'none';
        trenerBoxing12.style.display = 'none';
        deleteBackgroundBox(secondSubscriotionBox, firstSubscriotionBox, thirdSubscriotionBox, fourthSubscribtionBox);
    }
}

function trenerBoxing8Display() {
    if (trenerBoxing8.style.display == 'none') {
        trenerBoxing8.style.display = 'block';
        childBoxing.style.display = 'none';
        adultBoxin.style.display = 'none';
        trenerBoxing12.style.display = 'none';
        changeBackgroundSubscribeBox(thirdSubscriotionBox, secondSubscriotionBox, firstSubscriotionBox, fourthSubscribtionBox);
    } else if (trenerBoxing8 / style.display == 'block') {
        trenerBoxing8.style.display = 'none';
        childBoxing.style.display = 'none';
        adultBoxin.style.display = 'none';
        trenerBoxing12.style.display = 'none';
        deleteBackgroundBox(thirdSubscriotionBox, secondSubscriotionBox, firstSubscriotionBox, fourthSubscribtionBox);
    }
}

function trenerBoxing12Display() {
    if (trenerBoxing12.style.display == 'none') {
        trenerBoxing12.style.display = 'block';
        trenerBoxing8.style.display = 'none';
        childBoxing.style.display = 'none';
        adultBoxin.style.display = 'none';
        changeBackgroundSubscribeBox(fourthSubscribtionBox, thirdSubscriotionBox, secondSubscriotionBox, firstSubscriotionBox);
    } else if (trenerBoxing12.style.display == 'block') {
        trenerBoxing12.style.display = 'none';
        trenerBoxing8.style.display = 'none';
        childBoxing.style.display = 'none';
        adultBoxin.style.display = 'none';
        deleteBackgroundBox(fourthSubscribtionBox, thirdSubscriotionBox, secondSubscriotionBox, firstSubscriotionBox)
    }
}

let standartKickboxing = document.getElementById('standartKickboxing');
let familyKickboxing = document.getElementById('familyKickboxing');

let firstSubscriotionKickbox = document.getElementById('firstSubscriotionKickbox');
let secondSubscriotionKickbox = document.getElementById('secondSubscriotionKickbox');

standartKickboxing.style.display = 'none';
familyKickboxing.style.display = 'none';

function changeBackgroundSubscribeKickbox(sub1, sub2) {
    sub1.style.backgroundColor = 'white';
    sub1.style.color = 'black';
    sub1.style.borderStyle = 'solid';
    sub1.style.borderColor = 'black';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
}

function deleteBackgroundKickbox(sub1, sub2) {
    sub1.style.backgroundColor = 'rgb(62, 62, 239)';
    sub1.style.color = 'rgb(255,255,255)';
    sub1.style.border = 'none';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
}

function standartKickboxingDisplay() {
    if (standartKickboxing.style.display == 'none') {
        standartKickboxing.style.display = 'block';
        familyKickboxing.style.display = 'none';
        changeBackgroundSubscribeKickbox(firstSubscriotionKickbox, secondSubscriotionKickbox);
    } else if (standartKickboxing.style.display == 'block') {
        standartKickboxing.style.display = 'none';
        familyKickboxing.style.display = 'none';
        deleteBackgroundKickbox(firstSubscriotionKickbox, secondSubscriotionKickbox);
    }
}

function familyKickboxingDisplay() {
    if (familyKickboxing.style.display == 'none') {
        familyKickboxing.style.display = 'block';
        standartKickboxing.style.display = 'none';
        changeBackgroundSubscribeKickbox(secondSubscriotionKickbox, firstSubscriotionKickbox)
    } else if (familyKickboxing.style.display == 'block') {
        familyKickboxing.style.display = 'none';
        standartKickboxing.style.display = 'none';
        deleteBackgroundKickbox(secondSubscriotionKickbox, firstSubscriotionKickbox)
    }
}

let flankeer = document.getElementById('flankeer');
let danceTopGroup = document.getElementById('danceTopGroup');
let danceDownGroup = document.getElementById('danceDownGroup');

let firstSubscriotionDance = document.getElementById('firstSubscriotionDance');
let secondSubscriotionDance = document.getElementById('secondSubscriotionDance');
let thirdSubscriotionDance = document.getElementById('thirdSubscriotionDance');

flankeer.style.display = 'none';
danceTopGroup.style.display = 'none';
danceDownGroup.style.display = 'none';

function changeBackgroundSubscribeDance(sub1, sub2, sub3) {
    sub1.style.backgroundColor = 'white';
    sub1.style.color = 'black';
    sub1.style.borderStyle = 'solid';
    sub1.style.borderColor = 'black';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
    sub3.style.backgroundColor = 'rgb(62, 62, 239)';
    sub3.style.color = 'white';
    sub3.style.border = 'none';
}

function deleteBackgroundDance(sub1, sub2, sub3) {
    sub1.style.backgroundColor = 'rgb(62, 62, 239)';
    sub1.style.color = 'rgb(255,255,255)';
    sub1.style.border = 'none';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
    sub3.style.backgroundColor = 'rgb(62, 62, 239)';
    sub3.style.color = 'white';
    sub3.style.border = 'none';
}

function flankeerDisplay() {
    if (flankeer.style.display == 'none') {
        flankeer.style.display = 'block';
        danceTopGroup.style.display = 'none';
        danceDownGroup.style.display = 'none';
        changeBackgroundSubscribeDance(firstSubscriotionDance, secondSubscriotionDance, thirdSubscriotionDance);
    } else if (flankeer.style.display == 'block') {
        flankeer.style.display = 'none';
        danceTopGroup.style.display = 'none';
        danceDownGroup.style.display = 'none';
        deleteBackgroundDance(firstSubscriotionDance, secondSubscriotionDance, thirdSubscriotionDance);
    }
}

function danceTopGroupDisplay() {
    if (danceTopGroup.style.display == 'none') {
        danceTopGroup.style.display = 'block';
        flankeer.style.display = 'none';
        danceDownGroup.style.display = 'none';
        changeBackgroundSubscribeDance(secondSubscriotionDance, firstSubscriotionDance, thirdSubscriotionDance);
    } else if (danceTopGroup.style.display == 'block') {
        danceTopGroup.style.display = 'none';
        flankeer.style.display = 'none';
        danceDownGroup.style.display = 'none';
        deleteBackgroundDance(secondSubscriotionDance, firstSubscriotionDance, thirdSubscriotionDance);
    }
}

function danceDownGroupDisplay() {
    if (danceDownGroup.style.display == 'none') {
        danceDownGroup.style.display = 'block';
        danceTopGroup.style.display = 'none';
        flankeer.style.display = 'none';
        changeBackgroundSubscribeDance(thirdSubscriotionDance, secondSubscriotionDance, firstSubscriotionDance);
    } else if (danceDownGroup.style.display == 'block') {
        danceDownGroup.style.display = 'none';
        danceTopGroup.style.display = 'none';
        flankeer.style.display = 'none';
        deleteBackgroundDance(thirdSubscriotionDance, secondSubscriotionDance, firstSubscriotionDance);
    }
}

let fitnes12 = document.getElementById('fitnes12');
let fitnes8 = document.getElementById('fitnes8');

let firstSubscriotionFitnes = document.getElementById('firstSubscriotionFitnes');
let secondSubscribtionFitnes = document.getElementById('secondSubscriotionFitnes');

fitnes12.style.display = 'none';
fitnes8.style.display = 'none';

function changeBackgroundSubscribeFitnes(sub1, sub2) {
    sub1.style.backgroundColor = 'white';
    sub1.style.color = 'black';
    sub1.style.borderStyle = 'solid';
    sub1.style.borderColor = 'black';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
}

function deleteBackgroundFitnes(sub1, sub2) {
    sub1.style.backgroundColor = 'rgb(62, 62, 239)';
    sub1.style.color = 'rgb(255,255,255)';
    sub1.style.border = 'none';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
}

function fitnes12Display() {
    if (fitnes12.style.display == 'none') {
        fitnes12.style.display = 'block';
        fitnes8.style.display = 'none';
        changeBackgroundSubscribeFitnes(firstSubscriotionFitnes, secondSubscribtionFitnes)
    } else if (fitnes12.style.display == 'block') {
        fitnes12.style.display = 'none';
        fitnes8.style.display = 'none';
        deleteBackgroundFitnes(firstSubscriotionFitnes, secondSubscribtionFitnes)
    }
}

function fitnes8Display() {
    if (fitnes8.style.display == 'none') {
        fitnes8.style.display = 'block';
        fitnes12.style.display = 'none';
        changeBackgroundSubscribeFitnes(secondSubscribtionFitnes, firstSubscriotionFitnes)
    } else if (fitnes8.style.display == 'block') {
        fitnes8.style.display = 'none';
        fitnes12.style.display = 'none';
        deleteBackgroundFitnes(secondSubscribtionFitnes, firstSubscriotionFitnes)
    }
}

let aerobic12 = document.getElementById('aerobic12');
let aerobic8 = document.getElementById('aerobic8');

let firstSubscriotionAerobic = document.getElementById('firstSubscriotionAerobic');
let secondSubscriotionAerobic = document.getElementById('secondSubscriotionAerobic');

aerobic12.style.display = 'none';
aerobic8.style.display = 'none';

function changeBackgroundSubscribeAerobic(sub1, sub2) {
    sub1.style.backgroundColor = 'white';
    sub1.style.color = 'black';
    sub1.style.borderStyle = 'solid';
    sub1.style.borderColor = 'black';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
}

function deleteBackgroundAerobic(sub1, sub2) {
    sub1.style.backgroundColor = 'rgb(62, 62, 239)';
    sub1.style.color = 'rgb(255,255,255)';
    sub1.style.border = 'none';
    sub2.style.backgroundColor = 'rgb(62, 62, 239)';
    sub2.style.color = 'white';
    sub2.style.border = 'none';
}

function aerobic12Display() {
    if (aerobic12.style.display == 'none') {
        aerobic12.style.display = 'block';
        aerobic8.style.display = 'none';
        changeBackgroundSubscribeAerobic(firstSubscriotionAerobic, secondSubscriotionAerobic);
    } else if (aerobic12.style.display == 'block') {
        aerobic12.style.display = 'none';
        aerobic8.style.display = 'none';
        deleteBackgroundAerobic(firstSubscriotionAerobic, secondSubscriotionAerobic);
    }
}

function aerobic8Display() {
    if (aerobic8.style.display == 'none') {
        aerobic8.style.display = 'block';
        aerobic12.style.display = 'none';
        changeBackgroundSubscribeAerobic(secondSubscriotionAerobic, firstSubscriotionAerobic);
    } else if (aerobic8.style.display == 'block') {
        aerobic8.style.display = 'none';
        aerobic12.style.display = 'none';
        deleteBackgroundAerobic(secondSubscriotionAerobic, firstSubscriotionAerobic);
    }
}

let eastDance = document.getElementById('eastDance');

let firstSubscriotionEastDance = document.getElementById('firstSubscriotionEastDance');

eastDance.style.display = 'none';

function changeBackgroundSubscribeEastdance(sub1) {
    sub1.style.backgroundColor = 'white';
    sub1.style.color = 'black';
    sub1.style.borderStyle = 'solid';
    sub1.style.borderColor = 'black';
}

function deleteBackgroundEastDance(sub1) {
    sub1.style.backgroundColor = 'rgb(62, 62, 239)';
    sub1.style.color = 'rgb(255,255,255)';
    sub1.style.border = 'none';
}

function eastDanceDisplay() {
    if (eastDance.style.display == 'none') {
        eastDance.style.display = 'block';
        changeBackgroundSubscribeEastdance(firstSubscriotionEastDance);
    } else if (eastDance.style.display == 'block') {
        eastDance.style.display = 'none';
        deleteBackgroundEastDance(firstSubscriotionEastDance);
    }
}

let timeForKickboxing = document.getElementById('timeForKickboxing');
let kickboxingAboniment = document.getElementById('kickboxingAboniment');
let danceAboniment = document.getElementById('danceAboniment');
let fitnesAboniment = document.getElementById('fitnesAboniment');
let aerobicAboniment = document.getElementById('aerobicAboniment');

if (window.innerWidth <= 420) {
    timeForKickboxing.classList = 'timeForKickboxing';
    kickboxingAboniment.classList = 'secondTypes';
    danceAboniment.classList = 'secondTypes';
    fitnesAboniment.classList = 'secondTypes';
    aerobicAboniment.classList = 'secondTypes';
}