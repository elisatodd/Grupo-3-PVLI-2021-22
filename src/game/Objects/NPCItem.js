import NPC from './NPC.js';

export default class NPCItem extends NPC{


    itemName = '';

    constructor(sprite, x, y, esc, nom, e, puz, f, l, itemName)
    {
        super(sprite, x, y, esc, nom, e, puz, f, l);
        this.itemName = itemName;
    }




}