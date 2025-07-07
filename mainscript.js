//pw="bocat667xx6";spy='honey4fight';setTimeout(function(){document.getElementById('login').getElementsByTagName('input')[2].value=pw,document.getElementById('login').getElementsByTagName('input')[1].value = spy},1000)
if(typeof StreetWarsProperties=="undefined" && location.href.indexOf('streetwars')==-1){
document.location='https://www.mocospace.com/games?gid=1000&r=218&source=internal&fakeWk=true&url=%2Fstreetwars%2Fplayer%3Faction%3Dconfirmall'

//document.location='https://www.mocospace.com/games?gid=1000&r=37&source=internal&fakeWk=true&url=%2Fwap2%2Fgame%2Fstreetwars%2Fprofile.jsp%3Fid%3D36501753%26requester%3D36501753%26v%3D1751393207030%26u%3D36501753'
}



//id = [103925754,103925784,103925723,103925751,103925714,103922815,103925700,103925741,103925742,103925743,103922808,103925719,103925718]
//jj=0;
//xx =setInterval(function(){
//	if(id[jj]){
//	    $.ajax({
//url:"https://www.mocospace.com/servlet/api/buddy/createInvite.do",
//type:"post",
//data:{
//recipientId: id[jj],
//type: 19
//
//	}})
//	jj=jj+1	}else{alert('over')}
//},300)

/// pxxx()  buystash
pxxn    //freestash
canbuystash = true;
canbuybusiness = false;

//mission
//javascript:(function(){var vj099=document.createElement("script");vj099.src="https://dl.dropbox.com/scl/fi/q9l9j3vmnc1x5gf0y7tx3/missionxxx.js?rlkey=9fgw3u44m7b0o2ag90gxls801&dl=0";document.head.appendChild(vj099);})();

cancontraband = true;

if(cancontraband==true && location.href.indexOf('confirmall')>0){
javascript:(function(){var vj099=document.createElement("script");vj099.src="https://dl.dropbox.com/scl/fi/iu0p948le3b3csq867nij/chris-contraband.js?rlkey=cv5uru4jzgfbuqxh4m34jy2fy&dl=0";document.head.appendChild(vj099);})();
}

//details of bounty ,favor
//if(location.href.indexOf('confirmall')>0 ){ fetchGameData();}

//send friendreq
//if(location.href.indexOf('confirmall')>0) {sendfr(40867766)}


//secure and craft
//if(location.href.indexOf('confirmall')>0) { jpx()}

//autofight
javascript:(function(){var vj099=document.createElement("script");vj099.src="https://dl.dropbox.com/scl/fi/47fyirecidk4cqxqr6b5u/gerallxhrresponse.js?rlkey=4jyui0vm7kx5nhk51cifs774d&dl=0";document.head.appendChild(vj099);})();
afxx()

//getprofile details
//if(location.href.indexOf('confirmall')>0) {getprofiledetails()}

//Dailyspin

//if(location.href.indexOf('confirmall')>0 ){ javascript:(function(){var vj099=document.createElement("script");vj099.src="https://dl.dropbox.com/scl/fi/vyct7ykilbysnuhwui3v1/dailyspinj.js?rlkey=4m8k95gd2fby0vsjms3cihers&dl=0";document.head.appendChild(vj099);})();}



//boostopen
//if(typeof StreetWarsProperties!="undefined"){pxxn()}

function pxxn(){
  $.ajax({
    url: "https://www.mocospace.com/games?gid=1000&r=104&source=internal&fakeWk=true&url=%2Fstreetwars%2Fstore%3Faction%3Dprebuyitem%26src%3DBOSS%26type%3DBOOST%26itemID%3D1000005",
    type: "post",
    success: function(o) {
      try {
        if ($(o).find('#buy_boost_button')[0].innerHTML.indexOf('FREE') > 0) {
          t = $(o)
          m = t.find('form')[0]
          publictoken = m.children[1].value
          privatetoken = m.children[2].value
          console.log(publictoken, privatetoken)
          setTimeout(function() {
            buy(publictoken, privatetoken)
          }, 1300)
        } else {
          showMessage('Nothing found', 'red')
        }
      } catch (e) {
        showMessage('Nothing found', 'red')
      }
    }
  })
}

