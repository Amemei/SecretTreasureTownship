//SRD_TPUpgrade
//Version 2.14

/*:
 * @plugindesc (v2.14) This Plugin allows you to have more control
 * over your TP system and have a dynamic Max TP stat.
 * @author SumRndmDde
 *
 * @param Infinite TP?
 * @desc Sets this to 'yes' and there will be no limit to the 
 * amount of TP an Actor can have.
 * @default no
 *
 * @param Perserve TP?
 * @desc Set this to 'yes' and TP will be saved and stored after
 * battles the same was HP or MP is.
 * @default no
 *
 * @param TP Gain from Damage?
 * @desc Set this to 'yes' and battlers will gain TP whenever
 * they are damaged from an attack. 
 * @default yes
 *
 * @param Maximum MTP
 * @desc Sets the maximum amount of Max TP allowed for your game. 
 * An Actor's Max TP will not surpass this number.
 * @default 99999
 *
 * @param [Battle Initial TP]
 * @desc
 * @default --------------------
 *
 * @param Randomize Init TP?
 * @desc Determines whether the Battler's initial TP at the
 * start of the battle is randomized.
 * @default yes
 *
 * @param Randomize Lower Bound
 * @desc Sets the lowest possible number for the when a Battler's
 * TP is randomly initialized at the start of a battle.
 * @default 0
 *
 * @param Randomize Upper Bound
 * @desc Sets the highest possible number for the when a Battler's
 * TP is randomly initialized at the start of a battle.
 * @default 25
 *
 * @param Initial TP (%)
 * @desc Adds a % of TP your Actors start with each battle.
 * (Based off of MTP) Enter a number between 0 and 100.
 * @default 0
 *
 * @param Initial TP (#)
 * @desc Adds a specific amount of TP to your Actors at the start
 * of each battle. Enter a number between 0 and general MTP.
 * @default 0
 *
 * @param [Battle End TP]
 * @desc
 * @default --------------------
 *
 * @param Battle End TP (%)
 * @desc Adds a % of TP to your Actors at the end of each battle.
 * (Based off of MTP) Enter a number between 0 and 100.
 * @default 0
 *
 * @param Battle End TP (#)
 * @desc Adds a specific amount of TP to your Actors at the end
 * of each battle. Enter a number between 0 and general MTP.
 * @default 0
 *
 * @param Battle End TP Inform?
 * @desc Set this to 'yes' and a message will display at the end
 * of each battle informing the amount of TP gained.
 * @default no
 *
 * @param [Battle TP Gains]
 * @desc
 * @default --------------------
 *
 * @param TP Bonus Crit Use
 * @desc This determines the amount of bonus TP is given when a
 * battler preforms a critical hit.
 * @default 0
 *
 * @param TP Bonus Super Use
 * @desc This determines the amount of bonus TP is given when a
 * battler preforms a hit that is super-effective.
 * @default 0
 *
 * @param TP Bonus Crit Take
 * @desc This determines the amount of bonus TP is given when a
 * battler is hit with a critical hit.
 * @default 0
 *
 * @param TP Bonus Super Take
 * @desc This determines the amount of bonus TP is given when a
 * battler is hit with a super-effective skill.
 * @default 0
 *
 * @param [Default MTP Growth]
 * @desc
 * @default --------------------
 *
 * @param Default Initial MTP
 * @desc Sets the initial Max TP for an Class that does not
 * specifically have an Initial Max TP value.
 * @default 100
 *
 * @param Default MTP Growth
 * @desc Sets the Max TP gained per level for an Class that 
 * does not specifically a have set value for this.
 * @default 0
 *
 * @param Default Adder
 * @desc Sets the default MTP Growth Rate Incrementer for Classes.
 * Increments the MTP Growth Rate by 1 every x levels.
 * @default 0
 *
 * @param Default Multiplier
 * @desc Sets the default MTP Growth Rate Multiplier for Classes.
 * See <IncrementMTPGrowthRateMultiplier: x> for details.
 * @default 0
 *
 * @param Default Doubler
 * @desc Sets the default MTP Growth Rate Doubler for Classes.
 * Doubles the MTP Growth Rate every x levels.
 * @default 0
 *
 * @param [MTP Battle Display]
 * @desc
 * @default --------------------
 *
 * @param Show MTP in Battle?
 * @desc Set this to 'yes' if you want the Max TP is shown in 
 * battle next to an Actor's TP.
 * @default no
 *
 * @param MTP Battle Limit
 * @desc Set this to the highest value an Actor's TP can go before
 * their Max TP is no longer shown in battle.
 * @default 100
 *
 * @param Full TP Bar Color 1
 * @desc This is the color your TP gauge will be when your TP 
 * is at its max value. Default is 28. (TP bar has 2 colors)
 * @default 28
 *
 * @param Full TP Bar Color 2
 * @desc This is the color your TP gauge will be when your TP 
 * is at its max value. Default is 29. (TP bar has 2 colors)
 * @default 29
 *
 * @param Half TP Bar Color 1
 * @desc This is the color your TP gauge will be when your TP 
 * is above half. Default is 28. (TP bar has 2 colors)
 * @default 28
 *
 * @param Half TP Bar Color 2
 * @desc This is the color your TP gauge will be when your TP 
 * is above half. Default is 29. (TP bar has 2 colors)
 * @default 29
 *
 * @param [MTP Status Display]
 * @desc
 * @default --------------------
 *
 * @param Show MTP in Status?
 * @desc Set this to 'yes' if you want the Max TP is shown in 
 * Status Screen.
 * @default yes
 *
 * @param MTP Name in Status
 * @desc Sets what the MTP is called in the Status Screen.
 * By default, it is "Max TP".
 * @default Max TP
 *
 * @param MTP Color ID
 * @desc Sets the MTP's Color ID that is used when it is 
 * displayed in the Status Screen. Default is 3.
 * @default 3
 *
 *
 * @help This Plugin allows you to manipulate the TP system in your game.
 *
 * However, the main focus of this Plugin is Max TP.
 * You can assign different Max TP (MTP) stats to each Class and manipulate
 * their growth rates.
 * 
 * Other key features of this Plugin include:
 * - Ability to set inifite Max TP
 * - Ability to set a maximum amount that an Actor's Max TP may reach
 * - Ability to set higher TP cost for Skills than normal
 * - Ability to set higher TP gain for Skills and Items than normal
 * - Ability to access a Battler's Max TP using .mtp in Damage Forumulas 
 *
 *
 * To start, let's focus on Notetags.
 *
 * ---Notetag Commands---
 *
 * Actor Notetags:
 *
 * <InfiniteTP>
 * If this is in the Notetag of an Actor, this Actor will have no
 * limit to the amount of TP they can have.
 *
 * <RestrictTPfromDamage>
 * If this is in the Notetag of an Actor, this Actor will not
 * gain TP from damage.
 *
 * Class Notetags:
 *
 * <InfiniteTP>
 * If this is in the Notetag of an Class, the Actor using the Class
 * will have no limit to the amount of TP they can have.
 *
 * <RestrictTPfromDamage>
 * If this is in the Notetag of an Class, this Actor will not
 * gain TP from damage.
 *
 * <InitialMTP: x>
 * Replace x with the amount of TP you wish the Actor using the Class to 
 * start with at level 1.
 *
 * <MTPGainPerLevel: x>
 * Replace x with the amount of TP you wish the Actor using the Class to 
 * gain every time they level up.
 *
 * <IncrementMTPGrowthRate: x>
 * Increments the MTP Growth Rate by 1 every x levels.
 *
 * <IncrementMTPGrowthRateMultiplier: x>
 * Increments a number that is multiplied to the MTP Growth Rate every 
 * x levels.
 *
 * <DoubleMTPGrowthRate: x>
 * Doubles the MTP Growth Rate every x levels.
 *
 *
 * Skill Notetags:
 *
 * <TPCost: x>
 * Replace x with the amount of TP you wish the Skill to require.
 *
 * <TPCostPercent: x>
 * Replace x with the amount of TP you wish the Skill to require.
 * This command is incompatible with <TPCost: x>
 * This value will be based off of the user's Max TP.
 * For example -> 0.1 makes it cost 10% of the user's max TP
 *             -> 0.5 makes it cost 50% of the user's max TP
 *             -> 0.9 makes it cost 90% of the user's max TP
 *
 * <TPGain: x>
 * Replace x with the amount of TP you wish the Skill to give the 
 * user when the Skill is used.
 *
 * <TPGainPercent: x>
 * Replace x with the amount of TP you wish the Skill give the 
 * user when the Skill is used.
 * This command is incompatible with <TPGain: x>
 * This value will be based off of the user's Max TP.
 * For example -> 0.1 makes it cost 10% of the user's max TP
 *             -> 0.5 makes it cost 50% of the user's max TP
 *             -> 0.9 makes it cost 90% of the user's max TP
 *
 *
 * Item Notetags:
 *
 * <TPGain: x>
 * Replace x with the amount of TP you wish the Item to give the 
 * user when the Item is used.
 *
 * <TPGainPercent: x>
 * Replace x with the amount of TP you wish the Item give the 
 * user when the Item is used.
 * This command is incompatible with <TPGain: x>
 * This value will be based off of the user's Max TP.
 * For example -> 0.1 makes it cost 10% of the user's max TP
 *             -> 0.5 makes it cost 50% of the user's max TP
 *             -> 0.9 makes it cost 90% of the user's max TP
 *
 *
 * Weapon/Armor Notetags:
 *
 * <InfiniteTP>
 * If this is in the Notetag of a Weapon/Armor, the Actor with
 * this equipped will have no limit to the amount of TP they can have.
 *
 * <RestrictTPfromDamage>
 * If this is in the Notetag of an Weapon/Armor, this Actor with this 
 * equipped will not gain TP from damage.
 *
 * <MaxTPGain: x>
 * Set x to the amount of Max TP you wish the player to gain from
 * this Weapon/Armor.
 *
 * <MaxTPLose: x>
 * Set x to the amount of Max TP you wish the player to lose from
 * this Weapon/Armor.
 *
 *
 * State Notetags:
 *
 * <InfiniteTP>
 * If this is in the Notetag of a State, the Actor inflicted
 * with this will have no limit to the amount of TP they can have.
 *
 * <RestrictTPfromDamage>
 * If this is in the Notetag of an State, this Actor inflicted
 * with this will not gain TP from damage.
 *
 * <MaxTPGain: x>
 * Set x to the amount of Max TP you wish the player to gain when
 * inflicted with this State.
 *
 * <MaxTPLose: x>
 * Set x to the amount of Max TP you wish the player to lose when
 * inflicted with this State.
 *
 *
 *
 * Next, let's look at the Parameters.
 *
 * ---Parameters---
 *
 * Infinite TP?
 *    Sets this to 'yes' and there will be no limit to the 
 *    amount of TP an Actor can have.
 *    Default is no
 *
 * Perserve TP?
 *    Set this to 'yes' and TP will be saved and stored after
 *    battles the same was HP or MP is.
 *    Default is no
 *
 * TP Gain from Damage?
 *    Set this to 'yes' and battlers will gain TP whenever
 *    they are damaged from an attack. 
 *    Default is yes
 *
 * Maximum MTP
 *    Sets the maximum amount of Max TP allowed for your game. 
 *    An Actor's Max TP will not surpass this number.
 *    Default is 99999
 *
 * [Battle Initial TP]
 *
 * Randomize Init TP?
 *    Determines whether the Battler's initial TP at the
 *    start of the battle is randomized.
 *    Default is yes
 *
 * Randomize Lower Bound
 *    Sets the lowest possible number for the when a Battler's
 *    TP is randomly initialized at the start of a battle.
 *    Default is 0
 *
 * Randomize Upper Bound
 *    Sets the highest possible number for the when a Battler's
 *    TP is randomly initialized at the start of a battle.
 *    Default is 25
 *
 * Initial TP (%)
 *    Adds a % of TP your Actors start with each battle.
 *    (Based off of MTP) Enter a number between 0 and 100.
 *    Default is 0
 *
 * Initial TP (#)
 *    Adds a specific amount of TP to your Actors at the start
 *    of each battle. Enter a number between 0 and general MTP.
 *    Default is 0
 *
 * [Battle End TP]
 *
 * Battle End TP (%)
 *    Adds a % of TP to your Actors at the end of each battle.
 *    (Based off of MTP) Enter a number between 0 and 100.
 *    Default is 0
 *
 * Battle End TP (#)
 *    Adds a specific amount of TP to your Actors at the end
 *    of each battle. Enter a number between 0 and general MTP.
 *    Default is 0
 *
 * Battle End TP Inform?
 *    Set this to 'yes' and a message will display at the end
 *    of each battle informing the amount of TP gained.
 *    Default is no
 *
 * [Battle TP Gains]
 *
 * TP Bonus Crit Use
 *    This determines the amount of bonus TP is given when a
 *    battler preforms a critical hit.
 *    Default is 0
 *
 * TP Bonus Super Use
 *    This determines the amount of bonus TP is given when a
 *    battler preforms a hit that is super-effective.
 *    Default is 0
 *
 * TP Bonus Crit Take
 *    This determines the amount of bonus TP is given when a
 *    battler is hit with a critical hit.
 *    Default is 0
 *
 * TP Bonus Super Take
 *    This determines the amount of bonus TP is given when a
 *    battler is hit with a super-effective skill.
 *    Default is 0
 *
 * [Default MTP Growth]
 *
 * Default Initial MTP
 *    Sets the initial Max TP for an Class that does not
 *    specifically have an Initial Max TP value.
 *    Default is 100
 *
 * Default MTP Growth
 *    Sets the Max TP gained per level for an Class that 
 *    does not specifically a have set value for this.
 *    Default is 0
 *
 * Default Adder
 *    Sets the default MTP Growth Rate Incrementer for Classes.
 *    Increments the MTP Growth Rate by 1 every x levels.
 *    Default is 0
 *
 * Default Multiplier
 *    Sets the default MTP Growth Rate Multiplier for Classes.
 *    See <IncrementMTPGrowthRateMultiplier: x> for details.
 *    Default is 0
 *
 * Default Doubler
 *    Sets the default MTP Growth Rate Doubler for Classes.
 *    Doubles the MTP Growth Rate every x levels.
 *    Default is 0
 *
 * [MTP Battle Display]
 *
 * Show MTP in Battle?
 *    Set this to 'yes' if you want the Max TP is shown in 
 *    battle next to an Actor's TP.
 *    Default is no
 *
 * MTP Battle Limit
 *    Set this to the highest value an Actor's TP can go before
 *    their Max TP is no longer shown in battle.
 *    Default is 100
 *
 * Full TP Bar Color 1
 *    This is the color your TP gauge will be when your TP 
 *    is at its max value. Default is 28. (TP bar has 2 colors)
 *    Default is 28
 *
 * Full TP Bar Color 2
 *    This is the color your TP gauge will be when your TP 
 *    is at its max value. Default is 29. (TP bar has 2 colors)
 *    Default is 29
 *
 * Half TP Bar Color 1
 *    This is the color your TP gauge will be when your TP 
 *    is above half. Default is 28. (TP bar has 2 colors)
 *    Default is 28
 *
 * Half TP Bar Color 2
 *    This is the color your TP gauge will be when your TP 
 *    is above half. Default is 29. (TP bar has 2 colors)
 *    Default is 29
 *
 * [MTP Status Display]
 *
 * Show MTP in Status?
 *    Set this to 'yes' if you want the Max TP is shown in 
 *    Status Screen.
 *    Default is yes
 *
 * MTP Name in Status
 *    Sets what the MTP is called in the Status Screen.
 *    By default, it is "Max TP".
 *    Default is Max TP
 *
 * MTP Color ID
 *    Sets the MTP's Color ID that is used when it is 
 *    displayed in the Status Screen. Default is 3.
 *    Default is 3
 *
 *
 *
 * Finally, it is time for Plugin Commands.
 *
 * ---Plugin Commands---
 *
 * InfiniteTP
 *    Turns on Infinite TP. 
 *    Makes it so there is no limit to the amount of TP an Actor
 *    can have.
 *
 * NoInfiniteTP
 *    Turns off Infinite TP. 
 *
 * SetActorTPtoFull #1
 *    Sets the Actor of ID #1 to have their TP set to their Max TP.
 *
 * SetActorTPtoPercent #1 #2
 *    Sets the Actor of ID #1 to have their TP set a certain percent.
 *    The percent value is set with #2. 
 *    It must be between 0 and 100.
 *
 * SetPartyTPtoFull
 *    Sets the TP of all the Actors in the current party to each of 
 *    of their respective Max TPs.
 *
 * SetPartyTPtoPercent #1
 *    Sets the TP of all the Actors in the current party to the
 *    percent value specified in #1.
 *    It must be between 0 and 100.
 *
 *
 * And that's all for this Plugin.
 * Please visit my YouTube channel for more Plugins and RPG Maker MV Tutorials!
 *
 * www.youtube.com/c/SumRndmDde
 *
 *
 */

