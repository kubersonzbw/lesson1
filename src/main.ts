export {};

// const createUl = () =>{
//     const ulList = document.createElement("ul")
//     document.body.appendChild(ulList)
//     let  number = 0;

//     for(let i = 0 ; i < 10 ; i++){
//         let liList:HTMLLIElement = document.createElement("li")
// ulList.appendChild(liList)
// number++
// changeContent(liList,number)
//     }
//     const lastLi: HTMLLIElement | null = ulList.querySelector("li:last-child");
//     if(lastLi){
//         changeLastLiTextContent(lastLi)
//     }
// }

// const changeContent = (liList:HTMLLIElement,number:number) =>{
//     liList.textContent = "" + number;
// }

const changeLastLiTextContent = (lastLi: HTMLLIElement) => {
	lastLi.textContent = 'Jestem ostatnim Li';
	lastLi.style.backgroundColor = 'blue';
	lastLi.style.fontSize = '48px';
	lastLi.style.padding = '20px 40px';
};
// createUl()

class CreateUlList {
	ulList: HTMLUListElement;
	liList: HTMLLIElement;
	number: number;
	constructor(count: number) {
		this.ulList = document.createElement('ul');
		this.liList = document.createElement('li');
		this.number = 1;
		this.makeUlList(count);
	}
	makeUlList(count: number) {
		document.body.appendChild(this.ulList);
		for (let i = 0; i < count; i++) {
			this.liList = document.createElement('li');
			this.ulList.appendChild(this.liList);
			this.liList.textContent = '' + this.number;
			this.number++;
		}
		const lastLi: HTMLLIElement | null = this.ulList.querySelector('li:last-child');
		if (lastLi) {
			changeLastLiTextContent(lastLi);
		}
	}
}

const MakeUlList = new CreateUlList(10);
