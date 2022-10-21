# **Responsive web design**
## *responsive web*
These days people access to webpage in various way. Some use desktop computer, others use tablet computer and others use smartphone.   
Every device has different environment, especially size of screen. So a design suitable for one device can be terrible to other.   
Responsive web mean to design webpage considering mentioned above.   

---
## *media query*
For responsive web, we can set size of element use %, not px. Size of % value element follow its parent element. So it can prevent endless scroll in small device or vice versa. But it's not enough.   
Using media query can apply different style depending on the size of browser.   
Written
```CSS
@media(max-width: 800px){
    div{
        background-color: red;
    }
}
div{
    background-color: blue;
}
```
For media query, need to set viewport meta in head like
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
so browser can recognize device.

Usually width: 768px and width: 1200px are used to distinguish devices.