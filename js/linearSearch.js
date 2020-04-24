//Global array declaration
var arrayList;

//Execute on Submit action
async function runAlgo(){
    //Get dataSet Value
    let dataSet = arrayList;
    //Get selected algorithm
    let selectedAlgo = document.getElementById("algorithm").value;
    //Get search value
    let searchValue = document.getElementById("searchvalue").value;
    //Control animation speed
    let speed = document.getElementById("sortingspeed").value;
    if(selectedAlgo === "1"){
        //Set the status (Searching)
        let status = document.getElementById("status");
        status.innerText = "Searching ...";
        status.style.color = "#FFCE44";
        //To display the code Ran
        let codeHeading = document.getElementById("codeHeading");
        codeHeading.innerText = "Linear Search Code:"
        codeHeading.style.display = "flex";
        let code = document.getElementById("code");
            code.innerHTML = `<code>
                for (var i=0; i< dataArray.length; i++) { <br/>
                    if (dataArray[i] == searchValue) { <br/>
                        return i; <br/>
                    } <br/>
                } <br/>
                return null; <br/>
            </code>`;
        code.style.display = "flex";
        //Calling linear Search functionality
        let result = await linearSearch(dataSet, searchValue, speed);
        if(result >= 0 && result !== null){
            //Set the status (Completed/ Found)
            status.innerText = `Found on index ${result}`;
            status.style.color = "#1AA260";
        }else{
            //Set the status (Completed/ Not Found)
            status.innerText = `Element not Found`
            status.style.color = "#DE5246";
        }
    }else if(selectedAlgo === "2"){
        //Sorted array
        let sortedArray = await sortedDataArray(dataSet);
        //Sorted UI dataset
        await sortedDataSet(sortedArray);
        //Set the status (Searching)
        let status = document.getElementById("status");
        status.innerText = "Searching ...";
        status.style.color = "#FFCE44";
        //To display the code Ran
        let codeHeading = document.getElementById("codeHeading");
        codeHeading.innerText = "Binary Search Code:"
        codeHeading.style.display = "flex";
        let code = document.getElementById("code");
            code.innerHTML = `<code>
            let lowIndex = 0; <br/>
            let highIndex = dataArray.length - 1; <br/>
            while (lowIndex <= highIndex) { <br/>
                let midIndex = Math.floor((lowIndex + highIndex) / 2); <br/>
                if (dataArray[midIndex] == searchValue) { <br/>
                    return midIndex; <br/>
                } else if (dataArray[midIndex] < searchValue) { <br/>
                    lowIndex = midIndex + 1; <br/>
                } else { <br/>
                    highIndex = midIndex - 1; <br/>
                } <br/>
            } <br/>
            return null; <br/>
            </code>`;
        code.style.display = "flex";
        //Calling binary Search functionality
        let result = await binarySearch(sortedArray, searchValue, speed);
        if(result >= 0 && result !== null){
            //Set the status (Completed/ Found)
            status.innerText = `Found on index ${result}`;
            status.style.color = "#1AA260";
        }else{
            //Set the status (Completed/ Not Found)
            status.innerText = `Element not Found`
            status.style.color = "#DE5246";
        }
    }else if(selectedAlgo === "3"){
        //Set the status (Searching)
        let status = document.getElementById("status");
        status.innerText = "Sorting ...";
        status.style.color = "#FFCE44";
        //To display the code Ran
        let codeHeading = document.getElementById("codeHeading");
        codeHeading.innerText = "Selection Sort Code:"
        codeHeading.style.display = "flex";
        let code = document.getElementById("code");
            code.innerHTML = `<code>
            let len = dataArray.length; <br/>
            for(let i=0; i< len; i++){ <br/>
                let min = i; <br/>
                for(let j=i+1; j< len; j++){ <br/>
                    if(dataArray[min] > dataArray[j]){ <br/>
                        min = j; <br/>
                    } <br/>
                } <br/>
                if(min !== i){ <br/>
                    swapArray(dataArray,i,min); <br/>
                } <br/>
            } <br/>
            </code>`;
        code.style.display = "flex";
        //Calling Selection sort functionality
        let result = await selectionSort(dataSet, speed);
        //Set the status (Completed)
        status.innerText = `Sorted. No of iterations ${result}`;
        status.style.color = "#1AA260";
    }else if(selectedAlgo === "4"){
        //Set the status (Searching)
        let status = document.getElementById("status");
        status.innerText = "Sorting ...";
        status.style.color = "#FFCE44";
        //To display the code Ran
        let codeHeading = document.getElementById("codeHeading");
        codeHeading.innerText = "Bubble Sort Code:"
        codeHeading.style.display = "flex";
        let code = document.getElementById("code");
            code.innerHTML = `<code>
            let len = dataArray.length; <br/>
            let iterationCount = 0; <br/>
            let swapped; <br/>
            do { <br/>
                swapped = false; <br/>
                iterationCount++; <br/>
                for (let i = 0; i < len-1; i++) { <br/>
                    if (dataArray[i] > dataArray[i + 1]) { <br/>
                        swapArray(dataArray,i,i+1); <br/>
                        swapped = true; <br/>
                    } <br/>
                } <br/>
            } while (swapped); <br/>
            </code>`;
        code.style.display = "flex";
        //Calling Bubble sort functionality
        let result = await bubbleSort(dataSet, speed);
        //Set the status (Completed)
        status.innerText = `Sorted. No of iterations ${result}`;
        status.style.color = "#1AA260";
    }
}