function buy(publictoken, privatetoken) {
  $.ajax({
    url: "https://www.mocospace.com/games",
    type: 'post',
    data: {
      action: 'buyitem',
      publicToken: publictoken,
      privateToken: privatetoken,
      itemID: 1000005,
      type: 'BOOST',
      src: 'BOSS',
      gid: 1000,
      url: '/streetwars/store',
      gpaction: 'call',
      fakeWk: 'true',
      source: 'internal',
    },
    success: function(o) {
      try {
        tx = $(o)
        textn = tx.find('#game_dialog_title')[0].getElementsByClassName('delay_animation')[0].innerHTML
        let color = textn.indexOf('ounties') > 0 ? 'green' : 'red'
        showMessage(textn, color)
      } catch (e) {}
    }
  })
}

function showMessage(text, color) {
  const ndiv = document.createElement('div')
  ndiv.style.position = 'fixed'
  ndiv.style.top = '10px'
  ndiv.style.left = '180px'
  ndiv.style.padding = '10px 15px'
  ndiv.style.background = '#f0f0f0'
  ndiv.style.border = '1px solid #ccc'
  ndiv.style.borderRadius = '5px'
  ndiv.style.color = color
  ndiv.style.fontWeight = 'bold'
  ndiv.style.zIndex = '9999'
  ndiv.innerHTML = text
  document.body.appendChild(ndiv)
}






if(location.href.indexOf('confirmall')>0 && canbuystash==true){
itemid = 1001796
quantityx= 900000
//quantityx= 9
 pxxx()
function pxxx(){
$.ajax({
	url:"https://www.mocospace.com/games?gid=1000&r=796&source=internal&fakeWk=true&url=%2Fstreetwars%2Fstore%3Faction%3Dprebuyitem%26src%3DSTOREFRONT%26type%3DITEM%26itemID%3D"+itemid,
	type:"post",
	success:function(o){
		tx = $(o).find('.game_button_row')
		publictoken = tx[0].querySelector('input[name="publicToken"]').value
		privatetoken = tx[0].querySelector('input[name="privateToken"]').value

		$.ajax({
			url:"https://www.mocospace.com/games",
			type:"post",
			data:{action: 'buyitem',
publicToken: publictoken,
privateToken: privatetoken,
src: 'STOREFRONT',
type: 'ITEM',
itemID: itemid,
gid: '1000',
url: '/streetwars/store',
gpaction: 'call',
fakeWk: 'true',
source: 'internal',
quantity: quantityx},
complete:function(o){
	try{
let dx = document.createElement('div');
dx.style.position = 'fixed';
dx.style.top = '100px';
dx.style.left = '20px';
dx.style.zIndex = '9999';
dx.style.color = 'white';
dx.style.background = 'linear-gradient(135deg, #ff416c, #ff4b2b)';
dx.style.padding = '15px 25px';
dx.style.borderRadius = '12px';
dx.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
dx.style.fontSize = '16px';
dx.style.fontWeight = 'bold';
dx.style.fontFamily = 'Segoe UI, sans-serif';
dx.style.display = 'flex';
dx.style.alignItems = 'center';
dx.style.gap = '10px';
dx.style.opacity = '0';
dx.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
dx.style.transform = 'translateY(-10px)';
dx.style.pointerEvents = 'none'; // Doesn't block clicks

// Icon (emoji or replace with image URL)
let icon = document.createElement('span');
icon.innerText = '🛒'; // Shopping cart emoji
icon.style.fontSize = '20px';
dx.appendChild(icon);


let text = document.createElement('span');
text.innerHTML = o.responseText.match('You purchase(.*)</')[0]
  .replace(' <span class="game_item_name">', ' ')
  .replace('</span>.</', '');
dx.appendChild(text);


document.body.appendChild(dx);


setTimeout(() => {
  dx.style.opacity = '1';
  dx.style.transform = 'translateY(0)';
}, 100);





	}catch(e){
console.log(e)
	
}}})}})}}


