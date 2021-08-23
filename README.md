# API Testing and Development with Postman

<a href="https://www.packtpub.com/product/api-testing-and-development-with-postman/9781800569201"><img src="https://static.packt-cdn.com/products/9781800569201/cover/smaller" alt="API Testing and Development with Postman" height="256px" align="right"></a>

This is the code repository for [API Testing and Development with Postman](https://www.packtpub.com/product/api-testing-and-development-with-postman/9781800569201), published by Packt.

**A practical guide to creating, testing, and managing APIs for automated software testing**

## What is this book about?
Postman enables the exploration and testing of web APIs, helping testers and developers figure out how an API works. With Postman, you can create effective test automation for any APIs. If you want to put your knowledge of APIs to work quickly, this practical guide to using Postman will help you get started.

This book covers the following exciting features: 
* Find out what is involved in effective API testing					
* Use Postman to improve the quality of your APIs
* Understand what a well-designed API looks like
* Become well-versed with API terminology, including the different types of APIs
* Get to grips with performing functional and non-functional testing of an API

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1800569203) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>


## Instructions and Navigations
All of the code is organized into folders. For example, Chapter06.

The code will look like the following:
```
pm.test("Body matches string", function () {
   pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});

```

**Following is what you need for this book:**
The book is for software testing professionals and software developers looking to improve product and API quality through API test automation. You will find this book useful if understand APIs and want to build your skills for creating, testing, and documenting APIs. The book assumes beginner-level knowledge of JavaScript and API development.

With the following software and hardware list you can run all code files present in the book (Chapter 1-14).

### Software and Hardware List

| Chapter  | Software required                   | OS required                        |
| -------- | ------------------------------------| -----------------------------------|
| 1-14        | Postman v8.0.7                     | Windows, Mac OS X, and Linux (Any) |
| 5        | Burp Suite Community Edition v2021.2.1            | Windows, Mac OS X, and Linux (Any) |



We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://static.packt-cdn.com/downloads/9781800569201_ColorImages.pdf).


### Related products <Other books you may enjoy>
* Enterprise API Management [[Packt]](https://www.packtpub.com/product/enterprise-api-management/9781787284432) [[Amazon]](https://www.amazon.in/dp/1787284433)

* Building Low Code Applications wtih Mendix [[Packt]](https://www.packtpub.com/product/building-low-code-applications-with-mendix/9781800201422) [[Amazon]](https://www.amazon.com/dp/1800201427)
   
## Errata 
 * Page 54(Paragraph 2, line 3 ): **Use the Save as YAML option...** _should be_ **Use the Save as YMAL option...**
 * Page 55(Paragraph 2, line 5 ): **With the Generate collection from schema option...**  _should be_ **With the Generate from API Schema option...** 

## Get to Know the Author
**Dave Westerveld**
is a Senior Software Test developer. He has worked for several years as a software tester and has been involved in numerous projects involving test automation. He is an API testing expert. He was part of a team that developed new APIs and worked on automation projects for API tests as well. He has published various well-received video courses. He is passionate about sharing his knowledge and expertise that help testers stay relevant in the changing world of software testing.


