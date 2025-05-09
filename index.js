let quest1 = [
    {
      savol: "TCP/IP protokollari stekining birnchi sathi sathi qanday nomlanadi?",
      javob: "tarmoq interfeyslari sathi"
    },
    {
      savol: "TCP/IP protokollari stekining ikkinchi sathi sathi qanday nomlanadi?",
      javob: "tarmoq sathi"
    },
    {
      savol: "TCP/IP protokollari stekining uchinchi sathi sathi qanday nomlanadi?",
      javob: "transport sathi"
    },
    {
      savol: "TCP/IP protokollari stekining to’rtinchi sathi sathi qanday nomlanadi?",
      javob: "amaliy sath"
    },
    {
      savol: "IPv4 manzillari nechta sinfdan iborat?",
      javob: "5 ta"
    },
    {
      savol: "A sinf IP manzillari bloki to’g’ri ko’rsatilgan javobni tanlang?",
      javob: "Dastlabki bit 0 ga teng: 1.0.0.0 dan 127.255.255.255 gacha"
    },
    {
      savol: "B sinf IP manzillari bloki to’g’ri ko’rsatilgan javobni tanlang?",
      javob: "Dastlabki bit 10 ga teng: 128.0.0.0 dan 191.255.255.255 gacha"
    },
    {
      savol: "C sinf IP manzillari bloki to’g’ri ko’rsatilgan javobni tanlang?",
      javob: "Dastlabki bit 110 ga teng: 192.0.0.0 dan 223.255.255.255 gacha"
    },
    {
      savol: "A sinfga tegishli tarmoqlarda manzillar sonini qancha?",
      javob: "2^24"
    },
    {
      savol: "B sinfga tegishli tarmoqlarda manzillar sonini qancha?",
      javob: "2^16"
    },
    {
      savol: "C sinfga tegishli tarmoqlarda manzillar sonini qancha?",
      javob: "2^8"
    },
    {
      savol: "Nuqtalar o’rniga mos keluvchi so’zni toping. Oxirgi tugunlarni tranizt tugunlar tarmog’i orqali ulash … deb ataladi?",
      javob: "kommutatsiya"
    },
    {
      savol: "Kompyuter tizimlarida abonentlarni kommutatsiyalashning nechta xili qo’llaniladi?",
      javob: "2"
    },
    {
      savol: "Kompyuter tizimlarida kompyuterlarni adreslash qanday amalga oshirilishi mumkin?",
      javob: "uchta har-xil adreslash chizmalari asosida"
    },
    {
      savol: "Quyida keltirilgan kompyuter tarmoqlarining qaysi biri avval paydo bo’lgan?",
      javob: "global kompyuter tarmoqlari"
    },
    {
      savol: "Kompyuter tizimlarida ikkilik sonlarni kodlashning qaysi xillari qo’llaniladi?",
      javob: "potentsialli va impulsli"
    },
    {
      savol: "Kompyuterning ketma-ket porti orqali uzatilayotgan axborotni sinxronlash qanday amalga oshiriladi?",
      javob: "«Start» va «Stop» signallari yordamida"
    },
    {
      savol: "Operatsion tizimning qaysi funktsiyasi redirektor funktsiyalariga tegishli bo’ladi?",
      javob: "so’rovni anglash va uzoqdagi kompyuterga yo’naltirish"
    },
    {
      savol: "To’rtta bir-biri bilan bog’langan bog’lamlar strukturasi (kvadrat shaklida) qaysi topologiya turiga mansub?",
      javob: "Xalqa"
    },
    {
      savol: "Ketma-ket bir-biri bilan bog’langan 3 ta bog’lamlar (oxiri boshi bilan bog’lanmagan) strukturasi qaysi topologiya turiga tegishli.?",
      javob: "Umumiy shina"
    },
    {
      savol: "Kompyuter tizimlarida ma’lumotlarni uzatish ishonchliligini oshirish uchun nima qilinadi?",
      javob: "kontrol summani xisoblash bilan"
    },
    {
      savol: "Qaysi topologiya birgalikda foydalanilmaydigan muhitni qo’llamasligi mumkin?",
      javob: "to’liq bog’lanishli"
    },
    {
      savol: "Kompyuterning tashqi interfeysi deganda nima tushuniladi?",
      javob: "kompyuter bilan tashqi qurilmani bog’lovchi simlar va ular orqali axborot almashinish qoidalari to’plamlari"
    },
    {
      savol: "Uchta o’zaro bog’langan bog’lamlardan iborat tuzilma (uchburchak shaklida) topologiyaning qaysi turiga tegishli?",
      javob: "To’liq bog’lanishli"
    },
    {
      savol: "Qanday topologiyaning xususiy xoli umumiy shina xisoblanadi?",
      javob: "Yulduz"
    },
    {
      savol: "Topologiyalardan qaysi biri ishonchliligi yuqori hisoblanadi?",
      javob: "Yulduz"
    },
    {
      savol: "MAC sathi qanday vazifani bajaradi?",
      javob: "uzatish muhitiga murojaat qilishni boshqarish"
    },
    {
      savol: "LLC sathi qanday vazifani bajaradi?",
      javob: "stantsiyalar o’rtasida axborotni har-xil ishonchlilik darajasi bilan uzatish"
    },
    {
      savol: "Stantsiyalar o’rtasida axborotni har-xil ishonchlilik darajasi bilan uzatish vazifasini qaysi sath bajaradi?",
      javob: "LLC sathi"
    },
    {
      savol: "Uzatish muhitiga murojaat qilishni boshqarish vazifasini qaysi sath bajaradi?",
      javob: "MAC sathi"
    },
    {
      savol: "l0Base-2 segmentining uzunligi ko’pi bilan qancha bo’lishi mumkin?",
      javob: "185 metr"
    },
    {
      savol: "O’ralma juftlik kabeli simlarini, uning konnektorlariga ulashning necha xil variantlari mavjud?",
      javob: "2"
    },
    {
      savol: "Ethernet tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi?",
      javob: "CSMA/CD"
    },
    {
      savol: "Ethernet da kommutatsiyalashning qaysi xilidan foydalaniladi?",
      javob: "paketlarni deytagrammali kommutatsiyalash"
    },
    {
      savol: "Optik tolali Ethernet tarmog’ining maksimal uzunligi qanday?",
      javob: "2740 m"
    },
    {
      savol: "100Base-TX spetsifikatsiyasi qaysi texnologiyaga tegishli?",
      javob: "Fast Ethernet"
    },
    {
      savol: "Ethernet texnologiyasi tarmoqlarida ma’lumotlar kadri qanday preambulaga ega?",
      javob: "00001111"
    },
    {
      savol: "Signalni to’liq aylanib chiqish vaqti –PDV ning maksimal qiymati qanday?",
      javob: "576 bitli interval"
    },
    {
      savol: "PDV deganda nima tushuniladi?",
      javob: "Signalni to’liq aylanib chiqish vaqti"
    },
    {
      savol: "Fast Ethernet texnologiyasi spetsifikatsiyalari qaysi komitet tarkibida ishlab chiqilgan?",
      javob: "802.3"
    },
    {
      savol: "Ethernet texnologiyasida koaksial kabelining ma’lumotlarni uzatish tezligi qanday?",
      javob: "10 Mbit/s"
    },
    {
      savol: "Fast Ethernet texnologiyasida o’ralma juftlik kabelining ma’lumotlarni uzatish tezligi qanday?",
      javob: "100 Mbit/s"
    },
    {
      savol: "Lokal tarmoqlarda keng tarqalgan topologiya turi qaysi?",
      javob: "Yulduz"
    },
    {
      savol: "100Base-TX spetsifikatsiya qaysi texnologiyaga tegishli?",
      javob: "Fast Ethernet"
    },
    {
      savol: "1000Base-SX spetsifikatsiya qaysi texnologiyaga tegishli?",
      javob: "Gigabit Ethernet"
    },
    {
      savol: "10Base-T standartida o’ralma juftlik kabeli simlarining nechta jufti ishlatiladi?",
      javob: "2"
    },
    {
      savol: "100Base-TX spetsifikatsiyasida o’ralma juftlik kabeli simlarining nechta jufti ishlatiladi?",
      javob: "2"
    },
    {
      savol: "Kompyuterni kontsentrator yoki kommutator bilan ulash uchun UTP kabelining qaysi varianti ishlatiladi?",
      javob: "To’g’ridan-to’g’ri ulangan varianti"
    },
    {
      savol: "Kompyuterni kompyuter bilan ulash uchun UTP kabelining qaysi varianti ishlatiladi?",
      javob: "Krossover varianti"
    },
    {
      savol: "Tarmoq adapterining kadrlarni kompyuterdan uzatib beruvchi ulanish nuqtasi (kontakti) qanday belgilanadi?",
      javob: "Tx"
    },
    {
      savol: "Tarmoq adapterining kadrlarni kompyuterga qabul qilib oluvchi ulanish nuqtasi (kontakti) qanday belgilanadi?",
      javob: "Rx"
    },
    {
      savol: "Ethernet texnologiyasi qaysi mantiqiy topologiya asosida qurilgan?",
      javob: "umumiy shina"
    },
    {
      savol: "Fast Ethernet texnologiyasida qaysi turdagi kabel tizimlaridan foydalanilgan?",
      javob: "ko’pmodali optik tolali, 5 va undan yuqori kategoriyali o’ralma juftlik"
    },
    {
      savol: "Kadrlar ketma-ketligini kontsentratorlar orqali o’tishi natijasida, kadrlar orasidagi masofaning qisqarishi – PVV,ko’pi bilan qancha bo’lishi mumkin?",
      javob: "49 bitli interval"
    },
    {
      savol: "MАC sath osti sathi OSI modelining qaysi sathiga tegishli?",
      javob: "kanal sathiga"
    },
    {
      savol: "Ingichka koaksial kabel asosida qurilgan tarmoqda kompyuterlar orasidagi eng kichik masofa qanday bo’lishi kerak?",
      javob: "1 m"
    },
    {
      savol: "100Base-TX spetsifikatsiyasi qanday fizik topologiyaga ega?",
      javob: "ierarxik yulduz"
    },
    {
      savol: "100Base-TX spetsifikatsiyasi qanday mantiqiy topologiyaga ega?",
      javob: "umumiy shina"
    },
    {
      savol: "I va II sinf Fast Ethernet texnologiyasi takrorlagichlari nimasi bilan farq qiladi?",
      javob: "Fizik sathiga tegishli mavjud portlari bilan"
    },
    {
      savol: "Fast Ethernet texnologiyasida RJ-45 ulagichning qaysi kontaktlari ishlatiladi?",
      javob: "1,2,3,6"
    },
    {
      savol: "Ethernet texnologiyasi nechta standartga ega?",
      javob: "4"
    },
    {
      savol: "Fast Ethernet texnologiyasi nechta spetsifikatsiyaga ega?",
      javob: "3"
    },
    {
      savol: "100Base-T4 spetsifikatsiyasida o’ralma juftlik kabeli simlarining nechta jufti ishlatiladi?",
      javob: "4"
    },
    {
      savol: "Umumiy shina topologiyali lokal tarmoqlarda kontsentratorlar qanday?",
      javob: "Kompyuter tomonidan uzatilayotgan ma’lumotni barcha kompyuterga yo’naltiradi"
    },
    {
      savol: "Qaysi kontsentrator kompyuter tomonidan uzatilayotgan ma’lumotni barcha kompyuterga yo’naltiradi?",
      javob: "Ethernet kontsentratori"
    },
    {
      savol: "Qaysi kontsentrator kompyuter tomonidan uzatilgan ma’lumotni xalqa orqali keyingi kompyuterga yo’naltiradi?",
      javob: "Token Ring kontsentratori"
    },
    {
      savol: "To’g’ridan-to’g’ri ulangan UTP kabelida Tx uzatuvchi sifatida qaysi ranglardagi simlar ishlatiladi?",
      javob: "Yashil, oq-yashil"
    },
    {
      savol: "To’g’ridan-to’g’ri ulangan UTP kabelida Rx qabul qiluvchi sifatida qaysi ranglardagi simlar ishlatiladi?",
      javob: "Qizg’ish-sariq, oq - qizig’ish-sariq"
    },
    {
      savol: "Kesishgan holatda ulangan (krossover) UTP kabelida Tx uzatuvchi sifatida qaysi ranglardagi simlar ishlatiladi?",
      javob: "Qizg’ish-sariq, oq - qizig’ish-sariq"
    },
    {
      savol: "Krossover ulangan UTP kabelida Rx qabul qiluvchi sifatida qaysi ranglardagi simlar ishlatiladi?",
      javob: "Yashil, oq-yashil"
    },
    {
      savol: "MSAU qanday vazifani bajaradi?",
      javob: "faol bo’lmagan kontsentrator vazifasini"
    },
    {
      savol: "FDDI texnologiyasida buzilmasdan ishlash qobiliyatini oshirish qanday ta’minlangan?",
      javob: "ikkita optik tolali xalqani hosil qilish asosida"
    },
    {
      savol: "FDDI texnologiyasining fizik sathi nachta sath osti sathlariga bo’linadi?",
      javob: "2"
    },
    {
      savol: "FDDI texnologiyasida, xalqalarga ko’pi bilan nechta kompyuter ulanishi mumkin?",
      javob: "500"
    },
    {
      savol: "FDDI tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi?",
      javob: "marker asosida murojaat qilishning tezkor usuli"
    },
    {
      savol: "Token Ring tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi?",
      javob: "marker asosida murojaat qilish usuli"
    },
    {
      savol: "Keltirilgan texnologiyalarning qaysi birlari lokal tarmoq texnologiyalariga mansub?",
      javob: "FDDI, Token Ring"
    },
    {
      savol: "FDDI texnologiyasida stantsiyalar orasidagi eng uzoq masofa kanday bo’lishi mumkin?",
      javob: "2000m."
    },
    {
      savol: "Xalqa topologiyali lokal tarmoqlarda kontsentratorlar qanday funktsiyani bajaradi?",
      javob: "Kompyuter tomonidan uzatilgan ma’lumotni xalqa orqali keyingi kompyuterga yo’naltiradi"
    },
    {
      savol: "FDDI tarmog’idama’lumotlarni uzatishda qanday murojat kilish usuli qo’llaniladi?",
      javob: "Tezlashtirilgan markerli murojaat qilish usuli"
    },
    {
      savol: "Token Ring tarmog’ida ma’lumotlarni uzatishda qanday murojat qilish usuli qo’llaniladi?",
      javob: "Markerli murojaat qilish usuli"
    },
    {
      savol: "FDDI tarmog’ining qaysi elementlari buzilmay ishlash qobiliyatini ta’minlaydi?",
      javob: "Ma’lumotlarni uzatish uchun ikkita xalqaning mavjudligi"
    },
    {
      savol: "Token Ring texnologiyasi kadrining maksimal uzunligi nimaga bog’liq?",
      javob: "xalqaning ishlash tezligiga"
    },
    {
      savol: "Simsiz tarmoqlar standartlari qaysi komitet tarkibida ishlab chiqilmoqda?",
      javob: "802.11"
    },
    {
      savol: "Xozirgi paytda ko’p ishlatiladigan, 802.11 standartiga tegishli spetsifikatsiyani ko’rsating?",
      javob: "a, b, g, n, ac"
    },
    {
      savol: "802.11 spetsifikatsiyasi simsiz lokal tarmog’i diametrining chegaralari qanday?",
      javob: "100 - 300 m"
    },
    {
      savol: "Keltirilgan qisqartmalarning qaysi biri bazaviy yoki asosiy xizmatlar to’plami ko’rsatiladigan tarmoqni anglatadi?",
      javob: "BSS"
    },
    {
      savol: "Keltirilgan qisqartmalarning qaysi biri kengaytirilgan (qo’shimcha) xizmatlar to’plamini ko’rsatadigan tarmoqni anglatadi?",
      javob: "ESS"
    },
    {
      savol: "BSS deganda nima tushuniladi?",
      javob: "Asosiy xizmatlar to’plami ko’rsatiladigan simsiz tarmoq"
    },
    {
      savol: "ESS deganda nima tushuniladi?",
      javob: "Qo’shimcha xizmatlar to’plamini ko’rsatadigan simsiz tarmoq"
    },
    {
      savol: "802.11g spetsifikatsiyasida ma’lumotlarni uzatishning maksimal tezligi qanday?",
      javob: "54 Mbit/s"
    },
    {
      savol: "802.11b spetsifikatsiyasida ma’lumotlarni uzatishning maksimal tezligi qanday?",
      javob: "11 Mbit/s"
    },
    {
      savol: "802.11 spetsifikatsiyasi qanday ma’lumotlarni uzatishning maksimal tezligi qanday?",
      javob: "2 Mbit/s"
    },
    {
      savol: "802.11b spetsifikatsiyasi ma’lumotlarni uzatishning maksimal tezligi qanday?",
      javob: "11 Mbit/s"
    },
    {
      savol: "802.11n spetsifikatsiyasi ma’lumotlarni uzatishning maksimal tezligi qanday?",
      javob: "600 Mbit/s"
    },
    {
      savol: "802.11ac spetsifikatsiyasi ma’lumotlarni uzatishning maksimal tezligi qanday?",
      javob: "6.7 Gbit/s"
    },
    {
      savol: "802.11 standartiga tegishli topologiyalarning qaysi turlari mavjud?",
      javob: "BSS, ESS"
    },
    {
      savol: "Tarmoqni fizik strukturalashda qaysi qurilma ishlatiladi?",
      javob: "takrorlovchi (kontsentrator)"
    },
    {
      savol: "Qaysi qurilma tarmoqning mantiqiy strukturasini o’zgartirishi mumkin?",
      javob: "ko’prik, marshrutizator, kommutator va shlyuz"
    },
    {
      savol: "Ethernet kontsentratori qanday vazifani bajaradi?",
      javob: "kompyuterdan kelayotgan axborotni qolgan barcha kompyuterga yo’naltirib beradi"
    },
    {
      savol: "Kompyuter tarmog’ining fizik strukturalash nima maqsadda amalga oshiriladi?",
      javob: "Tarmoq diametrini oshirish uchun"
    },
    {
      savol: "Kompyuter tarmog’ining mantiqiy strukturalash nima maqsadda amalga oshiriladi?",
      javob: "Trafikni lokallashtirish uchun"
    },
    {
      savol: "Kommutator ko’prikdan nimasi bilan farq qiladi?",
      javob: "Kadrlarni parallel qayta ishlashda"
    },
    {
      savol: "OSI modelida nechta sath mavjud?",
      javob: "7"
    },
    {
      savol: "OSI modelining to’rtinchi sathi qanday nomlanadi?",
      javob: "Transport sathi"
    },
    {
      savol: "OSI modelining beshinchi sathi qanday nomlanadi?",
      javob: "Seanslar sathi"
    },
    {
      savol: "OSI modelining birinchi sathi qanday nomlanadi?",
      javob: "Fizik sath"
    },
    {
      savol: "OSI modelining ikkinchi sathi qanday nomlanadi?",
      javob: "Kanal sathi"
    },
    {
      savol: "OSI modelining uchinchi sathi qanday nomlanadi?",
      javob: "Tarmoq sathi"
    },
    {
      savol: "OSI modelining oltinchi sathi qanday nomlanadi?",
      javob: "Taqdimlash sathi"
    },
    {
      savol: "OSI modelining ettinchi sathi qanday nomlanadi?",
      javob: "Аmaliy sath"
    },
    {
      savol: "OSI modelining qaysi sathlari tarmoqqa bog’liq sathlar hisoblanadi?",
      javob: "fizik, kanal va tarmoq sathlari"
    },
    {
      savol: "OSI modelining tarmoq sathi vazifalari keltirilgan qurilmalarning qaysi birida bajariladi?",
      javob: "Marshrutizator"
    },
    {
      savol: "OSI modelining kanal sathi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi?",
      javob: "Kadr"
    },
    {
      savol: "Elektr signallarini qabul qilish va uzatish vazifalarini OSI modelining qaysi sathi bajaradi?",
      javob: "Fizik sath"
    },
    {
      savol: "Ma’lumotlarni uzatishning optimal marshrutlarini aniqlash vazifalarini OSI modelining qaysi sathi bajaradi?",
      javob: "Tarmoq sathi"
    },
    {
      savol: "Mijozlar dasturlari bilan o’zaro muloqot vazifalarini OSI modelining qaysi sathi bajaradi?",
      javob: "Аmaliy sath"
    },
    {
      savol: "Keltirilgan protokollarning qaysilari tarmoq sathi protokollariga mansub?",
      javob: "IP, IPX"
    },
    {
      savol: "Keltirilgan protokollarning qaysilari transport sathi protokollariga mansub?",
      javob: "TCP,UDP"
    },
    {
      savol: "Keltirilgan protokollarning qaysilari amaliy sathi protokollariga mansub?",
      javob: "NFS, FTP"
    },
    {
      savol: "Keltirilgan vazifalardan qaysi biri umumiy kommutatsiyalash vazifasiga tegishli emas?",
      javob: "axborotni indekslash"
    },
    {
      savol: "OSI modelining fizik sathi qanday funktsiyalarni bajaradi?",
      javob: "Elektr signallarini uzatish va qabul qilish"
    },
    {
      savol: "OSI modelining kanal sathi qaysi funktsiyalarni bajaradi?",
      javob: "Аloqa kanalini va ma’lumotlarni uzatish muxitiga murojat qilishni boshqarish"
    },
    {
      savol: "OSI modelining tarmoq sathi qanday funktsiyalarni bajaradi?",
      javob: "Ma’lumotlarni uzatish marshrutlarini optimalini aniqlash"
    },
    {
      savol: "OSI modelining transport sathi qanday funktsiyalarni bajaradi?",
      javob: "Ma’lumotlarni qabul qilish va uzatish jarayonida, ma’lumotlarni to’liq va to’g’ri uzatilishini nazorat qilish"
    },
    {
      savol: "OSI modeliningseanslar sathi qanday funktsiyalarni bajaradi?",
      javob: "Bog’lanish seansini yaratish, kuzatish, oxirigacha ta’minlash"
    },
    {
      savol: "OSI modelining taqdimlash sathi qanday funktsiyalarni bajaradi?",
      javob: "Ma’lumotlarni kodlash va shifrlash"
    },
    {
      savol: "Аloqa kanaliga va uzatish muhitiga ulanishni boshqarish vazifalarini OSI modelining qaysi sathi bajaradi?",
      javob: "Kanal sathi"
    },
    {
      savol: "Ma’lumotlarni uzatish jarayonida ularni to’liq va to’g’ri uzatilishini nazorat qilish vazifalarini OSI modelining qaysi sathi bajaradi?",
      javob: "Transport sathi"
    },
    {
      savol: "Аloqa seansini hosil qilish, kuzatib turish va ohirigacha ta’minlab berish vazifalarini OSI modelining qaysi sathi bajaradi?",
      javob: "Seanslar sathi"
    },
    {
      savol: "Talab qilinadigan algoritmlar yordamida ma’lumotlarni kodlash va shifrlash vazifalarini OSI modelining qaysi sathi bajaradi?",
      javob: "Taqdimlash sathi"
    },
    {
      savol: "OSI modeliningamaliy sathi qanday funktsiyalarni bajaradi?",
      javob: "Klient dasturlari bilan o’zaro muloqotda bo’lish"
    },
    {
      savol: "Keltirilgan protokollarning qaysilari kanal sathi protokollariga mansub?",
      javob: "Ethernet, FDDI"
    },
    {
      savol: "Keltirilgan protokollarning qaysilari fizik sath protokollariga mansub?",
      javob: "10Base-T, 100Base-TX"
    },
    {
      savol: "Keltirilgan protokollarning qaysilari taqdimlash sathi protokollariga mansub?",
      javob: "SNMP, Telnet"
    },
    {
      savol: "Keltirilgan protokollarning qaysilari saenslar sathi protokollariga mansub?",
      javob: "RPC, WSP"
    },
    {
      savol: "Kompyuter bilan tashqi qurilma o’rtasida ma’lumotlarni uzatish paytida ularni to’gri uzatilganligi qanday tekshiriladi?",
      javob: "paritet biti asosida"
    },
    {
      savol: "Kompyuterdan tashqi qurilmaga ma’lumotlarni asinxron rejimda uzatayotganda bitta simvolga to’g’ri keladigan paketning uzunligi qanday bo’ladi?",
      javob: "11 bit"
    },
    {
      savol: "Keltirilgan qurilmalarning qaysi biri DCE bo’ladi?",
      javob: "modem"
    },
    {
      savol: "Keltirilgan qurilmalarning qaysi biri DTE bo’ladi?",
      javob: "kompyuter va marshrutizator"
    },
    {
      savol: "Keltirilgan tafsiflarning qaysilari, ham aloqa chiziqlariga, ham ma’lumotlarni uzatish usullariga tegishli tavsiflar hisoblanadi?",
      javob: "o’tkazish qobiliyati va ishonchliligi"
    },
    {
      savol: "UTP kabeli deganda qaysi kabel tushuniladi?",
      javob: "o’ralma juftlik kabeli"
    },
    {
      savol: "Modem qanday asosiy vazifani bajaradi?",
      javob: "Signallarni modulyatsiyalash - demodulyatsiyalash"
    },
    {
      savol: "Keltirilgan standartlarning qaysi biri axborotni 57600 bit/s tezlikda qabul qiladi va uzata oladi?",
      javob: "V.92"
    },
    {
      savol: "Аnalog signallarni diskret modulyatsiyalash nimaga asoslanadi?",
      javob: "Naykvist-Kotelnikovlarning akslanish nazariyasiga"
    },
    {
      savol: "Kodlarning qaysi biri kuchlanishning to’rtta sathidan foydalanadi?",
      javob: "2V1Q"
    },
    {
      savol: "Kompyuterdan modemga ma’lumotlarni uzatish uchun interfeysning qaysi ulanish nuqtasidan foydalaniladi?",
      javob: "TXD"
    },
    {
      savol: "Modemdan kompyuterga ma’lumotlarni qabul qilish uchun interfeysning qaysi ulanish nuqtasidan foydalaniladi?",
      javob: "RXD"
    },
    {
      savol: "DCE qaysi signal orqali aloqa o’rnatilganligi haqidagi xabarni beradi?",
      javob: "DSR"
    },
    {
      savol: "Kompyuter bilan tashqi qurilma o’rtasidagi interfeys ishi qanday amalga oshirilgan?",
      javob: "kontroller va drayver yordamida"
    },
    {
      savol: "Keltirilgan modulyatsiyalarning qaysi biri analog modulyatsiyaga mansub?",
      javob: "chastotali"
    },
    {
      savol: "Keltirilgan modulyatsiyalarning qaysi biri diskret modulyatsiyaga mansub?",
      javob: "amplituda-impulsli"
    },
    {
      savol: "Internet tarmog’ida kommutatsiyalashning qaysi xili ishlatiladi?",
      javob: "paketlarni kommutatsiyalash"
    },
    {
      savol: "IP-manzili qanday maydonlardan iborat?",
      javob: "Tarmoq manzilining maydoni, bog’lash manzilining maydoni"
    },
    {
      savol: "Kompyuter tarmog’ining aktiv qurilmalari tarkibiga qaysi qurilmalar kiradi?",
      javob: "Tarmoq adapteri,kontsentrator"
    },
    {
      savol: "Kompyuter tarmog’ining passiv qurilmalari tarkibiga qaysi qurilmalar kiradi?",
      javob: "Tarmoq kabeli, RJ-45 rozetkasi"
    },
    {
      savol: "Ovozni sifatli uzatish uchun tovushli tebranishlar amplitudasini kvantlashda qanday chastota ishlatiladi?",
      javob: "8000 Gts"
    },
    {
      savol: "Raqamli telefon tarmoqlarida 64 Kbit/s o’tkazuvchanlik qobiliyati nimaga asosan tanlab oligan?",
      javob: "Kotelnikov-Naykvist teoremasi asosida"
    },
    {
      savol: "MАC-adres qanday uzunlikka ega?",
      javob: "48 bit"
    },
    {
      savol: "IPv4 turidagi IP-adres qanday uzunlikka ega?",
      javob: "32 bit"
    },
    {
      savol: "192.190.21.254 adresi IP-adreslarning qaysi sinfiga tegishli?",
      javob: "C"
    },
    {
      savol: "B sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?",
      javob: "65536"
    },
    {
      savol: "А sinfidagi tarmoq tarkibida nechta bog’lam bo’lishi mumkin?",
      javob: "16777216"
    },
    {
      savol: "B sinfidagi tarmoq maskasi qanday qiymatga ega?",
      javob: "255.255.0.0"
    },
    {
      savol: "DTE qaysi signal yordamida o’zini ishlayotganligini va DCE aloqa kanaliga ulanishi mumkinligi haqidagi xabarni beradi?",
      javob: "DCD"
    },
    {
      savol: "Kabel standartlarining qaysi biri EIA/TIA-568A abbreviaturasiga ega?",
      javob: "Аmerika standarti"
    },
    {
      savol: "RS-232C/V.24 interfeysida ulagichning qaysi modifikatsiyasi ishlatilgan?",
      javob: "9 va 25 ta ulanish nuqtalariga ega bo’lgani"
    },
    {
      savol: "DTE va aloqa kanali o’rtasida uzatilayotgan signallarni o’zaro moslab uzatish qanday amalga oshiriladi?",
      javob: "modulyatsiyalash va kodlash bilan"
    },
    {
      savol: "Kompyuter tarmoqlarida ma’lumotlarni uzatishda, kodlash deganda nima tushuniladi?",
      javob: "ma’lumotlarni aloqa kanallaridagi ta’sirlar natijasida paydo bo’ladigan xatoliklarni aniqlash va to’g’irlash mumkin bo’ladigan ko’rinishga o’zgartirish"
    },
    {
      savol: "Modulyatsiyalashning diskret xili nimaga asoslangan?",
      javob: "signallarni ham amplitudasi, ham vaqt bo’yicha diskretlash"
    },
    {
      savol: "Tarmoq orqali uzluksiz signalni raqamli ko’rinishda uzatilayotganda vaqt oralig’ining qanday qiymatini e’tibor bilan saqlab turish kerak?",
      javob: "125 mks"
    },
    {
      savol: "C sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?",
      javob: "256"
    },
    {
      savol: "А sinfidagi tarmoq maskasi qanday qiymatga ega?",
      javob: "255.0.0.0"
    },
    {
      savol: "C sinfidagi tarmoq maskasi qanday qiymatga ega?",
      javob: "255.255.255.0"
    },
    {
      savol: "512 ta bog’lamli tarmoqosti tarmoq maskasi qanday qiymatga ega?",
      javob: "255.255.254.0"
    },
    {
      savol: "Internet tarmog’i, kompyuter tarmoqlarining qaysi sinfiga mansub?",
      javob: "global tarmoq"
    },
    {
      savol: "Keltirilgan texnologiyalarning qaysi birlari global tarmoq texnologiyalariga mansub?",
      javob: "ATM, TCP/IP"
    },
    {
      savol: "MAN tarmoqlari nima uchun mo’ljallangan?",
      javob: "Yirik shaxar axolisiga xizmat ko’rsatish uchun"
    },
    {
      savol: "Qaysi global tarmoqlarda paketlarni marshrutlashning har-xilidan foydalanilgan?",
      javob: "Frame relay va АTM"
    },
    {
      savol: "Xizmatlarni boshqarish markazlarida qanday axborotlar saqlanadi?",
      javob: "Foydalanuvchilar uchun mo’ljallangan axborot, xizmat ko’rsatish uchun mo’ljallangan axborot"
    },
    {
      savol: "Аloqa kanallari orqali ko’p sonli foydalanuvchilarning qurilmalaridan kelayotgan axborot oqimlarini yig’ib berish vazifasini qanday tarmoq bajaradi?",
      javob: "Ulanish tarmog’i"
    },
    {
      savol: "Ulanish tarmoqlarini bog’lashni va yuqori tezlikdagi kanallar orqali trafik tranzitini ta’minlashni, qaysi tarmoq amalga oshiradi?",
      javob: "Magistral tarmoq"
    },
    {
      savol: "IPv6 turidagi IP-adres qanday uzunlikka ega?",
      javob: "128 bit"
    },
    {
      savol: "Masofa-vektorli marshrutlash protokollari qaysi javobda to'g'ri keltirilgan?",
      javob: "RIP, IGRP, EIGRP"
    },
    {
      savol: "Marshrutlashning tashqi shlyuz protokollari qaysi javobda to'g'ri keltirilgan?",
      javob: "Exterior Gateway Protocol (EGP), Border Gateway Protocol (BGPv4)"
    },
    {
      savol: "Marshrutlashning ichki shlyuz protokollari qaysi javobda to'g'ri keltirilgan?",
      javob: "Interior Gateway Protocol  (IGP)"
    }
  ];
  const popup = document.createElement("div");
  popup.style.position = "absolute";
  popup.style.backgroundColor = "#ffffffff";
  popup.style.color = "inherit";
  popup.style.padding = "5px 10px";
  popup.style.borderRadius = "5px";
  popup.style.fontSize = "14px";
  popup.style.zIndex = "1000";
  popup.style.display = "none";
  document.body.appendChild(popup);
  let isRunning = false;
  document.addEventListener("keydown", function (e) {
    if (e.key === "a" || e.key === "A") {
      isRunning = true;
    }
    if (e.key === "s" || e.key === "S") {
      isRunning = false;
      popup.style.display = "none"; 
    }
  });
  
  document.addEventListener("mouseup", function (e) {
    if (!isRunning) return; 
  
    setTimeout(() => {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText.length > 0) {
        const found = quest1.find((item) =>
          item.savol.toLowerCase().includes(selectedText.toLowerCase())
        );
        if (found) {
          popup.textContent = found.javob;
          popup.style.left = e.pageX + "px";
          popup.style.top = e.pageY - 30 + "px";
          popup.style.display = "block";
        } else {
          popup.style.display = "none";
        }
      } else {
        popup.style.display = "none";
      }
    }, 10);
  });
  document.addEventListener("selectionchange", function () {
    if (!isRunning) return; 
    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length === 0) {
      popup.style.display = "none";
    }
  });
