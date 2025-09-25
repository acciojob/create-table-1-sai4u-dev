function insert_Row() {
    //Write your code here
	const sampleTable = document.getElementById("sampleTable");
	const newRow = sampleTable.insertRow(0);
	
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	
	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";
}