if(location.href.indexOf('confirmall')>0  && canbuybusiness==true){
	
	
// === Create and Style Message Div ===
const messagediv = document.createElement('div');
messagediv.id = 'messageBox';
document.body.appendChild(messagediv);

// Add styling
const style = document.createElement('style');
style.innerHTML = `
  #messageBox {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 300px;
    max-height: 500px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.85);
    color: #00FFAA;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0, 255, 170, 0.6);
    padding: 15px;
    z-index: 9999;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
  }

  #messageBox::-webkit-scrollbar {
    width: 6px;
  }

  #messageBox::-webkit-scrollbar-thumb {
    background-color: #00ffaa88;
    border-radius: 3px;
  }
`;
document.head.appendChild(style);

let quantity = 400;
let bussid = [1000033,1000021,1000078,1000045,1000026,
  1000154, 1000153, 1000115, 1000116, 1000119, 1000120, 1000117,
  1000114, 1000113, 1000112, 1000118, 1000021, 1000078, 1000020,
  1000019, 1000018, 1000017, 1000045, 1000016, 1000015, 1000014,
  1000044, 1000028, 1000029, 1000027, 1000030, 1000034, 1000032,
  1000040, 1000042, 1000013
];

function buybus(id) {
  $.ajax({
    url: `https://www.mocospace.com/streetwars/business?action=buy&id=${id}&quantity=${quantity}`,
    type: "post",
    success: function (o) {
      const tempDOM = $('<div>').html(o);
      const message = tempDOM.find('.action_result_message').text().trim();
      console.log(message);
      messagediv.innerHTML += `✅ ${message}<br>`;
    },
    error: function () {
      const failMsg = `❌ Failed to buy business ID ${id}`;
      console.warn(failMsg);
      messagediv.innerHTML += `${failMsg}<br>`;
    }
  });
}

// === Execute buying at intervals ===
const intervalId = setInterval(() => {
  if (bussid.length > 0) {
    buybus(bussid.shift());
  } else {
    clearInterval(intervalId);
    messagediv.innerHTML += "<br><strong style='color:#fff;'>🎉 Done buying all businesses.</strong>";
location.reload()
  }
}, 500);


	
}









function fetchGameData() {
    const url = "https://www.mocospace.com/games?gid=1000&r=890&source=internal&fakeWk=true&url=%2Fwap2%2Fgame%2Fstreetwars%2Finventory.jsp";

    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();
    
    // Set up the AJAX request
    xhr.open("GET", url, true);
    
    // Set the response type to 'document' so we can parse the HTML
    xhr.responseType = "document";
    
    // Define the function to run once the request is complete
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Get the document object from the response
            const doc = xhr.response;
            
            // Function to get the count of an element by its name
            function getCountByName(name) {
                const elements = doc.querySelectorAll('.game_item_name');
                for (const element of elements) {
                    if (element.textContent.includes(name)) {
                        const countElement = element.closest('.game_item').querySelector('.game_item_count');
                        return countElement ? countElement.textContent.trim() : 'Not found';
                    }
                }
                return 'Not found';
            }

            // Extract the counts
            const bountyCount = getCountByName('Bounties');
            const favorCount = getCountByName('Extra Favor');
            const battlePassCount = getCountByName('Battle Pass');
            
            // Create the div to display the counts
            const messageDiv = document.createElement("div");
            messageDiv.style.position = "fixed";
            messageDiv.style.top = "75px"; // Great top padding
            messageDiv.style.left = "20px"; // Some left padding
            messageDiv.style.padding = "25px";
            messageDiv.style.background = "linear-gradient(145deg, #4e8c9d, #2a5a6f)";
            messageDiv.style.color = "#f5f5f5";
            messageDiv.style.borderRadius = "15px";
            messageDiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
            messageDiv.style.fontSize = "18px";
            messageDiv.style.boxShadow = "5px 5px 20px rgba(0, 0, 0, 0.3)";
            messageDiv.style.zIndex = "9999";
            messageDiv.style.maxWidth = "300px";
            messageDiv.style.textAlign = "left";
            messageDiv.style.lineHeight = "1.5";
            messageDiv.style.border = "2px solid #2a5a6f";
            
            // Add content to the div
            messageDiv.innerHTML = `
                <div style="margin-bottom: 10px;"><strong>Bounties:</strong> <span style="font-size: 20px; font-weight: bold;">${bountyCount}</span></div>
                <div style="margin-bottom: 10px;"><strong>Extra Favor:</strong> <span style="font-size: 20px; font-weight: bold;">${favorCount}</span></div>
                <div><strong>Battle Pass:</strong> <span style="font-size: 20px; font-weight: bold;">${battlePassCount}</span></div>
            `;
            
            // Append the div to the body
            document.body.appendChild(messageDiv);
        } else {
            console.error("Failed to fetch the data.");
        }
    };
    
    // Send the request
    xhr.send();
}




 function sendfr(x){
	 
	 $.ajax({
		 url:"https://www.mocospace.com/servlet/api/buddy/sendUserBuddyRequest.do",
type:"post",
data:{
	receivingUserId: x,
source: 'profile'
	},
	
complete:function(){
alert('completed')
	
	
}})}



