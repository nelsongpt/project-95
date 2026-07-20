document.querySelectorAll('input').forEach(i=>{const k=i.parentElement.textContent.trim();i.checked=localStorage.getItem(k)==='1';i.onchange=()=>localStorage.setItem(k,i.checked?'1':'0')})

function updateDashboard(){

    const p = AppData.profile;

    document.getElementById("calories").textContent =
        `${p.calories} / ${p.calorieGoal}`;

    document.getElementById("protein").textContent =
        `${p.protein}g / ${p.proteinGoal}g`;

    document.getElementById("water").textContent =
        `${p.water} / ${p.waterGoal}L`;

    document.getElementById("sleep").textContent =
        `${p.sleep} / ${p.sleepGoal} hrs`;

    document.getElementById("calorieFill").style.width =
        (p.calories/p.calorieGoal*100)+"%";

    document.getElementById("proteinFill").style.width =
        (p.protein/p.proteinGoal*100)+"%";

    document.getElementById("waterFill").style.width =
        (p.water/p.waterGoal*100)+"%";

    document.getElementById("sleepFill").style.width =
        (p.sleep/p.sleepGoal*100)+"%";

}

updateDashboard();