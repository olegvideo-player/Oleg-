var st = document.createElement('style');
st.innerText = '* { box-sizing: border-box; font-family: Arial, sans-serif; } body { margin: 0; padding: 10px 10px 75px 10px; background: #fff; color: #000; } body.dark { background: #121212; color: #f1f1f1; } .top-bar { display: flex; justify-content: space-between; align-items: center; gap: 6px; margin-bottom: 10px; } .pill-btn { border: 3px solid #000; border-radius: 15px; padding: 6px 10px; background: #f0f4ff; color: #000; font-weight: bold; font-size: 13px; } body.dark .pill-btn { border-color: #fff; background: #262626; color: #fff; } .pub-btn { border: 3px solid #000; border-radius: 20px; padding: 6px 12px; background: #fff; color: #000; font-weight: bold; font-size: 13px; } body.dark .pub-btn { border-color: #fff; background: #0026ff; color: #fff; } .search-box { border: 3px solid #000; border-radius: 18px; padding: 6px; display: flex; gap: 6px; margin-bottom: 15px; } body.dark .search-box { border-color: #fff; background: #1e1e1e; } .search-box input { flex: 1; border: 2px solid #000; border-radius: 10px; padding: 8px; min-width: 0; } body.dark .search-box input { border-color: #fff; background: #2c2c2c; color: #fff; } .search-box button { background: #0026ff; color: #fff; border: 2px solid #000; border-radius: 10px; padding: 8px 12px; font-weight: bold; } .logo { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; font-size: 30px; font-weight: bold; } .logo-box { background: #0026ff; color: #fff; border: 2px solid #000; border-radius: 10px; padding: 6px 16px; font-size: 18px; } .card { border: 3px solid #000; border-radius: 15px; padding: 10px; margin-bottom: 15px; background: #f9f9f9; } body.dark .card { border-color: #fff; background: #1e1e1e; } .thumb-box { width: 100%; height: 155px; border: 2px solid #000; border-radius: 10px; margin-bottom: 8px; display: flex; align-items: center; justify-content: center; font-size: 19px; font-weight: bold; color: #fff; background-size: cover; background-position: center; text-align: center; padding: 10px; cursor: pointer; } body.dark .thumb-box { border-color: #fff; } .badge { display: inline-block; padding: 3px 8px; border: 2px solid #000; border-radius: 8px; font-size: 11px; font-weight: bold; margin-right: 5px; margin-bottom: 6px; background: #e0e0e0; color: #000; } .btn { background: #0026ff; color: #fff; border: 2px solid #000; border-radius: 10px; padding: 8px 14px; font-weight: bold; margin: 4px 2px; } body.dark .btn { border-color: #fff; } .btn-del { background: #d32f2f; color: #fff; border: 2px solid #000; border-radius: 10px; padding: 8px 10px; font-weight: bold; margin: 4px 2px; } .chan-link { color: #0026ff; font-weight: bold; text-decoration: underline; cursor: pointer; } body.dark .chan-link { color: #6ea8fe; } video { width: 100%; border: 3px solid #000; border-radius: 12px; background: #000; } .full-landscape { position: fixed; top: 50%; left: 50%; width: 100vh; height: 100vw; transform: translate(-50%, -50%) rotate(90deg); z-index: 999; border: none; border-radius: 0; } .exit-rotate-btn { display: none; position: fixed; top: 15px; right: 15px; z-index: 1000; background: #0026ff; color: #fff; border: 2px solid #fff; border-radius: 12px; padding: 8px 14px; font-weight: bold; } .nav { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; border-top: 3px solid #000; display: flex; justify-content: space-around; align-items: center; padding: 10px; z-index: 50; } body.dark .nav { background: #181818; border-color: #fff; } .ava-d { background: #ff5722; color: #fff; border: 2px solid #000; border-radius: 50%; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; font-weight: bold; overflow: hidden; background-size: cover; background-position: center; flex-shrink: 0; } body.dark .ava-d { border-color: #fff; } .comm { border-bottom: 1px solid #888; padding: 6px 0; font-size: 14px; } .modal-bg { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.85); z-index: 100; align-items: center; justify-content: center; padding: 15px; } .modal-box { background: #fff; color: #000; border: 4px solid #000; border-radius: 20px; padding: 15px; width: 100%; max-width: 400px; max-height: 90vh; overflow-y: auto; } body.dark .modal-box { background: #1e1e1e; color: #fff; border-color: #fff; } .inp-full { width: 100%; padding: 8px; border: 2px solid #000; border-radius: 10px; margin: 6px 0 10px 0; } body.dark .inp-full { background: #2c2c2c; color: #fff; border-color: #fff; } .desc-box { background: #f0f4ff; color: #000; border: 2px solid #000; border-radius: 12px; padding: 10px; margin: 10px 0; font-size: 14px; } body.dark .desc-box { background: #252525; color: #fff; border-color: #fff; } .color-dot { width: 30px; height: 30px; border-radius: 50%; border: 2px solid #000; display: inline-block; margin-right: 6px; }';
document.head.appendChild(st);

