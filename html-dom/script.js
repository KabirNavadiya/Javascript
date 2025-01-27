const body = document.body
// body.append("Hello World !","Bye")
// // body.appendChild("Hello World !")

// creating elements
const div = document.createElement("div") 



//modifying elements

// method1
// div.innerHTML = "Hello World ! (innerHTML)";
// div.innerText = "hello World ! (innerText)";

// method2
// div.textContent= "hello World ! (textcontent)"




// modifying html elements 

//method 1

//will not work....
// div.textContent = "<strong>hello World ! 2</strong>" 

// do this instead
// div.innerHTML = "<strong> Hello World ! 2 </strong>"


//method 2  (more secure way than .innerHTML)

// const strong = document.createElement('strong')
// strong.innerText = "Hello World ! 2"
// body.append(strong)


body.append(div)
