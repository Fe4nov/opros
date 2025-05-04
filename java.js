class questions {
    constructor(quest, correct_a, w_a1,w_a2,w_a3) {
        this.quest = quest
        this.correct_a = correct_a
        this.w_a1 = w_a1
        this.w_a2 = w_a2
        this.w_a3 = w_a3
    }
}
let cards = {
    '1. В каком году Гагарин полетел в космос?': 
    ['1961','1960','1962','1964'],
    '2. Кто первый вышел в открытый космос?': 
    ['Леонов','Королёв','Гагарин','Армстронг'],
    '3. Первая в мире женщина-космонавт?': 
    ['Терешкова','Савицкая','Кондакова','Серова'],
    '4. Первый человек полетевший в космос?': 
    ['Гагарин','Армстронг','Королёв','Леонов'],
    '5. Как назывался космический корабль на котором Гагарин полетел в космос?': 
    ['Восток-1','Спутник-1','Восток-4','Спутник-3'],
    '6. Сколько длился первый полёт человека в космос?': 
    ['1ч 48мин','2ч','2ч 17мин','4ч 41мин'],
    '7. Кто сконструировал первый космический корабль?': 
    ['Королёв','Армстронг','Гагарин','Леонов'],
    '8. Когда первый человек вышел в открытый космос?': 
    ['18 марта 1965года','16 июня 1963 года','9 марта 1934 года','30 мая 1934 года'],
    '9. Первый человек ступивший на луну?': 
    ['Армстронг','Королёв','Леонов','Гагарин'],
    '10. Когда проходит день космонавтики?': 
    ['12 апреля','17 апреля','12 мая','17 марта'],
}
quest_cards = []
let opros = document.querySelector('.opros')
for (let card in cards) {
    quest_cards.push (`
    <div>
    <p class="question">${card}<p>
      <div class="variants">
        <input type="radio" id="var1" name="${card}" value="var1"  />
        <label for="var1">${cards[card][0]}</label>
        <input type="radio" id="var2" name="${card}" value="var2"  />
        <label for="var2">${cards[card][1]}</label>
      </div>
      <div class="variants">
        <input type="radio" id="var3" name="${card}" value="var3"  />
        <label for="var3">${cards[card][2]}</label>
        <input type="radio" id="var4" name="${card}" value="var4"  />
        <label for="var4">${cards[card][3]}</label>
      </div>
  </div>
    `)
}
console.log(quest_cards)
for (let vopros in quest_cards) {
  opros.innerHTML += quest_cards[vopros]
  console.log(vopros)
}
let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click',function() {
  let opros2 = document.querySelector('.opros')
  console.log(opros2)
})
