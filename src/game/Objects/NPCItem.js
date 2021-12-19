import NPC from './NPC.js';

export default class NPCItem extends NPC {

    // Item que recibe este NPC
    itemName = '';

    /**
     * 
     * @param {Data} npc info, del NPC que creamos, sacada de data.js
     * @param {Scene} scene escena en la que se crea este NPC
     */
    constructor(npc, scene) {
        super(npc, scene);
        this.itemName = npc.item;
    }
}