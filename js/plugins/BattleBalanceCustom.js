//=============================================================================
// BattleBalanceCustom.js
//=============================================================================
// Copyright (c) 2015 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【MPP】デフォルトで変更できない戦闘バランスを調整します。
 * @author 木星ペンギン
 * @help ●random()について
 * random(n)はランダム値のことです。
 * 0～n-1の範囲から数値がランダムで返されます。
 * （例：random(25) の場合、0～24の範囲内からランダムで数値が選ばれます）
 * 
 * ●行動速度のランダム計算
 * ターン内での行動順を決める行動速度の計算式は
 *   敏捷性 + random(5 + 敏捷性 / 4)
 * で求められた後に、アイテムや通常攻撃の速度補正が加わります。
 * この計算式を
 *   敏捷性 + random([基準値] + 敏捷性 * [影響率])
 * に変更します。
 * 
 * ●クリティカル時のダメージ倍率
 * デフォルトでは計算後のダメージ量が３倍になります。
 * 
 * ●運の弱体への影響率
 * デフォルトでは対象より使用者の運が1多くなるごとに
 * 弱体の成功率が0.001(0.1%)上昇します。
 * 
 * これは加算ではなく、乗算ということに気を付けてください。
 * 
 * 例えば、対象より運が10多ければ1%上がることになりますが、
 * 元の成功率が50%の場合、
 *   50% + 1% = 51%
 * になるのではなく、
 *   50% * 101% = 50.5%
 * となります。
 * 
 * ●能力値強化/弱体アイコンの開始位置
 * アイコンの並び順は
 *   HP, MP, 攻撃力, 防御力, 魔法力, 魔法防御, 敏捷性, 運
 * です。
 * HPのアイコン番号が開始位置になります。
 * 
 * デフォルトの能力値強化アイコンの開始位置は[32,40]となっていますが
 * これは重ね掛け1回は32番、重ね掛け2回は40番が開始位置になるということです。
 * 
 * ●戦闘開始時のTP
 * TPが持ち越しではない場合、戦闘開始時のTPは
 *   random(25)
 * で決定されます。
 * これを
 *   random([ランダム値]) + [加算値]
 * に変更します。
 * 
 * ●被ダメージ時のTP増加量
 * デフォルトの計算式は、
 *   50 * ダメージ量 / 最大ＨＰ * TPチャージ率
 * です。
 * これを
 *   [基本値] * ダメージ量 / 最大ＨＰ * TPチャージ率 + [加算値]
 * に変更します。
 * 
 * ================================
 * Version : 1.1
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 * 
 * @param speedBase
 * @desc 行動速度ランダム計算の基準値
 * @default 5
 *
 * @param agiRate
 * @desc 行動速度ランダム計算の敏捷性の影響率
 * @default 0.25
 *
 * @param criRate
 * @desc クリティカル時のダメージ倍率
 * @default 3
 *
 * @param lukRate
 * @desc 運の弱体への影響率
 * @default 0.001
 *
 * @param === Buff ===
 * 
 * @param maxBuff
 * @desc 能力値強化/弱体の重ね掛け上限
 * @default 2
 *
 * @param buffRate
 * @desc 能力値強化/弱体の重ね掛け１回ごとの影響率
 * @default 0.25
 *
 * @param iconBussStart
 * @desc 能力値強化アイコンの開始位置
 * 重ね掛け回数ごとの開始位置をカンマで区切って設定
 * @default 32,40
 *
 * @param iconDebussStart
 * @desc 能力値弱体アイコンの開始位置
 * 重ね掛け回数ごとの開始位置をカンマで区切って設定
 * @default 48,56
 *
 * @param === TP ===
 * 
 * @param initTpRand
 * @desc 戦闘開始時のTPのランダム値
 * @default 25
 *
 * @param initTpPlus
 * @desc 戦闘開始時のTPの加算値
 * @default 0
 *
 * @param damageTpBase
 * @desc 被ダメージ時のTP増加量の基本値
 * @default 50
 *
 * @param damageTpPlus
 * @desc 被ダメージ時のTP増加量の加算値
 * @default 0
 *
 */

(function() {

var parameters = PluginManager.parameters('BattleBalanceCustom');

//-----------------------------------------------------------------------------
// Game_Action

var speedBase = Number(parameters['speedBase']);
var agiRate = Number(parameters['agiRate']);
var criRate = Number(parameters['criRate']);
var lukRate = Number(parameters['lukRate']);

//1429
Game_Action.prototype.speed = function() {
    var agi = this.subject().agi;
    var speed = agi + Math.randomInt(Math.floor(speedBase + agi * agiRate));
    if (this.item()) {
        speed += this.item().speed;
    }
    if (this.isAttack()) {
        speed += this.subject().attackSpeed();
    }
    return speed;
};

//1719
Game_Action.prototype.applyCritical = function(damage) {
    return damage * criRate;
};

//1956
Game_Action.prototype.lukEffectRate = function(target) {
    return Math.max(1.0 + (this.subject().luk - target.luk) * lukRate, 0.0);
};

//-----------------------------------------------------------------------------
// Game_BattlerBase

var maxBuff = Number(parameters['maxBuff'] || 2);
var buffRate = Number(parameters['buffRate'] || 0.25);
var iconBussStart = Number(parameters['iconBussStart'] || '32,40').split(",");
iconBussStart = iconBussStart.map(function(i) {
    return Number(i);
});
var iconDebussStart = Number(parameters['iconDebussStart'] || '48,56').split(",");
iconDebussStart = iconDebussStart.map(function(i) {
    return Number(i);
});

//2269
Game_BattlerBase.prototype.isMaxBuffAffected = function(paramId) {
    return this._buffs[paramId] === maxBuff;
};

//2273
Game_BattlerBase.prototype.isMaxDebuffAffected = function(paramId) {
    return this._buffs[paramId] === -maxBuff;
};

//2343
Game_BattlerBase.prototype.buffIconIndex = function(buffLevel, paramId) {
    if (buffLevel > 0) {
        if (iconBussStart[buffLevel - 1]) {
            return iconBussStart[buffLevel - 1] + paramId;
        }
    } else if (buffLevel < 0) {
        if (iconDebussStart[-buffLevel - 1]) {
            return iconDebussStart[-buffLevel - 1] + paramId;
        }
    }
    return 0;
};

//2434
Game_BattlerBase.prototype.paramBuffRate = function(paramId) {
    return this._buffs[paramId] * buffRate + 1.0;
};

//-----------------------------------------------------------------------------
// Game_Battler

var initTpRand = Number(parameters['initTpRand'] || 25);
var initTpPlus = Number(parameters['initTpPlus'] || 0);
var damageTpBase = Number(parameters['damageTpBase'] || 50);
var damageTpPlus = Number(parameters['damageTpPlus'] || 0);

//3205
Game_Battler.prototype.initTp = function() {
    this.setTp(Math.randomInt(initTpRand) + initTpPlus);
};

//3213
Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
    var value = Math.floor(damageTpBase * damageRate * this.tcr + damageTpPlus);
    this.gainSilentTp(value);
};

})();