function getprofiledetails(){
// Create a container div to display info
const mcc = document.createElement('div');
document.body.appendChild(mcc);

// Apply styles
Object.assign(mcc.style, {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#00FF88',
    padding: '12px 16px',
    borderRadius: '12px',
    fontFamily: 'monospace',
    fontSize: '14px',
    whiteSpace: 'pre-line',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: 9999,
    maxWidth: '300px',
    lineHeight: '1.5',
    border: '1px solid #00FF88'
});

// Global variables to hold extracted data
let plevel = "None";
let income = "Unknown";
let level = "Unknown";

// Step 1: Get Prestige Level
$.ajax({
    url: "https://www.mocospace.com/games?gid=1000&r=407&source=internal&fakeWk=true&url=%2Fwap2%2Fgame%2Fstreetwars%2Fprofile-strength.jsp%3FtargetId%3D"+MocoSpaceAPI.loggedInUserId,
    type: "POST",
    success: function(response) {
        const parsedHTML = $('<div>').html(response);
        const icons = parsedHTML.find('.game_icon_large');

        for (let i = 0; i < icons.length; i++) {
            const alt = icons[i].alt || '';
            if (alt.includes('restige Level')) {
                plevel = alt;
                break;
            }
        }

        getIncome();
    }
});

// Step 2: Get Income
function getIncome() {
    $.ajax({
        url: "https://www.mocospace.com/games?gid=1000&r=142&source=internal&fakeWk=true&url=%2Fwap2%2Fgame%2Fstreetwars%2Fprofile_tab_stats.jsp%3Fid%3D"+MocoSpaceAPI.loggedInUserId,
        type: "POST",
        success: function(response) {
            const parsedHTML = $('<div>').html(response);
            const gradients = parsedHTML.find('.game_box.gradient1');

            for (let i = 0; i < gradients.length; i++) {
                if (gradients[i].innerHTML.includes('Income')) {
                    const cells = gradients[i].getElementsByClassName('cell3 rankN');
                    if (cells.length > 1) {
                        income = cells[1].innerHTML.trim();
                    }
                    break;
                }
            }

            getLevel();
        }
    });
}

// Step 3: Get Level
function getLevel() {
    $.ajax({
        url: "https://www.mocospace.com/games?gid=1000&r=145&source=internal&fakeWk=true&url=%2Fwap2%2Fgame%2Fstreetwars%2Fprofile.jsp",
        type: "POST",
        success: function(response) {
            const parsedHTML = $('<div>').html(response);
            const stats = parsedHTML.find('.stats1');

            if (stats.length > 0) {
                const levelElem = stats[0].getElementsByClassName('level')[0];
                if (levelElem) {
                    const parts = levelElem.innerHTML.split(' ');
                    if (parts.length > 1) {
                        level = parts[1].trim();
                    }
                }
            }

            // Display all gathered info
            mcc.innerText = `🧍 Level : ${level}\n💎 Plevel : ${plevel}\n💰 Income : ${income}`;
        }
    });
}


}


