var st = document.createElement('style');
st.innerText = '* { box-sizing: border-box; font-family: Arial, sans-serif; } body { margin: 0; padding: 10px 10px 75px 10px; background: #fff; color: #000; } body.dark { background: #121212; color: #f1f1f1; } .top-bar { display: flex; justify-content: space-between; align-items: center; gap: 6px; margin-bottom: 10px; } .pill-btn { border: 3px solid #000; border-radius: 15px; padding: 6px 10px; background: #f0f4ff; color: #000; font-weight: bold; font-size: 13px; } body.dark .pill-btn { border-color: #fff; background: #262626; color: #fff; } .pub-btn { border: 3px solid #000; border-radius: 20px; padding: 6px 12px; background: #fff; color: #000; font-weight: bold; font-size: 13px; } body.dark .pub-btn { border-color: #fff; background: #0026ff; color: #fff; } .search-box { border: 3px solid #000; border-radius: 18px; padding: 6px; display: flex; gap: 6px; margin-bottom: 15px; } body.dark .search-box { border-color: #fff; background: #1e1e1e; } .search-box input { flex: 1; border: 2px solid #000; border-radius: 10px; padding: 8px; min-width: 0; } body.dark .search-box input { border-color: #fff; background: #2c2c2c; color: #fff; } .search-box button { background: #0026ff; color: #fff; border: 2px solid #000; border-radius: 10px; padding: 8px 12px; font-weight: bold; } .logo { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; font-size: 30px; font-weight: bold; } .logo-box { background: #0026ff; color: #fff; border: 2px solid #000; border-radius: 10px; padding: 6px 16px; font-size: 18px; } .card { border: 3px solid #000; border-radius: 15px; padding: 10px; margin-bottom: 15px; background: #f9f9f9; } body.dark .card { border-color: #fff; background: #1e1e1e; } .thumb-box { width: 100%; height: 155px; border: 2px solid #000; border-radius: 10px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 19px; font-weight: bold; color: #fff; background-size: cover; background-position: center; text-align: center; padding: 10px; cursor: pointer; } body.dark .thumb-box { border-color: #fff; } .badge { display: inline-block; padding: 3px 8px; border: 2px solid #000; border-radius: 8px; font-size: 11px; font-weight: bold; margin-right: 5px; margin-bottom: 6px; background: #e0e0e0; color: #000; } .btn { background: #0026ff; color: #fff; border: 2px solid #000; border-radius: 10px; padding: 8px 14px; font-weight: bold; margin: 4px 2px; } body.dark .btn { border-color: #fff; } .btn-del { background: #d32f2f; color: #fff; border: 2px solid #000; border-radius: 10px; padding: 8px 10px; font-weight: bold; margin: 4px 2px; } .chan-link { color: #0026ff; font-weight: bold; text-decoration: underline; cursor: pointer; } body.dark .chan-link { color: #6ea8fe; } video { width: 100%; border: 3px solid #000; border-radius: 12px; background: #000; } .full-landscape { position: fixed; top: 50%; left: 50%; width: 100vh; height: 100vw; transform: translate(-50%, -50%) rotate(90deg); z-index: 999; border: none; border-radius: 0; } .exit-rotate-btn { display: none; position: fixed; top: 15px; right: 15px; z-index: 1000; background: #0026ff; color: #fff; border: 2px solid #fff; border-radius: 12px; padding: 8px 14px; font-weight: bold; } .nav { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; border-top: 3px solid #000; display: flex; justify-content: space-around; align-items: center; padding: 10px; z-index: 50; } body.dark .nav { background: #181818; border-color: #fff; } .ava-d { background: #ff5722; color: #fff; border: 2px solid #000; border-radius: 50%; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; font-weight: bold; overflow: hidden; background-size: cover; background-position: center; flex-shrink: 0; } body.dark .ava-d { border-color: #fff; } .comm { border-bottom: 1px solid #888; padding: 6px 0; font-size: 14px; } .modal-bg { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); z-index: 100; align-items: center; justify-content: center; padding: 15px; } .modal-box { background: #fff; color: #000; border: 4px solid #000; border-radius: 20px; padding: 15px; width: 100%; max-width: 400px; max-height: 90vh; overflow-y: auto; } body.dark .modal-box { background: #1e1e1e; color: #fff; border-color: #fff; } .inp-full { width: 100%; padding: 8px; border: 2px solid #000; border-radius: 10px; margin: 6px 0 10px 0; } body.dark .inp-full { background: #2c2c2c; color: #fff; border-color: #fff; } .desc-box { background: #f0f4ff; color: #000; border: 2px solid #000; border-radius: 12px; padding: 10px; margin: 10px 0; font-size: 14px; } body.dark .desc-box { background: #252525; color: #fff; border-color: #fff; } .color-dot { width: 30px; height: 30px; border-radius: 50%; border: 2px solid #000; display: inline-block; margin-right: 6px; }';
document.head.appendChild(st);

function el(tag, cls, txt) {
  var d = document.createElement(tag);
  if (cls) d.className = cls;
  if (txt !== undefined) d.innerText = txt;
  return d;
}

var lang = 'ru';
var likes = 24;
var dislikes = 0;
var db = null;
var curTitle = '';
var curDesc = '';
var curAuthor = 'Димон';
var vidCount = 0;
var histTxt = '';
var laterTxt = '';

var chName = localStorage.getItem('oleg_chan_name') || 'Димон';
var chDesc = localStorage.getItem('oleg_chan_desc') || 'Всем привет! Выкладываю приколы 2007 года.';
var chColor = localStorage.getItem('oleg_chan_color') || '#ff5722';
var chImg = localStorage.getItem('oleg_chan_img') || '';
var isDark = localStorage.getItem('oleg_dark') === '1';

var subState = { 'Пацан_2007': true, 'Повар_2007': true, 'Архив_ТВ_2006': false };
var channelsInfo = {
  'Пацан_2007': { ava: 'П', color: '#0026ff', subs: '1 420 подписчиков', desc: 'Легенды двора, ИК-порт и архивы 2007 года.' },
  'Повар_2007': { ava: 'П', color: '#4caf50', subs: '8 900 подписчиков', desc: 'Официальный канал автора мема про профессию!' },
  'Архив_ТВ_2006': { ava: '8', color: '#000000', subs: '530 подписчиков', desc: 'Новогодние эфиры и реклама с телека.' }
};

var homeScreen = el('div');
var topBar = el('div', 'top-bar');
var leftBtns = el('div');
leftBtns.style.display = 'flex';
leftBtns.style.gap = '5px';
var btnLang = el('button', 'pill-btn', 'RU / EN');
var btnTheme = el('button', 'pill-btn', 'Темная');
leftBtns.appendChild(btnLang);
leftBtns.appendChild(btnTheme);
var btnPub = el('button', 'pub-btn', '+ Опубликовать');
topBar.appendChild(leftBtns);
topBar.appendChild(btnPub);