var TPUpgradeParameters = PluginManager.parameters('SRD_TPUpgrade');

var infiniteTP;
if(TPUpgradeParameters['Infinite TP?'] == 'yes' || TPUpgradeParameters['Infinite TP?'] == 'true')
{
    infiniteTP = true;
}
else
{
    infiniteTP = false;
}

var allowMTPGrow;
if(TPUpgradeParameters['Allow MTP Growth?'] == 'yes' || TPUpgradeParameters['Allow MTP Growth?'] == 'true')
{
    allowMTPGrow = true;
}
else
{
    allowMTPGrow = false;
}

var maximumMTP = Number(TPUpgradeParameters['Maximum TP']);

var defaultInitialMTP = Number(TPUpgradeParameters['Default Initial MTP']);
var defaultMTPperLevel = Number(TPUpgradeParameters['Default MTP Growth']);
var defaultMTPAdder = Number(TPUpgradeParameters['Default Adder']);
var defaultMTPMultiplier = Number(TPUpgradeParameters['Default Multiplier']);
var defaultMTPDoubler = Number(TPUpgradeParameters['Default Doubler']);

var displayMTPinBattle;
if(TPUpgradeParameters['Show MTP in Battle?'] == 'yes' || TPUpgradeParameters['Show MTP in Battle?'] == 'true')
{
    displayMTPinBattle = true;
}
else
{
    displayMTPinBattle = false;
}