function el(tag, cls, txt) {
  var d = document.createElement(tag);
  if (cls) d.className = cls;
  if (txt !== undefined) d.innerText = txt;
  return d;
}

var badWords = ['http://', 'https://', 'www.', '.ru', '.com', '.net', '.org', '.рф', 't.me', 'vk.com', 'казино', 'ставк', 'взлом', 'чит на деньги', 'халявные робуксы', 'обман', 'лох', 'дурак', 'дебил'];
var lastCommTime = 0;

function checkModeration(text) {
  if (!text) return null;
  var low = text.toLowerCase();
  for (var i = 0; i < badWords.length; i++) {
    if (low.indexOf(badWords[i]) !== -1) {
      return '🛡 Автомодератор Олег: обнаружены ссылки, реклама или запрещённые слова!';
    }
  }
  return null;
}

var lang = 'ru';
var likes = 24;
var dislikes = 0;
var db = null;
var curTitle = '';
var curDesc = '';
var curAuthor = 'Димон';
var curFileUrl = '';
var vidCount = 0;
var managedItem = null;
var managedUrl = '';

var chName = localStorage.getItem('oleg_chan_name') || 'Димон';
var chDesc = localStorage.getItem('oleg_chan_desc') || 'Всем привет, Олегончане! Выкладываю приколы 2007 года.';
var chColor = localStorage.getItem('oleg_chan_color') || '#ff5722';
var chImg = localStorage.getItem('oleg_chan_img') || '';
var isDark = localStorage.getItem('oleg_dark') === '1';

var savedHist = JSON.parse(localStorage.getItem('oleg_hist') || '[]');
var savedPlaylists = JSON.parse(localStorage.getItem('oleg_playlists') || '{"Смотреть позже": []}');

