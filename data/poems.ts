import { Poem, Verse } from '../types';

const rawPoems = [
  {
    title: 'TANIYATUN RABBI',
    content: [
      ["Lii saadatun min hizihim # Aqdaamuhum faoqal jibaa", "Inlam aqun min'um falii # Bihubihim hizzu wajaa"],
      ["Fabijaahihim wabihizihim # Toyyib lanaa ayshal ayaa", "Waqtim lanaa bil'hayril yaa # Man laa lanaa rabbu siwaa"],
      ["Yaa rabbanaa solli alaa # Khayril anaami man alaa", "Alaa samaawaatil ula # Bi izni rabbihil alii"],
      ["Tahni'atu rrabeehi # Bimidhati shafeehi", "Bil mantiqil baadihi # Abgii bihaa mu'amalii"],
      ["Ahlan bisha'ril maolidi # Sha'ril ulaa was su'dadi", "Sha'rin Nabiyyi Ahmadi # Sha'ri rabeehil awwali"],
      ["Qad uzzo bi-rabeehi # Iz kaana kaa rRobeehi", "Lil ardi waa shefeehi # Bikulli khatbin mu'dili"],
      ["Ahlan bisha'ril farahi # Sha'ri zahaabi tarahi", "Wa fakhrinaa wal marahi # Sha'rin Nabiyyil afdoli"],
      ["Sha'ril falaahi was-suruuri # Sha'ri bihi saada duhuuri", "Muwashahi bayna shuhuuri # Mutawajin mukallali"],
      ["Ahlan bisha'ril faatihi # Iglaaqi kaonil faatihi", "Man usso bil-fawaatihi # Wahaaza khatmal milali"],
      ["Ahlan bisha'ril khaatimi # Sha'ri nnabiyyi qosimi", "Wafaatihi wa khatimi # Wa A'akhirin wa awwali"],
      ["Ahlan bisha'rin Naasiri # Lil-aqqi sha'ril A'amiri", "Bil Urfi sha'ri Zohiri # Bikulli wasfin Akmal"],
      ["Ahlan bisha'ril haadi # Liman'aji Rashaadi", "Wa qohidin wahaadii # Ilaa toreeqinl Amthali"],
      ["Ahlan bisha'ri seyyidi # Li-a'mari wa aswadi", "Man haasa sabqo su'dadi # Yaoma i'tizaari rusuli"],
      ["Waqod kafaahaa kullahaa # A'baahahaa wakullaha", "Biqaolihi Anaa lahaa # Inda 'ishtidaadil wajali"],
      ["Fayaa lahaa min khuto # Jawaabuhu fil ukhto", "Min robbihi sal tu'to # Washfa'a ladaynaa tuqbalu"],
      ["Ahlan bisha'ril mustafaa # Sofwatu kullu mustofa", "Wa khayri abdii qod sofaa # Min malikin ao mursalin"],
      ["Wa sha'ri khayril khalqi # Sha'ri jemeelul khalqi", "Sha'ri azeemil khalqi # Fil mu'kamil munazzali"],
      ["Sha'ri ladhii Azarahu # Ilaahuhu wa'khtarahu", "Min ubbihi khayyarahu # Hinda' inqido-ohil ajali"],
      ["Sha'ri llazzi maa saaha qottu # Waman lahul usnaa faqot", "Alayhi jibreelun abati # Bikulli Nnuuri mu'tali"],
      ["Ahlan bilayli isnaa ashar # Feehi wayaomihi-l- agar", "Wateebi zaalika sahar # Wanuuru Hufqihi-l-jeli"],
      ["Ahlan bikulli maa thohari # min khariqin yahyal fiqari", "Feehi karofhihil basori # Ilaa maqo-omihil alii"],
      ["Wa maa rahathu min ajab # Aminatu heena nasob", "Sabaabatan thuma iqtarab # Bisajdati-l-mubtahili"],
      ["Kama tadallaa Zuhuru # Kama taraa-al qos-ru", "Feehi wahalla-l- kasru # Bi-sonomi-l- mujdali"],
      ["Wagaadoti-l-bihaaru # Wajaffati-l- anhaaru", "Min ajlihi wan-naari # Qod tofi-at min khajali"],
      ["Wajinnuhum fee nakadin # Laram-yihaa bi-rosodi", "Wa-azlihaa an moghadi # Min ajli khayri rusuli"],
      ["Waran-natu shaytaani # Jazaa azeemu sha'ani", "Min ao-dohil burhaani # Li-azmi maa bihib-tuli"],
      ["Qod manna dhul-ifdoli # Bi-afdoli rijaali", "Fil afdoli layaalii # Bil-baladil mufadoli"],
      ["Ahlan biyaomi heedin # Maa mizluhu min heedin", "Qod alla fil maolidi # Feehi mahallu zuhalin"],
      ["Wasaa-bihil - wilaada # wamaa ataahu shaa-da", "Min wifqin maa araada # ilaa-huhu fil azali"],
      ["Ahlan biyaomi summii # Muhammadan khayras-smin", "Ramsan lima'na-l-ismi # Min jaddihi layanjali"],
      ["Bihamdi-l-Awwaleena # Lahu wal-haakhireena", "Fakaana zaa yekeenaa # Minal kareemil mufdoli"],
      ["Ahlan biyaomi iznayni # Maolidi zaani-iznayni", "Mabhazu sirril-kaoni # Moq-damihil mubajjali"],
      ["Akrim bi-sha'ril hajami # Ibreela sha'ril karami", "Akrim bi-ardil harami # Maolidi khayri mursali"],
      ["Akrim biyaomin so-oraa # Ishreena was-tano-oran"],
      ["Liman hawaa-s-tano-oraa # Wagufratun min monzili"],
      ["Akrim bisha'ri Neesaani # Maolidi khayri insaani", "Qudwati A'alil ihisaani # Wal kaamilil mukammali"],
      ["Qod tammati laa-haali # Fee uddati laayaalee", "Bizeenatil mahaalii # Kal-jaoharil mufadoli"],
      ["Ta'nihatun robeehi # Bimid-hati shaafeehi", "Bil-mantiqil badeehi # Abgii biha muhammali"],
      ["Abgii bihaal jamha bihi # Yaoman wanayla qurbihi", "Wafadli hubbi Robbihi # Waman rido-ohu amalii"],
      ["Wal-khatma lee bil-husnaa # Wal-jamha lee fil husnaa", "Ladaal moqo-oril asnaa # Mahaa rofeeqi-l-afdoli"],
      ["Wakun lanaa waleeyan # Wan-naasiran hafiyan", "Laa-na'khtashi gawiyyan # Bijaahi abdeekal-allee"],
      ["Solli wasallama -l- ilaa` # Alayhi afdolu solaata", "Maa daama kaonuhu illaa # Min abada li-asali"],
      ["Wa-haalihi wasahbihi # Wasaojihi wa hisbihi", "Wakulli aali khubbihi # Maha salaamil akmali"],
      ["Bijaahihim yaa ilaahi igfir linaasimihaa # Wasma' liqohreeha walillazii hadora", "Wahumahum bikhafiyin lutfi wakfihim # Nawaa-hiba d-dahri maha aafaatihil kadara"],
      ["Ajib duhaa-hahum wa-ajjil billazi tolabuu # Bihaahi Ahmada maha ashaabihil khayara"]
    ]
  },
  {
    title: "AHLAN BISHA'RI",
    content: [
      ["Ahlan bisha'ril maolidi # Zakkara bil mahatadi", "Aslal usuuli liseyyidi # Habeebinaal mubajjali"],
      ["Qod kaana khayra mursali #Qoblal wujuudil awwali", "Walam yakun min jandali # Li aslinaal mu'assoli"],
      ["Lam yadri khayral khalqi # Fi khulqihi wal khuluqi", "Siwal ilaahil haqqi # Min malakii Ao mursali"],
      ["Fasha'nuhu sha'nu ajib # Wa ramsuhu ramsul habeeb", "Ramsul habeebi lil-habeeb # Fil uruufi gayru mushkili"],
      ["Yaa lal-imaamil mu'talaa # Mataa ajaaba bibalaa", "aolaahu daama mushkila # Li-usmi maa qod yanjalii"],
      ["Laolal habeebul murtadho # Maa neela maazaa yurtadho", "Wadeenuhu lladhi-irtadho # Ilaahuhu fil azali"],
      ["Ahlan bihi iz-umila # Ahlan bihi iz-nasalaa", "Mufakhomaa mubajjala # Qod faaqo kulla rusuli"],
      ["Ahlan bihi iz-ursilaa # Wa-iz saraa wanazalaa", "Wa naala zikran munsala # Wa laysa bil mubaddali"],
      ["Ahlan bihi heena talaa # Sabhal mathaanii musjala", "Wa nuuruhu taha-sola # Min majdihil mu'athali"],
      ["Ahlan bimihraabil wujuud # Ahlan bihi ayni shuhuud", "Ahlan bizaalikal waduud # Wanaasili munas-sali"],
      ["Ahlan bihi min faadili # Mufaddoli wa-waasilin", "Muwasolin wakaamili # Fi-Naasi khayri mukmali"],
      ["Ahlan bihi min maajidin # Mumajjadin wahaamidin", "Muhammadin wawaajidi # Wamuujidi mukhawali"],
      ["Ahlan bihi min a-abidin # Mujaahidin wa shahidin", "Qo-otili kulli a-abidin # Lil-aqqi ma'maa yanjalii"],
      ["Ahlan bihi iz-jaahanaa # Minnaa bidafhi maa lanaa", "Min mu'dilin qod saa'ana # Bal kullu shayhin mushkili"],
      ["Yaa Rabaanaa solli alaa # Nuuril ilaahil mu'tala", "Man khasohul haqqu alaa # Bil mu'kamil munassali"],
      ["Solli alaa mon umaru # Lam yadrihi wa suwaru", "Min nuurihi wasuwaru # Madhun lahu minal alii"],
      ["Solli alaa min sajadat # Linuurihi iz-basurat", "Amlaaku robbi U'kimat # Aayaatuhu fil asali"],
      ["Solli alaal iz-nayni # Zumrati kulli iz-nayni", "Wasiruuhu fiz-nayni # Wa saaka sirrun asalii"],
      ["Solli alaal basheeri # Heena ataa n-naazeeri", "Biqodrihil kabeeri # Wal tu'tee lii muhammali"],
      ["Solli alaa mahmuudin # Muhammadin zil juudi", "Wamanbahi shuhuudi # Wa ayni sirri yanjali"],
      ["Solli alaa mon mon azomu # Maolidahu haqqon urimu", "Mazza jeheemi mudtorim # Bifadli robbi mujsili"],
      ["Solli alaa mon mon ador # Maolidahu ma'maa sukir", "Yakuunu mizla mon sobar # Biyaomi badril mursali"],
      ["Wa kullu mon jaada bishayhi # Li-maolidil mukhtari Hai", "Karaamatan lil-khayri Hai # Fa-innahu kaman walee"],
      ["Yaa Robbanaa fagfir lanaa # Wal ta'fu annaa wakfina", "Wa-tataqobbal sa'yanaa # Bijaahi aazal akmali"],
      ["Wal-ta'dinaa wa'di binaa # Wa najjeena wa roqqina", "Wa naslanaa wa a'lanaa # Wa sahbanaa waman walii"],
      ["Wal takfi annaal kulafaa # Walil ginaa wal tuhafaa", "Wana-yyiranna suhafaa # Yaoma-sh-tidaadil wajali"],
      ["Warsuk lanaal uluumaa # Wa tu'tinaal fuhuumaa", "Wak-shif lanaal guyuumaa # Bijaahi khayril mursali"],
      ["Wasoliyyan yaa Rabbanaa # Alaa Rasuuli hibeena", "Waso'hbihi waman danaa # Wakullu qofwin amzali"],
      ["Wak-shif libar'haamal ijaab # Wanajjihi minal iqob", "Wamaa lahu minal sihaab # Bil-kaamilil mukammali"]
    ]
  },
  {
    title: 'ALLAHUMO YAH ROBBI',
    content: [
      ["Allahuma Yaa Roobbi sollia ala Muhammadiin # Waseyyidi Saa-daati Nabiyyi Muhammadin"],
      ["Allahuma Solli Kulla Yaomi Wa-laylati # Wa-baarik Wasellim lil-habeebi Muhammadin"],
      ["Allahuma solli in the Morning wa in the Night # Upon You my Sweet Heart Haamidin Wa Muhammadin"],
      ["The Dust of your Sandal my Beloved wa my Darling # On top of my Forehead more than Silver wa Diamond"],
      ["I Envy Baa-bakar and Umara Because of You # I Envy Usmana and Aliyya Li-ahmadi"],
      ["Agisnii Agisnii Yaa Muroodi wa Musnadi # Li Annaka Baabun Lil-ilaahi wa Maajidi"],
      ["The Generalissimo of Nabiyyina all of them # My Master my Lover Ya Abeebi Muhammadi"],
      ["I Love You Muhammad more than Nafsii wa Property # The Light of the Universe your Excellency Seyyidi"],
      ["Wa Haza Khadimu Jaa Ilaykum Tawadduhan # Agisnii Qobilnii Zal-ayaadi Mumajjadi"],
      ["Eba yin Muhammad ee-ni tin fe Muhammadan # Kinu Ololufe dun Ahmadi wa Muhammadii"],
      ["Beru Ban Saa Aare Fal-yusolli Li'ahamadi # Oba alala fiiya yio wo e san Bi'ahmadi"],
      ["Bosi ba po pupo Fal-tusolli Li'ahmadi # Wallahi Tallahi oo Doloowo in Manifold"],
      ["Bo ban Fali-janna Fal-tusolli Li'ahmadi # Fa A'lan Wa Sa'lan lao Woleola bi Seyyidi"],
      ["Bota baa po Pupo Fal'tusolli Li'ahmadi # The Soldier of Allah won gbe en-jah Bi'ahmadi"],
      ["Wa Solli Alayhi yaa Ilaahi wa Khaliqi # Wa aali wa Sahabi bal wa Ummati Ahamadi"]
    ]
  },
  {
    title: 'COME FOR ME',
    content: [
      ["YA MUHAMMADU COME FOR ME (2CE)", "YA RASUULULLAH LIFT ME UP", "FROM THE DARKNESS OF SINFUL WORLD"],
      ["YA MUHAMMADU COME FOR ME (2CE)", "YA MUHAMMADU BE FOR ME", "SHOW ME GUIDANCE AND SHOW ME LOVE"],
      ["MY BELOVED MY NUMBER ONE (2CE)", "NUMERO UNO MY MUSTAFA", "YOU'RE MY DARLING YA MURTADA"],
      ["YOUR SIGNATURE INSIDE MY HEART (2CE)", "AND YOUR SANDALS UPON MY HEAD", "THAT'S MY GLORY AND THIS MY CROWN"],
      ["YA MUHAMMADU BE MY FRIEND (2CE)", "YA MUHAMMADU YOU'RE MY LOVE", "YOU'RE MY SWEETHEART, YOU'RE MY DARLING"],
      ["I'M NOT HOPELESS I HOPE IN YOU (2CE)", "I AM A WEAKLING BUT STRONG WITH YOU", "HASBIYYALLAAHU WANABBI"],
      ["YA RASUULULLAH I AM HERE (2CE)", "YA RASUULULLAH SAVE MY SOUL", "FROM ALL TRIALS AND TRIBULATIONS"],
      ["YA RASUULULLAH VIE FOR ME (2CE)", "YA MUHAMMADU VOUCH FOR ME", "YA MUHAMMADU INTERCEDE"],
      ["YA MUHAMMADU INTERCEDE (2CE)", "ON BEHALF OF ALL ALMUBINS", "BIHAQI NUURIL MUTALSAMI"],
      ["AT YOUR DOORSTEP WE ALL HAVE COME (2CE)", "YOUR COMMUNITY ARE SUFFERING", "YA MUHAMMADU INTERCEDE"],
      ["YOUR COMMUNITY ARE BEEN TORTURED (2CE)", "YOUR COMMUNITY ARE DOWNTRODDEN", "YA MUHAMMADU INTERCEDE", "OUR ENEMIES ARE KILLING US (2CE)", "KILLING OUR CHILDREN AND BOMBING US", "YA MUHAMMADU STAND FOR US"],
      ["YA MUHAMMADU INTERCEDE (2CE)", "YA RASUULULLAHI STAND FOR US", "YOU ARE THE LIGHT OF MUTALSAMI"],
      ["BILLIONS SALAATILI FAAТІНІ (2CE)", "UPON MUHAMMMADI EVERYDAY", "ANTA NUURUL MUTALSAMI"]
    ]
  },
  {
    title: 'EYONBO ANABI',
    content: [
      ["OSU BIBI ANABI NA LAWAA FUN", "OSU BIBI ANABI NA LAWAA FUN", "KA PE JO KAJOKO TORI MUHAMMAD", "OSU BIBI ANABI LAWA FUN"],
      ["OSE BIBI ANABI NA LAWA FUN", "OSE BIBI ANABI NA LAWA FUN", "KANA WO KA NARA TORI MUHAMMAD", "OSE BIBI ANABI LAWA FUN"],
      ["OJO IBI ANABI NA LAWA FUN", "OJO BIBI ANABI LAWA BI FUN", "KA SASALATU FUN KA SE QOSIDA", "OJO IBI ANABI LAWA FUN"],
      ["IYA TOBI MUHAMMA LABA DUPE", "BABA TO BI MUHAMMA LABA DUPE", "BIMO ΒΙΜΟ Ο ΒΕΝΙ ΚΑΝ TOTO MUHAMMA", "IYA TOBI MUHAMMA LABA DUPE"],
      ["OMO AAMINATU LABA DUPE", "OMO ABDULLAHI LOLOLA FE", "OLOLA O DE NI KAN TOTO MUHAMMA", "OMO AAMINATU LAGBADE FUN"],
      ["OKO KHADIJATU NA LASIWAJU", "OKO AISHATU NA LASAAJU", "OBINRIN OFE NIKAN TOTO MUHAMMA", "OKO HAAFUSATU LASAAJU"],
      ["BABA FATIMATU NA LA GBOLAFUN", "BABA BUREEMO NA LOGAAWA", "ΟΜΟ ΚΑΝ ONI BABA TOTO MUHAMMA", "BABA QOOSIMU NA LOLORI"],
      ["ORE ABU BAKARE NA LORE WA", "ORE UMARU NAA LORE WA", "ΕΝΙΚΑΝ Ο NI ORE BI TI MUHAMΜΜΑ", "ORE JIBRAHILU NA LORE WA"],
      ["ADEKILEKUN NA LARAN SAYE", "ELEYINJU ANU LARAN SAYE", "AL MUSITAFAA LARIN EDA E", "MOSHOBALAAJE NA LAGBADE FUN"],
      ["ADUN BARIN NA LOGAAWA O", "ALAPERIRE NA LOGAAWA", "OLOLA O DE NI KAN TOTO MUHAMMA", "ISELERUU ANU LOGAAWA"],
      ["ASIWAAJU EDA LOLA DA PE", "ASIWAAJU EDA LOLA DA PE", "ODA MUSA - KOTO MUHAMMA", "ODA ISA - KOTO MUHAMMA", "ODA LI ARASHI KOTO MUHAMΜΑ", "ASIWAAJU EDA LOLA DA PE"],
      ["TORI MAOLUDI NA LABADEBI", "TORI MADIU NA LASEN WA", "ORO OFIN KO LEYI O IFE MA LO KAN", "TORI MAOLUDI NA LABADEBI"],
      ["TORI MAOLUDI NA LABADEBI", "TORI MADIU NA LASEN WA", "WARA FAH NAA LAKA KA ZIKIRAKA", "TORI MAOLUDI NA LABADEBI"],
      ["EJE AYON BO ANABI OMO NLA", "EJE AYON BO ANABI OMO NLA", "BOWO LOFEENI YONBO MUHAMΜΑ", "EJE AYONBO ANABI OMO NLA", "BOMO LOFEEBI YONBO ANABI", "EJE AYONBO ANABI OMO NLA", "BO LA LOBAN FE YONBO MUHAMMA", "EJE AYON BO ANABI OMO NLA"],
      ["EMI O YONBO ANABI KOLA O DE", "EJE AYON BO ANABI OMO NLA", "EJE AYON BO ANABI OMO NLA", "EJE AYON BO ANABI OMO NLA", "KAYE WA ORORUN KORUN SI TUN DUN", "EJE AYONBO ANABI OMO NLA"],
      ["ΙΝΑΑ ΑΤΑΥΝΑΑΚΑ AL KAOSARA", "EJE AYON BO ANABI OMO NLA", "MUHAMMADAAHU OLOPO EWA", "EJE AYON BO ANABI OMO NLA", "YA ROBI SOLI ALA MUHAMMA", "EJE AYON BO ANABI OMO NLA", "WA ALAA AALI PELU SAHABI", "EJE AYON BO ANABI OMO NLA"]
    ]
  },
  {
    title: 'IKE OLUWA ATI OLA',
    content: [
      ["*FAHULUN FAHULUN FAHULUN FAHAL FAHULUN FAHULUN FAHULUN FAHAL"],
      ["IKE OLUWA ATI OLA K'O BA ANNABI MI 2x", "ATI AWON OBINRIN RE IYA MUMINI"],
      ["IYONU OLUWA K'O BA KASIMI 2x", "AKOBI MUHAMMAD T'O JE DAUDU FUN"],
      ["K'O TUN BA ABDULLAHI OL'ORUKO BABA 2x", "ΒΑΒΑ Τ'Ο BI MUHAMMAD ASAJU EDA"],
      ["JARE OLUWA DAKUN SE'KE SE'GE RE 2x", "FUN OMO MARIYATA IBRAHIMUN"],
      ["ANU OLUWA K'O BA FATIMAH 2x", "ATI UMMU KULTHUM ATI ZAINABU"],
      ["RUKAYYATU DAKUN JARE OLUWA MI 2x", "PAKO 'KE FI WON BO AWON MEJEJE"],
      ["EJE AGBA MUHAMMAD DAGBO KA TELE 2x", "ENI TO WAHALA LORI AWA EDA"],
      ["KA ROJU KA MURA AWA MUMINI 2x", "AWA L'A O MA LEKE AWON KAFIRI"]
    ]
  },
  {
    title: 'JAWAA-IRUNAH',
    content: [
      ["Qosodtu Wa-alaamu-l-Guyuubi Bimursodi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Lin-nafsii Wal-Ikhwaani Ashrofa Moqsodi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Bimadhi-n-Nabiyyil Aashimiyyi Muhayyadi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Ziquu Bimunaakum Inna Zikra Muhammadi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Yafuusu Bihil Musgii Lahu Wal-Muhadizu # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Laqod Baharo-l-Aniwaaro Nuuru Shuhaa-hihi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Waqo-oma Bihamri Llahi Ja'da Ditilaahihi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Falaa Khayra Illaa Fil Maseeri Tibaahihi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Sahaa-datunaa Mash-rutotun Bi-tibaahihi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Wahal Yanbuzu-l-Bunyaanu illaa alaal Hunsi # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Ahid Zikro Khayril Khalqi Fal-uudu Ahmada # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Walil-qolbi Fee Tazkaari Waslun Mujaddadu # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Wa aqsim alaa Haqqi Walasta Tufan-nadu # Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Yameenan Laqod Jalla-n-Nabiyyu Muhammadu #Jawaarihuna Tumha Bijaahi Muhammadi"],
      ["Minal Hubbi Wa-tashreefi Fi Rutbatil Hulyaa # Jawaarihuna Tumha Bijaahi Muhammadi"]
    ]
  },
  {
    title: 'QASEEDATUN-MAD-HIYATUN',
    content: [
      ["*Fa Muhammadu Naa Huwa Seyyidunaa # Fal-'izzu Lanaa Li Ijaabati-hi"],
      ["Asubhu Badaa Min Tol-hatihi # Wa Laylu Dajaa Min Wafratihi"],
      ["Faaqo Rusula Fodlan Wa Ulan # Ah-daa Subula Li Dalaa-latihi"],
      ["Kanzul Karami Maolaa Ni-hami # Haadil Umami Li Shareehatihi"],
      ["Azkaa Nasabi 'ahlaali Asabi # Kulluli Arabi Fii Khidmati-hi"],
      ["Naala Sharafa Wallahu 'afaa # 'am-maa Salafa Min Ummati-hi"],
      ["Sa-hati Shajaru Notoqol Ajaru # Shugol Qomoru Bi-ishaaratihi"],
      ["Jibreelu Ataa Laylatal Asraa # Farobbu Da-'aa Li Hadrati-hi"]
    ]
  },
  {
    title: 'SALLI YAH WAA',
    content: [
      ["Solli Yaa waa-iba sofaa # Linnabi ma'adinil wafaa", "Maa mahaa Laahu Ao afaa # Zamba man kaana Asraafa"],
      ["Yaa nabiyyaa mukammalaa # Yaa rasuula mujallalan", "Haawiyal fadlin wal ulaa # Wal moqomal Musharrafaa"],
      ["Yaa habeeban muqorrabaa # Yaa sofiyyaa muhabbabaa", "Yaa najiyyaa muhazzabaa # Aaza majdan mutahafaa"],
      ["Yaa jemeelan mukarramaa # Yaa jeleelan muhazzomaa", "Yaa Azeeman mufakhamaa # Jaaza Hujban warof-rofa"],
      ["Saamiyal Qodri waz Zuraa # Ashrafa N-naasi wal waraa", "Khayra maa-shin alaa tharaa # Akrama Rusli laa khafaa"],
      ["Anta durrun wa-jaoharu # Anta Aglaa wa af-kharu", "Anta A'ala wa Akbaru # Anta lillahi Mustaafa"],
      ["Anta Sultaanu Ruslihi # Anta Meesabu fadlihi", "Anta Meesaanu adlihi # Anta Asnaa Wa ashrofaa"],
      ["Anta Nnurun Muto-haru # Anta fil kaoni Mazharu", "Anta fii rusli Ash'aru # Anta Asmaa wa altofaa"],
      ["Yaa shefihal Khalahiqi # Fii jemeehi Daqoohiqi", "Ya kitaabal haqohiqi # Kun minal hajzi mus-hifaa"],
      ["Soodiqol qaoli wal fihaal # Baa-iyal qoddi wal jamaal", "Abdilil qotha Bil wisoli # Azhibi Sodda wal jafaa"],
      ["Wadnu Yaa faa'iqo Zzibaa # Wak-shifil hujba wal khibaa", "Wa ilaa Nnuuri qorribaa # Tamimil qosda bil wafaa"],
      ["Khaadimu minka yar'tajii # Wa ilaal hujbi yal-tajii", "Faf'tehil Baaba yuulaju # Bin-Nabiyyii wa Mustafaa"],
      ["Wag-firi Zamba war'ami # Wasturil Ayba wak-rimi", "Bi-rasuulin Mu'azomi # Kullama zalla Ao Hafaa"],
      ["Wa Solaatul Ilaahi maa # Saja'a Tayru fil himaa", "Tag'sha badran Muta'mamaa # Faaqo Nuuhan wa Yusuufaa"],
      ["Wa Kazaal Aali Kullamaa # Sakabal qotru ao amaa", "Ao muheebu tara'namaa # Solli yaa waa'hiba Ssofaa"]
    ]
  },
  {
    title: 'SALLU ALAYHI',
    content: [
      ["*SOLLUU ALAYHI WASELIMUU TESLEEMA # SOLLUU ALAYHI WASELIMUU TESLEEMA"],
      ["YAA RABBANAA BIMUHAMADIN BIMUHAMADIN # ANSIL ALAYNAA RAHMATAN WA SALAAMAA"],
      ["WABI'AALIHI WABISA'BIHI WAL UMMATI # ANSIL ALAYNAA RAHMATAN WA SALAAMAA"],
      ["WABI SHAYKHINAA BARHAMA THUMMA AHMADA # ANSIL ALAYNAA RAHMATAN WA SALAAMAA"],
      ["WABITAAJINAA WAKAMAALINA WABIJAAMIHI # ANSIL ALAYNAA RAHMATAN WA SALAAMAA"],
      ["BIMUBASHIRIN WASA'DINAA WA OLOHUNGBEBE # ANSIL ALAYNAA RAHMATAN WA SALAAMAA"],
      ["WAL ASFIYAA'I KIBAARIHIM WA SIGAARIHIM # ANSIL ALAYNAA RAHMATAN WA SALAAMAA"],
      ["WAL AOLIYAA'I RIJAALIHIM WA NISAAʼIHIM # ANSIL ALAYNAA RAHMATAN WA SALAAMAA"],
      ["WAL ATQIYAA'I BAYAADIHIM WASAWAADIHIM # ANSIL ALAYNAA RAHMATAN WA SALAAMAA"]
    ]
  },
  {
    title: 'WAKAFAANIY',
    content: [
      ["So-ori man waslal gawaani # Wa'tazil sikral agaani", "War'mi bil-beedil hisaani # Was'lu makhtuma dinaani"],
      ["Wal-malaahii wal-magaani # Min kiraani Ao mabaani", "Kullu zee-wayka saraabu # Wabgi ruuhan lil-mahaanee"],
      ["Ayna haahin aqqo aqqin # Taaliyaa sab'hal mathaani", "Bisifaati saati haqqon # Rutbatan laysati lisaani"],
      ["Fahuwa mukhtaarul baraaya # Qoblaa takweenil kiyaani", "Barasati adraatu to-oha # Qobla takweenil makaani"],
      ["Barasati adraatu to-oha # Qobla takweenil makaani", "Barasati adraatu to-oha # Qobla takweenil makaani"],
      ["Fahuwa Aklii washaraabi # wahuwa deenii wajanaani", "Wahuwa Hunzii wahuwa kanzee # Wa ameenii wa amaani"],
      ["Wa-rofiqii wa-toriqii # Wa-jawaadi wa-sinaani", "Wa-rubuuhii wa-qusuuri # Wahuwa khayratul hisaani"],
      ["Wahuwa bayhii wa-sharohi # Wahuwa arzii wa-jinaani", "Laysa lii gayrul muqoffa # Walizaa taama janaani"],
      ["Laa taraa sikra siwaahu # Fee fu'aadii wa lisaanii", "Ini-araa sikru siwaahu # Gayra la'wii wamajaani"],
      ["Wa'tidaahii lisiwaahu # Tayfu janna laa hara'nii", "Innanii tuula ayaatii # Rabbu amnin wa-amaani"],
      ["Laan'tisorii bil mufadda # Wahuwa aynii wa'ayaanii", "Fafuhaadii muz-ramaani # Fii jadeedil aymanaani"],
      ["Wa-habeebii muz shafaani # Wa-sofaa lii qod mahaanii", "Wahuwal abdu wa'aydon # Ramsuhu haahu tadaani"],
      ["Wahuwa aynul ismi wal-ar # fi lita'qeeqil mahaani", "Wa-habeebun wa-mahaadi # fee taqosin wa-tadaani"],
      ["Wahuwa daahi wada-waahii # Qod baraani wa-shafaani", "Laytahul waqta habaanii # Waslahu wahuwa kafaani"],
      ["Daahu shaoqee kulla waqtin # Fee shadeedil ayyajaani", "Sullu nafsee waha-waahi # Maf'khari raodul jinaani"],
      ["Maa baqo lii min baqohi # Min qaramee wa-anaani", "Wa sefeerii wa bukaahi # Wa araanii laa araani"],
      ["Laa-imii faaraz lahaali # Qod dahaani maa dahaani", "Kam khaleelin qod jafaani # Ligaraamii wa-ramaani"],
      ["Rubba sinwin quntu arjuu # Wasluhu thumma jafaani", "Wa nahaanii wala-haanii # Wa shajaanii wa-nafaanii"],
      ["Layza lil yaoma khaleelu # Gayru maa minka ataani", "Gayru haaza qod qolaani # Aazilan lee kulla Aani"],
      ["Mazzaquu jildee jihaaran # Kha'arujuuni min makaani", "Duuna zambin gayra anni # Ubbu toha fil janaani"],
      ["Wa araanii lasta ulfaa # Taahiban maral awaanii", "Wa-araa lao mazzaquuni # Bi-mawaadil Undu-waani"],
      ["Lam yanaaluu maa Araadu # Qod madoo zaa wakafaani", "Allaluuni jeerati min # Zikra man yatluul mathaani"],
      ["Raddadu lee zikrahu hee # Na sofaa lee wa-amaani", "Wakafaani toha hiban # Laa ubaali liman qolaani"],
      ["Wakafaani toha hiban # Laa ubaali liman qolaani", "Lastu a'khsha kayda a'adaa # i walaa jaora zamaani"],
      ["Famakaani fee zamaani # Wa zamaani fee makaani", "Wa solaatun wa salaamun # Fee tasoreefil awaani"],
      ["Man zawaati zaati tatraa # Nahwa toha maa kafaani", "Thumma aalin wa-sihaabi # Sooramuu waslal gawaani"]
    ]
  },
  {
    title: 'YAA NABIYYU',
    content: [
      ["TALA 'AL BADRU 'ALAYNAA # LABAYKA YAA RASUULA LLAH"],
      ["MIN THANIYAATIL WADAA'I # LABAYKA YAA RASUULA LLAH"],
      ["WAJABA SHUKRU 'ALAYNA # LABAYKA YAA RASUULA LLAH"],
      ["MADA 'AA LILLAHI DAA'I # LABAYKA YAA RASUULA LLAH"],
      ["AYYUHAL MAB'UUTHU FEENA #LABAYKA YAA RASUULA LLAH"],
      ["JI'TA BIL AMRIL MUTA'I # LABAYKA YAA RASUULA LLAH"],
      ["JI'TA SHARAFTAL MADEENAH # LABAYKA YAA RASUULA LLAH"],
      ["MARHABAN YAA KHAYRA DAA'I #LABAYKA YAA RASUULA LLAH"],
      ["ANTA SHAMSUN ANTA BADRUN # LABAYKA YAA RASUULA LLAH"],
      ["ANTA NUURUN FAOQO NUURIN # LABAYKA YAA RASUULA LLAH"],
      ["ANTA IKSEERU WA GAALII # LABAYKA YAA RASUULA LLAH"],
      ["ΑΝΤΑ MISBAAHU SUDUURI # LABAYKA YAA RASUULA LLAH"],
      ["YA HABEEBII YAA MUHAMMAD # LABAYKA YAA RASUULA LLAH"],
      ["YA 'ARUUSAL KHAAFIQAYNI # LABAYKA YAA RASUULA LLAH"],
      ["YA MU'AYYAD YA MUMAJJAD # LABAYKA YAA RASUULA LLAH"],
      ["YA IMAAMAL QIBLATAYNI # LABAYKA YAA RASUULA LLAH"]
    ]
  },
  {
    title: 'YAA ROBBI',
    content: [
      ["YAA ROBBI AYYI'I LANAA MIN AMRINAA RASHADAN #' WA'AJLI MA'UNATAKAL UZMAA LANA MADADAN"],
      ["WALA TAKILNA ILAA TAD-BEERI ANFUSINAA # FAN-NAFSU TA'JUSU AN ISLAAHI MAA FASADA"],
      ["ANTAL ALEEMU WA QOD WAJA'ATU YAA AMALII # ILA RAJAA-IKA QOLBAN SAA-ILAN WAYADAA"],
      ["FALA TARUDANNAHA YAA ROBBI KHAAIBATAN # FABA'RU JUUDIKA YURWI KULLA MAA WARADA"]
    ]
  }
];

export const POEMS: Poem[] = rawPoems.map(poemData => {
  const poemId = poemData.title.toLowerCase().replace(/ /g, '-').replace(/[’']/g, '');
  return {
    id: poemId,
    title: poemData.title,
    verses: poemData.content.map((lines, index) => {
      const verseNumber = index + 1;
      return {
        id: `${poemId}-${verseNumber}`,
        poemId: poemId,
        poemTitle: poemData.title,
        number: verseNumber,
        lines,
      };
    }),
  };
});