var MTPBattleLimit = Number(TPUpgradeParameters['MTP Battle Limit']);

var displayMTPinStatus;
if(TPUpgradeParameters['Show MTP in Status?']== 'yes' || TPUpgradeParameters['Show MTP in Status?'] == 'true')
{
    displayMTPinStatus = true;
}
else
{
    displayMTPinStatus = false;
}

var MTPStatusName = String(TPUpgradeParameters['MTP Name in Status']);
var MTPColorID = Number(TPUpgradeParameters['MTP Color ID']);


var randomizeTP;
if(TPUpgradeParameters['Randomize Init TP?']== 'yes' || TPUpgradeParameters['Randomize Init TP?'] == 'true')
{
    randomizeTP = true;
}
else
{
    randomizeTP = false;
}

var randomizeLowerBound = Number(TPUpgradeParameters['Randomize Lower Bound']);
var randomizeUpperBound = Number(TPUpgradeParameters['Randomize Upper Bound']);

var initialTPPercent = Number(TPUpgradeParameters['Initial TP (%)']);
var initialTPNumber = Number(TPUpgradeParameters['Initial TP (#)']);

if(initialTPPercent > 100)
{
    initialTPPercent = 100;
}
if(initialTPPercent < 0)
{
    initialTPPercent = 0;
}


