import { createAemElement } from "../../scripts/aem.js";

export default function decorate(block){
    const container = document.createElement('div');
    container.innerHTML = block.innerHTML;
    block.innerHTML = '';
    console.log(container);

    const tabContainerDiv = document.createElement('div');
    tabContainerDiv.classList.add('tabs-container');

    const unorderedList = createAemElement('ul', ['nav', 'tabs-withdot', 'twotabsonly', 'flex-column', 'flex-sm-row', 'justify-content-center', 'mb-4'], {'role':'tablist'}, null);

    const li1 = document.createElement('li');
    li1.classList.add('nav-item');
    li1.setAttribute('id','recm');
    const a1 = createAemElement('a', ['nav-link', 'tabs-navs', 'mr-3', 'active', 'show'], {'data-toggle':'tab', 'href': '#card-recommended', 'role': 'tab', 'aria-controls': 'card-recommended', 'aria-selected':'true'}, "card-recommended-tab");
    a1.textContent = "Recommended";
    li1.appendChild(a1);

    const li2 = document.createElement('li');
    li2.classList.add('nav-item');
    li2.setAttribute('id','tab2');
    const a2 = createAemElement('a', ['nav-link', 'tabs-navs', 'ml-3'], {'data-toggle':'tab', 'href': '#card-tab2', 'role': 'tab', 'aria-controls': 'card-recommended', 'aria-selected':'true'}, "card-tab2-tab");
    a2.textContent = "Digital";
    li2.appendChild(a2);

    const li3 = document.createElement('li');
    li3.classList.add('nav-item');
    li3.setAttribute('id','allCards');
    const a3 = createAemElement('a', ['nav-link', 'tabs-navs', 'ml-3'], {'data-toggle':'tab', 'href': '#card-all', 'role': 'tab', 'aria-controls': 'card-all', 'aria-selected':'false'}, "card-all-tab");
    a3.textContent = "All";
    li3.appendChild(a3);

    unorderedList.appendChild(li1);
    unorderedList.appendChild(li2);
    unorderedList.appendChild(li3);

    tabContainerDiv.appendChild(unorderedList);

    let sectionDiv;
    let cardParentDiv;

    const tabContentDiv = document.createElement('div');
    tabContentDiv.classList.add('tab-content', 'tab-content-number');
    tabContentDiv.setAttribute('data-number',6);

    const tabPaneDiv = createAemElement('div', ['tab-pane', 'fade', 'active', 'show',  'position-relative'], {'role':'tabpanel', 'aria-labelledby':'card-recommended-tab'}, "card-recommended");
 
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    tabContentDiv.appendChild(tabPaneDiv);
    tabPaneDiv.appendChild(rowDiv);

    [...container.children].forEach((row,r)=>{


        if(r%3==0){
            let customDiv;
            let spanText;
            let inputEle;
            let label;
            let picture;

            sectionDiv = document.createElement('div');
            sectionDiv.classList.add('col-md-6', 'col-lg-4');
    
            cardParentDiv = document.createElement('div');
            cardParentDiv.classList.add('card', 'card-equal-h', 'h-100', 'chkboxcard', 'card-border-color', 'mt-2', 'mb-3');
    
            sectionDiv.appendChild(cardParentDiv);

            const cardHeaderDiv = document.createElement('div');
            cardHeaderDiv.classList.add('card-header', 'cat-card-header');

            [...row.children].forEach((col,c)=>{
                if(c==0){
                    picture = col.querySelector('picture');
                } else{
                    customDiv = document.createElement('div');
                    customDiv.classList.add('custom-control', 'custom-checkbox');

                    const inputId = "compare_check"+r;

                    spanText = document.createElement('span');
                    spanText.classList.add('addtoCompareTxt');

                    inputEle = document.createElement('input');
                    inputEle.type = 'checkbox';
                    inputEle.classList.add('custom-control-input', 'cardSelectCheck', 'cardsLabel');
                    inputEle.id = inputId;
                    inputEle.setAttribute('value', r)

                    label = document.createElement('label');
                    label.classList.add('custom-control-label');
                    label.setAttribute('for', inputId);

                    const tagDiv = document.createElement('div');
                    tagDiv.classList.add('tag');

                    [...col.children].forEach((child,i)=>{
                        if(col.children.length==5){
                            if(i==0&&child.textContent.startsWith('tag')){
                                tagDiv.textContent = child.textContent.substring(4);
                            } else if(i==1){
                                spanText.textContent = child.textContent.trim();
                            } else if(i==2){
                                inputEle.setAttribute('data-title', child.textContent.trim());
                            } else if(i==3){
                                inputEle.setAttribute('data-page-path', child.textContent.trim());
                            } else if(i==4){
                                inputEle.setAttribute('data-product-type', child.textContent.trim());
                            }
                        } else{
                            if(i==0){
                                spanText.textContent = child.textContent.trim();
                            } else if(i==1){
                                inputEle.setAttribute('data-title', child.textContent.trim());
                            } else if(i==2){
                                inputEle.setAttribute('data-page-path', child.textContent.trim());
                            } else if(i==3){
                                inputEle.setAttribute('data-product-type', child.textContent.trim());
                            }
                        }
                    })
                    if(tagDiv.textContent.trim().length>0){
                        cardHeaderDiv.appendChild(tagDiv);
                    } 
                }
            })
            customDiv.appendChild(spanText);
            customDiv.appendChild(inputEle);
            customDiv.appendChild(label);
            cardHeaderDiv.appendChild(customDiv);
            cardHeaderDiv.appendChild(picture);
            cardParentDiv.appendChild(cardHeaderDiv);

        } else if(r%3==1){
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const h5 = document.createElement('h5');
            h5.classList.add('h5', 'mb-1', 'text-bold');

            const anchor = document.createElement('a');
            anchor.classList.add('card-title', 'text-primary');

            h5.appendChild(anchor);

            const para = document.createElement('p');
            para.classList.add('card-text', 'mt-2', 'three-lines');
            const span = document.createElement('span');
            span.classList.add('ellip');
            para.appendChild(span);

            const h6 = document.createElement('h6');
            let list;

            [...row.children].forEach((col,c)=>{
                
                    [...col.children].forEach((child,i)=>{
                        if(i==0){
                            anchor.textContent = child.textContent.trim();
                        } else if(i==1){
                            anchor.setAttribute('href', child.textContent.trim());
                        } else if(i==2){
                            span.textContent = child.textContent.trim();
                        } else if(i==3){
                            h6.textContent = child.textContent.trim();
                        } else{
                            list = col.querySelector('ul');
                            list.classList.add('list-arrow-bullet', 'pl-0', 'ml-0');
                        }
                    })
                
            })
            cardBody.appendChild(h5);
            cardBody.appendChild(para);
            cardBody.appendChild(h6);
            cardBody.appendChild(list);
            cardParentDiv.appendChild(cardBody);

        } else if(r%3==2){
            let cardFooter = document.createElement('div');
            cardFooter.classList.add('card-footer', 'border-0', 'pt-0');

            let alignItemsDiv = document.createElement('div');
            alignItemsDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center');

            let anchor = document.createElement('a');
            anchor.classList.add('btn', 'py-2', 'btn-sm', 'btn-primary', 'card-btn', 'text-uppercase', 'btn-primary-option');

            let anchor2 = document.createElement('a');
            anchor2.classList.add('link_view', 'normal-text');

            [...row.children].forEach((col,c)=>{
                [...col.children].forEach((child,i)=>{
                    if(i==0){
                        anchor.href = child.textContent.trim();
                    } else if(i==1){
                        anchor.textContent = child.textContent.trim();
                    } else if(i==2){
                        anchor2.href = child.textContent.trim();
                    } else{
                        anchor2.textContent = child.textContent.trim();
                    }
                })
            })

            cardFooter.appendChild(alignItemsDiv);
            alignItemsDiv.appendChild(anchor);
            alignItemsDiv.appendChild(anchor2);
            cardParentDiv.appendChild(cardFooter)

        }

        rowDiv.appendChild(sectionDiv);
    })

    tabContainerDiv.appendChild(tabContentDiv);
    block.appendChild(tabContainerDiv);
    console.log(tabContainerDiv);
}

