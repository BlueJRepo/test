//
//
//

var resultsMap = new Map();
resultsMap['question1']  = 'B'; resultsMap['question11'] = 'C'; resultsMap['question21'] = 'D'; 
resultsMap['question2']  = 'A'; resultsMap['question12'] = 'C'; resultsMap['question22'] = 'D';
resultsMap['question3']  = 'C'; resultsMap['question13'] = 'D'; resultsMap['question23'] = 'C';
resultsMap['question4']  = 'A'; resultsMap['question14'] = 'D'; resultsMap['question24'] = 'C';
resultsMap['question5']  = 'B'; resultsMap['question15'] = 'C'; resultsMap['question25'] = 'D';
resultsMap['question6']  = 'C'; resultsMap['question16'] = 'B'; resultsMap['question26'] = 'A';
resultsMap['question7']  = 'A'; resultsMap['question17'] = 'B'; resultsMap['question27'] = 'C';
resultsMap['question8']  = 'C'; resultsMap['question18'] = 'D'; resultsMap['question28'] = 'A';
resultsMap['question9']  = 'C'; resultsMap['question19'] = 'B'; resultsMap['question29'] = 'C';
resultsMap['question10'] = 'B'; resultsMap['question20'] = 'B'; resultsMap['question30'] = 'A';

resultsMap['question31'] = 'C'; resultsMap['question41'] = 'B'; resultsMap['question51'] = 'B';
resultsMap['question32'] = 'C'; resultsMap['question42'] = 'B'; resultsMap['question52'] = 'D';
resultsMap['question33'] = 'C'; resultsMap['question43'] = 'D'; resultsMap['question53'] = 'B';
resultsMap['question34'] = 'A'; resultsMap['question44'] = 'A'; resultsMap['question54'] = 'A';
resultsMap['question35'] = 'A'; resultsMap['question45'] = 'C'; resultsMap['question55'] = 'A';
resultsMap['question36'] = 'A'; resultsMap['question46'] = 'D'; resultsMap['question56'] = 'C';
resultsMap['question37'] = 'B'; resultsMap['question47'] = 'C'; resultsMap['question57'] = 'C';
resultsMap['question38'] = 'D'; resultsMap['question48'] = 'D'; resultsMap['question58'] = 'B';
resultsMap['question39'] = 'C'; resultsMap['question49'] = 'D'; resultsMap['question59'] = 'C';
resultsMap['question40'] = 'C'; resultsMap['question50'] = 'D'; resultsMap['question60'] = 'A';

resultsMap['question61'] = 'C'; resultsMap['question71'] = 'B';
resultsMap['question62'] = 'D'; resultsMap['question72'] = 'D';
resultsMap['question63'] = 'C'; resultsMap['question73'] = 'A';
resultsMap['question64'] = 'A'; resultsMap['question74'] = 'C';
resultsMap['question65'] = 'D'; resultsMap['question75'] = 'C';
resultsMap['question66'] = 'B'; resultsMap['question76'] = 'A';
resultsMap['question67'] = 'B'; resultsMap['question78'] = 'A';
resultsMap['question68'] = 'A'; resultsMap['question77'] = 'D';
resultsMap['question69'] = 'A'; resultsMap['question79'] = 'C';
resultsMap['question70'] = 'B'; resultsMap['question80'] = 'C';

var checkAnswer = function(question, form, next){
	alert(form[question].value + '=' + resultsMap[question]);
	if(form[question].value == resultsMap[question]){
		window.location = next;
	}else{	
		document.getElementById("result").innerHTML = "WRONG ANSWER! Please try again";
	}
};	