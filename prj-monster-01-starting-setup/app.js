function countHurt(a,b){
	return Math.floor(Math.random() * (a-b)) + b;
}
const app = Vue.createApp({
	data() {
		return {
			playerHealth: 100,
			monsterHealth: 100,
			countGameRound: 0,
			storeHumanLog: null,
			storeMonsterLog: null,
			showLogArr: [],
			winning: null
		}
	},
	watch: {
		playerHealth(value){
			if( value<=0 && this.monsterHealth <=0){
				this.winning = "draw";
			}
			else if(value <= 0){
				this.winning = "monster";
			}
		},
		monsterHealth(value){
			if( value<=0 && this.playerHealth <=0){
				this.winning = "draw";
			}
			else if(value <= 0){
				this.winning = "player";
			}
		}
	},
	computed: {
		countMonsterHealth(){
			if (this.monsterHealth < 0){
				return { width: "0%" };
			}
			return { width: this.monsterHealth + "%"};
		},
		countPlayerHealth(){
			if(this.playerHealth < 0){
				return { width: "0%"};
			}
			return { width: this.playerHealth + "%"};
		},
		countSpecialAttack(){
			return this.countGameRound % 3 !== 0;
		},
		

	},
	methods: {
		restartGame(){
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.countGameRound = 0;
			this.showLog = "";
			this.winning = null;
			this.showLogArr= [];
		},
		attackMonster() {
			let attackCount = countHurt(5,12);
			this.monsterHealth -= attackCount;
			this.attackPlayer();
			this.showTheLog("player","attack",attackCount);
			this.countGameRound++;
		},
		attackPlayer() {
			let attackCount = countHurt(5,15);
			this.showTheLog("monster","attack",attackCount);
			this.playerHealth -= attackCount;
		},
		specialAttack() {
			let attackCount = countHurt(10,25);
			this.monsterHealth -= attackCount;
			this.attackPlayer();
			this.showTheLog("monster","speailattck",attackCount);
			this.countGameRound++;
		},
		healPlayer() {
			let healCount = countHurt(8,16);
			if (this.playerHealth + healCount >= 100){
				this.playerHealth = 100;
			}
			else {
				this.playerHealth += healCount;
				this.showTheLog("player","heal",healCount);
			}
			this.attackPlayer();
			this.countGameRound++;
		},
		showTheLog(who, what, value) {
			this.showLogArr.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value
			});
		},
		surrender(){
			this.winning = "monster";
			this.playerHealth = 0;
		}
	}
});
app.mount("#game");