$(document).ready(function () {

    //$('.custom-tag-dropdown-2').prop('selectedIndex', 0);
    //$(".custom-tag-dropdown-2").selectpicker('refresh');

    $('#card-all-tab').click(function () {
        $('input').prop('checked', false);
    });

    /*$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    console.log(activeTab);
    if (activeTab) {
        $('a[href="' + activeTab + '"]').tab('show');
    }

    var tabtxt = localStorage.getItem("activetext");
    console.log(tabtxt);
    $('.nav.tabs-withdot .nav-item .nav-link').each(function (index, value) {
        if ($(value).text() == tabtxt) {
            $('.nav.tabs-withdot .nav-item .nav-link').removeClass('active');
            $(value).addClass('active');
        }
    });*/

    $('.filters_section .col-lg-4').each(function () {
        var filtertxt = $(this).find('h4').text();
        if (filtertxt == 'Fees') {
            $(this).find('h4').parent().find('.filterslider_wrap .swiper-button-next, .filterslider_wrap .swiper-button-prev').hide();
        }
    })

    var loadData, source, template, categoryPath, cardsData, displayData,
        hideLoadMore, itemsTodisplay, populateResults, sectionOneRadioVal = "",
        initialCards, arr = [], listOfTags = [], mobileTags = [],
        disableTags, allowProductCompare, dropDown3Val, dropDown2Val;
        var initialNumber = $('.btn-outer').data('initial'); 
        itemsTodisplay = Number(initialNumber);
    $(".product-category-allCards").slice(0, itemsTodisplay).show();
    categoryPath = $(".product-category-section").data("category-path");
    initialCards = $(".product-category-allCards").length;
    if (initialCards >= 0 && initialCards <= itemsTodisplay) $(".load-more-btn2").hide();


    $(".custom-tag-checkbox").each(function (element) {
        let tagVal = $(this).data("tag-val");
        listOfTags.push(tagVal);
    });

    $(".custom-tag-radiobox").each(function (element) {
        let tagVal = $(this).data("tag-val");
        listOfTags.push(tagVal);
    });


    /**
     * Drop Down Change Event
     */
    $(".custom-tag-dropdown-2").change(function () {
        mobileTags = [];
        dropDown2Val = $(this).val();
        let radioboxVal = $('.custom-tag-radiobox:checked').attr('data-tag-val');
        if (dropDown2Val) mobileTags.push(dropDown2Val);
        if (dropDown3Val) mobileTags.push(dropDown3Val);
        if (radioboxVal) mobileTags.push(radioboxVal);
        console.log(mobileTags);
        loadData(mobileTags, categoryPath, listOfTags);
    });

    /**
     * Drop Down Change Event
     */
    $(".custom-tag-dropdown-3").change(function () {
        mobileTags = [];
        dropDown3Val = $(this).val();
        let radioboxVal = $('.custom-tag-radiobox:checked').attr('data-tag-val');
        if (dropDown2Val) mobileTags.push(dropDown2Val);
        if (dropDown3Val) mobileTags.push(dropDown3Val);
        if (radioboxVal) mobileTags.push(radioboxVal);
        console.log(mobileTags);
        loadData(mobileTags, categoryPath, listOfTags);
    });

    /**
     * Disable Tags AJAX
     */
    disableTags = function (categoryPath, listOfTags) {
        let data = {
            categoryPath: categoryPath,
            listOfTags: listOfTags,
            reqType: "onLoad"
        };
        let jsonData = JSON.stringify(data);
        $.ajax({
            url: '/bin/product/category',
            type: "POST",
            data: jsonData,
            contentType: "application/json",
            success: function (res) {
                if (res.status === 200) {
                    let onLoadDisabledTags = JSON.parse(res.onLoadDisabledTags);
                    let tagList = listOfTags.filter(function (obj) {
                        return onLoadDisabledTags.indexOf(obj) == -1;
                    });
                    tagList.forEach(function (element) {
                        $("input[data-tag-val='" + element + "']").attr("disabled", true);
                    });

                }
            },
            error: function (er) {
                console.log("Error :: ", e);
            }
        });
    }

    setTimeout(function () {
        disableTags(categoryPath, listOfTags);
    }, 0);

    /**
     * Checkbox Click Event
     */
    $(".custom-tag-checkbox").click(function () {
        // Last Change for Prevent disabling radiobox
        listOfTags = [];
        $(this).each(function (element) {
            let tagVal = $(this).data("tag-val");
            listOfTags.push(tagVal);
        });
        // --------- Last Change --------------------

        if ($(this).hasClass("unique-tag")) {
            arr.splice($.inArray($(this).data("tag-val"), arr), 1);
            $(this).removeClass("unique-tag");
        } else {
            arr.push($(this).data("tag-val"));
            $(this).addClass("unique-tag");
        }
        let checkedCount = $(".custom-tag-checkbox.unique-tag").length;
        if (checkedCount === 0) {
            $(".custom-tag-checkbox").each(function (element) {
                let checkedVal = $(this).hasClass("unique-tag");
                let disabledCheckbox = $(this).attr("disabled");
                if (!checkedVal && disabledCheckbox) {
                    let tagVal = $(this).data("tag-val");
                    $(this).prop("disabled", false);
                }
            });
            $(".custom-tag-radiobox").each(function (element) {
                let checkedVal = $(this).hasClass("unique-tag");
                let disabledCheckbox = $(this).attr("disabled");
                if (!checkedVal && disabledCheckbox) {
                    let tagVal = $(this).data("tag-val");
                    $(this).prop("disabled", false);
                }
            });
        }
        loadData(arr, categoryPath, listOfTags);
    });

    /**
     * Section One Radio Button Click Event
     */
    $(".custom-tag-radiobox").on('click', function () {
        listOfTags = [];
        $(".custom-tag-checkbox").each(function (element) {
            let tagVal = $(this).data("tag-val");
            listOfTags.push(tagVal);
        });
        arr = [];
        $('.custom-tag-radiobox').each(function (index, element) {
            if ($(element).is(":checked")) {
                arr.push($(element).attr('data-tag-val'));
                listOfTags.push($(element).attr('data-tag-val'));
            }
        });

        if ($(window).width() <= 991) {
            console.log("Mobile");
            mobileTags = [];
            let radioboxVal = $('.custom-tag-radiobox:checked').attr('data-tag-val');
            if (dropDown2Val) mobileTags.push(dropDown2Val);
            if (dropDown3Val) mobileTags.push(dropDown3Val);
            if (radioboxVal) mobileTags.push(radioboxVal);
            console.log(mobileTags);
            loadData(mobileTags, categoryPath, listOfTags);
        } else {
            loadData(arr, categoryPath, listOfTags);
        }
    });

    /**
     * Load More Button Click Event
     */
  
    $(".load-more-btn2").click(function () {
        var loadMoreNumber = $('.tab-content-number').data('number'); 
        itemsTodisplay = Number(loadMoreNumber); 
        displayData();
        hideLoadMore();
    });

    /**
     * Function to hide Load More Button
     */
    hideLoadMore = function () {
        // var elements = $("#display-content").children('[style*="display:none;"]').length;
        var elements = $("#display-product-cards").children('[style*="display:none;"]').length;
        if (elements === 0) {
            $(".load-more-btn2").hide();
        }
    }

    /**
     * Function to fetch the product cards on the basis of list of tags
     */
    loadData = function (tagsList, categoryPath, listOfTags) {
        let data = {
            inputTags: tagsList,
            categoryPath: categoryPath,
            listOfTags: listOfTags,
            reqType: "loadData"
        };
        let jsonData = JSON.stringify(data);
        $.ajax({
            url: '/bin/product/category',
            type: "POST",
            data: jsonData,
            contentType: "application/json",
            success: function (res) {
                if (res.data && res.status === 200) {
                    let tagList = JSON.parse(res.disabledTags);
                    //console.log("Disable Tag List");
                    //console.log(tagList);
                    tagList.forEach(function (element) {
                        $("input[data-tag-val='" + element + "']").prop('checked', false);
                        $("input[data-tag-val='" + element + "']").attr("disabled", true);
                    });
                    let enabledTagList = listOfTags.filter(function (e) {
                        return tagList.indexOf(e) == -1;
                    });
                    //console.log("Enabled Tag List");
                    //console.log(enabledTagList);
                    enabledTagList.forEach(function (element) {
                        $("input[data-tag-val='" + element + "']").prop("disabled", false);
                    });
                    $(".product-category-allCards").remove();
                    data = res.data;

                    cardsData = JSON.parse(data);
                    if (cardsData.length > itemsTodisplay) {
                        $(".load-more-btn2").show();
                        populateResults(cardsData);
                        $(".product-category-tagCards").slice(0, itemsTodisplay).show();
                    } else {
                        $(".load-more-btn2").hide();
                        populateResults(cardsData);
                        $(".product-category-tagCards").show();
                    }
                } else if (res.status === 204) {
                    $(".product-category-tagCards").hide();
                    $(".product-category-allCards").hide();
                    $(".load-more-btn2").hide();
                    //$(".product-cross-seller-banner").hide();
                }
            },
            error: function (e) {
                console.log("Error :: ", e);
            }
        });
    }

    /**
     * Function to display the hidden cards
     */
    displayData = function () {
        $(".product-category-tagCards:hidden").slice(0, itemsTodisplay).show();
        $(".product-category-allCards:hidden").slice(0, itemsTodisplay).show();
        console.log('items loaded');
    }

    /**
     * Function to populate the product cards
     */
    populateResults = function (result) {
        source = $("#product-cards-template").html();
        if (source != undefined) {
            template = Handlebars.compile(source);
        }
        $("#display-product-cards").html(template({
            objects: result
        }));
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
	//remove cookie on page load

	if ($(window).width() > 762) {
		//desktop

		/**
		 * Deleting JWT TOKEN Cookie
		 */

		setCookie('compareData', '', 0);
		setCookie("pagePath", '', 0);
		$(".cardSelectCheck").prop("checked", false);
		var length, getobj, obj = [],
			pagepath,
			thumbnail,
			title,
			productType,
			source2,
			template2,
			totalcard,
			closeSrc,
			imageSrc;

		function whenClick(elem) {
			totalcard = $(".custom-control-input.cardSelectCheck:checked").length;
			if (totalcard <= 3) {
				if ($(elem).prop('checked')) {
					console.log('add card');
					pagepath = ($(elem).closest('.chkboxcard').find('.cardSelectCheck').attr('data-page-path'));
					thumbnail = ($(elem).closest('.custom-checkbox').next().attr('src'));
					title = ($(elem).closest('.chkboxcard').find('.cardSelectCheck').attr('data-title'));
					productType = ($(elem).closest('.chkboxcard').find('.cardSelectCheck').attr('data-product-type'));
					obj.push({
						'pagePath': pagepath,
						'productType': productType,
						'title': title,
						'thumbnail': thumbnail,
					});

					pagepath = '';
					thumbnail = '';
					title = '';
					productType = '';
					let stringifyObj = JSON.stringify(obj);
					setCookie("compareData", stringifyObj);
					populateResults2(obj);


				} else {
					getobj = JSON.parse(getCookie('compareData'));
					title2 = $(elem).closest('.chkboxcard').find('.cardSelectCheck').attr('data-title');
					getobj.forEach(function (element, index) {
						if (element.title == title2) {
							getobj.splice(index, 1);
							obj.splice(index, 1);
							let stringifyObj = JSON.stringify(getobj);
							setCookie("compareData", stringifyObj);
							populateResults2(getobj);
							getobj = [];
						}
					});

				}
				//hide modal if no card selected
				length = $(".custom-control-input.cardSelectCheck:checked").length;
				if (length == 1) {
					$('.compare_modal').fadeIn();
					$('#compareNow').addClass('compare_disabled');
					$('#compareNow').find('a').attr("href", "javascript://");
				} else if (length == 2) {
					$('.compare_modal').fadeIn();
					$('#compareNow').removeClass('compare_disabled');
					$('#compareNow').find('a').attr("href");

				} else if (length == 3) {
					$('#addCard').removeClass('d-lg-flex d-md-none d-none');
					$('#addCard').hide();
					$('.compare_modal').fadeIn();
					$('#compareNow').removeClass('compare_disabled');
					$('#compareNow').find('a').attr("href");
				} else {
					$('.compare_modal').fadeOut();
				}
			} else {
				alert('you cannot select more than 3 card');
				return false;
			}
			// console.log(JSON.parse(getCookie('compareData')));
        }
        $(document).on("click",".cardSelectCheck",function() {
		
			//whenClick(this);

			totalcard = $(".custom-control-input.cardSelectCheck:checked").length;
			if (totalcard <= 3) {
				if ($(this).prop('checked')) {
					console.log('add card');
					pagepath = ($(this).closest('.chkboxcard').find('.cardSelectCheck').attr('data-page-path'));
					thumbnail = ($(this).closest('.custom-checkbox').next().attr('src'));
					title = ($(this).closest('.chkboxcard').find('.cardSelectCheck').attr('data-title'));
					productType = ($(this).closest('.chkboxcard').find('.cardSelectCheck').attr('data-product-type'));
					obj.push({
						'pagePath': pagepath,
						'productType': productType,
						'title': title,
						'thumbnail': thumbnail,
					});

					pagepath = '';
					thumbnail = '';
					title = '';
					productType = '';
					let stringifyObj = JSON.stringify(obj);
					setCookie("compareData", stringifyObj);
					populateResults2(obj);


				} else {
					getobj = JSON.parse(getCookie('compareData'));
					title2 = $(this).closest('.chkboxcard').find('.cardSelectCheck').attr('data-title');
					getobj.forEach(function (element, index) {
						if (element.title == title2) {
							getobj.splice(index, 1);
							obj.splice(index, 1);
							let stringifyObj = JSON.stringify(getobj);
							setCookie("compareData", stringifyObj);
							populateResults2(getobj);
							getobj = [];
						}
					});

				}
				//hide modal if no card selected
				length = $(".custom-control-input.cardSelectCheck:checked").length;
				if (length == 1) {
					$('.compare_modal').fadeIn();
					$('#compareNow').addClass('compare_disabled');
					$('#compareNow').find('a').attr("href", "javascript://");
				} else if (length == 2) {
					$('.compare_modal').fadeIn();
					$('#compareNow').removeClass('compare_disabled');
					$('#compareNow').find('a').attr("href");

				} else if (length == 3) {
					$('#addCard').removeClass('d-lg-flex d-md-none d-none');
					$('#addCard').hide();
					$('.compare_modal').fadeIn();
					$('#compareNow').find('a').attr("href");
				} else {
					$('.compare_modal').fadeOut();
				}
			} else {
				alert('you cannot select more than 3 card');
				return false;
			}
			// console.log(JSON.parse(getCookie('compareData')));

		});
		//other functions
		$('#mainClose').on('click', function () {
			$('.compare_modal').fadeOut();
			setCookie('compareData', '', 0);
			$(".cardSelectCheck").prop("checked", false);
			obj=[];
			getobj=[];

		});
		$('.tabs-navs').on('click', function () {
			if (!$(this).hasClass('active')) {
				obj = [];
				$('.compare_modal').fadeOut();
				setCookie('compareData', '', 0);
				$(".cardSelectCheck").prop("checked", false);
			}
        });
        $('.custom-tag-checkbox').on('click', function () {
				obj = [];
				$('.compare_modal').fadeOut();
				setCookie('compareData', '', 0);
				$(".cardSelectCheck").prop("checked", false);
			
        });
        $('.custom-tag-radiobox').on('click', function () {
				obj = [];
				$('.compare_modal').fadeOut();
				setCookie('compareData', '', 0);
				$(".cardSelectCheck").prop("checked", false);
        });
        
        
		$(document).on('click', '.cardclose', function () {
			closeSrc = $(this).next().find('img').attr('src');
			$('.custom-checkbox').each(function (index, element) {
				imageSrc = $(element).find('input').attr('data-thumbnail');
				if (imageSrc == closeSrc) {
					$(element).find('input').prop("checked", false);
					whenClick(element);
					console.log('index will be deleted>>>>', index);
				}
			});

		});
		$(document).on('click', '#compareNow', function () {
			console.log('adhjvahfvh')
			let pageurl = $(".product-category-section").data("category-path");
			setCookie("pagePath", pageurl, 1);
		});


		/*
		 * Function to populate the product cards
		 */
		populateResults2 = function (result) {
			source2 = $("#modal-cards-template").html();
			if (source2 != undefined) {
				template2 = Handlebars.compile(source2);
			}
			$(".popCards").html(template2({
				objects: result
			}));
			result = '';
		}
	} else {
		//mobile

		/**
		 * Deleting JWT TOKEN Cookie
		 */

		setCookie('compareData', '', 0);
		setCookie("pagePath", '', 0);
		$(".cardSelectCheck").prop("checked", false);
		var length, getobj, obj = [],
			pagepath,
			thumbnail,
			title,
			productType,
			source2,
			template2,
			totalcard,
			closeSrc,
			imageSrc;

		function whenClick(elem) {
			totalcard = $(".custom-control-input.cardSelectCheck:checked").length;
			if (totalcard <= 3) {
				if ($(elem).prop('checked')) {
					console.log('add card');
					pagepath = ($(elem).closest('.chkboxcard').find('.cardSelectCheck').attr('data-page-path'));
					thumbnail = ($(elem).closest('.custom-checkbox').next().attr('src'));
					title = ($(elem).closest('.chkboxcard').find('.cardSelectCheck').attr('data-title'));
					productType = ($(elem).closest('.chkboxcard').find('.cardSelectCheck').attr('data-product-type'));
					obj.push({
						'pagePath': pagepath,
						'productType': productType,
						'title': title,
						'thumbnail': thumbnail,
					});

					pagepath = '';
					thumbnail = '';
					title = '';
					productType = '';
					let stringifyObj = JSON.stringify(obj);
					setCookie("compareData", stringifyObj);
					populateResults2(obj);


				} else {
					getobj = JSON.parse(getCookie('compareData'));
					title2 = $(elem).closest('.chkboxcard').find('.cardSelectCheck').attr('data-title');
					getobj.forEach(function (element, index) {
						if (element.title == title2) {
							getobj.splice(index, 1);
							obj.splice(index, 1);
							let stringifyObj = JSON.stringify(getobj);
							setCookie("compareData", stringifyObj);
							populateResults2(getobj);
							getobj = [];
						}
					});

				}
				//hide modal if no card selected
				length = $(".custom-control-input.cardSelectCheck:checked").length;
				if (length == 1) {
					$('.compare_modal').fadeIn();
					$('#compareNow').addClass('compare_disabled');
					$('#compareNow').find('a').attr("href", "javascript://");
				} else if (length == 2) {
					$('#addCard').removeClass('d-lg-flex d-md-none d-none');
					$('#addCard').hide();
					$('#compareNow').removeClass('compare_disabled');
					$('.compare_modal').fadeIn();
					$('#compareNow').find('a').attr("href", "/content/indusind-corporate/en/personal/product-compare-credit-card.html?wcmmode=disabled");
				} else {
					$('.compare_modal').fadeOut();
				}
			} else {
				alert('you cannot select more than 2 card');
				return false;
			}
			// console.log(JSON.parse(getCookie('compareData')));
        }
        $(document).on("click",".cardSelectCheck",function() {
		    //whenClick(this);

			totalcard = $(".custom-control-input.cardSelectCheck:checked").length;
			if (totalcard <= 2) {
				if ($(this).prop('checked')) {
					console.log('add card');
					pagepath = ($(this).closest('.chkboxcard').find('.cardSelectCheck').attr('data-page-path'));
					thumbnail = ($(this).closest('.custom-checkbox').next().attr('src'));
					title = ($(this).closest('.chkboxcard').find('.cardSelectCheck').attr('data-title'));
					productType = ($(this).closest('.chkboxcard').find('.cardSelectCheck').attr('data-product-type'));
					obj.push({
						'pagePath': pagepath,
						'productType': productType,
						'title': title,
						'thumbnail': thumbnail,
					});

					pagepath = '';
					thumbnail = '';
					title = '';
					productType = '';
					let stringifyObj = JSON.stringify(obj);
					setCookie("compareData", stringifyObj);
					populateResults2(obj);


				} else {
					getobj = JSON.parse(getCookie('compareData'));
					title2 = $(this).closest('.chkboxcard').find('.cardSelectCheck').attr('data-title');
					getobj.forEach(function (element, index) {
						if (element.title == title2) {
							getobj.splice(index, 1);
							obj.splice(index, 1);
							let stringifyObj = JSON.stringify(getobj);
							setCookie("compareData", stringifyObj);
							populateResults2(getobj);
							getobj = [];
						}
					});

				}
				//hide modal if no card selected
				length = $(".custom-control-input.cardSelectCheck:checked").length;
				if (length == 1) {
					$('.compare_modal').fadeIn();
					$('#compareNow').addClass('compare_disabled');
					$('#compareNow').find('a').attr("href", "javascript://");
				} else if (length == 2) {
					$('#addCard').removeClass('d-lg-flex d-md-none d-none');
					$('#addCard').hide();
					$('.compare_modal').fadeIn();
					$('#compareNow').removeClass('compare_disabled');
					$('#compareNow').find('a').attr("href");
				} else {
					$('.compare_modal').fadeOut();
				}
			} else {
				alert('you cannot select more than 2 card');
				return false;
			}
			// console.log(JSON.parse(getCookie('compareData')));

		});
		//other functions
		$('#mainClose').on('click', function () {
			$('.compare_modal').fadeOut();
			setCookie('compareData', '', 0);
			$(".cardSelectCheck").prop("checked", false);
			obj=[];
			getobj=[];

		});
		$('.tabs-navs').on('click', function () {
			if (!$(this).hasClass('active')) {
				obj = [];
				$('.compare_modal').fadeOut();
				setCookie('compareData', '', 0);
				$(".cardSelectCheck").prop("checked", false);
			}
		});
		$(document).on('click', '.cardclose', function () {
			closeSrc = $(this).next().find('img').attr('src');
			$('.custom-checkbox').each(function (index, element) {
				imageSrc = $(element).find('input').attr('data-thumbnail');
				if (imageSrc == closeSrc) {
					$(element).find('input').prop("checked", false);
					whenClick(element);
					console.log('index will be deleted>>>>', index);
				}
			});

		});
		$(document).on('click', '#compareNow', function () {
			console.log('adhjvahfvh')
			let pageurl = $(".product-category-section").data("category-path");
			setCookie("pagePath", pageurl, 1);
		});


		/*
		 * Function to populate the product cards
		 */
		populateResults2 = function (result) {
			source2 = $("#modal-cards-template").html();
			if (source2 != undefined) {
				template2 = Handlebars.compile(source2);
			}
			$(".popCards").html(template2({
				objects: result
			}));
			result = '';
		}
	}

});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//:::::::::::::::functions:::::::::::::::
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
setCookie = function (name, value, days) {
	let expires = "";
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

setCookie = function (name, value) {
	let expires = "";
    days = 0;
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
