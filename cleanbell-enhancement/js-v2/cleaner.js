$(function () {
  //탑메뉴 스크롤시 상단고정
  $(document).ready(function(){
    window.onscroll = function() {myFunction()};

    var nav = document.getElementById("header");
    var sticky = nav.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        $('.addTip').addClass('z');
      } else {
        nav.classList.remove("sticky");
        $('.addTip').removeClass('z');
      }
    }
  });
  // 메뉴 아이콘 클릭시 청소업체 검색 드롭다운메뉴
  $('.showDropmenu').on('click',function(){
    $('.showDropmenu').toggleClass("imgChange");
		if($('.cleanbell-dropmenu').hasClass('hover')){
			$('.cleanbell-dropmenu').removeClass('hover');
		} else {
			$('.cleanbell-dropmenu').addClass('hover');
		}
	})
	$('.cleanbell-dropmenu').on('mouseleave',function(){
		$(this).removeClass('hover');
	})

  //청소업체 검색 드롭다운 메뉴
  $('.cleanbellDrop').hover(function(){
    $('.showDropmenu').addClass("imgChange");
    $('.cleanbellDrop > a').addClass("before");
    $('.cleanbell-dropmenu').addClass("hover");
  }, function(){
    $('.showDropmenu').removeClass("imgChange");
    $('.cleanbellDrop > a').removeClass("before");
    $('.cleanbell-dropmenu').removeClass("hover");
  });
  //프리미엄 청소 드롭다운 메뉴
  $('.premiumDrop').hover(function(){
    $('.showDropmenu').addClass("imgChange");
    $('.premiumDrop > a').addClass("before");
    $('.premium-dropmenu').addClass("hover");
  }, function(){
    $('.showDropmenu').removeClass("imgChange");
    $('.premiumDrop > a').removeClass("before");
    $('.premium-dropmenu').removeClass("hover");
  });
  //searchTab
  $('.tablink').click(function(){
    $('.tablink').removeClass('active');
    $(this).addClass('active');
    $('.searchBoxes div').hide();
    $('#' + $(this).data('rel')).show().css('display','block');
  });
  //청소종류 선택
  $('#selectDisplay').click(function(){
    $('.cleanerKinds ol').show();
    $('.cleanerKinds ol li a').click(function(){
      $('.cleanerKinds ol').hide();
      $('#selectDisplay').prop('class',$(this).data('rel')).text($(this).text());
    });
  });
  //지역 선택
  $('#locationDisplay').on('click',function(){
    $('.cleanerLocation ol').addClass('on').on('mouseleave',function(){
      $('.cleanerLocation ol').removeClass('on');
    });
  });
  //지역 선택 checkbox
  $('.cleanerLocation li.firstSelect input[type="checkbox"]').on('click', function(){
    $('.cleanerLocation li.firstSelect input[type="checkbox"]:checked').not(this).prop('checked', false);
  });
  $('.cleanerLocation li.secondSelect input[type="checkbox"]').on('click', function(){
    $('.cleanerLocation li.secondSelect input[type="checkbox"]:checked').not(this).prop('checked', false);
  });
  //1차 지역 선택 toggle
  $('.cleanerLocation .firstSelect').on('click', function(){
    $('.cleanerLocation .firstSelect div:last-child').toggle();
    $('.cleanerLocation .secondSelect div:last-child').toggle();
  });
  //2차 지역 선택 toggle
  $('.cleanerLocation .secondSelect').on('click', function(){
    $('.cleanerLocation .firstSelect div:last-child').toggle();
    $('.cleanerLocation .secondSelect div:last-child').toggle();
    $('.selectComplete-location').click(function(){
      $('.cleanerLocation ol').removeClass('on');
    });
  });
  //날짜 선택시 달력 열림
  $('.openCalendar').click(function(){
    $('.cleanDateModal').show();
    $('.selectComplete').click(function(){
      $('.cleanDateModal').hide();
    });
  });

  //mobile 달력내부 toggle
  if($(window).width() <= 640){
    $('.cleanStart_dt').on('click',function(){
      $('.cleanStart_dd').show();
      $('.cleanMove_dd').hide();
      $('.selectComplete').hide();
    });
    $('.cleanMove_dt').on('click',function(){
      $('.cleanStart_dd').hide();
      $('.cleanMove_dd').show();
      $('.selectComplete').show().css('display','block');
    })
  };

  //구조 선택
  $('#selectStruct').click(function(){
    $('.cleanerStruct ol').show();
    $('.cleanerStruct ol li a').click(function(){
      $('.cleanerStruct ol').hide();
      $('#selectStruct').text($(this).text());
    });
  });
  $('.searchMarket').click(function(){
    $('.searchResult').show();
  });
  //모달 열림
  $('.cleanerSeach').click(function(){
    $('#modal').show();
    $('.modal_intro').show();
    $('.modal_close').click(function(){
      $('.modal_intro').hide();
      $('.modal_survey').show();
    });
  });
  //모달 surveyTab
  $('.modal_tablink').click(function(){
    // $('.modal_tablink').removeClass('active');
    // $(this).addClass('active');
    $('.surveyBoxes section').hide();
    $('#' + $(this).data('rel')).show();
  });
  //메인 휴대폰 인증
  // $('.cert_1').click(function(){
  //   $('#searchOriginal').removeClass('firstStep');
  //   $('.cert_1').removeClass('ready')
  //   $('#phoneCert').show();
  // });
  //서브페이지 모달-휴대폰 인증
  $('#btn-cert-1').click(function(){
    $('#phoneCert').show();
    $('#btn-cert-1').css('background','#322d4f').css('color','#fff');
  });
  $('#btn-cert-2').click(function(){
    $('#btn-cert-1').css('background','#e4e4e4').css('color','#b5b5b5').prop('disabled', true);
    $('#btn-cert-2').addClass('action');
    $('#modal-main #step1-main .step_check').show();
    $('#modal-main #step1-main .nextStep').show().css('display','block');
  });
  //서브페이지 모달-공간의 기본정보 공간 넓이 탭
  $('.spaceBtn').click(function(){
    $('.spaceBtn').removeClass('on');
    $(this).addClass('on');
  });
  //서브페이지 모달-공간의 기본정보 공간 종류 체크박스
  $('.spaceCheck').on('click', function() {
    $('.spaceCheck').not(this).prop('checked', false).toggleClass('disabled');
    $('.nextStep').show().css('display','block');
  });
  $('#spaceDi').on('click', function(){
    $('.spaceDiInput').toggleClass('show');
  });
  //서브페이지 모달-공간의 기본정보 공간 상세정보 체크박스
  $('.spaceStr').on('click', function() {
    $('.spaceStr').not(this).prop('checked', false).toggleClass('disabled');
    $('.nextStep').show().css('display','block');
  });
  //서브페이지 모달-공간 개수 +/-
  $('[data-quantity="plus"]').click(function(e){
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    if (!isNaN(currentVal)) {
      $('input[name='+fieldName+']').val(currentVal + 1);
    } else {
      $('input[name='+fieldName+']').val(0);
    }
  });
  $('[data-quantity="minus"]').click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name='+fieldName+']').val(currentVal - 1);
    } else {
      $('input[name='+fieldName+']').val(0);
    }
  });
  //품질 일부 input
  $('.qualityAdd').change(function(){
    if(this.checked){
      $('.addOption').show();
    } else {
      $('.addOption').hide();
    }
  });
  //결제방법 일부 input
  $('.notCash').change(function(){
    if(this.checked){
      $('.addTax').show();
    } else {
      $('.addTax').hide();
    }
  });
  $('#step4 .inputbox dl dd.howpay ol li input[type=checkbox]').on('click', function(){
    $('.nextStep').show().css('display','block');
  });
  //업체선택 페이지 상단 달력 토글
  $('#changeCalendar_dt').on('click', function(){
    $('.topCalendar dd').toggle();
  });
  $('#changeCalendar_dd').click(function(){
    $('.topCalendar dd').hide();
  });
  //업체선택 페이지 조건변경 모달
  $('.optionChange').on('click', function(){
    $('#modal_optionChange').show();
    $('.modal_option_close').click(function(){
      $('#modal_optionChange').hide();
    })
  });
  //조건변경 모달 결제방법 클릭시
  $('.option1 input[type=checkbox]').change(function(){
    if(this.checked){
      $('.option1 input[type=checkbox]').not(this).prop('disabled',true).addClass('disabled');
    } else{
      $('.option1 input[type=checkbox]').prop('disabled',false).removeClass('disabled');;
    }
  })
  //조건변경 모달 결제방법 일부
  $('.optionCredit').change(function(){
    if(this.checked){
      $('.addTax').show();
    } else {
      $('.addTax').hide();
    }
  });
  //조건변경 모달 품질 일부
  $('.optionQuality').change(function(){
    if(this.checked){
      $('.addPrice1').show();
    } else {
      $('.addPrice1').hide();
    }
  });
  //조건변경 모달 부가서비스 일부
  $('.optionService').change(function(){
    if(this.checked){
      $('.addPrice2').show();
    } else {
      $('.addPrice2').hide();
    }
  });
  //MD추천
  $('.openMD').click(function(){
    $('.recoMD_off').hide();
    $('.recoMD_on').show();
  });
  $('.closeMD').click(function(){
    $('.recoMD_on').hide();
    $('.recoMD_off').show();
  });
  //신규업체 주의사항 말풍선
  $('.noticeNew').on('click', function(){
    $('.talkBubble').show();
    $('.talkBubble').click(function(){
      $('.talkBubble').hide();
    })
  });
  //업체 선택시 선택 텍스트변경, 견적신청 버튼 텍스트 변경
  $('.cleaners input[type=checkbox]').on('change', function(){
    if(this.checked){
      $('.quotation').addClass('app');
      $('.quotation span').text('1개 업체 견적 신청')
    } else {
      $('.quotation').removeClass('app');
      $('.quotation span').text('견적 신청')
    }
  });
  //견적신청확인
  $('.quotation').on('click', function(){
    $('#modal_quotation_app').show();
    $('.modal_quotation_app_close').click(function(){
      $('#modal_quotation_app').hide();
    })
  });
  //견적 신청 완료
  $('.go_ok').on('click', function(){
    $('#modal_quotation_app').hide();
    $('#modal_quotation_ok').show();
    $('.close_quotation').click(function(){
      $('#modal_quotation_ok').hide();
    })
  });
  //검색 종료 확인
  $('.close_end').on('click', function(){
    $('#modal_quotation_end').hide();
    $('#modal_quotation_research').show();
    $('.close_research').click(function(){
      $('#modal_quotation_research').hide();
    })
  });
  //클린벨 배터리 모달
  $('.noticeBattery').on('click', function(){
    $('#modal_battery').show();
    $('.close_battery').click(function(){
      $('#modal_battery').hide();
    })
  });
  //청소범위 탭
  $('.structTab').click(function(){
    $('.structTab').removeClass('active');
    $(this).addClass('active');
    $('.structAll > div').hide();
    $('#' + $(this).data('rel')).show();
  });
  //굿 배드 리뷰 탭
  $('.reviewTab').click(function(){
    $('.reviewTab').removeClass('active');
    $(this).addClass('active');
    $('.reviewBoxes > div').hide();
    $('#' + $(this).data('rel')).show();
  });
  //청소품질 슬라이드
  $('.qualitySlide').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
    }
  });
  $('.floatBtn a').click(function(){
    $('#modal_app').show();
  });
  $('.rangeTog').on('click', function(){
    $(this).toggleClass('on');
    $('#' + $(this).data('rel')).toggle();
  });

  //190709 add

  $('#searchbtn-oneroom').click(function(){
    $('#modal-oneroom').show();
    $('.modal_survey').show();
    $('#modal-oneroom #step1').show();
  });
  $('#oneroom-btn-cert-1').on('click', function(){
    $('.oneroom-cert').show();
  });
  $('.closeStep').on('click', function(){
    $('#modal-oneroom').hide();
  });
  $('#modal-oneroom .closeModal').on('click', function(){
    $('#modal-oneroom').hide();
    $('#modal-oneroom #step1').show();
    $('#modal-oneroom #step2').hide();
    $('#modal-oneroom #step3').hide();
    $('#modal-oneroom #step4').hide();
  })
  $('#modal .closeModal').on('click', function(){
    $('#modal').hide();
  });
  $('#modal-close-1 .modal_close').on('click', function(){
    $('.modalpopup').hide();
  });
  $('#modal-close-1 .go_ok').on('click', function(){
    $('#modal-close-1').hide();
  });
  $('#modal-close-2 .modal_close').on('click', function(){
    $('.modalpopup').hide();
  });
  $('#modal-close-2 .go_ok').on('click', function(){
    $('#modal-close-2').hide();
  });

  //업체선택페이지-캘린더
  $('#filCal').on('click', function(){
    $('.filCalendar').addClass('float');
    $('#calendarChange').show();
  });

  //광고설명
  $('.addList h5').on('click', function(){
    $('#' + $(this).data('rel')).toggle();
  });

  //pc버전 업체리스트 마우스오버시 툴팁
  $('.est-price').each(function(){
    $(this).mouseenter(function(){
      $(this).parents('.addBox').addClass('showTip');
    });
    $(this).mouseout(function(){
      $(this).parents('.addBox').removeClass('showTip');
    });
  });

  //업체목록 조회중입니다.
  $('#loadingCompany').fadeOut(4000);

  //검색없을시 깜빡이는 툴팁
  $('#filter-search').click(function(){
    $('.addNoneTip').hide();
  });

  //견적신청 전체선택
  $('#estAll').on('click', function(){
    if($('#estAll').prop('checked')){
      $('.est').prop('checked', true);
    } else {
      $('.est').prop('checked', false);
    }
  });

  //상담신청 전체선택
  $('#consultAll').on('click', function(){
    if($('#consultAll').prop('checked')){
      $('.consult').prop('checked', true);
    } else {
      $('.consult').prop('checked', false);
    }
  });

  //토글 내 안내사항
  $('.modal_quotation_top.app h3 small').click(function(){
    $('#addTip-small').toggle();
  });

  //모바일 달력버튼 클릭시
  $('.CalendarBox .openBarCal').on('click', function(){
    if($('.CalendarBox').hasClass('datepicker-M')){
      $('.CalendarBox').removeClass('datepicker-M');
    } else {
      $('.CalendarBox').addClass('datepicker-M');
    }
  });

  //모바일 상세조건 클릭시
  $('.Mfilter > a').click(function(){
    $('.addNoneTip').hide();
    if($('.Mfilter').hasClass('on')){
      $('.Mfilter').removeClass('on');
      $('.MfilterBox').removeClass('on');
    } else {
      $('.Mfilter').addClass('on');
      $('.MfilterBox').addClass('on');
    }
  });

  //모바일 상세조건 세부탭
  $('.filterTab').click(function(){
    $('.filterTab').removeClass('active');
    $(this).addClass('active');
    $('.MfilterBox > div').hide();
    $('#' + $(this).data('rel')).show();
  });

  //모바일 평점순 클릭시
  $('.Moption > a').click(function(){
    $('.addNoneTip').hide();
    if($('.Moption').hasClass('on')){
      $('.Moption').removeClass('on');
      $('.MoptionBox').removeClass('on');
    } else {
      $('.Moption').addClass('on');
      $('.MoptionBox').addClass('on');
    }
  });

  //모바일 평점순 세부탭
  $('.optionTab').click(function(){
    $('.optionTab').removeClass('active');
    $(this).addClass('active');
  });

  $('.select-menu').selectmenu();

  $('.modalpopup .close_end').click(function(){
    $('.modalpopup').hide();
  });

  //190805 추가
  $('#searchCleaner .searchCleanerbtn').click(function(){
    $('#modal-main').show();
    $('.modal_intro-main').show();
    $('#modal-main .modal_close').click(function(){
      $('.modal_intro-main').hide();
      $('.modal_survey-main').show();
    });
  });
  $('#modal-main .modal_tablink').click(function(){
    $('.surveyBoxes-main section').hide();
    $('#' + $(this).data('rel')).show();
  });
  $('#modal-main .closeModal').click(function(){
    $('#modal-main').hide();
    $('.modal_intro-main').show();
    $('.modal_survey-main').hide();
  });

  //190807 추가
  //기존견적확인 인증번호발송
  $('#searchOriginal .cert_1').click(function(){
    $('#searchOriginal').removeClass('firstStep');
    $('.cert_1').removeClass('ready')
    $('#phoneCert-original').show();
  });

  //원룸청소업체검색 모달인증번호
  $('#oneroom-btn-cert-1').click(function(){
    $('#phoneCert').show();
    $('#oneroom-btn-cert-1').css('background','#322d4f').css('color','#fff');
  });
  $('#oneroom-btn-cert-2').click(function(){
    $('#oneroom-btn-cert-1').css('background','#e4e4e4').css('color','#b5b5b5').prop('disabled', true);
    $('#oneroom-btn-cert-2').addClass('action');
    $('.step_check').show();
    $('#modal-oneroom #step1 .nextStep').show().css('display','block');
  });
});
