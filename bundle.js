var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA4VBMVEUAAAD///8FBQX8/Pz7+/sXFxcVFRUjIyMgICDb29slJSX6+voKCgodHR0ODg5VVVX39/coKCgaGhoSEhIICAjo6Ojj4+N2dnbHx8fy8vLv7+/V1dXQ0NC1tbU8PDz09PTAwMBZWVlEREQ6Ojrq6urn5+fd3d28vLynp6eampqWlpaFhYVJSUk0NDQrKyvz8/PJycmkpKSioqKenp6BgYF6enrMzMy5ubmwsLCrq6t+fn5zc3NmZmZjY2NhYWFeXl5OTk4/Pz8wMDDf39/CwsKRkZGJiYlra2suLi4vLy9tbW2kdFjXAAADkElEQVRYw+2V2XLaQBBF7wgJLUgCCRmz2iwxJGC2EO+7HS/J/39Qbo/Kil8skao8cgFVI02f6enpaWGnnXb6TH7g2YHj2WWkcjzP8zPTNlAgJxuRItK/IagEonyCYQOzSWfsrtZVoAzDwFn39KeHOgwfve5pc4gwz9/Cy5FKVVkdw4KBFu0mPCQhvtAcwMoBBOgpVSopyiTiFrGBI2WW1AYRQjypUq3KuD6VjQul6L7XcZdkdBi2IdPy5g1sHw1C8wAxbsS/NaP9tqkd6SRgT5X42QOsQoCHJiOvDRDYATCoIoChAYJtYlEEMIA2R/YwB+AvgAgaQC+T97+hCGBhUOFyrxAIANBXDWivZRk3RYAY1wzWvIMl9g+3474i1oAa+qqijvCUDyijKhHsSwQ2NjRnsFPAMRok9N2CHHDLGOoZ5gYB35jPSzgp4B63ptRW4S70CTB/w48XeKb54x0wTAjk+goAzKKkuzblkGGTo7MIjvELTSHkA2BjrSuxPW5UWNFpDr5oQADWdKkIAAfnJHC5mlO7Ts+COhyi7jANUmb5AIPb11CpWn0Zm55GOZcR01B4GmUVuOx1O92zl0fQn4CLyaT3iBCIse5Pegc0c+XUs02xACFkVyszc2UEke3YkeO/xxRFnvHRzJUfhqGf8Pfhlp/4for2k8RPsJ1ir/wxYL2ucIslzB8ORKOYdhqtczw6eAiEEGL0MHoYwshrqd1K65Batt3ze1g+jDo6Zqv2hb04wlez1TKncPCZkhhjlalyLo04wKuiunjEnZSyi3KSF4ErFaxlSjO3DHBiactTYMx7hwewUABQP2fT6dlSSBewuatwpYTJIfqZwAKAyeZHzRtyLrl0xOwztN0lH63goRiwxtyZ4168vopDhI1Mzl/bQX0LwHfYwC+c0uyKCQcdelMz8rYFeLigOZY0ctbRUkly8IZ/AHyl+YQyAQFuaorai1DfGrBAn2YHDsDyl4zyu9p2CY/WAmjTPEcEfid01nreahc2oHQPLd2hDBs/ZPaeRHE4glUM6FWvXl9cRWtC7zociaWhMXpbCisxK2UX8GHr/SzdQl4a8oqNtgNQTaAMD1OlK2oBeW/JSyrOA4zf52+v9unPz6Cmz2AAGydKm/WcEHB9si+6ugsB6YohqpdX+ycj8SrrpydveT0pQSYvgCjMWpoQinta7AQOFcRZVw2dIHDCv08DAzvt9N/1BxguQ8mPjXVuAAAAAElFTkSuQmCC";

const $body = document.querySelector('body');
const API = "https://api.escuelajs.co/api/v1/products/?offset=5&limit=10";

const main = async () => {
    const response = await fetch(API);
    const products = await response.json();
    const output = products.map((product) => {
        return `
        <article class="Card">
            <img src=${product.images[0]} alt=${product.title} />
            <h2>${product.title} <small>Precio ${product.price}</small> </h2>
        </article>
        `
    }).join("");

    const newItem = document.createElement('section');
    newItem.classList.add('Items');
    newItem.innerHTML = output;

    const newHeader = document.createElement('header');
    const newImage = document.createElement('img');
    newImage.src = img;
    newHeader.appendChild(newImage);
    $body.appendChild(newHeader);
    $body.appendChild(newItem);

};

main();
//# sourceMappingURL=bundle.js.map
