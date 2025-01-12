// JQuery でイベント処理
$(function() {
  // ボタンがクリックされた場合
  $('button').on('click', function(){
    console.log('ボタンがクリックされました');
  });
 });

 //図形にイベントを実装
$(function() {
  $('div').on({
    'click': () => {
      // 背景を赤 
      $('div').css('background-color', 'red');
      // テキストを「click」 
      $('div').text('click');
    },
    'dblclick': () => { 
      // 背景を緑 
      $('div').css('background-color', 'green'); 
      // テキストを「dblclick」 
      $('div').text('dblclick');
    },
    'mouseenter': () => {
      // 背景を青 
      $('div').css('background-color', 'blue'); 
      // テキストを「mouseenter」 
      $('div').text('mouseenter');
      },
      'mouseout': () => {
      // 背景をグレー 
      $('div').css('background-color', 'gray'); 
      // テキストを「mouseout」 
      $('div').text('mouseout');
    },
  });
});

// type プロパティを使用したイベントの種類の取得
$(function() {
  $(document).on('click keydown', (e) => {
    // ブラウザ内でクリックされた場合
    if(e.type === 'click'){
      $('div').text('クリックされました！');
    }
    // ブラウザ内でキーが押された場合
    if(e.type === 'keydown'){
      $('div').text('キーが押されました！');
    }
  });
});