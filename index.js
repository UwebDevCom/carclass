

// class 

class Car {
    constructor(brand,name,model,year,secTo100,gazUse){
        this.brand = brand;
        this.name = name;
        this.model = model;
        this.year = year;
        this.secTo100 = secTo100;
        this.gazUse = gazUse;
    this.isSet = false;    
}
gasSpend()
{
    return `1/${this.gazUse}`;
}
checkSpeed()
{
    let monEl =document.querySelectorAll('.details li.speed button');
    monEl.forEach((el)=>{el.addEventListener('click',(e)=>{
        let countTime=0;
        setInterval(()=>{
            if (this.secTo100 > countTime) {
                countTime+=100;
                document.querySelector('.details li.speed').textContent = `${countTime}`;
            }else {
                clearInterval();
            }
        },100);
    })
    })
}
    setCruiseControl(){
        return !this.isSet ? this.isSet = true : this.isSet = false;
    }
    createCare(image){
const markup = `<div class="car">
<h1>${this.name} ${this.model}</h1>
<img src="${image}" alt="${this.name}">
                <ul class="details">
                <li>${this.brand}</li>
                <li>${this.name}</li>
                <li>${this.year}</li>  
                <li class="speed"><button>Check Speed</button></li>  
                <li>${this.gasSpend()}</li>
                </ul>
                </div>`;

            document.querySelector('.container').innerHTML +=markup; 
    }

}




const honda = new Car('honda','insight','AS345',2017,5000,16);
const hyundai = new Car('Hyundai', 'Elantra', 'GLS', 2015, 5000, 16);

honda.gasSpend();
honda.setCruiseControl();
honda.createCare('https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90HOC061A021001.jpg');
honda.checkSpeed();
console.log(honda);

hyundai.gasSpend();
hyundai.setCruiseControl();
hyundai.createCare('https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90HOC061A021001.jpg');
hyundai.checkSpeed();
console.log(hyundai);

