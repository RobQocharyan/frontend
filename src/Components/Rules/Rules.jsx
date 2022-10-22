import "./Rules.scss";

import React from "react";
import { useState } from "react";

export const Rules = () => {

  const objLink = {
    activeObject:null,
    objects:[
      {id:1,title:"Օգտագործման համաձայնագիր",href:"#one"},
      {id:2,title:"Կայքում արգելվում է",href:"#two"},
      {id:3,title:"Պատասխանատվության սահմանափակումը",href:"#thre"},
      {id:4,title:"Մեր մասին",href:"#four"},
      {id:5,title:"Համաձայնագրի ժամկետը",href:"#five"}
    ]
  }
  const [active, setActive] = useState(objLink);

  const activeDiv = (index) => {
    setActive({...active,activeObject:active.objects[index]})
  };

  const activeline = (index)=>{
    if(active.objects[index]===active.activeObject){
      return "active"
    }else{
      return ""
    }
  }
  
  return (
    <div className="rules">
      <div className="rulesDivone">
          <div className="rulesContent">
            {active.objects.map((div,index)=>{
              return <div key={index} onClick={(a)=>activeDiv(index)} className={activeline(index)} ><a href={div.href}>{div.title}</a></div>
            })}
          </div>
      </div>
      <div className="rulesDivTwo">
        <h1 id="one">Օգտագործման համաձայնագիր</h1>

        <div className="agreement">
          <p>
            Հարգելի' այցելու, ողջունում ենք Ձեզ Kadr.am կայքում:
            <br />
            Գրանցվելով Kadr.am կայքում՝ դուք պարտադիր պետք է տաք Ձեր
            համաձայնությունը՝ նշելով հաստատման կոճակի վրա, այսպիսով ենթարկվելով
            կայքի կողմից ամրագրված պահանջներին և կանոններին, իսկ դրանց խախտման
            դեպքում Դուք կկրեք պատասխանատվություն՝ անկախ այն բանից Դուք
            կարդացե՞լ եք համաձայնագիրը հաստատելուց առաջ,թե ոչ:
            <br />
            Դուք կրում եք պատասխանատվություն նաև Ձեր մասին տրամադրված ամբողջ
            տեղեկատվության արժանահավատության համար:Հարգելի' այցելու, ողջունում
            ենք Ձեզ Kadr.am կայքում: Գրանցվելով Kadr.am կայքում՝ դուք պարտադիր
            պետք է տաք Ձեր համաձայնությունը՝ նշելով հաստատման կոճակի վրա,
            այսպիսով ենթարկվելով կայքի կողմից ամրագրված պահանջներին և
            կանոններին, իսկ դրանց խախտման դեպքում Դուք կկրեք պատասխանատվություն՝
            անկախ այն բանից Դուք կարդացե՞լ եք համաձայնագիրը հաստատելուց առաջ,թե
            ոչ: Դուք կրում եք պատասխանատվություն նաև Ձեր մասին տրամադրված ամբողջ
            տեղեկատվության արժանահավատության համար:
          </p>
          <h2>Կողմերի իրավունքներն ու պարտականութունները</h2>

          <p>
            Օգտվելով Kadr.am-ի ծառայություններից` Դուք հաստատում եք այն, որ Ձեր
            կողմից տեղադրված նկարների, տեսանյութերի բովանդակության համար կրում
            եք պատասխանատվություն, օժտված եք բոլոր անհրաժեշտ իրավունքներով ու
            թույլտվություններով դրանք կայքում տեղադրելու համար` ներառյալ
            ապրանքանշանները, արտոնագրերն ու կոմերցիոն գաղտնիքները, ինչպես նաև
            ունեք համապատասխան թույլտվություն բոլոր այն մարդկանց կողմից, ովքեր
            պատկերված են տեղադրվող նկարներում և տեսանյութերում: Կայքը
            պարտավորվում է գործել ՀՀ օրենսդրության և հետևյալ Կանոնների համաձայն
            և իր պարտավորությունները պատշաճ կերպով կատարել` ներառյալ կայքի
            ծառայությունների նորմալ աշխատանքը և երրորդ անձանց անձնական տվյալներ
            չտրամադրելը՝ բացառությամբ օրենքով նախատեսված դեպքերի: Ձեր կողմից
            Kadr.am-ում սխալ կոնտակտային տվյալներ տեղադրելու կամ ուրիշ անվան տակ
            կայքից օգտվելու դեպքում, մեր կողմից իրավունք է վերապահվում տրամադրել
            Ձեր կոնտակտային տվյալները տուժած կողմին, իր ներկայացուցիչներին կամ
            իրավաբանական կազմակերպությանը: Կայքը իրավունք է վերապահում ցանկացած
            պահին օգտատիրոջ հետ տվյալների ճշտում իրականացնել և պահանջել անձը
            հաստատող փաստաթուղթ (կազմակերպություններից՝ համապատասխան որևէ
            փաստաթուղթ): Պահանջվող տեղեկությունների չտրամադրելը հավասարազոր է ոչ
            պատշաճ տեղեկություններ տրամադրելուն: Այն դեպքում, երբ օգտատիրոջ
            կոցմից տրամադրված փաստաթղթերը չեն համապատասխանում գրանցվելիս
            տրամադրված տվյալների հետ, Կայքը իրավունք ունի օգտատիրոջը մերժելու և
            նրան Կայք մուտք գործելու հնարավորությունը արգելափակելու՝ առանց
            նախազղգուշացման: Կայքի պատասխանատուների իրավունքների շրջանակների մեջ
            է մտնում կատարել տեղադրված նյութի տեղափոխություն կայքէջի մեկ բաժնից
            մյուսը՝ հաշվի առնելով նյութի պարունակության առանձնահատկությունն ու
            բովանդակությունը։ Կայքի ներկայացուցիչն ունի իրավասություն, առանց
            բացատրությունների, հեռացնել տեղադրված նյութը` օգտատերերի կողմից
            բողոքներ ստանալու դեպքում: Կայքի ղեկավարությունը պատասխանատվություն
            չի կրում օգտատերի վնասների, կորուստների, ծախսերի համար, որոնք կարող
            են առաջանալ կայքի օգտագործման ընթացքում:
          </p>
        </div>
        <div className="prohibited">
          <h2 id="two">Կայքում արգելվում է</h2>
          <ol>
            <li>
              Իրականացնել օրենքով անօրինական սահմանված ծառայությունների և
              ապրանքների առաջարկ:
            </li>
            <li>
              Առաջարկել աշխատանք կամ տարածել ինֆորմացիա կապված ֆինանսական
              բուրգերի հետ:
            </li>
            <li>Իրականացնել բռնության կամ ապօրինի գործողությունների կոչ:</li>
            <li>
              Ներկայացնել էրոտիկ ծառայություններ և ապրանքատեսակներ, այդ թվում
              կայքում պոռնոգրաֆիկ բովանդակությամբ լուսանկարների և տեսանյութերի
              հրապարակում՝ բացառությամբ մասնագիտական լուսանկարների և
              տեսանյութերի, որոնք կրում են տվյալ մասնագիտությանը բնորոշ
              ուղղվածություն կամ ոճ:
            </li>
            <li>
              Առաջարկել աշխատանք, ծառայություններ և այլ կասկածելի բնույթ ունեցող
              տեղեկատվություն, որոնց բովանդակությունը հակասում է էթիկայի
              կանոններին:
            </li>
            <li>
              Հայտարարության մեջ օգտագործել html կոդեր և ինչ-որ անհասկանալի
              սիմվոլներ, որոնք ընթերցողին կգցեն մոլորության մեջ:
            </li>
            <li>
              Օգտագործել ինքնաշխատ ծրագրային ապահովում Կայք մուտք գործելու
              համար:
            </li>
            <li>
              Օգտագործել անհարգալից բառապաշար, ինչպես նաև վիրավորական
              արտահայություններ` այդ թվում ռասիստական կամ կրոնական
              ուղղվածությամբ:
            </li>
            <li>Օգտագործել այլ օգտատերերի տվյալներն ու հաշիվները:</li>
            <li>
              Օգտագործել անուններ, որոնք նման են այլ օգտատերերի անուններին կամ
              շփոթեցնում են, կամ գրանցվել որպես ֆեյք օգտատեր և ֆեյք
              հաղորդագրություններ գրել:
            </li>
            <li>
              Քննադատել ծրագրի շահագործումն ապահովող ծառայություններին, բացի
              ուղիղ էլեկտրոնային նամակագրությունից: Օգտատերը իրավունք ունի Կայքի
              աշխատանքի հետ կապված իր դժգոհությունները հղել հետադարձ կապի
              միջոցով: Բողոքները կդիտարկվեն դիմումը ստանալուց հետո՝ 2
              աշխատանքային օրվա ընթացքում:
            </li>
          </ol>
        </div>

        <div className="restriction">
          <h2 id="thre">Պատասխանատվության սահմանափակումը</h2>

          <p>
            Օգտվելով Կայքի ծառայություններից` օգտատերը հաստատում է իր
            համաձայնությունը առ այն, որ նա չափահաս է, անգործունակ ճանաչված չէ,
            օգտվում է կայքից և դրա ծառայություններից ըստ իր կամքի և
            պատասխանատվության, գրանցվում է ու վերցնում իր վրա բոլոր այն ռիսկերը,
            որոնք ծագում են տեղադրված հայտարարությունների օգտագործումից: Իսկ
            կայքը, այդ թվում կայքի ղեկավարությունը, աշխատողներն ու գործընկերները
            ոչ մի պատասխանատվություն չեն՛ կրում կայքում տեղադրված
            հայտարարությունների բովանդակության համար, ցանկացած կորուստի և վնասի
            համար, որոնք կառաջանան կայքում տեղադրված հայտարարություններից կամ
            ծառայություններից օգտվելու հետևանքով: Կայքը չի հանդիսանում կողմերի
            միջև գործարքների կազմակերպիչ կամ գործարքի մի կողմ: Կայքը հանդիսանում
            է ծառայությունների մատուցման հարթակ (պլատֆորմ), որը հնարավորություն
            է ընձեռում օգտատերերին վաճառել գնել և/կամ հանձնել վարձակալությամբ
            և/կամ վարձակալել և/կամ փոխանակել օրենքով թույլատրելի ապրանքներ և
            ծառայություններ 7/24 ռեժիմով: Որակը, անվտանգությունը,
            օրինականությունն ու ապրանքի կամ ծառայության անհամապատասխանությունը
            նկարագրությանը գտնվում են կայքի վերահսկողությունից դուրս: Ոչ մի
            պարագայում մենք չե՛նք ստանձնում պատասխանատվություն օգատիրոջ կողմից
            կայքում հրապարակված ապօրինի, վիրավորական, վարքաբեկող կամ ոչ պատշաճ
            տեղեկությունների կամ նյութերի համար, որոնք խախտում են մարդու
            իրավունքները, խթանում են քրեական ենթամշակույթն ու հանրային
            անկարգությունները: Ոչ մի պարագայում մենք չե՛նք ստանձնում
            պատասխանատվություն հասցված նյութական վնասի համար, ինչպես նաև կայքի
            անսարքության պատճառով տվյալների կորուստի համար: Կայքում տեղադրված
            տեղեկությունը թարմացման ենթակա է և ցանկացած պահին կարող է դառնալ
            հին: Կայքը կարող է պարունակել տեխնիկական անճշտություններ և
            տառասխալներ: Մենք պատասխանատու չենք պահպանված տեղեկությունների
            թարմացման ինչպես նաև թարմացման անհաջող լինելու համար: Կայքը չի՛
            երաշխավորում անսարքությունների կամ սխալների բացակայությունը կայքի
            աշխատանքի ընթացքում կամ աշխատանքների որևէ փուլում, ինչպես նաև այն,
            որ բոլոր անսարքությունները անմիջապես կվերացվեն: Մենք չե՛նք կարող
            երաշխավորել վիրուսների կամ այլ դեստրուկտիվ տարրերի բացակայությունը,
            որոնք ներբեռնվում են կայքից և առաքվում էլեկտրոնային փոստի միջոցով:
            Դուք լիովին պատասխանատու եք Ձեր կողմից վերբեռնվող տվյալների անսխալ,
            անվիրուս լինելու կամ չլինելու համար:
          </p>
        </div>

        <div className="forme">
          <h2 id="four">Մեր մասին</h2>

          <p className="textforme">
            Իր հնարավորություններով և ձևով կայքը առաջինն է Հայաստանում։
            Kadr.am-ը հարթակ է, որտեղ կարող եք գտնել Ձեզ անհրաժեշտ միանգամից մի
            քանի ծառայություններ մատուցող անհատների կամ կազմակերպությունների,
            մյուս կողմից կարող եք գրանցվել որպես ծառայություն մատուցող անհատ կամ
            կազմակերպություն և ընդունել պատվերներ մեր կայքի միջոցով: Մեր կայքում
            կարող են գրանցվել հետևյալ ծառայություններ մատուցող անհատները և
            կազմակերպությունները, ինչպես նաև նմանատիպ ծառայություններ
            մատուցողները՝
          </p>
          <ul>
            <li>Նկարահանող</li>
            <li>Հանդիսավար</li>
            <li>DJ</li>
            <li>Երգիչ-երգչուհի</li>
            <li>Պարային խումբ</li>
            <li>Երաժշտական խումբ</li>
            <li>Դիզայներ</li>
            <li>Բլոգեր</li>
            <li>Մոդել</li>
          </ul>

          <p>
            Կայքի շնորհիվ որևէ ծառայություն կամ ապրանք փնտրող հաճախորդները կարող
            են տեսնել յուրաքանչյուր անձնական էջում, պորտֆոլիոյի մեջ ներկայացված
            աշխատանքները,գնահատել դրանց որակը և ընտրել իրենց ամենահամապատասխան
            առաջարկը։ Kadr.am-ում կարող եք նաև վաճառել, վարձակալել և գնել
            ապրանքներ։ Kadr.am-ը հնարավորություն է տալիս կիսվել սեփական փորձով
            փորձի փոխանակում բաժնում, ուղղել հետաքրքրող հարցերը և իհարկե գտնել
            նոր ընկերներ ու համագործակցության նոր ուղիներ։ Այո, մենք նորաբաց
            կայք են, բայց մեծ պոտենցիալով և նպատակներով: Մենք սլանում ենք մեր
            նպատակի ետևից՝ համոզված, որ մի օր կդառնանք շուկայում առաջատար
            ընկերություն: Կայքը գտնվում է թարմացման փուլում, սպասե՛ք նոր
            անակնկալ հնարավորությունների։ Վստահ ենք, որ կայքը օգտակար կլինի Ձեզ
            համար:
          </p>
        </div>

        <div className="term">
          <h2 id="five">Համաձայնագրի ժամկետը</h2>

          <p>
            Կանոնները ուժի մեջ են մտնում օգտատիրոջ` կայքում գրանցվելու պահից և
            գործում են անժամկետ: Օգտատերը իրավունք ունի միակողմանի դադարեցնել
            կայքում գրանցումը` առանց կայքի ղեկավարությանը տեղեկացնելու
            պատճառների մասին՝ բացառությամբ ֆինանսական պարտավորություններ
            առկայության դեպքերի: Եթե օգտատերը համաձայն չէ կայքում առկա կանոնների
            հետ, նա կարող է չգրանցվել կայքում իսկ արդեն իսկ գրանցված լինելու
            պարագայում պարտավո՛ր է դադարեցնել կայքից օգտվելը: Կայքի օգտագործումը
            չդադարեցնելու փաստը հանդիսանում է օգտատիրոջ կողմից համաձայնության
            փաստ: Կայքի ղեկավար անձնակազմը իրավունք ունի ցանկացած ժամանակ
            փոփոխել վերոնշյալ կանոնները՝ առանց օգտատերերին նախազգուշացնելու:
          </p>
          <p>Շնորհակալություն Սիրով` Kadr.am :</p>
        </div>
        <div className="pdf">Ներբեռնել PDF ֆալը՝ <img src={require("../../img/icons/pdf.png")} alt="" /></div>

      </div>
    </div>
  );
};
