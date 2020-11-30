const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


function listScores (arr) {
	for (i = 0; i < arr.length; i++) {
		console.log(`Bubble solution #${i} scores: ${arr[i]}`);
	}	
}

function countTests (arr) {
	console.log(`Bubbles tests: ${arr.length}`);
}

function printHighScore (arr) {
	console.log(`Highest bubble score: ${Math.max(...arr)}`);
}

function printHSS (arr) {
	const highScoreSolutions = [];
	let hSSList = '';
	for (i = 0; i < arr.length; i++) {
		if (arr[i] == Math.max(...arr)) {
			highScoreSolutions.push(i);
		}
	}
	for (i = 0; i < highScoreSolutions.length; i++) {
		if (i == highScoreSolutions.length - 1) {
			hSSList = hSSList.concat(`#${highScoreSolutions[i]}`);
		} else {	
			hSSList = hSSList.concat(`#${highScoreSolutions[i]}, `);
		}
	}
	console.log(`Solutions with highest score: ${hSSList}`);
}

function fullReport (arr) {
	listScores(arr);
	countTests(arr);
	printHighScore(arr);
	printHSS(arr);
}

function quickReport (arr) {
	countTests(arr);
	printHighScore(arr);
	printHSS(arr);	
}

fullReport(scores);
