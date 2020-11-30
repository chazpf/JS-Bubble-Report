const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


function list(arr) {
	for (i = 0; i < arr.length; i++) {
		console.log(`Bubble solution #${i} scores: ${arr[i]}`);
	}	
	console.log(`Bubbles tests: ${arr.length}`);
}

function getHighScore(arr) {
	let highScore = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > highScore) {
			highScore = arr[i];
		}
	}
	return highScore;
}

function printHSS(arr) {
	const hSS = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == Math.max(...arr) && hSS.length == 0) {
			hSS.push(`#${i}`);
		} else if (arr[i] == Math.max(...arr)) {
			hSS.push(` #${i}`);
		}
	}
	return hSS;
}

function report(arr) {
	console.log(`Highest bubble score: ${getHighScore(arr)}`);
	console.log(`Solutions with highest score: ${printHSS(arr)}`);
}

list(scores);
report(scores);