var searchBox = el('div', 'search-box');
var searchInp = el('input');
searchInp.placeholder = 'Поиск по Олегу (Пацан, 2007)';
var btnSearch = el('button', '', 'Найти');
searchBox.appendChild(searchInp);
searchBox.appendChild(btnSearch);

var logoRow = el('div', 'logo');
logoRow.appendChild(el('div', 'logo-box', '▶'));
var logoTxt = el('div', '', 'Олег');
logoRow.appendChild(logoTxt);

var userFeed = el('div');
var defaultFeed = el('div');

function mkDefaultCard(grad, thumbTxt, badgeTxt, badgeBg, titleTxt, chanName, viewsTxt, openFn) {
  var c = el('div', 'card video-item');
  c.setAttribute('data-title', titleTxt.toLowerCase());
  var th = el('div', 'thumb-box', thumbTxt);
  th.style.background = grad;
  th.onclick = openFn;
  var bg = el('span', 'badge', badgeTxt);
  if (badgeBg) bg.style.background = badgeBg;
  var h = el('h3', '', titleTxt);
  h.style.margin = '4px 0';
  var p = el('p');
  p.style.fontSize = '13px';
  p.style.margin = '4px 0';
  p.appendChild(el('span', '', 'Канал: '));
  var lnk = el('span', 'chan-link', chanName);
  lnk.onclick = function() { openChannelPage(chanName); };
  p.appendChild(lnk);
  p.appendChild(el('span', '', ' • ' + viewsTxt));
  var b = el('button', 'btn', 'Смотреть');
  b.onclick = openFn;
  c.appendChild(th);
  c.appendChild(bg);
  c.appendChild(h);
  c.appendChild(p);
  c.appendChild(b);
  return c;
}

defaultFeed.appendChild(mkDefaultCard('linear-gradient(135deg, #ff5722, #212121)', 'КАКОВА ТВОЯ ПРОФЕССИЯ? (2005)', 'Не для детей (2007)', '', 'Повар спрашивает Повара мем', 'Повар_2007', '23 тыс. просм.', function() {
  startWatch('povar.mp4', 'Повар спрашивает Повара мем', 'Классика 2005 года.', 'Какова твоя профессия? Повар!', 'Повар_2007');
}));
defaultFeed.appendChild(mkDefaultCard('linear-gradient(135deg, #0026ff, #00bcd4)', '8 800 555 35 35 • НОВЫЙ 2006 ГОД', 'Для всех возрастов', '#ffeb3b', '8 800 555 35 35 (С Новым 2006 годом!)', 'Пацан_2007', '880 тыс. просм.', function() {
  startWatch('putin2006.mp4', '8 800 555 35 35 (С Новым 2006 годом!)', 'Архив 2006 года.', 'С Новым 2006 годом, пацаны!', 'Пацан_2007');
}));

homeScreen.appendChild(topBar);
homeScreen.appendChild(searchBox);
homeScreen.appendChild(logoRow);
homeScreen.appendChild(userFeed);
homeScreen.appendChild(defaultFeed);

var subsScreen = el('div');
subsScreen.style.display = 'none';
var subsLogo = el('div', 'logo');
subsLogo.appendChild(el('div', 'logo-box', '📺'));
subsLogo.appendChild(el('div', '', 'Подписки'));
var channelsList = el('div');
subsScreen.appendChild(subsLogo);
subsScreen.appendChild(channelsList);

