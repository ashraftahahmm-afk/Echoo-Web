
// عناصر DOM
const guestLogin = document.getElementById("guestLogin");
const googleLogin = document.getElementById("googleLogin");
const facebookLogin = document.getElementById("facebookLogin");
const twitterLogin = document.getElementById("twitterLogin");
const appleLogin = document.getElementById("appleLogin");

const openProfile = document.getElementById("openProfile");
const backToChat = document.getElementById("backToChat");
const profileContainer = document.getElementById("profile-container");
const profileName = document.getElementById("profileName");
const profileAvatar = document.getElementById("profileAvatar");
const profileStats = document.getElementById("profileStats");
const profileBio = document.getElementById("profileBio");

const chatContainer = document.getElementById("chat-container");
const messagesDiv = document.getElementById("messages");
const userNameSpan = document.getElementById("userName");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

let username = "";
let userID = "";
let userProfile = {id:"", name:"", avatar:"", status:"متاح", bio:"مرحبا! هذا ملفي الشخصي.", messages:0};

function generateUserID() {
  return 'user-' + Math.random().toString(36).substr(2, 9);
}

function startChat(platformName) {
  chatContainer.style.display = "block";
  document.getElementById("login-container").style.display = "none";
  userNameSpan.textContent = username + " (" + platformName + ")";
  userProfile.id = userID; userProfile.name=username; userProfile.avatar=`https://i.pravatar.cc/150?u=${userID}`;
}

// تسجيل دخول لكل المنصات
guestLogin.onclick = () => { username="Guest"+Math.floor(Math.random()*1000); userID=generateUserID(); startChat("Guest");}
googleLogin.onclick = () => { alert("Google Login جاهز للتفعيل لاحقًا"); username="GoogleUser"+Math.floor(Math.random()*1000); userID=generateUserID(); startChat("Google");}
facebookLogin.onclick = () => { alert("Facebook Login جاهز للتفعيل لاحقًا"); username="FBUser"+Math.floor(Math.random()*1000); userID=generateUserID(); startChat("Facebook");}
twitterLogin.onclick = () => { alert("Twitter Login جاهز للتفعيل لاحقًا"); username="TwitterUser"+Math.floor(Math.random()*1000); userID=generateUserID(); startChat("Twitter");}
appleLogin.onclick = () => { alert("Apple Login جاهز للتفعيل لاحقًا"); username="AppleUser"+Math.floor(Math.random()*1000); userID=generateUserID(); startChat("Apple");}

// فتح وغلق البروفايل
openProfile.onclick = () => {
  profileName.textContent=userProfile.name;
  profileAvatar.src=userProfile.avatar;
  profileStats.textContent=userProfile.messages;
  profileBio.textContent=userProfile.bio;
  profileContainer.style.display="block";
  chatContainer.style.display="none";
}
backToChat.onclick=()=>{profileContainer.style.display="none"; chatContainer.style.display="block";}

// إرسال الرسائل (محلي فقط placeholder)
sendBtn.onclick = () => {
  const msg=messageInput.value.trim();
  if(!msg) return;
  const msgElem=document.createElement("div");
  msgElem.className="message self";
  msgElem.textContent=msg;
  messagesDiv.appendChild(msgElem);
  messagesDiv.scrollTop=messagesDiv.scrollHeight;
  messageInput.value="";
  userProfile.messages++;
}