var fullTPColor1 = Number(TPUpgradeParameters['Full TP Bar Color 1']);
var fullTPColor2 = Number(TPUpgradeParameters['Full TP Bar Color 2']);
var halfTPColor1 = Number(TPUpgradeParameters['Half TP Bar Color 1']);
var halfTPColor2 = Number(TPUpgradeParameters['Half TP Bar Color 2']);


var TPBonusCritUse = Number(TPUpgradeParameters['TP Bonus Crit Use']);
var TPBonusSuperUse = Number(TPUpgradeParameters['TP Bonus Super Use']);
var TPBonusCritTake = Number(TPUpgradeParameters['TP Bonus Crit Take']);
var TPBonusSuperTake = Number(TPUpgradeParameters['TP Bonus Super Take']);

var preserveTP;
if(TPUpgradeParameters['Perserve TP?'] == 'yes' || TPUpgradeParameters['Perserve TP?'] == 'true')
{
    preserveTP = true;
}
else
{
    preserveTP = false;
}

var TPGainfromDamage;
if(TPUpgradeParameters['TP Gain from Damage?'] == 'yes' || TPUpgradeParameters['TP Gain from Damage?'] == 'true')
{
    TPGainfromDamage = true;
}
else
{
    TPGainfromDamage = false;
}


