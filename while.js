const randomNumber = Math.round(Math.random() * 5) /// pick random number betweeen 0 and 5

let userNumber;
let counter = 0;

while(userNumber !== randomNumber) {
    userNumber = parseInt(prompt('Zgadnij liczbę od 1 do 5!'))
    counter = counter + 1
}
alert(`Gratulacje zgadjłeś liczbę za ${counter} razem`)

