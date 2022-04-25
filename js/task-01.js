
const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);


const categoriesItemCount = () => 
    document.querySelectorAll('#categories li.item').forEach((item) => {
            console.log(`Category: ${item.querySelector("h2").textContent}`);

            console.log(`Elements: ${item.querySelectorAll('li').length}`);
    })
    
categoriesItemCount();
