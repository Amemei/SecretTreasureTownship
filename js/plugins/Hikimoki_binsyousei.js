//=============================================================================
// TMVplugin - 行動順から乱数を除外
// 作者: tomoaky (http://hikimoki.sakura.ne.jp/)
// Version: 1.0
// 最終更新日: 2015/12/15
//=============================================================================

/*:
 * @plugindesc バトルの行動順からランダムな要素を除外します。
 * 
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param secondParam
 * @desc speedが拮抗した際に比較するパラメータ。
 * 初期値: 7 (運で比較、その他の値はヘルプで確認してください)
 * @default 7
 *
 * @help
 * 通常の計算式
 *   speed = 敏捷性 + Math.randomInt(Math.floor(5 + 敏捷性 / 4))
 *
 * これをごっそり削って以下のような式にしています
 *   speed = 敏捷性
 *
 * secondParam の値について
 *   -1 # 利用しない
 *   0  # 最大HP
 *   1  # 最大MP
 *   2  # 攻撃力
 *   3  # 防御力
 *   4  # 魔法力
 *   5  # 魔法防御
 *   6  # 敏捷性
 *   7  # 運
 *   secondParam の比較にはスキルやアイテムの速度補正が適用されません。
 *
 * プラグインコマンドはありません。
 *
 */

var Imported = Imported || {};
Imported.TMSpeedFix = true;

(function() {

  var parameters = PluginManager.parameters('TMSpeedFix');
  var secondParam = Number(parameters['secondParam']);

  BattleManager.makeActionOrders = function() {
    var battlers = [];
    if (!this._surprise) {
      battlers = battlers.concat($gameParty.members());
    }
    if (!this._preemptive) {
      battlers = battlers.concat($gameTroop.members());
    }
    battlers.forEach(function(battler) {
      battler.makeSpeed();
    });
    battlers.sort(function(a, b) {
      if (secondParam >= 0 && a.speed() === b.speed()) {
        return b.param(secondParam) - a.param(secondParam);
      } else {
        return b.speed() - a.speed();
      }
    });
    this._actionBattlers = battlers;
  };

  Game_Action.prototype.speed = function() {
    var speed = this.subject().agi;
    if (this.item()) {
      speed += this.item().speed;
    }
    if (this.isAttack()) {
      speed += this.subject().attackSpeed();
    }
    return speed;
  };

})();