var visitScreen = el('div');
visitScreen.style.display = 'none';
var btnBackChan = el('button', 'btn', '← Назад');
btnBackChan.onclick = function() { showScreen(homeScreen); };
var vLogo = el('div', 'logo');
vLogo.style.marginTop = '10px';
var vChanAva = el('div', 'ava-d', 'П');
vChanAva.style.width = '54px';
vChanAva.style.height = '54px';
vChanAva.style.fontSize = '24px';
var vInfoBox = el('div');
var vChanName = el('div', '', 'Пацан_2007');
vChanName.style.fontSize = '24px';
var vChanSubs = el('div', '', '1 420 подписчиков');
vChanSubs.style.fontSize = '13px';
vChanSubs.style.fontWeight = 'normal';
vInfoBox.appendChild(vChanName);
vInfoBox.appendChild(vChanSubs);
vLogo.appendChild(vChanAva);
vLogo.appendChild(vInfoBox);
var vCard = el('div', 'card');
var vChanDesc = el('p');
var btnVisitSub = el('button', 'btn', 'Подписаться');
btnVisitSub.style.width = '100%';
vCard.appendChild(vChanDesc);
vCard.appendChild(btnVisitSub);
var vChanVideos = el('div');
visitScreen.appendChild(btnBackChan);
visitScreen.appendChild(vLogo);
visitScreen.appendChild(vCard);
visitScreen.appendChild(vChanVideos);
var libScreen = el('div');
libScreen.style.display = 'none';
var libLogo = el('div', 'logo');
libLogo.appendChild(el('div', 'logo-box', '📚'));
libLogo.appendChild(el('div', '', 'Библиотека'));
var watchLaterList = el('div');
var historyList = el('div');
libScreen.appendChild(libLogo);
libScreen.appendChild(el('h3', '', 'Смотреть позже'));
libScreen.appendChild(watchLaterList);
libScreen.appendChild(el('h3', '', 'История просмотра'));
libScreen.appendChild(historyList);
var profScreen = el('div');
profScreen.style.display = 'none';
var pLogo = el('div', 'logo');
var bigChanAva = el('div', 'ava-d', 'Д');
bigChanAva.style.width = '52px';
bigChanAva.style.height = '52px';
bigChanAva.style.fontSize = '22px';
var bigChanName = el('div', '', 'Димон');
pLogo.appendChild(bigChanAva);
pLogo.appendChild(bigChanName);
var pCard = el('div', 'card');
var bigChanDesc = el('p');
var profStats = el('p', '', 'Загружено видео: 0');
var btnEditChan = el('button', 'btn', 'Настроить канал');
btnEditChan.style.width = '100%';
btnEditChan.style.background = '#fff';
btnEditChan.style.color = '#000';
var btnProfUp = el('button', 'btn', '+ Загрузить видос');
btnProfUp.style.width = '100%';
pCard.appendChild(el('b', '', 'О канале:'));
pCard.appendChild(bigChanDesc);
pCard.appendChild(profStats);
pCard.appendChild(btnEditChan);
pCard.appendChild(btnProfUp);
profScreen.appendChild(pLogo);
profScreen.appendChild(pCard);
var watchScreen = el('div');
watchScreen.style.display = 'none';
var btnBack = el('button', 'btn', '← Назад');
var btnRot = el('button', 'btn', 'Повернуть');
btnRot.style.background = '#fff';
btnRot.style.color = '#000';
var wTitle = el('h2');
var wAuthP = el('p', '', 'Автор: ');
wAuthP.style.fontSize = '13px';
var wAuthLink = el('span', 'chan-link', 'Димон');
wAuthP.appendChild(wAuthLink);
var wPlayer = el('video');
wPlayer.controls = true;
wPlayer.setAttribute('playsinline', '');
var btnExitRot = el('button', 'exit-rotate-btn', 'X Вернуть экран');
var actRow = el('div');
actRow.style.marginTop = '8px';
var btnLike = el('button', 'btn', 'Лайк (24)');
var btnDis = el('button', 'btn', 'Дизлайк (0)');
btnDis.style.background = '#555';
var btnLater = el('button', 'btn', 'В библиотеку');
btnLater.style.background = '#ffeb3b';
btnLater.style.color = '#000';
var btnShare = el('button', 'btn', 'Поделиться');
btnShare.style.background = '#fff';
btnShare.style.color = '#000';
actRow.appendChild(btnLike);
actRow.appendChild(btnDis);
actRow.appendChild(btnLater);
actRow.appendChild(btnShare);
var dBox = el('div', 'desc-box');
dBox.appendChild(el('b', '', 'Описание:'));
var wDesc = el('p');
dBox.appendChild(wDesc);
var cRow = el('div');
cRow.style.display = 'flex';
cRow.style.gap = '5px';
cRow.style.marginBottom = '10px';
var commInp = el('input');
commInp.placeholder = 'Комментарий...';
commInp.style.flex = '1';
commInp.style.padding = '8px';
commInp.style.border = '2px solid #000';
commInp.style.borderRadius = '10px';
var btnSendComm = el('button', 'btn', 'Ок');
cRow.appendChild(commInp);
cRow.appendChild(btnSendComm);
var commList = el('div');
watchScreen.appendChild(btnBack);
watchScreen.appendChild(btnRot);
watchScreen.appendChild(wTitle);
watchScreen.appendChild(wAuthP);
watchScreen.appendChild(wPlayer);
watchScreen.appendChild(btnExitRot);
watchScreen.appendChild(actRow);
watchScreen.appendChild(dBox);
watchScreen.appendChild(el('h3', '', 'Комментарии'));
watchScreen.appendChild(cRow);
watchScreen.appendChild(commList);
var editModal = el('div', 'modal-bg');
var editBox = el('div', 'modal-box');
editBox.appendChild(el('h2', '', 'Настройки канала'));
editBox.appendChild(el('b', '', '1. Название:'));
var editNameInp = el('input', 'inp-full');
editBox.appendChild(editNameInp);
editBox.appendChild(el('b', '', '2. Описание:'));
var editDescInp = el('textarea', 'inp-full');
editBox.appendChild(editDescInp);
editBox.appendChild(el('b', '', '3. Аватарка из галереи:'));
var editAvaFile = el('input', 'inp-full');
editAvaFile.type = 'file';
editAvaFile.accept = 'image/*';
editBox.appendChild(editAvaFile);
editBox.appendChild(el('b', '', '4. Цвет кружка:'));
var colorsRow = el('div');
colorsRow.style.margin = '8px 0 12px 0';
var cols = new Array('#ff5722', '#0026ff', '#4caf50', '#9c27b0', '#000000');
cols.forEach(function(hex) {
var dot = el('span', 'color-dot');
dot.style.background = hex;
dot.onclick = function() { chColor = hex; chImg = ''; };
colorsRow.appendChild(dot);
});
editBox.appendChild(colorsRow);
var btnSaveChan = el('button', 'btn', 'Сохранить');
btnSaveChan.style.width = '100%';
var btnCancelChan = el('button', 'btn', 'Отмена');
btnCancelChan.style.width = '100%';
btnCancelChan.style.background = '#555';
editBox.appendChild(btnSaveChan);
editBox.appendChild(btnCancelChan);
editModal.appendChild(editBox);
var upModal = el('div', 'modal-bg');
var upBox = el('div', 'modal-box');
upBox.appendChild(el('h2', '', 'Студия Олег'));
upBox.appendChild(el('b', '', '1. Видеофайл:'));
var newVidFile = el('input', 'inp-full');
newVidFile.type = 'file';
newVidFile.accept = 'video/';
upBox.appendChild(newVidFile);
upBox.appendChild(el('b', '', '2. Превьюшка (картинка):'));
var newVidThumb = el('input', 'inp-full');
newVidThumb.type = 'file';
newVidThumb.accept = 'image/';
upBox.appendChild(newVidThumb);
upBox.appendChild(el('b', '', '3. Название:'));
var newVidTitle = el('input', 'inp-full');
upBox.appendChild(newVidTitle);
upBox.appendChild(el('b', '', '4. Описание:'));
var newVidDesc = el('textarea', 'inp-full');
upBox.appendChild(newVidDesc);
upBox.appendChild(el('b', '', '5. Аудитория:'));
var audSel = el('select', 'inp-full');
var o1 = el('option', '', 'Для детей');
o1.value = 'kids';
var o2 = el('option', '', 'Не для детей (2007)');
o2.value = 'not_kids';
audSel.appendChild(o1);
audSel.appendChild(o2);
upBox.appendChild(audSel);
var btnConfirmUp = el('button', 'btn', 'Опубликовать');
btnConfirmUp.style.width = '100%';
var btnCancelUp = el('button', 'btn', 'Отмена');
btnCancelUp.style.width = '100%';
btnCancelUp.style.background = '#555';
upBox.appendChild(btnConfirmUp);
upBox.appendChild(btnCancelUp);
upModal.appendChild(upBox);
var navBar = el('div', 'nav');
var navHome = el('b', '', 'Главная');
var navSubs = el('span', '', 'Подписки');
var navLib = el('span', '', 'Библиотека');
var navProf = el('div', 'ava-d', 'Д');
navBar.appendChild(navHome);
navBar.appendChild(navSubs);
navBar.appendChild(navLib);
navBar.appendChild(navProf);
document.body.appendChild(homeScreen);
document.body.appendChild(subsScreen);
document.body.appendChild(visitScreen);
document.body.appendChild(libScreen);
document.body.appendChild(profScreen);
document.body.appendChild(watchScreen);
document.body.appendChild(editModal);
document.body.appendChild(upModal);
document.body.appendChild(navBar);
function showScreen(scr) {
wPlayer.pause();
homeScreen.style.display = 'none';
subsScreen.style.display = 'none';
visitScreen.style.display = 'none';
libScreen.style.display = 'none';
profScreen.style.display = 'none';
watchScreen.style.display = 'none';
scr.style.display = 'block';
}
function applyTheme() {
if (isDark) {
document.body.classList.add('dark');
btnTheme.innerText = 'Светлая';
} else {
document.body.classList.remove('dark');
btnTheme.innerText = 'Темная';
}
}
applyTheme();
btnTheme.onclick = function() {
isDark = !isDark;
localStorage.setItem('oleg_dark', isDark ? '1' : '0');
applyTheme();
};
btnLang.onclick = function() {
lang = lang === 'ru' ? 'en' : 'ru';
var ru = lang === 'ru';
btnLang.innerText = ru ? 'RU / EN' : 'EN / RU';
btnPub.innerText = ru ? '+ Опубликовать' : '+ Upload';
logoTxt.innerText = ru ? 'Олег' : 'Oleg';
navHome.innerText = ru ? 'Главная' : 'Home';
navSubs.innerText = ru ? 'Подписки' : 'Subs';
navLib.innerText = ru ? 'Библиотека' : 'Library';
loadVideos();
};
function updateProfileUI() {
var letter = chName.trim() !== '' ? chName.trim().charAt(0).toUpperCase() : 'Д';
bigChanName.innerText = chName;
bigChanDesc.innerText = chDesc;
if (chImg !== '') {
navProf.style.backgroundImage = 'url(' + chImg + ')';
navProf.innerText = '';
bigChanAva.style.backgroundImage = 'url(' + chImg + ')';
bigChanAva.innerText = '';
} else {
navProf.style.backgroundImage = 'none';
navProf.style.backgroundColor = chColor;
navProf.innerText = letter;
bigChanAva.style.backgroundImage = 'none';
bigChanAva.style.backgroundColor = chColor;
bigChanAva.innerText = letter;
}
}
updateProfileUI();
btnEditChan.onclick = function() {
editNameInp.value = chName;
editDescInp.value = chDesc;
editModal.style.display = 'flex';
};
btnCancelChan.onclick = function() { editModal.style.display = 'none'; };
btnSaveChan.onclick = function() {
if (editNameInp.value.trim() !== '') chName = editNameInp.value.trim();
if (editDescInp.value.trim() !== '') chDesc = editDescInp.value.trim();
var f = editAvaFile.files.item(0);
function fin() {
localStorage.setItem('oleg_chan_name', chName);
localStorage.setItem('oleg_chan_desc', chDesc);
localStorage.setItem('oleg_chan_color', chColor);
localStorage.setItem('oleg_chan_img', chImg);
updateProfileUI();
loadVideos();
editModal.style.display = 'none';
}
if (f) {
var r = new FileReader();
r.onload = function(e) { chImg = e.target.result; fin(); };
r.readAsDataURL(f);
} else fin();
};
var req = indexedDB.open('OlegVideoDB_v2', 1);
req.onupgradeneeded = function(e) { e.target.result.createObjectStore('videos', { keyPath: 'id', autoIncrement: true }); };
req.onsuccess = function(e) { db = e.target.result; loadVideos(); };
function loadVideos() {
if (!db) return;
userFeed.innerHTML = '';
vidCount = 0;
var tx = db.transaction('videos', 'readonly');
tx.objectStore('videos').openCursor(null, 'prev').onsuccess = function(e) {
var cur = e.target.result;
if (cur) {
vidCount = vidCount + 1;
var item = cur.value;
var url = URL.createObjectURL(item.fileBlob);
var c = el('div', 'card video-item');
c.setAttribute('data-title', (item.title + ' ' + item.desc).toLowerCase());
var openFn = function() { startWatch(url, item.title, item.desc, 'Крутой видос!', chName); };
var th = el('div', 'thumb-box');
th.onclick = openFn;
if (item.thumbBlob) {
th.style.backgroundImage = 'url(' + URL.createObjectURL(item.thumbBlob) + ')';
} else {
th.style.background = 'linear-gradient(135deg, #0026ff, #111111)';
th.innerText = item.title;
}
var bg = el('span', 'badge', item.audience === 'kids' ? 'Для детей' : 'Не для детей (2007)');
if (item.audience === 'kids') bg.style.background = '#ffeb3b';
var h = el('h3', '', item.title);
var p = el('p', '', 'Канал: ');
p.style.fontSize = '13px';
var lnk = el('span', 'chan-link', chName);
lnk.onclick = function() { showScreen(profScreen); };
p.appendChild(lnk);
var bP = el('button', 'btn', 'Смотреть');
bP.onclick = openFn;
var bD = el('button', 'btn-del', 'Удалить');
bD.onclick = function() {
var dtx = db.transaction('videos', 'readwrite');
dtx.objectStore('videos').delete(item.id);
dtx.oncomplete = loadVideos;
};
c.appendChild(th);
c.appendChild(bg);
c.appendChild(h);
c.appendChild(p);
c.appendChild(bP);
c.appendChild(bD);
userFeed.appendChild(c);
cur.continue();
} else {
profStats.innerText = 'Загружено видео: ' + vidCount;
}
};
}
function openChannelPage(cName) {
if (cName === chName) { showScreen(profScreen); return; }
var info = channelsInfo[cName] || { ava: cName.charAt(0), color: '#0026ff', subs: '420 подписчиков', desc: 'Канал в Олег.' };
vChanAva.innerText = info.ava;
vChanAva.style.backgroundColor = info.color;
vChanName.innerText = cName;
vChanSubs.innerText = info.subs;
vChanDesc.innerText = info.desc;
var isSub = !!subState[cName];
btnVisitSub.style.background = isSub ? '#777' : '#0026ff';
btnVisitSub.innerText = isSub ? 'Вы подписаны' : 'Подписаться';
btnVisitSub.onclick = function() { subState[cName] = !subState[cName]; openChannelPage(cName); };
vChanVideos.innerHTML = '';
if (cName === 'Повар_2007') {
vChanVideos.appendChild(mkDefaultCard('linear-gradient(135deg, #ff5722, #212121)', 'КАКОВА ТВОЯ ПРОФЕССИЯ?', '2007', '', 'Повар спрашивает Повара мем', 'Повар_2007', '23 тыс.', function() {
startWatch('povar.mp4', 'Повар спрашивает Повара мем', 'Классика 2005 года.', 'Какова твоя профессия? Повар!', 'Повар_2007');
}));
} else {
vChanVideos.appendChild(mkDefaultCard('linear-gradient(135deg, #0026ff, #00bcd4)', 'НОВЫЙ 2006 ГОД', 'Для всех', '#ffeb3b', '8 800 555 35 35 (С Новым 2006 годом!)', 'Пацан_2007', '880 тыс.', function() {
startWatch('putin2006.mp4', '8 800 555 35 35 (С Новым 2006 годом!)', 'Архив 2006 года.', 'С Новым 2006 годом, пацаны!', 'Пацан_2007');
}));
}
showScreen(visitScreen);
}
navHome.onclick = function() { showScreen(homeScreen); };
navProf.onclick = function() { showScreen(profScreen); };
navSubs.onclick = function() {
channelsList.innerHTML = '';
Object.keys(channelsInfo).forEach(function(name) {
var info = channelsInfo[name];
var st = !!subState[name];
var c = el('div', 'card');
var lnk = el('b', 'chan-link', name);
lnk.onclick = function() { openChannelPage(name); };
var bOpen = el('button', 'btn', 'Открыть канал');
bOpen.style.background = '#fff';
bOpen.style.color = '#000';
bOpen.onclick = function() { openChannelPage(name); };
var bSub = el('button', 'btn', st ? 'Вы подписаны' : 'Подписаться');
bSub.style.background = st ? '#777' : '#0026ff';
bSub.onclick = function() { subState[name] = !subState[name]; navSubs.click(); };
c.appendChild(lnk);
c.appendChild(el('p', '', info.desc));
c.appendChild(bOpen);
c.appendChild(bSub);
channelsList.appendChild(c);
});
showScreen(subsScreen);
};
navLib.onclick = function() {
historyList.innerHTML = '';
var hc = el('div', 'card', histTxt || 'История пуста');
hc.style.whiteSpace = 'pre-line';
historyList.appendChild(hc);
watchLaterList.innerHTML = '';
var lc = el('div', 'card', laterTxt || 'Список пуст');
lc.style.whiteSpace = 'pre-line';
watchLaterList.appendChild(lc);
showScreen(libScreen);
};
btnPub.onclick = function() { upModal.style.display = 'flex'; };
btnProfUp.onclick = function() { upModal.style.display = 'flex'; };
btnCancelUp.onclick = function() { upModal.style.display = 'none'; };
btnConfirmUp.onclick = function() {
var f = newVidFile.files.item(0);
if (!f) { alert('Выберите видео!'); return; }
var tx = db.transaction('videos', 'readwrite');
tx.objectStore('videos').add({
title: newVidTitle.value || 'Видео от ' + chName,
desc: newVidDesc.value || 'Описание отсутствует.',
audience: audSel.value,
fileBlob: f,
thumbBlob: newVidThumb.files.item(0) || null
});
tx.oncomplete = function() {
newVidTitle.value = '';
newVidDesc.value = '';
newVidFile.value = '';
newVidThumb.value = '';
upModal.style.display = 'none';
showScreen(homeScreen);
loadVideos();
};
};
btnSearch.onclick = function() {
var q = searchInp.value.toLowerCase();
document.querySelectorAll('.video-item').forEach(function(c) {
c.style.display = (c.getAttribute('data-title') + ' ' + c.innerText).toLowerCase().indexOf(q) !== -1 ? 'block' : 'none';
});
};
function addCommEl(author, text, startL) {
var box = el('div', 'comm');
var msg = el('div');
msg.appendChild(el('b', '', author + ': '));
msg.appendChild(el('span', '', text));
var cL = startL;
var cD = 0;
var bar = el('div');
bar.style.marginTop = '4px';
var bL = el('button', '', '+' + cL);
bL.onclick = function() { cL = cL + 1; bL.innerText = '+' + cL; };
var bD = el('button', '', '-' + cD);
bD.style.marginLeft = '6px';
bD.onclick = function() { cD = cD + 1; bD.innerText = '-' + cD; };
var bRep = el('button', '', 'Ответить');
bRep.style.marginLeft = '8px';
bRep.style.color = '#0026ff';
var repList = el('div');
repList.style.marginLeft = '15px';
repList.style.borderLeft = '2px solid #0026ff';
repList.style.paddingLeft = '6px';
bRep.onclick = function() {
var ans = prompt('Ответ для ' + author + ':');
if (ans) {
var rDiv = el('div');
rDiv.appendChild(el('b', '', chName + ' -> ' + author + ': '));
rDiv.appendChild(el('span', '', ans));
repList.appendChild(rDiv);
}
};
bar.appendChild(bL);
bar.appendChild(bD);
bar.appendChild(bRep);
box.appendChild(msg);
box.appendChild(bar);
box.appendChild(repList);
return box;
}
function startWatch(file, title, desc, firstComm, authorName) {
curTitle = title;
curDesc = desc;
curAuthor = authorName || chName;
histTxt = title + '\n' + histTxt;
showScreen(watchScreen);
wTitle.innerText = title;
wAuthLink.innerText = curAuthor;
wAuthLink.onclick = function() { openChannelPage(curAuthor); };
wDesc.innerText = desc;
commList.innerHTML = '';
commList.appendChild(addCommEl('Пацан_2007', firstComm, 7));
likes = 24;
dislikes = 0;
btnLike.innerText = 'Лайк (24)';
btnDis.innerText = 'Дизлайк (0)';
wPlayer.src = file;
wPlayer.load();
wPlayer.play();
}
btnBack.onclick = function() { showScreen(homeScreen); };
btnRot.onclick = function() { wPlayer.classList.add('full-landscape'); btnExitRot.style.display = 'block'; };
btnExitRot.onclick = function() { wPlayer.classList.remove('full-landscape'); this.style.display = 'none'; };
btnLike.onclick = function() { likes = likes + 1; this.innerText = 'Лайк (' + likes + ')'; };
btnDis.onclick = function() { dislikes = dislikes + 1; this.innerText = 'Дизлайк (' + dislikes + ')'; };
btnLater.onclick = function() { laterTxt = curTitle + '\n' + laterTxt; this.innerText = 'В библиотеке'; };
btnShare.onclick = function() {
if (navigator.share) navigator.share({ title: curTitle, text: 'Олег: ' + curTitle }).catch(function() {});
else alert('Олег: ' + curTitle);
};
btnSendComm.onclick = function() {
if (commInp.value !== '') {
commList.insertBefore(addCommEl(chName, commInp.value, 0), commList.firstChild);
commInp.value = '';
}
};var btnVisitSub = el('button', 'btn', 'Подписаться');
btnVisitSub.style.width = '100%';
vCard.appendChild(vChanDesc);
vCard.appendChild(btnVisitSub);
var vChanVideos = el('div');
visitScreen.appendChild(btnBackChan);
visitScreen.appendChild(vLogo);
visitScreen.appendChild(vCard);
visitScreen.appendChild(vChanVideos);
var libScreen = el('div');
libScreen.style.display = 'none';
var libLogo = el('div', 'logo');
libLogo.appendChild(el('div', 'logo-box', '📚'));
libLogo.appendChild(el('div', '', 'Библиотека'));
var watchLaterList = el('div');
var historyList = el('div');
libScreen.appendChild(libLogo);
libScreen.appendChild(el('h3', '', 'Смотреть позже'));
libScreen.appendChild(watchLaterList);
libScreen.appendChild(el('h3', '', 'История просмотра'));
libScreen.appendChild(historyList);
var profScreen = el('div');
profScreen.style.display = 'none';
var pLogo = el('div', 'logo');
var bigChanAva = el('div', 'ava-d', 'Д');
bigChanAva.style.width = '52px';
bigChanAva.style.height = '52px';
bigChanAva.style.fontSize = '22px';
var bigChanName = el('div', '', 'Димон');
pLogo.appendChild(bigChanAva);
pLogo.appendChild(bigChanName);
var pCard = el('div', 'card');
var bigChanDesc = el('p');
var profStats = el('p', '', 'Загружено видео: 0');
var btnEditChan = el('button', 'btn', 'Настроить канал');
btnEditChan.style.width = '100%';
btnEditChan.style.background = '#fff';
btnEditChan.style.color = '#000';
var btnProfUp = el('button', 'btn', '+ Загрузить видос');
btnProfUp.style.width = '100%';
pCard.appendChild(el('b', '', 'О канале:'));
pCard.appendChild(bigChanDesc);
pCard.appendChild(profStats);
pCard.appendChild(btnEditChan);
pCard.appendChild(btnProfUp);
profScreen.appendChild(pLogo);
profScreen.appendChild(pCard);
var watchScreen = el('div');
watchScreen.style.display = 'none';
var btnBack = el('button', 'btn', '← Назад');
var btnRot = el('button', 'btn', 'Повернуть');
btnRot.style.background = '#fff';
btnRot.style.color = '#000';
var wTitle = el('h2');
var wAuthP = el('p', '', 'Автор: ');
wAuthP.style.fontSize = '13px';
var wAuthLink = el('span', 'chan-link', 'Димон');
wAuthP.appendChild(wAuthLink);
var wPlayer = el('video');
wPlayer.controls = true;
wPlayer.setAttribute('playsinline', '');
var btnExitRot = el('button', 'exit-rotate-btn', 'X Вернуть экран');
var actRow = el('div');
actRow.style.marginTop = '8px';
var btnLike = el('button', 'btn', 'Лайк (24)');
var btnDis = el('button', 'btn', 'Дизлайк (0)');
btnDis.style.background = '#555';
var btnLater = el('button', 'btn', 'В библиотеку');
btnLater.style.background = '#ffeb3b';
btnLater.style.color = '#000';
var btnShare = el('button', 'btn', 'Поделиться');
btnShare.style.background = '#fff';
btnShare.style.color = '#000';
actRow.appendChild(btnLike);
actRow.appendChild(btnDis);
actRow.appendChild(btnLater);
actRow.appendChild(btnShare);
var dBox = el('div', 'desc-box');
dBox.appendChild(el('b', '', 'Описание:'));
var wDesc = el('p');
dBox.appendChild(wDesc);
var cRow = el('div');
cRow.style.display = 'flex';
cRow.style.gap = '5px';
cRow.style.marginBottom = '10px';
var commInp = el('input');
commInp.placeholder = 'Комментарий...';
commInp.style.flex = '1';
commInp.style.padding = '8px';
commInp.style.border = '2px solid #000';
commInp.style.borderRadius = '10px';
var btnSendComm = el('button', 'btn', 'Ок');
cRow.appendChild(commInp);
cRow.appendChild(btnSendComm);
var commList = el('div');
watchScreen.appendChild(btnBack);
watchScreen.appendChild(btnRot);
watchScreen.appendChild(wTitle);
watchScreen.appendChild(wAuthP);
watchScreen.appendChild(wPlayer);
watchScreen.appendChild(btnExitRot);
watchScreen.appendChild(actRow);
watchScreen.appendChild(dBox);
watchScreen.appendChild(el('h3', '', 'Комментарии'));
watchScreen.appendChild(cRow);
watchScreen.appendChild(commList);
var editModal = el('div', 'modal-bg');
var editBox = el('div', 'modal-box');
editBox.appendChild(el('h2', '', 'Настройки канала'));
editBox.appendChild(el('b', '', '1. Название:'));
var editNameInp = el('input', 'inp-full');
editBox.appendChild(editNameInp);
editBox.appendChild(el('b', '', '2. Описание:'));
var editDescInp = el('textarea', 'inp-full');
editBox.appendChild(editDescInp);
editBox.appendChild(el('b', '', '3. Аватарка из галереи:'));
var editAvaFile = el('input', 'inp-full');
editAvaFile.type = 'file';
editAvaFile.accept = 'image/*';
editBox.appendChild(editAvaFile);
editBox.appendChild(el('b', '', '4. Цвет кружка:'));
var colorsRow = el('div');
colorsRow.style.margin = '8px 0 12px 0';
var cols = new Array('#ff5722', '#0026ff', '#4caf50', '#9c27b0', '#000000');
cols.forEach(function(hex) {
var dot = el('span', 'color-dot');
dot.style.background = hex;
dot.onclick = function() { chColor = hex; chImg = ''; };
colorsRow.appendChild(dot);
});
editBox.appendChild(colorsRow);
var btnSaveChan = el('button', 'btn', 'Сохранить');
btnSaveChan.style.width = '100%';
var btnCancelChan = el('button', 'btn', 'Отмена');
btnCancelChan.style.width = '100%';
btnCancelChan.style.background = '#555';
editBox.appendChild(btnSaveChan);
editBox.appendChild(btnCancelChan);
editModal.appendChild(editBox);
var upModal = el('div', 'modal-bg');
var upBox = el('div', 'modal-box');
upBox.appendChild(el('h2', '', 'Студия Олег'));
upBox.appendChild(el('b', '', '1. Видеофайл:'));
var newVidFile = el('input', 'inp-full');
newVidFile.type = 'file';
newVidFile.accept = 'video/';
upBox.appendChild(newVidFile);
upBox.appendChild(el('b', '', '2. Превьюшка (картинка):'));
var newVidThumb = el('input', 'inp-full');
newVidThumb.type = 'file';
newVidThumb.accept = 'image/';
upBox.appendChild(newVidThumb);
upBox.appendChild(el('b', '', '3. Название:'));
var newVidTitle = el('input', 'inp-full');
upBox.appendChild(newVidTitle);
upBox.appendChild(el('b', '', '4. Описание:'));
var newVidDesc = el('textarea', 'inp-full');
upBox.appendChild(newVidDesc);
upBox.appendChild(el('b', '', '5. Аудитория:'));
var audSel = el('select', 'inp-full');
var o1 = el('option', '', 'Для детей');
o1.value = 'kids';
var o2 = el('option', '', 'Не для детей (2007)');
o2.value = 'not_kids';
audSel.appendChild(o1);
audSel.appendChild(o2);
upBox.appendChild(audSel);
var btnConfirmUp = el('button', 'btn', 'Опубликовать');
btnConfirmUp.style.width = '100%';
var btnCancelUp = el('button', 'btn', 'Отмена');
btnCancelUp.style.width = '100%';
btnCancelUp.style.background = '#555';
upBox.appendChild(btnConfirmUp);
upBox.appendChild(btnCancelUp);
upModal.appendChild(upBox);
var navBar = el('div', 'nav');
var navHome = el('b', '', 'Главная');
var navSubs = el('span', '', 'Подписки');
var navLib = el('span', '', 'Библиотека');
var navProf = el('div', 'ava-d', 'Д');
navBar.appendChild(navHome);
navBar.appendChild(navSubs);
navBar.appendChild(navLib);
navBar.appendChild(navProf);
document.body.appendChild(homeScreen);
document.body.appendChild(subsScreen);
document.body.appendChild(visitScreen);
document.body.appendChild(libScreen);
document.body.appendChild(profScreen);
document.body.appendChild(watchScreen);
document.body.appendChild(editModal);
document.body.appendChild(upModal);
document.body.appendChild(navBar);
function showScreen(scr) {
wPlayer.pause();
homeScreen.style.display = 'none';
subsScreen.style.display = 'none';
visitScreen.style.display = 'none';
libScreen.style.display = 'none';
profScreen.style.display = 'none';
watchScreen.style.display = 'none';
scr.style.display = 'block';
}
function applyTheme() {
if (isDark) {
document.body.classList.add('dark');
btnTheme.innerText = 'Светлая';
} else {
document.body.classList.remove('dark');
btnTheme.innerText = 'Темная';
}
}
applyTheme();
btnTheme.onclick = function() {
isDark = !isDark;
localStorage.setItem('oleg_dark', isDark ? '1' : '0');
applyTheme();
};
btnLang.onclick = function() {
lang = lang === 'ru' ? 'en' : 'ru';
var ru = lang === 'ru';
btnLang.innerText = ru ? 'RU / EN' : 'EN / RU';
btnPub.innerText = ru ? '+ Опубликовать' : '+ Upload';
logoTxt.innerText = ru ? 'Олег' : 'Oleg';
navHome.innerText = ru ? 'Главная' : 'Home';
navSubs.innerText = ru ? 'Подписки' : 'Subs';
navLib.innerText = ru ? 'Библиотека' : 'Library';
loadVideos();
};
function updateProfileUI() {
var letter = chName.trim() !== '' ? chName.trim().charAt(0).toUpperCase() : 'Д';
bigChanName.innerText = chName;
bigChanDesc.innerText = chDesc;
if (chImg !== '') {
navProf.style.backgroundImage = 'url(' + chImg + ')';
navProf.innerText = '';
bigChanAva.style.backgroundImage = 'url(' + chImg + ')';
bigChanAva.innerText = '';
} else {
navProf.style.backgroundImage = 'none';
navProf.style.backgroundColor = chColor;
navProf.innerText = letter;
bigChanAva.style.backgroundImage = 'none';
bigChanAva.style.backgroundColor = chColor;
bigChanAva.innerText = letter;
}
}
updateProfileUI();
btnEditChan.onclick = function() {
editNameInp.value = chName;
editDescInp.value = chDesc;
editModal.style.display = 'flex';
};
btnCancelChan.onclick = function() { editModal.style.display = 'none'; };
btnSaveChan.onclick = function() {
if (editNameInp.value.trim() !== '') chName = editNameInp.value.trim();
if (editDescInp.value.trim() !== '') chDesc = editDescInp.value.trim();
var f = editAvaFile.files.item(0);
function fin() {
localStorage.setItem('oleg_chan_name', chName);
localStorage.setItem('oleg_chan_desc', chDesc);
localStorage.setItem('oleg_chan_color', chColor);
localStorage.setItem('oleg_chan_img', chImg);
updateProfileUI();
loadVideos();
editModal.style.display = 'none';
}
if (f) {
var r = new FileReader();
r.onload = function(e) { chImg = e.target.result; fin(); };
r.readAsDataURL(f);
} else fin();
};
var req = indexedDB.open('OlegVideoDB_v2', 1);
req.onupgradeneeded = function(e) { e.target.result.createObjectStore('videos', { keyPath: 'id', autoIncrement: true }); };
req.onsuccess = function(e) { db = e.target.result; loadVideos(); };
function loadVideos() {
if (!db) return;
userFeed.innerHTML = '';
vidCount = 0;
var tx = db.transaction('videos', 'readonly');
tx.objectStore('videos').openCursor(null, 'prev').onsuccess = function(e) {
var cur = e.target.result;
if (cur) {
vidCount = vidCount + 1;
var item = cur.value;
var url = URL.createObjectURL(item.fileBlob);
var c = el('div', 'card video-item');
c.setAttribute('data-title', (item.title + ' ' + item.desc).toLowerCase());
var openFn = function() { startWatch(url, item.title, item.desc, 'Крутой видос!', chName); };
var th = el('div', 'thumb-box');
th.onclick = openFn;
if (item.thumbBlob) {
th.style.backgroundImage = 'url(' + URL.createObjectURL(item.thumbBlob) + ')';
} else {
th.style.background = 'linear-gradient(135deg, #0026ff, #111111)';
th.innerText = item.title;
}
var bg = el('span', 'badge', item.audience === 'kids' ? 'Для детей' : 'Не для детей (2007)');
if (item.audience === 'kids') bg.style.background = '#ffeb3b';
var h = el('h3', '', item.title);
var p = el('p', '', 'Канал: ');
p.style.fontSize = '13px';
var lnk = el('span', 'chan-link', chName);
lnk.onclick = function() { showScreen(profScreen); };
p.appendChild(lnk);
var bP = el('button', 'btn', 'Смотреть');
bP.onclick = openFn;
var bD = el('button', 'btn-del', 'Удалить');
bD.onclick = function() {
var dtx = db.transaction('videos', 'readwrite');
dtx.objectStore('videos').delete(item.id);
dtx.oncomplete = loadVideos;
};
c.appendChild(th);
c.appendChild(bg);
c.appendChild(h);
c.appendChild(p);
c.appendChild(bP);
c.appendChild(bD);
userFeed.appendChild(c);
cur.continue();
} else {
profStats.innerText = 'Загружено видео: ' + vidCount;
}
};
}
function openChannelPage(cName) {
if (cName === chName) { showScreen(profScreen); return; }
var info = channelsInfo[cName] || { ava: cName.charAt(0), color: '#0026ff', subs: '420 подписчиков', desc: 'Канал в Олег.' };
vChanAva.innerText = info.ava;
vChanAva.style.backgroundColor = info.color;
vChanName.innerText = cName;
vChanSubs.innerText = info.subs;
vChanDesc.innerText = info.desc;
var isSub = !!subState[cName];
btnVisitSub.style.background = isSub ? '#777' : '#0026ff';
btnVisitSub.innerText = isSub ? 'Вы подписаны' : 'Подписаться';
btnVisitSub.onclick = function() { subState[cName] = !subState[cName]; openChannelPage(cName); };
vChanVideos.innerHTML = '';
if (cName === 'Повар_2007') {
vChanVideos.appendChild(mkDefaultCard('linear-gradient(135deg, #ff5722, #212121)', 'КАКОВА ТВОЯ ПРОФЕССИЯ?', '2007', '', 'Повар спрашивает Повара мем', 'Повар_2007', '23 тыс.', function() {
startWatch('povar.mp4', 'Повар спрашивает Повара мем', 'Классика 2005 года.', 'Какова твоя профессия? Повар!', 'Повар_2007');
}));
} else {
vChanVideos.appendChild(mkDefaultCard('linear-gradient(135deg, #0026ff, #00bcd4)', 'НОВЫЙ 2006 ГОД', 'Для всех', '#ffeb3b', '8 800 555 35 35 (С Новым 2006 годом!)', 'Пацан_2007', '880 тыс.', function() {
startWatch('putin2006.mp4', '8 800 555 35 35 (С Новым 2006 годом!)', 'Архив 2006 года.', 'С Новым 2006 годом, пацаны!', 'Пацан_2007');
}));
}
showScreen(visitScreen);
}
navHome.onclick = function() { showScreen(homeScreen); };
navProf.onclick = function() { showScreen(profScreen); };
navSubs.onclick = function() {
channelsList.innerHTML = '';
Object.keys(channelsInfo).forEach(function(name) {
var info = channelsInfo[name];
var st = !!subState[name];
var c = el('div', 'card');
var lnk = el('b', 'chan-link', name);
lnk.onclick = function() { openChannelPage(name); };
var bOpen = el('button', 'btn', 'Открыть канал');
bOpen.style.background = '#fff';
bOpen.style.color = '#000';
bOpen.onclick = function() { openChannelPage(name); };
var bSub = el('button', 'btn', st ? 'Вы подписаны' : 'Подписаться');
bSub.style.background = st ? '#777' : '#0026ff';
bSub.onclick = function() { subState[name] = !subState[name]; navSubs.click(); };
c.appendChild(lnk);
c.appendChild(el('p', '', info.desc));
c.appendChild(bOpen);
c.appendChild(bSub);
channelsList.appendChild(c);
});
showScreen(subsScreen);
};
navLib.onclick = function() {
historyList.innerHTML = '';
var hc = el('div', 'card', histTxt || 'История пуста');
hc.style.whiteSpace = 'pre-line';
historyList.appendChild(hc);
watchLaterList.innerHTML = '';
var lc = el('div', 'card', laterTxt || 'Список пуст');
lc.style.whiteSpace = 'pre-line';
watchLaterList.appendChild(lc);
showScreen(libScreen);
};
btnPub.onclick = function() { upModal.style.display = 'flex'; };
btnProfUp.onclick = function() { upModal.style.display = 'flex'; };
btnCancelUp.onclick = function() { upModal.style.display = 'none'; };
btnConfirmUp.onclick = function() {
var f = newVidFile.files.item(0);
if (!f) { alert('Выберите видео!'); return; }
var tx = db.transaction('videos', 'readwrite');
tx.objectStore('videos').add({
title: newVidTitle.value || 'Видео от ' + chName,
desc: newVidDesc.value || 'Описание отсутствует.',
audience: audSel.value,
fileBlob: f,
thumbBlob: newVidThumb.files.item(0) || null
});
tx.oncomplete = function() {
newVidTitle.value = '';
newVidDesc.value = '';
newVidFile.value = '';
newVidThumb.value = '';
upModal.style.display = 'none';
showScreen(homeScreen);
loadVideos();
};
};
btnSearch.onclick = function() {
var q = searchInp.value.toLowerCase();
document.querySelectorAll('.video-item').forEach(function(c) {
c.style.display = (c.getAttribute('data-title') + ' ' + c.innerText).toLowerCase().indexOf(q) !== -1 ? 'block' : 'none';
});
};
function addCommEl(author, text, startL) {
var box = el('div', 'comm');
var msg = el('div');
msg.appendChild(el('b', '', author + ': '));
msg.appendChild(el('span', '', text));
var cL = startL;
var cD = 0;
var bar = el('div');
bar.style.marginTop = '4px';
var bL = el('button', '', '+' + cL);
bL.onclick = function() { cL = cL + 1; bL.innerText = '+' + cL; };
var bD = el('button', '', '-' + cD);
bD.style.marginLeft = '6px';
bD.onclick = function() { cD = cD + 1; bD.innerText = '-' + cD; };
var bRep = el('button', '', 'Ответить');
bRep.style.marginLeft = '8px';
bRep.style.color = '#0026ff';
var repList = el('div');
repList.style.marginLeft = '15px';
repList.style.borderLeft = '2px solid #0026ff';
repList.style.paddingLeft = '6px';
bRep.onclick = function() {
var ans = prompt('Ответ для ' + author + ':');
if (ans) {
var rDiv = el('div');
rDiv.appendChild(el('b', '', chName + ' -> ' + author + ': '));
rDiv.appendChild(el('span', '', ans));
repList.appendChild(rDiv);
}
};
bar.appendChild(bL);
bar.appendChild(bD);
bar.appendChild(bRep);
box.appendChild(msg);
box.appendChild(bar);
box.appendChild(repList);
return box;
}
function startWatch(file, title, desc, firstComm, authorName) {
curTitle = title;
curDesc = desc;
curAuthor = authorName || chName;
histTxt = title + '\n' + histTxt;
showScreen(watchScreen);
wTitle.innerText = title;
wAuthLink.innerText = curAuthor;
wAuthLink.onclick = function() { openChannelPage(curAuthor); };
wDesc.innerText = desc;
commList.innerHTML = '';
commList.appendChild(addCommEl('Пацан_2007', firstComm, 7));
likes = 24;
dislikes = 0;
btnLike.innerText = 'Лайк (24)';
btnDis.innerText = 'Дизлайк (0)';
wPlayer.src = file;
wPlayer.load();
wPlayer.play();
}
btnBack.onclick = function() { showScreen(homeScreen); };
btnRot.onclick = function() { wPlayer.classList.add('full-landscape'); btnExitRot.style.display = 'block'; };
btnExitRot.onclick = function() { wPlayer.classList.remove('full-landscape'); this.style.display = 'none'; };
btnLike.onclick = function() { likes = likes + 1; this.innerText = 'Лайк (' + likes + ')'; };
btnDis.onclick = function() { dislikes = dislikes + 1; this.innerText = 'Дизлайк (' + dislikes + ')'; };
btnLater.onclick = function() { laterTxt = curTitle + '\n' + laterTxt; this.innerText = 'В библиотеке'; };
btnShare.onclick = function() {
if (navigator.share) navigator.share({ title: curTitle, text: 'Олег: ' + curTitle }).catch(function() {});
else alert('Олег: ' + curTitle);
};
btnSendComm.onclick = function() {
if (commInp.value !== '') {
commList.insertBefore(addCommEl(chName, commInp.value, 0), commList.firstChild);
commInp.value = '';
}
};