async function buttonEnable(){
    //Check selected algorithm on change on dropdown
    let selectedAlgo = document.getElementById("algorithm").value;
    if(selectedAlgo === "1"){
        //Enable search value if it is searching algorithm
        document.getElementById("searchvalue").disabled = false;
        //Default animation speed setter
        document.getElementById("sortingspeed").value = "1";
        //Toggle the button text Search
        document.getElementById("submitButton").innerText = "Search";
        //Display color code status based on the algorithm
        document.getElementById("linearSearchColorCode").style.display="flex";
        document.getElementById("binarySearchColorCode").style.display="none";
        document.getElementById("selectionSortColorCode").style.display="none";
        document.getElementById("bubbleSortColorCode").style.display="none";
    }else if(selectedAlgo === "2"){
        //Enable search value if it is searching algorithm
        document.getElementById("searchvalue").disabled = false;
        //Default animation speed setter
        document.getElementById("sortingspeed").value = "2";
        //Toggle the button text Search
        document.getElementById("submitButton").innerText = "Search";
        //Display color code status based on the algorithm
        document.getElementById("linearSearchColorCode").style.display="none";
        document.getElementById("binarySearchColorCode").style.display="flex";
        document.getElementById("selectionSortColorCode").style.display="none";
        document.getElementById("bubbleSortColorCode").style.display="none";
    }else if(selectedAlgo === "3"){
        //Enable search value if it is searching algorithm
        document.getElementById("searchvalue").disabled = true;
        //Default animation speed setter
        document.getElementById("sortingspeed").value = "1";
        //Toggle the button text Sort
        document.getElementById("submitButton").innerText = "Sort";
        //Display color code status based on the algorithm
        document.getElementById("linearSearchColorCode").style.display="none";
        document.getElementById("binarySearchColorCode").style.display="none";
        document.getElementById("selectionSortColorCode").style.display="flex";
        document.getElementById("bubbleSortColorCode").style.display="none";
    }else if(selectedAlgo === "4"){
        //Enable search value if it is searching algorithm
        document.getElementById("searchvalue").disabled = true;
        //Default animation speed setter
        document.getElementById("sortingspeed").value = "1";
        //Toggle the button text Sort
        document.getElementById("submitButton").innerText = "Sort";
        //Display color code status based on the algorithm
        document.getElementById("linearSearchColorCode").style.display="none";
        document.getElementById("binarySearchColorCode").style.display="none";
        document.getElementById("selectionSortColorCode").style.display="none";
        document.getElementById("bubbleSortColorCode").style.display="flex";
    }
}


async function linearSearch(dataArray, searchValue, speed){
    if(dataArray){
        //Loop through elements
        for (var i=0; i<dataArray.length; i++) {
            currentNode(i);
            if (dataArray[i] == searchValue) {
                //Change the color of node if found
                visitedNode(i);
                return i;
            }
            //Animation Speed control
            await timeout(speed);
            //Reset the color of node if not found
            resetPointer(i);
          } return null;
    }
}

async function sortedDataArray(dataArray){
    //Sort and return array
    if(dataArray && dataArray.length > 0){
        dataArray.sort(function(a, b){
            return a - b;
        });
    }
    return dataArray;
}

async function binarySearch(dataArray, searchValue, speed) {
    let lowIndex = 0;
    let highIndex = dataArray.length - 1;
    //Set the current node color
    currentNode(lowIndex);
    currentNode(highIndex);
    //Low index should be less than high Index
    while (lowIndex <= highIndex) {
        //Taking middle value for compare
        let midIndex = Math.floor((lowIndex + highIndex) / 2);
        //Set the current node color
        currentNode(midIndex);
        //Animation speed Control
        await timeout(speed);
        if (dataArray[midIndex] == searchValue) {
            //Reset the current node color
            resetPointer(midIndex);
            resetPointer(lowIndex);
            resetPointer(highIndex);
            //Set the color for found item and return the index
            visitedNode(midIndex);
            //Item found
            return midIndex;
        } else if (dataArray[midIndex] < searchValue) {
            //Reset the current node color
            resetPointer(lowIndex);
            lowIndex = midIndex + 1;
            //Set the current node color
            currentNode(lowIndex);
        } else {
            //Reset the current node color
            resetPointer(highIndex);
            highIndex = midIndex - 1;
            //Set the current node color
            currentNode(highIndex);
        }
        //Reset the current node color
        resetPointer(midIndex);
        resetPointer(lowIndex);
        resetPointer(highIndex);
    }
    //Item not found 
    return null;
  }

