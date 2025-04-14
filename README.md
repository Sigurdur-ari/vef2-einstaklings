# The Japanese Flashcard App

Þetta verkefni er einstaklingsverkefnið mitt í Vefforritun 2 kennd í HÍ árið 2025. Þetta er einnig hobby verkefni þannig það er í stöðugri þróun. 

## Keyrsla

Mín útgáfa er keyrandi á [þessari slóð](https://vef2-flashjapanese.expo.app)

En ef vilji er fyrir því að clonea og búa til eigin útgáfu eru leiðbeininagar hér:

Fyrst þarf að clonea verkefnið og keyra 

````
npm install
````

Þar sem síðan notar firebase.google.com til þess að sjá um notendavirkni þarf að útfæra það fyrir eigin útgáfu þar sem ég er með mína aðeins locally hjá mér. 

Fyrst þarf að búa til aðgang inni á firebase.google.com og búa til nýtt project og bæta við web appi í það project. Síðan þarf að búa til möppu í rót verkefnis sem heitir utils og bæta við skránni firebase.ts í hana. 

firebase.ts á að líta svona út:

````
// utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
````

Þar sem gildin sem á að setja í firebaseConfig fást úr appinu sem bætt er við í project inni á firebase aðganginum. 

mikilvægt er að í authentication í projectinu þínu sé búið að leyfa email/password login og anonymous login. 

Þegar þetta er allt komið ætti að vera hægt að keyra

````
npm run start
````

ýta svo á w á lyklaborðinu og þá opnast appið á localhost. 

Hægt er að logga sig inn með email og passwordi eða anonymously og skoða appið. Stjórnandi firebase tengingarinnar getur svo séð hvaða userar hafa loggað sig inn inni í projectinu á firebase síðunni. 