var battleEndTPPercent = Number(TPUpgradeParameters['Battle End TP (%)']);
var battleEndTPNumber = Number(TPUpgradeParameters['Battle End TP (#)']);

var battleEndTPMessage;
if(TPUpgradeParameters['Battle End TP Inform?'] == 'yes' || TPUpgradeParameters['Battle End TP Inform?'] == 'true')
{
    battleEndTPMessage = true;
}
else
{
    battleEndTPMessage = false;
}

var processDemArmors = function(actor)
{
    var total = 0;

    for(var i = 0; i < actor.equips().length; i += 1)
    {
        if(actor.equips()[i])
        {
            if(actor.equips()[i].meta.MaxTPGain)
            {
                total += Math.floor(actor.equips()[i].meta.MaxTPGain);
            }
            if(actor.equips()[i].meta.MaxTPLose)
            {
                total -= Math.floor(actor.equips()[i].meta.MaxTPLose);
            }
        }
    }

    return total;
}

var processDemStates = function(actor)
{
    var total = 0;

    for(var i = 0; i < actor.states().length; i += 1)
    {
        if(actor.states()[i].meta.MaxTPGain)
        {
            total += Math.floor(actor.states()[i].meta.MaxTPGain);
        }
        if(actor.states()[i].meta.MaxTPLose)
        {
            total -= Math.floor(actor.states()[i].meta.MaxTPLose);
        }
    }

    return total;
}

