// This function generates 100 divs inside of the main grid created in HTML
export function addGrid()//Exporting addGrid function
{
    const grid = document.querySelector(".grid");//Getting the grid label from DOM and assigning it to an object
    const fragment = document.createDocumentFragment();//Creating a fragment to add the 100 divs at once
    
    for(let i = 0; i < 100; i++)
    {
        let box = document.createElement("div");//Creating div per div by using "for" and assigning it to the box object
        box.id = i;//Adding a number id from 0 to 99 so this way each box is identified
        fragment.appendChild(box);//Adding each box to the fragment
    }
    grid.appendChild(fragment);//Adding the complete fragment with 100 boxes as a child to its parent "grid"

    return;//A good programming practice to return the control to whatever it was called by
};
