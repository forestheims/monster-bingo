export function randomMonster(array) {
    let length = array.length;
    let monsterIndex = Math.floor(Math.random() * length);
    return array[monsterIndex];
}