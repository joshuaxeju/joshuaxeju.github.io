function t(id){
    return document.getElementById(id);
  }
  function audioApp(){
    var audio = new Audio();
    var audio_index = 0;
    var is_playing = false;
    var playingtrack;
    var trackbox = t("playlist");
    var tracks = {
        "track1":["Cry For Me", "TWICE", "TWICE CRY FOR ME (Official Audio).mp3", "https://64.media.tumblr.com/f6a6f344edc803c62adff9695aee3a27/e330829990f571a5-2f/s540x810/5f1d4b15c12ea4f463b569052566ed0b5f18fa22.gifv", "Gochyeo sseul gachido eopdan geol <br> Hajiman geunyeowa dalli nan neol<br>Swipge nwajul mami eopgeodeun (Never let go)"],
      "track2":["Kura Kura", "TWICE(JAPAN)", "TWICE 'KURA KURA' Lyrics [Color CodedKanRomEng].mp3", "https://64.media.tumblr.com/43f8fa0a51e70244cd8fd1e7a75b54ea/8897d32259d29d5d-a5/s540x810/8e3e8740fad7f7f44840aef66cf609c974465445.gifv", "Lost control of my heart and soul (-Kun ni deatte) <br> Lost control of my heart and soul (Ooh-ooh, magic)"],
      "track3":["I Cant Stop Me", "TWICE", "TWICE I CAN'T STOP ME Lyrics (트와이스 I CAN'T STOP ME 가사) (Color Coded Lyrics).mp3", "https://64.media.tumblr.com/416d7da2ce7e8b630065dc089b379781/231055937014cc2c-75/s400x600/6d243bae210fe7f20c6ff38d936dac9d16b8a3d8.gifv", "Allami ullyeodae Ring ring a ling <br> Seoroui nungiri daeul ttaemada <br> Almyeonseo bingbing doneunde"],
      "track4":["What is Love", "TWICE", "TWICE (트와이스) - What is Love [HANROMENG Color Coded Lyrics].mp3", "https://64.media.tumblr.com/463d5686efc6613ed7b2f6981236262d/tumblr_p6xz00thw51xnit2ko2_1280.gifv", "Maeilgati yeonghwa sogeseona <br> Chaek sogeseona deulama sogeseo"],
      "track5":["Feel Special", "TWICE", "TWICE(트와이스) Feel Special (Color Coded Lyrics EngRomHan가사).mp3", "https://64.media.tumblr.com/43d1025198c70466be5c869c7604732b/tumblr_py91qozkqP1was9wjo1_400.gifv", "Geureon nari isseo <br> Gapjagi honjain geonman gateun nal"],
      "track6":["Signal", "TWICE", "TWICE (트와이스) - SIGNAL [HANROMENG Color Coded Lyrics].mp3", "https://64.media.tumblr.com/58c2970e897458a47ff28b8993022818/8ec5e415929ba6c8-50/s400x600/2ecba362b358e2b60bbb671c47a39c8e34884df7.gifv", "Trying to let you know <br> Sign을 보내 signal 보내 <br> I must let you know <br> Sign을 보내 signal 보내"],
      "track7":["T.T", "TWICE", "TWICE (트와이스) - TT [HANROMENG Color Coded Lyrics].mp3", "https://64.media.tumblr.com/6d42fa734a174426f4d24254b30ac62a/tumblr_pfxis68YXf1ut8ku9o4_r1_250.gifv", "Ireojido mothaneunde <br> Jeorojido mothane <br> Geujeo barabomyeo ba-ba-ba-baby"],
      "track8":["Toy", "Block B", "https://a.tumblr.com/tumblr_o5fofy9EK11tqmylco1.mp3", "http://cdn.playbuzz.com/cdn/77c1048d-f6bf-4814-82d0-0f51e891165a/2179fe6c-d6c4-4bbe-9298-258e4bd5d763.gif", "아무 말도 해줄 수 없는 나 <br> 침묵하는 내 입술은 벌써 <br> 몇 장의 편지를 써냈어"]
    };
    for(var track in tracks){
      var tb = document.createElement("div");
      var pb = document.createElement("div");
      var tn = document.createElement("div");
      var ta = document.createElement("div");
      var tg = document.createElement("div");
      var tq = document.createElement("div");
      var ti = document.createElement("div");
      
      tb.id = "play_item";
      pb.className = "item_play fa fa-play";
      tn.className = "item_name";
      ta.className = "item_artist";
      tg.className = "item_gif";
      tq.className = "item_quote";
      ti.className = "item_icons";
      ti.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i> <i class='fa fa-share-alt' aria-hidden='true'></i> <i class='fa fa-heart-o' aria-hidden='true'></i> <i class='fa fa-ellipsis-h' aria-hidden='true'></i> ";
      
      tn.innerHTML = tracks[track][0];
      ta.innerHTML = tracks[track][1];
      pb.id = tracks[track][2];
      tg.innerHTML = "<div style='background: url("+tracks[track][3]+") center center; background-size: cover;'></div>";
      tq.innerHTML = tracks[track][4];
      pb.addEventListener("click", switchTrack);
      
      tb.appendChild(pb);
      tb.appendChild(tn);
      tb.appendChild(ta);
      tb.appendChild(tg);
      tb.appendChild(tq);
      tb.appendChild(ti);
      trackbox.appendChild(tb);
      
      audio_index++;
    }
    audio.addEventListener("ended",function(){
        t(playingtrack).className = "item_play fa fa-play";
      playingtrack = "";
      is_playing = false;
    });
    function switchTrack(event){
      if(is_playing){
          if(playingtrack != event.target.id){
            is_playing = true;
          t(playingtrack).className = "item_play fa fa-play";
            t(playingtrack).parentElement.className = "no";
            event.target.className = "item_play fa fa-pause";
            event.target.parentElement.className = "active";
            audio.src = event.target.id;
                audio.play();
        } else {
            audio.pause();
            is_playing = false;
          event.target.className = "item_play fa fa-play";
          event.target.parentElement.className = "no";
        }
      } else {
        is_playing = true;
        event.target.className = "item_play fa fa-pause";
        event.target.parentElement.className = "active";
        if(playingtrack != event.target.id){
          audio.src = event.target.id;
          event.target.parentElement.className = "no";
        }
            audio.play();
        event.target.parentElement.className = "active";
      }
      playingtrack = event.target.id;
    }
  }
  window.addEventListener("load", audioApp);
