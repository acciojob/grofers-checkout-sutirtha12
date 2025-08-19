const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const table = document.getElementById("table"); 
const getSum = () => {
  const priceCells = document.querySelectorAll(".price");
  let sum = 0;
  for (let cell of priceCells) {
    sum += Number(cell.textContent);
  }

  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = sum; 
  td.colSpan = table.rows[0].cells.length; 
  tr.appendChild(td);
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