//Game_BattlerBase

Object.defineProperties(Game_BattlerBase.prototype, {
    // Max TP
    mtp: { get: function() { return this.maxTp(); }, configurable: true },
});

Game_BattlerBase.prototype.refresh = function() {
    this.stateResistSet().forEach(function(stateId) {
        this.eraseState(stateId);
    }, this);
    this._hp = this._hp.clamp(0, this.mhp);
    this._mp = this._mp.clamp(0, this.mmp);
    if(this._tp < 0)
    {
    	this._tp = 0;
    }
    if(this.isActor())
    {
		if(!this.hasInfiniteTP())
    	{
        	this._tp = this._tp.clamp(0, this.maxTp());
    	}
    }
    else
    {
		if(!infiniteTP)
    	{
        	this._tp = this._tp.clamp(0, this.maxTp());
    	}
    }
};

Game_BattlerBase.prototype.tpRate = function() {
    if(!infiniteTP)
    {
        return this.tp / this.maxTp(); //100;
    }
    else
    {
        return 0;
    }
};

Game_BattlerBase.prototype.skillTpCost = function(skill) {
    if(skill.meta.TPCost)
    {
        return skill.meta.TPCost;
    }
    else if(skill.meta.TPCostPercent)
    {
        return Math.floor(skill.meta.TPCostPercent * this.maxTp());
    }
    else
    {
        return skill.tpCost;
    }
};

//Game_Actor

 Game_Actor.prototype.maxTp = function() {
    var tempMTP = 100;

    var tempInitialMTP;
    var tempMTPperLevel;

    var growthRateAddition = 0;
    var growthRateMultiplier = 0;
    var growthRateDoubler = 0;

    if(this.currentClass().meta.InitialMTP)
    {
        tempInitialMTP = Math.round(this.currentClass().meta.InitialMTP);
    }
    else
    {
        tempInitialMTP = defaultInitialMTP;
    }

    if(this.currentClass().meta.MTPGainPerLevel)
    {
        tempMTPperLevel = Math.round(this.currentClass().meta.MTPGainPerLevel);
    }
    else
    {
        tempMTPperLevel = defaultMTPperLevel;
    }


    if(this.currentClass().meta.IncrementMTPGrowthRate)
    {
        growthRateAddition = Math.floor(this._level / this.currentClass().meta.IncrementMTPGrowthRate);
    }
    else
    {
        growthRateAddition = defaultMTPAdder;
    }

    if(this.currentClass().meta.IncrementMTPGrowthRateMultiplier)
    {
        growthRateMultiplier = Math.floor(this._level / this.currentClass().meta.IncrementMTPGrowthRateMultiplier);
    }
    else
    {
        growthRateMultiplier = defaultMTPMultiplier;
    }

    if(this.currentClass().meta.DoubleMTPGrowthRate)
    {
        growthRateDoubler = Math.floor(this._level / this.currentClass().meta.DoubleMTPGrowthRate);
    }
    else
    {
        growthRateDoubler = defaultMTPDoubler;
    }

    tempMTP = Math.round(tempInitialMTP + (((tempMTPperLevel * (growthRateMultiplier + 1)) + growthRateAddition) * (this._level - 1)));

    for(var i = 0; i < growthRateDoubler; i+=1)
    {
        tempMTP *= 2;
    }

    tempMTP += processDemArmors(this);
    tempMTP += processDemStates(this);


    if(tempMTP > maximumMTP)
    {
        tempMTP = maximumMTP;
    }

    if(tempMTP < 1)
    {
        tempMTP = 1;
    }

    if(this.hasInfiniteTP())
    {
    	return 100;
    }

    return tempMTP;
};

Game_Actor.prototype.initTp = function() {
    if(randomizeTP)
    {
        var initialTP = Math.randomInt(randomizeUpperBound - randomizeLowerBound) + randomizeLowerBound;
        initialTP += initialTPNumber;
        initialTP += ((initialTPPercent / 100) * this.maxTp());
        if(initialTP < 0)
        {
            initialTP = 0;
        }
        if(initialTP > this.maxTp())
        {
            initialTP = this.maxTp();
        }
        this.setTp(initialTP);
    }
    else
    {
        var initialTP = 0;
        initialTP += initialTPNumber;
        initialTP += ((initialTPPercent / 100) * this.maxTp());
        if(initialTP < 0)
        {
            initialTP = 0;
        }
        if(initialTP > this.maxTp())
        {
            initialTP = this.maxTp();
        }
        this.setTp(initialTP);
    }
};

