var NumDes = 1000;
var RQsubTOT = 0;
var subTOT = 0;

function setup() {

	for (var x = 1; x < NumDes; x++) {
		for (var y = x + 1; y < NumDes; y++) {

			subTOT = Math.pow(x, 2) + Math.pow(y, 2);
			RQsubTOT = Math.sqrt(subTOT);
			if (RQsubTOT == floor(RQsubTOT) && subTOT == floor(subTOT)) {


				if (x + y + RQsubTOT == NumDes) {
					console.log(x, " + ", y, " = ", RQsubTOT, " TOT = ", x + y + RQsubTOT);
					break;
				}
			}
		}
		if (x + y + RQsubTOT == NumDes) {
			break;
		}

	}
}
function draw() {

}