function saveLibData() {
  localStorage.setItem('oleg_hist', JSON.stringify(savedHist));
  localStorage.setItem('oleg_playlists', JSON.stringify(savedPlaylists));
}

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
var modBadge = el('span', 'badge', '🛡 Защита 1.5');
modBadge.style.background = '#4caf50';
modBadge.style.color = '#fff';
modBadge.style.marginLeft = 'auto';
logoRow.appendChild(modBadge);

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
var btnNewPlaylist = el('button', 'btn', '+ Создать плейлист');
btnNewPlaylist.style.width = '100%';
btnNewPlaylist.style.marginBottom = '12px';
var playlistsBox = el('div');
var historyList = el('div');
libScreen.appendChild(libLogo);
libScreen.appendChild(btnNewPlaylist);
libScreen.appendChild(el('h3', '', 'Мои плейлисты'));
libScreen.appendChild(playlistsBox);
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
var profVideosHead = el('h3', '', 'Мои загруженные видео (нажми для управления):');
var profVideosList = el('div');
profScreen.appendChild(pLogo);
profScreen.appendChild(pCard);
profScreen.appendChild(profVideosHead);
profScreen.appendChild(profVideosList);
var manageModal = el('div', 'modal-bg');
var manageBox = el('div', 'modal-box');
manageBox.appendChild(el('h2', '', 'Управление видео'));
var manageVidTitle = el('p');
manageVidTitle.style.fontWeight = 'bold';
manageBox.appendChild(manageVidTitle);
var btnManagePlay = el('button', 'btn', '▶ Смотреть видео');
btnManagePlay.style.width = '100%';
var btnManageEdit = el('button', 'btn', '✏ Изменить название и описание');
btnManageEdit.style.width = '100%';
btnManageEdit.style.background = '#ffeb3b';
btnManageEdit.style.color = '#000';
var btnManageThumb = el('button', 'btn', '🖼 Изменить превьюшку');
btnManageThumb.style.width = '100%';
btnManageThumb.style.background = '#9c27b0';
var editThumbInput = el('input');
editThumbInput.type = 'file';
editThumbInput.accept = 'image/*';
editThumbInput.style.display = 'none';
var btnManageDownload = el('button', 'btn', '⬇ Скачать на устройство');
btnManageDownload.style.width = '100%';
btnManageDownload.style.background = '#4caf50';
var btnManageDelete = el('button', 'btn-del', '🗑 Удалить видео навсегда');
btnManageDelete.style.width = '100%';
var btnManageClose = el('button', 'btn', 'Закрыть');
btnManageClose.style.width = '100%';
btnManageClose.style.background = '#555';
btnManageClose.onclick = function() { manageModal.style.display = 'none'; };
manageBox.appendChild(btnManagePlay);
manageBox.appendChild(btnManageEdit);
manageBox.appendChild(btnManageThumb);
manageBox.appendChild(editThumbInput);
manageBox.appendChild(btnManageDownload);
manageBox.appendChild(btnManageDelete);
manageBox.appendChild(btnManageClose);
manageModal.appendChild(manageBox);
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
var btnLater = el('button', 'btn', '+ В плейлист');
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
commInp.placeholder = 'Комментарий (без ссылок и спама)...';
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
watchScreen.appendChild(el('h3', '', 'Комментарии (🛡 Автомодерация)'));
watchScreen.appendChild(cRow);
watchScreen.appendChild(commList);
var plModal = el('div', 'modal-bg');
var plModalBox = el('div', 'modal-box');
plModalBox.appendChild(el('h2', '', 'Добавить в плейлист'));
var plChoiceList = el('div');
var btnClosePlModal = el('button', 'btn', 'Закрыть');
btnClosePlModal.style.width = '100%';
btnClosePlModal.style.background = '#555';
btnClosePlModal.onclick = function() { plModal.style.display = 'none'; };
plModalBox.appendChild(plChoiceList);
plModalBox.appendChild(btnClosePlModal);
plModal.appendChild(plModalBox);
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
document.body.appendChild(manageModal);
document.body.appendChild(plModal);
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
var errN = checkModeration(editNameInp.value);
var errD = checkModeration(editDescInp.value);
if (errN || errD) { alert(errN || errD); return; }
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
function openVideoManager(item, videoUrl) {
managedItem = item;
managedUrl = videoUrl;
manageVidTitle.innerText = item.title;
manageModal.style.display = 'flex';
}
btnManagePlay.onclick = function() {
if (!managedItem) return;
manageModal.style.display = 'none';
startWatch(managedUrl, managedItem.title, managedItem.desc, 'Крутой видос!', chName);
};
btnManageEdit.onclick = function() {
if (!managedItem || !db) return;
var newT = prompt('Новое название видео:', managedItem.title);
if (newT === null) return;
var newD = prompt('Новое описание видео:', managedItem.desc);
if (newD === null) return;
var err = checkModeration(newT) || checkModeration(newD);
if (err) { alert(err); return; }
if (newT.trim() !== '') managedItem.title = newT.trim();
managedItem.desc = newD.trim();
var tx = db.transaction('videos', 'readwrite');
tx.objectStore('videos').put(managedItem);
tx.oncomplete = function() {
manageModal.style.display = 'none';
loadVideos();
};
};
btnManageThumb.onclick = function() {
if (!managedItem || !db) return;
editThumbInput.value = '';
editThumbInput.click();
};
editThumbInput.onchange = function() {
var file = editThumbInput.files.item(0);
if (!file || !managedItem || !db) return;
managedItem.thumbBlob = file;
var tx = db.transaction('videos', 'readwrite');
tx.objectStore('videos').put(managedItem);
tx.oncomplete = function() {
manageModal.style.display = 'none';
loadVideos();
};
};
btnManageDownload.onclick = function() {
if (!managedItem) return;
var a = document.createElement('a');
a.href = managedUrl;
a.download = (managedItem.title || 'oleg_video') + '.mp4';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
};
btnManageDelete.onclick = function() {
if (!managedItem || !db) return;
if (confirm('Точно удалить видео «' + managedItem.title + '»?')) {
var dtx = db.transaction('videos', 'readwrite');
dtx.objectStore('videos').delete(managedItem.id);
dtx.oncomplete = function() {
manageModal.style.display = 'none';
loadVideos();
};
}
};
var req = indexedDB.open('OlegVideoDB_v2', 1);
req.onupgradeneeded = function(e) { e.target.result.createObjectStore('videos', { keyPath: 'id', autoIncrement: true }); };
req.onsuccess = function(e) { db = e.target.result; loadVideos(); };
function loadVideos() {
if (!db) return;
userFeed.innerHTML = '';
profVideosList.innerHTML = '';
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
c.appendChild(th);
c.appendChild(bg);
c.appendChild(h);
c.appendChild(p);
c.appendChild(bP);
userFeed.appendChild(c);
var pc = el('div', 'card');
pc.style.cursor = 'pointer';
pc.onclick = function() { openVideoManager(item, url); };
var pTh = el('div', 'thumb-box');
pTh.style.height = '110px';
if (item.thumbBlob) {
pTh.style.backgroundImage = 'url(' + URL.createObjectURL(item.thumbBlob) + ')';
} else {
pTh.style.background = 'linear-gradient(135deg, #0026ff, #111111)';
pTh.innerText = item.title;
}
var pTitle = el('b', '', item.title);
var pHint = el('div', '', 'Нажмите, чтобы изменить превью, название, скачать или удалить');
pHint.style.fontSize = '12px';
pHint.style.color = '#666';
pHint.style.marginTop = '4px';
pc.appendChild(pTh);
pc.appendChild(pTitle);
pc.appendChild(pHint);
profVideosList.appendChild(pc);
cur.continue();
} else {
profStats.innerText = 'Загружено видео: ' + vidCount;
if (vidCount === 0) {
profVideosList.appendChild(el('div', 'card', 'Вы ещё не загрузили ни одного видео.'));
}
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
navProf.onclick = function() { loadVideos(); showScreen(profScreen); };
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
function renderLibraryScreen() {
playlistsBox.innerHTML = '';
Object.keys(savedPlaylists).forEach(function(plName) {
var vids = savedPlaylists[plName];
var card = el('div', 'card');
var topRow = el('div');
topRow.style.display = 'flex';
topRow.style.justifyContent = 'space-between';
topRow.style.alignItems = 'center';
var titleEl = el('b', '', plName + ' (' + vids.length + ')');
titleEl.style.fontSize = '17px';
topRow.appendChild(titleEl);
if (plName !== 'Смотреть позже') {
var delPlBtn = el('button', 'btn-del', 'Удалить');
delPlBtn.style.padding = '4px 8px';
delPlBtn.style.fontSize = '12px';
delPlBtn.onclick = function() {
delete savedPlaylists[plName];
saveLibData();
renderLibraryScreen();
};
topRow.appendChild(delPlBtn);
}
card.appendChild(topRow);
if (vids.length === 0) {
var emp = el('p', '', 'Плейлист пока пуст. Откройте видео и нажмите + В плейлист.');
emp.style.fontSize = '13px';
emp.style.color = '#666';
card.appendChild(emp);
} else {
vids.forEach(function(vItem, idx) {
var row = el('div');
row.style.borderTop = '1px solid #888';
row.style.paddingTop = '6px';
row.style.marginTop = '6px';
row.style.display = 'flex';
row.style.justifyContent = 'space-between';
row.style.alignItems = 'center';
row.style.gap = '6px';
var vLink = el('span', 'chan-link', vItem.title);
vLink.style.fontSize = '14px';
vLink.onclick = function() {
startWatch(vItem.file, vItem.title, vItem.desc, 'Из плейлиста ' + plName, vItem.author);
};
var rmBtn = el('button', 'btn-del', 'X');
rmBtn.style.padding = '3px 7px';
rmBtn.style.fontSize = '11px';
rmBtn.onclick = function() {
savedPlaylists[plName].splice(idx, 1);
saveLibData();
renderLibraryScreen();
};
row.appendChild(vLink);
row.appendChild(rmBtn);
card.appendChild(row);
});
}
playlistsBox.appendChild(card);
});
historyList.innerHTML = '';
var hc = el('div', 'card');
if (savedHist.length === 0) {
hc.innerText = 'История пуста';
} else {
var clearHistBtn = el('button', 'btn-del', 'Очистить историю');
clearHistBtn.style.marginBottom = '8px';
clearHistBtn.onclick = function() {
savedHist = [];
saveLibData();
renderLibraryScreen();
};
hc.appendChild(clearHistBtn);
savedHist.forEach(function(hItem) {
var hRow = el('div');
hRow.style.padding = '4px 0';
hRow.style.borderTop = '1px solid #888';
var hLink = el('span', 'chan-link', hItem.title);
hLink.onclick = function() {
startWatch(hItem.file, hItem.title, hItem.desc, 'Из истории просмотра', hItem.author);
};
hRow.appendChild(hLink);
hc.appendChild(hRow);
});
}
historyList.appendChild(hc);
}
btnNewPlaylist.onclick = function() {
var name = prompt('Название нового плейлиста (например: Мемы 2007):');
if (name && name.trim() !== '') {
var err = checkModeration(name);
if (err) { alert(err); return; }
var clean = name.trim();
if (!savedPlaylists[clean]) {
savedPlaylists[clean] = [];
saveLibData();
renderLibraryScreen();
} else {
alert('Такой плейлист уже есть!');
}
}
};
navLib.onclick = function() {
renderLibraryScreen();
showScreen(libScreen);
};
btnPub.onclick = function() { upModal.style.display = 'flex'; };
btnProfUp.onclick = function() { upModal.style.display = 'flex'; };
btnCancelUp.onclick = function() { upModal.style.display = 'none'; };
btnConfirmUp.onclick = function() {
var f = newVidFile.files.item(0);
if (!f) { alert('Выберите видео!'); return; }
var err = checkModeration(newVidTitle.value) || checkModeration(newVidDesc.value);
if (err) { alert(err); return; }
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
var txtSpan = el('span', '', text);
msg.appendChild(txtSpan);
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
var bReport = el('button', '', 'Пожаловаться');
bReport.style.marginLeft = '8px';
bReport.style.color = '#d32f2f';
bReport.onclick = function() {
if (confirm('Отправить жалобу модерации Олега и скрыть этот комментарий?')) {
txtSpan.innerText = '[Сообщение скрыто модерацией Олега]';
txtSpan.style.color = '#888';
txtSpan.style.fontStyle = 'italic';
bReport.style.display = 'none';
}
};
var repList = el('div');
repList.style.marginLeft = '15px';
repList.style.borderLeft = '2px solid #0026ff';
repList.style.paddingLeft = '6px';
bRep.onclick = function() {
var ans = prompt('Ответ для ' + author + ':');
if (ans) {
var err = checkModeration(ans);
if (err) { alert(err); return; }
var rDiv = el('div');
rDiv.appendChild(el('b', '', chName + ' -> ' + author + ': '));
rDiv.appendChild(el('span', '', ans));
repList.appendChild(rDiv);
}
};
bar.appendChild(bL);
bar.appendChild(bD);
bar.appendChild(bRep);
bar.appendChild(bReport);
box.appendChild(msg);
box.appendChild(bar);
box.appendChild(repList);
return box;
}
function startWatch(file, title, desc, firstComm, authorName) {
curFileUrl = file;
curTitle = title;
curDesc = desc;
curAuthor = authorName || chName;
savedHist.unshift({ file: file, title: title, desc: desc, author: curAuthor });
if (savedHist.length > 20) savedHist.pop();
saveLibData();
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
btnLater.innerText = '+ В плейлист';
wPlayer.src = file;
wPlayer.load();
wPlayer.play();
}
btnBack.onclick = function() { showScreen(homeScreen); };
btnRot.onclick = function() { wPlayer.classList.add('full-landscape'); btnExitRot.style.display = 'block'; };
btnExitRot.onclick = function() { wPlayer.classList.remove('full-landscape'); this.style.display = 'none'; };
btnLike.onclick = function() { likes = likes + 1; this.innerText = 'Лайк (' + likes + ')'; };
btnDis.onclick = function() { dislikes = dislikes + 1; this.innerText = 'Дизлайк (' + dislikes + ')'; };
btnLater.onclick = function() {
plChoiceList.innerHTML = '';
Object.keys(savedPlaylists).forEach(function(plName) {
var b = el('button', 'btn', '+ ' + plName + ' (' + savedPlaylists[plName].length + ')');
b.style.width = '100%';
b.style.marginBottom = '6px';
b.onclick = function() {
savedPlaylists[plName].unshift({
file: curFileUrl,
title: curTitle,
desc: curDesc,
author: curAuthor
});
saveLibData();
plModal.style.display = 'none';
btnLater.innerText = 'Добавлено!';
};
plChoiceList.appendChild(b);
});
var newQuickBtn = el('button', 'btn', '+ Новый плейлист...');
newQuickBtn.style.width = '100%';
newQuickBtn.style.background = '#4caf50';
newQuickBtn.onclick = function() {
var n = prompt('Название нового плейлиста:');
if (n && n.trim() !== '') {
var err = checkModeration(n);
if (err) { alert(err); return; }
var clean = n.trim();
if (!savedPlaylists[clean]) savedPlaylists[clean] = [];
savedPlaylists[clean].unshift({
file: curFileUrl,
title: curTitle,
desc: curDesc,
author: curAuthor
});
saveLibData();
plModal.style.display = 'none';
btnLater.innerText = 'Добавлено!';
}
};
plChoiceList.appendChild(newQuickBtn);
plModal.style.display = 'flex';
};
btnShare.onclick = function() {
if (navigator.share) navigator.share({ title: curTitle, text: 'Олег: ' + curTitle }).catch(function() {});
else alert('Олег: ' + curTitle);
};
btnSendComm.onclick = function() {
var txt = commInp.value.trim();
if (txt === '') return;
var now = Date.now();
if (now - lastCommTime < 5000) {
alert('🛡 Антифлуд Олег: подождите 5 секунд перед отправкой следующего комментария!');
return;
}
var err = checkModeration(txt);
if (err) {
alert(err);
return;
}
lastCommTime = now;
commList.insertBefore(addCommEl(chName, txt, 0), commList.firstChild);
commInp.value = '';
};var stC = document.createElement('style');
stC.innerText = '.comm-tabs { display: flex; gap: 6px; margin: 12px 0; } .comm-tab { flex: 1; padding: 10px; border: 3px solid #000; border-radius: 12px; font-weight: bold; background: #e0e0e0; color: #000; } body.dark .comm-tab { border-color: #fff; background: #2c2c2c; color: #fff; } .comm-tab.act { background: #0026ff; color: #fff; } .post-pic { width: 100%; max-height: 240px; object-fit: cover; border: 2px solid #000; border-radius: 10px; margin: 8px 0; } body.dark .post-pic { border-color: #fff; }';
document.head.appendChild(stC);

var cPosts = JSON.parse(localStorage.getItem('oleg_posts_v1') || '[{"id":1,"text":"Привет, Олегончане! Теперь у нас есть вкладка Сообщество прямо в профиле!","img":"","likes":15,"dislikes":0,"date":"Сегодня","comments":[{"author":"Пацан_2007","text":"Топ обнова!"}]}]');
function saveCP() { localStorage.setItem('oleg_posts_v1', JSON.stringify(cPosts)); }

var cTabs = el('div', 'comm-tabs');
var btnTV = el('button', 'comm-tab act', '🎬 Видео');
var btnTC = el('button', 'comm-tab', '💬 Сообщество');
cTabs.appendChild(btnTV);
cTabs.appendChild(btnTC);

var cArea = el('div');
cArea.style.display = 'none';
var cForm = el('div', 'card');
cForm.appendChild(el('b', '', 'Написать пост для Олегончан:'));
var cTxt = el('textarea', 'inp-full');
cTxt.rows = 3;
cTxt.placeholder = 'Поделитесь новостью или мемом...';
var cImg = el('input', 'inp-full');
cImg.type = 'file';
cImg.accept = 'image/*';
var cPub = el('button', 'btn', 'Опубликовать пост');
cPub.style.width = '100%';
cForm.appendChild(cTxt);
cForm.appendChild(cImg);
cForm.appendChild(cPub);

var cFeed = el('div');
cArea.appendChild(cForm);
cArea.appendChild(cFeed);

profScreen.insertBefore(cTabs, profVideosHead);
profScreen.appendChild(cArea);

function drawPosts() {
  cFeed.innerHTML = '';
  cPosts.forEach(function(p, idx) {
    var card = el('div', 'card');
    var top = el('div');
    top.style.display = 'flex';
    top.style.justifyContent = 'space-between';
    top.style.alignItems = 'center';
    top.appendChild(el('b', '', chName + ' • ' + (p.date || 'Сегодня')));
    var del = el('button', 'btn-del', 'Удалить');
    del.style.padding = '3px 8px';
    del.style.fontSize = '11px';
    del.onclick = function() {
      if (confirm('Удалить пост?')) { cPosts.splice(idx, 1); saveCP(); drawPosts(); }
    };
    top.appendChild(del);
    card.appendChild(top);

    var txt = el('p', '', p.text);
    txt.style.margin = '6px 0';
    card.appendChild(txt);

    if (p.img) {
      var im = el('img', 'post-pic');
      im.src = p.img;
      card.appendChild(im);
    }

    var bar = el('div');
    var bL = el('button', 'btn', '👍 ' + (p.likes || 0));
    bL.style.padding = '5px 10px';
    bL.onclick = function() { p.likes = (p.likes || 0) + 1; saveCP(); drawPosts(); };
    var bD = el('button', 'btn', '👎 ' + (p.dislikes || 0));
    bD.style.padding = '5px 10px';
    bD.style.background = '#555';
    bD.onclick = function() { p.dislikes = (p.dislikes || 0) + 1; saveCP(); drawPosts(); };
    bar.appendChild(bL);
    bar.appendChild(bD);
    card.appendChild(bar);

    var cw = el('div');
    cw.style.marginTop = '8px';
    cw.style.borderTop = '1px solid #888';
    cw.style.paddingTop = '6px';
    var r = el('div');
    r.style.display = 'flex';
    r.style.gap = '5px';
    var inp = el('input');
    inp.placeholder = 'Комментарий к посту...';
    inp.style.flex = '1';
    inp.style.padding = '6px';
    inp.style.border = '2px solid #000';
    inp.style.borderRadius = '8px';
    var ok = el('button', 'btn', 'Ок');
    ok.style.padding = '6px 10px';
    ok.onclick = function() {
      var v = inp.value.trim();
      if (!v) return;
      var err = checkModeration(v);
      if (err) { alert(err); return; }
      if (!p.comments) p.comments = [];
      p.comments.unshift({ author: chName, text: v });
      saveCP();
      drawPosts();
    };
    r.appendChild(inp);
    r.appendChild(ok);
    cw.appendChild(r);

    if (p.comments) {
      p.comments.forEach(function(cm) {
        var ln = el('div');
        ln.style.fontSize = '13px';
        ln.style.marginTop = '4px';
        ln.appendChild(el('b', '', cm.author + ': '));
        ln.appendChild(el('span', '', cm.text));
        cw.appendChild(ln);
      });
    }
    card.appendChild(cw);
    cFeed.appendChild(card);
  });
}

cPub.onclick = function() {
  var t = cTxt.value.trim();
  var f = cImg.files.item(0);
  if (!t && !f) { alert('Напишите текст или выберите фото!'); return; }
  var err = checkModeration(t);
  if (err) { alert(err); return; }
  function fin(imgU) {
    cPosts.unshift({ id: Date.now(), text: t, img: imgU || '', likes: 1, dislikes: 0, date: 'Только что', comments: [] });
    saveCP();
    cTxt.value = '';
    cImg.value = '';
    drawPosts();
  }
  if (f) {
    var rd = new FileReader();
    rd.onload = function(e) { fin(e.target.result); };
    rd.readAsDataURL(f);
  } else fin('');
};

btnTV.onclick = function() {
  btnTV.classList.add('act');
  btnTC.classList.remove('act');
  profVideosHead.style.display = 'block';
  profVideosList.style.display = 'block';
  cArea.style.display = 'none';
};

btnTC.onclick = function() {
  btnTC.classList.add('act');
  btnTV.classList.remove('act');
  profVideosHead.style.display = 'none';
  profVideosList.style.display = 'none';
  cArea.style.display = 'block';
  drawPosts();
};
var accs = JSON.parse(localStorage.getItem('oleg_accounts_v1') || '[]');
var curAcc = JSON.parse(localStorage.getItem('oleg_cur_acc') || 'null');

if (accs.length === 0 && localStorage.getItem('oleg_chan_name')) {
  var migrated = {
    login: localStorage.getItem('oleg_chan_name'),
    pass: '2007',
    desc: localStorage.getItem('oleg_chan_desc') || 'Всем привет, Олегончане!',
    color: localStorage.getItem('oleg_chan_color') || '#ff5722',
    img: localStorage.getItem('oleg_chan_img') || ''
  };
  accs.push(migrated);
  localStorage.setItem('oleg_accounts_v1', JSON.stringify(accs));
}

function saveAccs() {
  localStorage.setItem('oleg_accounts_v1', JSON.stringify(accs));
  localStorage.setItem('oleg_cur_acc', JSON.stringify(curAcc));
}

var authBanner = el('div', 'card');
authBanner.style.background = '#e8eeff';
authBanner.style.borderColor = '#0026ff';
var authBannerTitle = el('b', '', '👤 Вы не вошли в аккаунт Олег ID');
authBannerTitle.style.display = 'block';
authBannerTitle.style.marginBottom = '6px';
authBannerTitle.style.color = '#000';
var authBtnRow = el('div');
authBtnRow.style.display = 'flex';
authBtnRow.style.gap = '6px';
var btnOpenReg = el('button', 'btn', 'Создать аккаунт');
btnOpenReg.style.flex = '1';
var btnOpenLog = el('button', 'btn', 'Войти');
btnOpenLog.style.flex = '1';
btnOpenLog.style.background = '#4caf50';
authBtnRow.appendChild(btnOpenReg);
authBtnRow.appendChild(btnOpenLog);
authBanner.appendChild(authBannerTitle);
authBanner.appendChild(authBtnRow);

homeScreen.insertBefore(authBanner, homeScreen.firstChild);

var authModal = el('div', 'modal-bg');
var authBox = el('div', 'modal-box');
var authModalHead = el('h2', '', 'Создать аккаунт Олег');
var authMode = 'reg';
var authSubTxt = el('p', '', 'Придумайте имя канала и пароль:');
authSubTxt.style.fontSize = '13px';
var authLoginInp = el('input', 'inp-full');
authLoginInp.placeholder = 'Имя канала (например: Олег_2007)';
var authPassInp = el('input', 'inp-full');
authPassInp.type = 'password';
authPassInp.placeholder = 'Пароль';
var savedAccsBox = el('div');
savedAccsBox.style.marginBottom = '8px';

var btnAuthSubmit = el('button', 'btn', 'Готово');
btnAuthSubmit.style.width = '100%';
var btnAuthCancel = el('button', 'btn', 'Отмена');
btnAuthCancel.style.width = '100%';
btnAuthCancel.style.background = '#555';

authBox.appendChild(authModalHead);
authBox.appendChild(authSubTxt);
authBox.appendChild(savedAccsBox);
authBox.appendChild(authLoginInp);
authBox.appendChild(authPassInp);
authBox.appendChild(btnAuthSubmit);
authBox.appendChild(btnAuthCancel);
authModal.appendChild(authBox);
document.body.appendChild(authModal);

var profAccCard = el('div', 'card');
var profAccStatus = el('b', '', 'Аккаунт: Гость (не выполнен вход)');
profAccStatus.style.display = 'block';
profAccStatus.style.marginBottom = '8px';
var btnProfNewAcc = el('button', 'btn', '+ Создать новый аккаунт');
btnProfNewAcc.style.width = '100%';
btnProfNewAcc.style.background = '#4caf50';
var btnProfSwitchAcc = el('button', 'btn', 'Сменить / Войти в аккаунт');
btnProfSwitchAcc.style.width = '100%';
var btnProfLogout = el('button', 'btn-del', 'Выйти из аккаунта');
btnProfLogout.style.width = '100%';

profAccCard.appendChild(profAccStatus);
profAccCard.appendChild(btnProfNewAcc);
profAccCard.appendChild(btnProfSwitchAcc);
profAccCard.appendChild(btnProfLogout);
profScreen.insertBefore(profAccCard, pCard.nextSibling);

function syncAccountUI() {
  if (curAcc) {
    authBanner.style.display = 'none';
    chName = curAcc.login;
    chDesc = curAcc.desc || 'Всем привет, Олегончане!';
    chColor = curAcc.color || '#0026ff';
    chImg = curAcc.img || '';
    localStorage.setItem('oleg_chan_name', chName);
    localStorage.setItem('oleg_chan_desc', chDesc);
    localStorage.setItem('oleg_chan_color', chColor);
    localStorage.setItem('oleg_chan_img', chImg);
    profAccStatus.innerText = '✅ Аккаунт: ' + curAcc.login;
    btnProfLogout.style.display = 'block';
  } else {
    authBanner.style.display = 'block';
    chName = 'Гость';
    chDesc = 'Войдите или создайте аккаунт в меню наверху!';
    chColor = '#777777';
    chImg = '';
    profAccStatus.innerText = '👤 Вы сейчас Гость (войдите в аккаунт)';
    btnProfLogout.style.display = 'none';
  }
  if (typeof updateProfileUI === 'function') updateProfileUI();
  if (typeof loadVideos === 'function') loadVideos();
  if (typeof drawPosts === 'function') drawPosts();
}

function openAuthDialog(mode) {
  authMode = mode;
  authLoginInp.value = '';
  authPassInp.value = '';
  savedAccsBox.innerHTML = '';
  if (mode === 'reg') {
    authModalHead.innerText = 'Создать аккаунт Олег';
    authSubTxt.innerText = 'Придумайте имя канала и пароль:';
    btnAuthSubmit.innerText = 'Создать и войти';
  } else {
    authModalHead.innerText = 'Вход в аккаунт Олег';
    authSubTxt.innerText = 'Введите логин и пароль или выберите сохранённый:';
    btnAuthSubmit.innerText = 'Войти';
    if (accs.length > 0) {
      accs.forEach(function(a) {
        var qBtn = el('button', 'pill-btn', '⚡ Быстрый вход: ' + a.login);
        qBtn.style.width = '100%';
        qBtn.style.marginBottom = '5px';
        qBtn.onclick = function() {
          curAcc = a;
          saveAccs();
          syncAccountUI();
          authModal.style.display = 'none';
        };
        savedAccsBox.appendChild(qBtn);
      });
    }
  }
  authModal.style.display = 'flex';
}

btnOpenReg.onclick = function() { openAuthDialog('reg'); };
btnOpenLog.onclick = function() { openAuthDialog('login'); };
btnProfNewAcc.onclick = function() { openAuthDialog('reg'); };
btnProfSwitchAcc.onclick = function() { openAuthDialog('login'); };
btnAuthCancel.onclick = function() { authModal.style.display = 'none'; };

btnAuthSubmit.onclick = function() {
  var lg = authLoginInp.value.trim();
  var pw = authPassInp.value.trim();
  if (!lg || !pw) { alert('Введите имя канала и пароль!'); return; }
  if (typeof checkModeration === 'function') {
    var err = checkModeration(lg);
    if (err) { alert(err); return; }
  }
  if (authMode === 'reg') {
    var exists = accs.some(function(x) { return x.login.toLowerCase() === lg.toLowerCase(); });
    if (exists) { alert('Такое имя канала уже занято! Выберите другое или нажмите Войти.'); return; }
    var newObj = { login: lg, pass: pw, desc: 'Привет, Олегончане! Мой новый канал.', color: '#0026ff', img: '' };
    accs.push(newObj);
    curAcc = newObj;
    saveAccs();
    syncAccountUI();
    authModal.style.display = 'none';
  } else {
    var found = null;
    for (var i = 0; i < accs.length; i++) {
      if (accs[i].login.toLowerCase() === lg.toLowerCase() && accs[i].pass === pw) {
        found = accs[i];
        break;
      }
    }
    if (!found) { alert('Неверное имя канала или пароль!'); return; }
    curAcc = found;
    saveAccs();
    syncAccountUI();
    authModal.style.display = 'none';
  }
};

btnProfLogout.onclick = function() {
  if (confirm('Выйти из аккаунта? Верхнее меню входа снова появится на главной.')) {
    curAcc = null;
    saveAccs();
    syncAccountUI();
    showScreen(homeScreen);
  }
};

var oldSaveChanFn = btnSaveChan.onclick;
btnSaveChan.onclick = function() {
  oldSaveChanFn();
  setTimeout(function() {
    if (curAcc) {
      curAcc.login = chName;
      curAcc.desc = chDesc;
      curAcc.color = chColor;
      curAcc.img = chImg;
      saveAccs();
      syncAccountUI();
    }
  }, 150);
};

syncAccountUI();