function jpx(){
	// 🔥 Switches to enable/disable scripts
let canExecuteScript1 = true; // If true, runs the first script
let canExecuteScript2 = true; // If true, runs the second script

// 🌟 Message Terminal Setup
let msgterminal = document.createElement('div');
msgterminal.style.position = 'fixed';
msgterminal.style.bottom = '20px';
msgterminal.style.right = '20px';
msgterminal.style.width = '400px';
msgterminal.style.height = '250px';
msgterminal.style.overflowY = 'auto';
msgterminal.style.padding = '15px';
msgterminal.style.background = 'rgba(0, 0, 0, 0.9)';
msgterminal.style.border = '2px solid #0bff62';
msgterminal.style.boxShadow = '0px 0px 15px #0bff62';
msgterminal.style.borderRadius = '10px';
msgterminal.style.fontFamily = 'Arial, sans-serif';
msgterminal.style.fontSize = '16px';
msgterminal.style.color = '#0bff62';
msgterminal.style.fontWeight = 'bold';
msgterminal.style.transition = 'all 0.3s ease-in-out';
msgterminal.style.textShadow = '0 0 5px #0bff62, 0 0 10px #00ff00';
msgterminal.style.maxHeight = '400px';
msgterminal.style.overflowX = 'hidden';

document.body.appendChild(msgterminal);
msgterminal.innerHTML = '';

// 🌟 Function to add animated messages
function addMessageEffect(text, color = '#0bff62') {
    let messageDiv = document.createElement('div');
    messageDiv.innerHTML = text;
    messageDiv.style.padding = '8px';
    messageDiv.style.marginBottom = '5px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.background = 'rgba(10, 50, 10, 0.5)';
    messageDiv.style.boxShadow = '0 0 5px ' + color;
    messageDiv.style.color = color;
    messageDiv.style.opacity = '0';
    messageDiv.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    messageDiv.style.transform = 'translateX(20px)';

    msgterminal.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
}

// 🌟 First script execution
let pc = [];
let istring = '';

function securev(x, y, targetname, callback) {
    $.ajax({
        url: "https://www.mocospace.com/wap2/game/streetwars/craft-api.jsp?r=" + +new Date + '&u=' + y + '&it=' + x,
        type: 'post',
        data: { cmd: 'collect', itemType: x },
        complete: function (o) {
            try {
                if (o.responseJSON.message) {
                    pc.push(o.responseJSON.message);
                }
            } catch (e) { }
            x = x + 1;
            if (x < 5) {
                securev(x, y, targetname, callback);
            } else {
                message(pc, y, targetname);
                addMessageEffect("✅ First script completed!", "#ffcc00");
                callback(); // Move to the next step
            }
        }
    });
}

function message(x, y, targetname) {
    for (i = 0; i < x.length; i++) {
        textx = x[i].replace(/\D/g, '');
        istring = istring + textx + ' , ';
    }
    msgterminal.innerHTML = msgterminal.innerHTML + targetname + ' secured : ' + istring.substring(0, istring.length - 3) + '<br>';
    istring = '';
    pc = [];
}

// 🌟 Second script execution (Crafting items)
let itemList = [
    1000949, 1000948, 1000947, 1000946, 1000945, 1000944, 1000943, 1000942, 1000941, 1000940,
    1000939, 1000938, 1000937, 1000936, 1000935, 1001524, 1001525, 1001526, 1001583, 1001584, 1001585
];

let itemNameList = [
    "Trojan Cow", "Robo-Golem", "Makeshift Spaceship", "Jawbreaker", "Rock Popper", "Ceramic Cocktail",
    "Tech-tical vest", "Fused Stone Club", "Flammable Rock Trap", "Heat Resistant Shield",
    "Automatic Leather Whip", "Tech Fueled Lock Box", "Metal Studded Stone Shield",
    "Fiber Bound Ceramic Knife", "Season Pass Sword", "Season Pass Shield",
    "Season Pass Treasure", "Season Pass Warrior Sword", "Season Pass Warrior Shield",
    "Season Pass Warrior Treasure"
];

function craftItems(index = 0, callback) {
    if (index >= itemList.length) {
        addMessageEffect('✅ Crafting completed!', '#ffcc00');
        callback(); // Move to next step
        return;
    }

    let itemId = itemList[index];
    let itemName = itemNameList[index] || "Unknown Item"; // If item name is missing, show "Unknown Item"

    addMessageEffect(`⏳ Crafting <span style="color: cyan;">${itemName}</span>...`, '#ff9900');

    $.ajax({
        url: 'https://www.mocospace.com/servlet/api/mob/itemcraft/craft.do',
        type: 'post',
        data: { itemId: itemId, amount: 10000 },
        complete: function () {
            addMessageEffect(`✔️ Successfully crafted <span style="color: cyan;">${itemName}</span>`, '#0bff62');

            // Delay before next request (1000ms = 1 second)
            setTimeout(() => {
                craftItems(index + 1, callback);
            }, 1000);
        }
    });
}

// 🌟 Execute Scripts Based on Flags
function executeScripts() {
    if (canExecuteScript1 && canExecuteScript2) {
        addMessageEffect("🚀 Running both scripts...", "#00ff00");
        securev(0, MocoSpaceAPI.loggedInUserId, MocoSpaceAPI.loggedInUserName, function () {
            setTimeout(() => {
                craftItems(0, function () {
                    console.log("goto next");
                   pxxn()
           setTimeout(fps0,2500)
                });
            }, 2000);
        });
    } else if (canExecuteScript1) {
        addMessageEffect("🚀 Running first script only...", "#00ff00");
        securev(0, MocoSpaceAPI.loggedInUserId, MocoSpaceAPI.loggedInUserName, function () {
            console.log("goto next");
           pxxn()
           setTimeout(fps0,2500)
        });
    } else if (canExecuteScript2) {
        addMessageEffect("🚀 Running crafting script only...", "#00ff00");
        craftItems(0, function () {
            console.log("goto next");
			pxxn()
           setTimeout(fps0,2500)
        });
    } else {
        addMessageEffect("❌ Both scripts are disabled. Nothing to execute.", "#ff0000");
        console.log("goto next");
		pxxn()
           setTimeout(fps0,2500)
    }
}

// Start execution
executeScripts();





}

