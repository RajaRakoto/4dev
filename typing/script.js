(function () {
	var CharacterPos = 0;
	var MsgBuffer = '';
	var TypeDelay = 90;
	var NxtMsgDelay = 8000;
	var MsgIndex = 0;
	var delay;
	var MsgArray = [
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea iusto a quia non accusamus, voluptatem animi officia. Tempora eaque, quae maxime id necessitatibus ex pariatur autem in, voluptate, numquam illum!',
		'>',
	];

	function StartTyping() {
		var id = document.getElementById('typing-text');
		if (CharacterPos != MsgArray[MsgIndex].length) {
			MsgBuffer = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
			id.value = MsgBuffer + '|'; //cursor
			delay = TypeDelay;
			id.scrollTop = id.scrollHeight;
		} else {
			delay = NxtMsgDelay;
			MsgBuffer = '';
			CharacterPos = -1;
			if (MsgIndex != MsgArray.length - 1) {
				MsgIndex++;
			} else {
				MsgIndex = 0;
			}
		}
		CharacterPos++;
		setTimeout(StartTyping, delay);
	}
	StartTyping();
})();
