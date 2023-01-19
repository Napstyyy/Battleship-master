const smallShip = [1, 1];//Array that represents a 2 length Ship
const mediumShip = [1, 1, 1];//Array that represents a 3 length Ship
const largeShip = [1, 1, 1, 1];//Array that represents a 4 length Ship
const veryLargeShip = [1, 1, 1, 1, 1];//Array that represents a 5 length Ship

export const ships = [smallShip, smallShip, smallShip, smallShip, mediumShip, mediumShip, mediumShip, largeShip, largeShip, veryLargeShip];//Array that contains all Ships

export function spawn()//exporting spawn function
{
    const spawn = document.querySelector(".spawn");//Getting the spawn label from DOM
    const fragment = document.createDocumentFragment();//Creating a fragment too add all divs at once

    for(let i = 0; i < ships.length; i++)//the length of ships will always be 10 but it can be modified
    {
        let ship = document.createElement("div");//Creating div per div by using "for" and assigning it to the ship object
        ship.id = i;//Adding a number id from 0 to 9 so this way each box is identified
        ship.classList.add("ship");
        for(let n = 0; n < ships[i].length; n++)//Since we want to make a div for each part of the ship, we can just do it by using the index we are on and the Ship (that is also an array) length
        {
            let hitbox = document.createElement("div");//Assiging a div to the hitbox variable object
            hitbox.classList.add("hitbox");//Adding a class named hitbox so this way it can be reconized in the html as something different that makes sense
            ship.appendChild(hitbox);//Appending each hitbox to its respective ship
        }

        fragment.appendChild(ship);//Adding each ship to the fragment
    }
    spawn.appendChild(fragment);//Adding the complete fragment with 10 ships as a child to its parent "spawn"

    return;//A good programming practice to return the control to whatever it was called by
};