Game_Actor.prototype.onBattleStart = function() {
    this.setActionState('undecided');
    this.clearMotion();
    if (!this.isPreserveTp() && !preserveTP) {
        this.initTp();
    }
};

Game_Actor.prototype.onBattleEnd = function() {
    //this.battleEndTP();
    this.clearResult();
    this.removeBattleStates();
    this.removeAllBuffs();
    this.clearActions();
    if (!this.isPreserveTp() && !preserveTP) {
        this.clearTp();
    }
    this.appear();
};

Game_Actor.prototype.battleEndTP = function() {
    var value = Math.floor(battleEndTPNumber + ((battleEndTPPercent / 100) * this.maxTp()));
    this.gainSilentTp(value);
    if(battleEndTPMessage && value > 0)
    {
        $gameMessage.add(this._name + " gained " + value + " " + TextManager.tp + "!");
    }
};
/*
Game_Actor.prototype.refresh = function() {
    this.stateResistSet().forEach(function(stateId) {
        this.eraseState(stateId);
    }, this);
    this._hp = this._hp.clamp(0, this.mhp);
    this._mp = this._mp.clamp(0, this.mmp);
    if(!infiniteTP && !this.hasInfiniteTP())
    {
        this._tp = this._tp.clamp(0, this.maxTp());
    }
};
*/
Game_Actor.prototype.chargeTpByDamage = function(damageRate) {
    var value = Math.floor(50 * damageRate * this.tcr);
    if(TPGainfromDamage && !this.hasRestrictTPGainDamage())
    {
        this.gainSilentTp(value);
    }
};

Game_Actor.prototype.hasInfiniteTP = function()
{
    if(this.actor().meta.InfiniteTP)
    {
        return true;
    }
    if(this.currentClass().meta.InfiniteTP)
    {
        return true;
    }
    for(var i = 0; i < this.equips().length; i += 1)
    {
        if(this.equips()[i])
        {
            if(this.equips()[i].meta.InfiniteTP)
            {
                return true;
            }
        }
    }
    for(var i = 0; i < this.states().length; i += 1)
    {
        if(this.states()[i].meta.InfiniteTP)
        {
            return true;
        }
    }

    return infiniteTP;
}

Game_Actor.prototype.hasRestrictTPGainDamage = function()
{
    if(this.actor().meta.RestrictTPfromDamage)
    {
        return true;
    }
    if(this.currentClass().meta.RestrictTPfromDamage)
    {
        return true;
    }
    for(var i = 0; i < this.equips().length; i += 1)
    {
        if(this.equips()[i])
        {
            if(this.equips()[i].meta.RestrictTPfromDamage)
            {
                return true;
            }
        }
    }
    for(var i = 0; i < this.states().length; i += 1)
    {
        if(this.states()[i].meta.RestrictTPfromDamage)
        {
            return true;
        }
    }
}

//Game_Action

Game_Action.prototype.applyItemUserEffect = function(target) {
    var value;
    if(this.item().meta.TPGain)
    {
        value = Math.floor(this.item().meta.TPGain * this.subject().tcr);
    }
    else if(this.item().meta.TPGainPercent)
    {
        value = Math.floor(this.item().meta.TPGainPercent * this.subject().maxTp() * this.subject().tcr);
    }
    else
    {
        value = Math.floor(this.item().tpGain * this.subject().tcr);
    }
    this.subject().gainSilentTp(value);
};

Game_Action.prototype.apply = function(target) {
    var result = target.result();
    this.subject().clearResult();
    result.clear();
    result.used = this.testApply(target);
    result.missed = (result.used && Math.random() >= this.itemHit(target));
    result.evaded = (!result.missed && Math.random() < this.itemEva(target));
    result.physical = this.isPhysical();
    result.drain = this.isDrain();
    if (result.isHit()) {
        if (this.item().damage.type > 0) {
            result.critical = (Math.random() < this.itemCri(target));
            var value = this.makeDamageValue(target, result.critical);
            this.executeDamage(target, value);
        }
        this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);

        this.applyTPBonus(target, result.critical);
    }
};