async function bubbleSort(dataArray, speed){
    if(dataArray){
        let len = dataArray.length;
        let iterationCount = 0;
        let swapped;
        do {
            swapped = false;
            //To find the iteration count
            iterationCount++;
            for (let i = 0; i < len-1; i++) {
                //set the color for current nodes
                currentNode(i);
                currentNode(i+1);
                //Animation speed control
                await timeout(speed);
                if (dataArray[i] > dataArray[i + 1]) {
                    //swap the array
                    swapArray(dataArray,i,i+1);
                    swapped = true;
                    //swapped array to display in UI
                    changeNode(i, i+1);
                }
                //reset the color
                resetPointer(i);
                resetPointer(i+1);
            }
        } while (swapped);
        //total iterations to acheive the sorting
        return iterationCount;
    }
}

async function selectionSort(dataArray, speed){
    if(dataArray){
        let len = dataArray.length;
        for(let i=0; i< len; i++){
            let min = i;
            //Setting the color code for current node
            currentNode(min);
            //Loop through each element
            for(let j=i+1; j< len; j++){
                //Setting the color code for current pointer
                currentPointer(j);      
                if(j-1 !== i){
                    //Reset the color if it is not the first element
                    resetPointer(j-1);
                }
                //setting up the min value          
                if(dataArray[min] > dataArray[j]){
                    min = j;
                }
                //Animation speed control
                await timeout(speed);
                if(j+1 === len || j-1 === i){
                    //reset the color
                    resetPointer(j);
                }
            }
            if(min !== i){
                //swap the array
                swapArray(dataArray,i,min);
                changeNode(min, i);
            }
            visitedNode(i);
        }
        //return the iterations
        return len;
    }
}

//Animation speed control function
async function timeout(speed){
    await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 500 * parseInt(speed));
    });
}

//Swap array element function
function swapArray(dataArray, value1, value2){
    let tmp = dataArray[value1];
    dataArray[value1] = dataArray[value2];
    dataArray[value2] = tmp;
}

//Reset the node color function
function resetPointer(index){
    let resetPointer = document.getElementById("column"+index);
    if(resetPointer !== null){
        resetPointer.removeAttribute("class");
        resetPointer.setAttribute("class","tableColumn");
    }
}

//Current node color function
function currentNode(index){
    let currentNode = document.getElementById("column"+index);
    if(currentNode !== null){
        currentNode.removeAttribute("class");
        currentNode.setAttribute("class","currentNode");
    }
}

//Current pointer color function
function currentPointer(index){
    let currentPointer = document.getElementById("column"+index);
    if(currentPointer !== null){
        currentPointer.removeAttribute("class");
        currentPointer.setAttribute("class","currentPointer");
    }
}

//Visited node color function
function visitedNode(index){
    let visitedNode = document.getElementById("column"+index);
    if(visitedNode !== null){
        visitedNode.removeAttribute("class");
        visitedNode.setAttribute("class","visitedNode");
    }
}

//Generate data set
function generateDataSet(){
    let totalNumbers = document.getElementById("datasize").value;
    let randomArray = document.getElementById("idRandomArray");
    randomArray.style.visibility="hidden";
    //Delete and Add new row
    deleteRow();
    addRow();
    arrayList = [];
    if(totalNumbers && parseInt(totalNumbers) > 0){
        randomArray.style.visibility="visible";
        for(let i=0; i< totalNumbers; i++){
            //get random number
            let generatedNumber = generateRandomNumber();
            //create new row with random generated values
            createRow("tableColumn", generatedNumber, i);
        }
    }
}

//Sorted Data UI card creation
async function sortedDataSet(sortedArray){
    //Delete and Add new row
    deleteRow();
    addRow();
    arrayList = [];
    let length = sortedArray.length;
    if(length && parseInt(length) > 0){
        for(let i=0; i< length; i++){
            //create new row with values
            createRow("tableColumn", sortedArray[i], i);
        }
    }
}

//delete row
function deleteRow(){
    let row = document.getElementById("randomArrayRow")
    if(row !== null){
        row.remove();
    }
}

//add row
function addRow(){
    let tableBody = document.getElementById("tableBody");
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("id","randomArrayRow");
    tableBody.appendChild(tableRow);
}

//Generate Random Number
function generateRandomNumber(){
    return Math.floor(Math.random() * 100);
}

//Create Row
function createRow(className, generatedNumber, index){
    arrayList.push(parseInt(generatedNumber));
    let tableRow = document.getElementById("randomArrayRow");
    let tableColumn = document.createElement("td");
    tableColumn.appendChild(document.createTextNode(generatedNumber));
    tableColumn.setAttribute('id','column'+index);
    tableColumn.setAttribute('class',className);
    tableRow.appendChild(tableColumn);
}

//Change the UI of the array
function changeNode(currentIndex, changeIndex){
    let currentNode = document.getElementById("column"+currentIndex);
    let changeNode = document.getElementById("column"+changeIndex);
    currentNodeText = currentNode.innerText;
    changeNodeText = changeNode.innerText;
    currentNode.innerText = changeNodeText;
    changeNode.innerText = currentNodeText;
}