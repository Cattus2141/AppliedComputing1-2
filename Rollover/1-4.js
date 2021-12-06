var game = 
{
    pName : "Wizzy The Wizard",
    pHealth : 12,
    pLevel_1_SpellSlots : 2,
    pCollectablesObtained : ["Crown of Lords", "Ring of Sight"],

    eName : "Slime",
    eHealth : 24,


    PlayerDamaged : function( damage ) {
        this.pHealth -= damage;
        if(this.pHealth <= 0)
        {
            console.log(this.pName + " is dead");
        }
        else
        {
            console.log(this.pName + " is on " + this.pHealth + " Health.");
        }
    },
    PlayerHealed : function( num ) {
        this.pHealth += num;
        console.log(this.pName + " is on " + this.pHealth + " Health.");
    },
    PlayerAttack : function() {
        var damage = Math.floor((Math.random() * 6) + 1);
        this.eHealth -= damage;
        if(this.eHealth <= 0)
        {
            console.log(this.eName + " is dead");
        }
        else
        {
            console.log(this.eName + " is on " + this.eHealth + " Health.");
        }
    },
    AddCollectable : function( name ) {
        this.pCollectablesObtained.push(name);
        console.log(this.pName + " collected " + name + " and added it to their inventory");
    },
    RemoveCollectable : function( name ) {
        if (this.pCollectablesObtained.indexOf( name ) == -1)
        {
            console.log(this.pName + " doesn't have " + name + " in their inventory");
        }
        else
        {
            this.pCollectablesObtained.splice(this.pCollectablesObtained.indexOf( name ), this.pCollectablesObtained.indexOf( name ) + 1);
            console.log(this.pName + " removed " + name + " and from their inventory");
        }
        
    }
    
}