Game_Action.prototype.applyTPBonus = function(target, critical) {
    var useValue = 0;
    var takeValue = 0;

    var superEffect = this.calcElementRate(target);

    if(critical)
    {
        useValue += TPBonusCritUse;
        takeValue += TPBonusCritTake;
    }
    if(superEffect > 1)
    {
        useValue += TPBonusSuperUse;
        takeValue += TPBonusSuperTake;
    }

    this.subject().gainSilentTp(useValue);

    if(TPGainfromDamage)
    {
        target.gainSilentTp(takeValue);
    }
};

//Window_Base

Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    width = width || 96;
    var color1 = this.tpGaugeColor1();
    var color2 = this.tpGaugeColor2();
    if(!infiniteTP && !actor.hasInfiniteTP())
    {
        if(actor.tp == actor.maxTp())
        {
            this.drawGauge(x, y, width, actor.tpRate(), this.textColor(fullTPColor1), this.textColor(fullTPColor2));
        }
        else if(actor.tp >= (actor.maxTp() / 2))
        {
            this.drawGauge(x, y, width, actor.tpRate(), this.textColor(halfTPColor1), this.textColor(halfTPColor2));
        }
        else
        {
            this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
        }
    }
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.tpA, x, y, 44);
    this.changeTextColor(this.tpColor(actor));
    if(displayMTPinBattle && !actor.hasInfiniteTP() && MTPBattleLimit > actor.tp)
    {
        this.drawText(actor.tp + "/" + actor.maxTp(), x + width - 64, y, 64, 'right');
    }
    else
    {
        this.drawText(actor.tp, x + width - 64, y, 64, 'right');
    }
};

//Window_Status

Window_Status.prototype.drawBlock3 = function(y) {
    this.drawParameters(48, y + 16);
    this.drawEquipments(432, y);
};


Window_Status.prototype.drawParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    for (var i = -1; i < 6; i++) {
        var paramId = i + 2;
        var y2 = y + lineHeight * i;
        if(i == -1)
        {
            if(displayMTPinStatus)
            {
                this.changeTextColor(this.textColor(MTPColorID))
                this.drawText(MTPStatusName, x, y2, 160);
            }
        }
        else
        {
            this.changeTextColor(this.systemColor());
            this.drawText(TextManager.param(paramId), x, y2, 160);
        }
        this.resetTextColor();
        if(i == -1)
        {
            if(displayMTPinStatus)
            {
                this.drawText(this._actor.maxTp(), x + 160, y2, 60, 'right');
            }
        }
        else
        {
            this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
        }
    }
};

//BattleManager

BattleManager.processVictory = function() {
    $gameParty.removeBattleStates();
    $gameParty.performVictory();
    this.playVictoryMe();
    this.replayBgmAndBgs();
    this.makeRewards();
    this.displayVictoryMessage();
    this.displayRewards();
    this.gainRewards();
    $gameParty.gainEndTP();
    this.endBattle(0);
};

//Game_Party
Game_Party.prototype.gainEndTP = function() {
    for(var i = 0; i < this.members().length; i+=1)
    {
        this.members()[i].battleEndTP();
    }
};

//Plugin Commands

var TPUpgradePluginCommands = Game_Interpreter.prototype.pluginCommand;

Game_Interpreter.prototype.pluginCommand = function(command, args) {
   TPUpgradePluginCommands.call(this, command, args);
   
   if (command.toLowerCase() === 'infinitetp') {
        infiniteTP = true;
   }
   if (command.toLowerCase() === 'noinfinitetp') {
        infiniteTP = false;
   }
   if (command.toLowerCase() === 'setactortptofull') {
        var actor = $gameActors.actor(args[0]);

        actor.setTp(actor.maxTp());
   }
   if (command.toLowerCase() === 'setactortptopercent') {
        var actor = $gameActors.actor(args[0]);
        var percent = args[1];

        if(percent > 100)
        {
            percent = 100;
        }
        if(percent < 0)
        {
            percent = 0;
        }

        var value = ((percent / 100) * actor.maxTp());

        actor.setTp(value);
   }
   if (command.toLowerCase() === 'setpartytptofull') {
        for(var i = 0; i < $gameParty.members().length; i+=1)
        {
            $gameParty.members()[i].setTp($gameParty.members()[i].maxTp());
        }
   }
   if (command.toLowerCase() === 'setpartytptopercent') {
        var percent = args[0];

        if(percent > 100)
        {
            percent = 100;
        }
        if(percent < 0)
        {
            percent = 0;
        }

        var value = 0;

        for(var i = 0; i < $gameParty.members().length; i++)
        {
            value = ((percent / 100) * $gameParty.members()[i].maxTp());
            $gameParty.members()[i].setTp(value);
        }
   }
};