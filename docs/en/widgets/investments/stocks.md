---
search: true
---

# Actions

In the Modyo Shares Widget the user will be able to find all the information about the available shares, along with Market Information and a module to trade online in an agile and simple way.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-stocks
```

[Open in another tab] (https://widgets-es.modyo.com/inversiones/acciones)

 <iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/acciones" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/> 

| Functionality          | Description                                                                                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Actions Layout     | Displays the set of available tradable actions. Displays a list of the in-transit operations associated with the actions. Displays market information for a specific Action. Allows you to cancel operations in transit, if necessary. |
| Market Information | Displays the information available for the stock, such as evolution, market points, traded amount, last price, and possible institution-specific documents. Allows you to buy or sell a selected share.                               |
| Buying Shares     | Allows you to purchase the selected share by defining the investment account, the number of shares, the maximum amount at which you want to buy, and the duration time of the order.                                                                |
| Sale of Shares      | Allows you to sell the selected share by defining the investment account, the number of shares you want to sell, and the minimum selling price.                                                                                              |

 <script> 

 export default {
 mounted () {

 function setFrameHeightCo (id, ht) {
 var ifrm = document.getElementById (id);
 if (ifrm) {
 ifrm.style.height = ht + 4 + “px”;
 }
 }
 //iframed document sends its height using postMessage
 function HandleDoCheightMsg (e) {
 //check origin
 if (e.origin === 'https://widgets-es.modyo.com') {
 //parse data
 var data = json.parse (e.data);

 console.log ('data: ', data)
 //check data object
 if (data ['doChight']) {
 setFrameHeightCo ('WidgetFrame', data ['DoChight']);
 } else {
 SetFrameHeightCo ('WidgetFrame', 700);
 }
 }
 }

 //assign message handler
 if (Window.addEventListener) {
 Window.addEventListener ('message', HandleDoCheightMSG, false);
 }
 }
 }

 </script> 