/////

function afxx(){

var afspeed = 75;
var afxstop;

var afstart = document.createElement('div');
var afstop = document.createElement('div');
var afcontainer = document.createElement('div');

afstart.innerHTML = "Start";
afstop.innerHTML = "Stop";

// Style container to appear centered from top-left
afcontainer.style.position = 'fixed';
afcontainer.style.top = '50%';
afcontainer.style.left = '50%';
afcontainer.style.transform = 'translate(-50%, -50%)'; // center alignment
afcontainer.style.background = '#222';
afcontainer.style.padding = '10px';
afcontainer.style.borderRadius = '10px';
afcontainer.style.zIndex = '9999';
afcontainer.style.color = '#fff';
afcontainer.style.fontFamily = 'Arial';
afcontainer.style.display = 'flex';
afcontainer.style.gap = '10px';
afcontainer.style.cursor = 'pointer';

afstart.style.padding = '5px 10px';
afstart.style.background = '#4CAF50';
afstart.style.borderRadius = '5px';

afstop.style.padding = '5px 10px';
afstop.style.background = '#f44336';
afstop.style.borderRadius = '5px';

afcontainer.appendChild(afstart);
afcontainer.appendChild(afstop);
document.body.appendChild(afcontainer);

afstart.addEventListener('click', function () {
    afstart.style.opacity = '0.6';
    afstop.style.opacity = '1.0';
    clearInterval(afxstop);
    afxstop = setInterval(function () {
        var btn = document.getElementsByClassName('game_button dark game_auto_fight')[0];
        if (btn) btn.click();
    }, afspeed);
});

afstop.addEventListener('click', function () {
    afstop.style.opacity = '0.6';
    afstart.style.opacity = '1.0';
    clearInterval(afxstop);
});
}


