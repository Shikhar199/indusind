function createAemElement(tag, classes, attributes, elementId) {
  const tagElement = document.createElement(tag);

  if (classes !== null) {
      for (let cls of classes) {
          tagElement.classList.add(cls);
      }
  }

  if (attributes !== null) {
      for (let attr in attributes) {
          tagElement.setAttribute(attr, attributes[attr]);
      }
  }

  if (elementId !== null) {
      tagElement.id = elementId;
  }
  return tagElement;
}

export default function decorate(block) {
  const container = document.createElement('div');
  container.innerHTML = block.innerHTML;
  block.innerHTML = '';

  const header = createAemElement('header', 
      ['header-transparent', 'position-relative', 'd-print-none', 'headerNew'], 
      {'id': 'header-main'}, 
      null
  );

  const overlayDiv = createAemElement('div', ['overlay-navright'], null, null);
  header.appendChild(overlayDiv);

  const mainNav = createAemElement('nav', ['navbar-main-desktop', 'd-none', 'd-lg-block'], null, null);
  const navbarLight = createAemElement('div', ['navbar-light-desktop'], null, null);
  const containerDiv = createAemElement('div', ['container'], null, null);
  const rowDiv = createAemElement('div', ['row'], null, null);
  const colDiv = createAemElement('div', ['col'], null, null);

  const navbarDesktop = createAemElement('div', 
      ['navbar-nav-dekstop', 'align-items-center'], 
      null, 
      null
  );

  const desktopTab = createAemElement('div', 
      ['d-lg-block', 'desktop-tab', 'flate-tab', 'headerLevel1Left'], 
      null, 
      null
  );

  const navPills = createAemElement('ul', 
      ['nav-pills-desktop', 'nav-fill'], 
      {'id': 'myTab', 'role': 'tablist'}, 
      null
  );

  // Data structure for navigation items
  const NAVIGATION_DATA = {
      // Top level navigation
      topNav: [
          { text: 'PERSONAL', href: '/in/en/personal.html', active: true },
          { text: 'PIONEER PRIVATE', href: 'https://bank.indusind.com/pioneer-private/home.html' },
          { text: 'PIONEER', href: 'https://bank.indusind.com/pioneer/home.html' },
          { text: 'NRI', href: '/in/en/nri.html' },
          { text: 'BUSINESS', href: '/in/en/business.html' },
          { text: 'CORPORATE', href: '/in/en/corporate.html' },
          { text: 'GIFT CITY', href: 'https://bank.indusind.com/pioneer/gift-city.html' }
      ],

      // Main navigation items with flyout content
      mainNav: [
          {
              title: 'Accounts & Deposits',
              sections: [
                  {
                      title: 'Accounts',
                      links: [
                          {
                              text: 'Savings Account',
                              href: 'https://www.indusind.com/in/en/personal/accounts/saving-account.html',
                              highlight: 'Up to 7% p.a.',
                              highlightColor: '#008000',
                              utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-savings_account'
                          },
                          // Other account links...
                      ]
                  },
                  // Other sections...
              ],
              promo: {
                  heading: 'Save Today, Enjoy More Tomorrow',
                  subHeading: 'Earn high interest up to 7% p.a. on savings',
                  ctaText: 'Open a Savings Account',
                  ctaLink: 'https://myaccount.indusind.com/SavingsAccount/index.aspx',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-open_a_savings_account_CTA',
                  image: 'https://www.indusind.com/content/dam/indusind-platform-images/header/Accounts-and-Deposits_Navigation-Section-Banner_1.webp'
              },
              quickLinks: [
                  {
                      text: 'Compare Savings Account',
                      href: 'https://www.indusind.com/in/en/personal/accounts/savings-account-comparison.html',
                      utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-compare_savings_account'
                  },
                  // Other quick links...
              ]
          },
          // Other main navigation items...
      ],

      // Header right section data
      headerRight: {
          contact: {
              phone: '18602677777'
          },
          rates: [
              {
                  text: 'Savings Account (Up to)',
                  value: '7%*',
                  href: 'https://www.indusind.com/in/en/personal/accounts/savings-account-interest-rate.html'
              },
              // Other rates...
          ]
      }
  };

  // Populate top navigation items
  NAVIGATION_DATA.topNav.forEach(item => {
      const li = createAemElement('li', 
          ['nav-item-dektop', 'position-relative'], 
          null, 
          null
      );
      const a = createAemElement('a', 
          ['nav-link-desktop', item.active ? 'active' : 'not-active'], 
          {
              'href': item.href,
              'aria-selected': item.active ? 'true' : 'false'
          },
          null
      );
      a.textContent = item.text;
      li.appendChild(a);
      navPills.appendChild(li);
  });

  // Create header right section
  const headerRight = createAemElement('div', ['headerLevel1Right'], null, null);

  // Add call box
  headerRight.appendChild(createCallBox());

  // Add action boxes
  ['Reach Us', 'Vehicle Auction'].forEach(text => {
      headerRight.appendChild(createActionBox(text));
  });

  // Add login section
  headerRight.appendChild(createLoginSection());

  // Add search section
  headerRight.appendChild(createSearchSection());

  // Add locator section
  headerRight.appendChild(createLocatorSection());

  // Add theme section
  headerRight.appendChild(createThemeSection());

  // Assemble the structure
  desktopTab.appendChild(navPills);
  navbarDesktop.appendChild(desktopTab);
  navbarDesktop.appendChild(headerRight);
  colDiv.appendChild(navbarDesktop);

  // Create and add desktop level 1
  const desktopLevel1 = createDesktopLevel1();
  colDiv.appendChild(desktopLevel1);

  // Complete the assembly
  rowDiv.appendChild(colDiv);
  containerDiv.appendChild(rowDiv);
  navbarLight.appendChild(containerDiv);
  mainNav.appendChild(navbarLight);
  header.appendChild(mainNav);

  // Add dark background div
  const darkBgDiv = createAemElement('div', 
      ['navbar-dark', 'bg-primary', 'd-none', 'd-lg-block'], 
      null, 
      null
  );
  header.appendChild(darkBgDiv);

  block.appendChild(header);

  // Initialize event listeners
  initializeEventListeners();
}

function createCallBox() {
  const callBox = createAemElement('div', ['headerLevel1RightCallBox'], null, null);
  const callLink = createAemElement('a', ['headerLevel1RightCall'], 
      {
          'href': 'tel:18602677777',
          'data-call': '18602677777'
      }, 
      null
  );
  const callIcon = createAemElement('span', ['headerLevel1CallIcon'], null, null);
  const callNumber = createAemElement('span', ['headerLevel1CallNumber'], null, null);
  callNumber.textContent = '18602677777';

  callLink.appendChild(callIcon);
  callBox.appendChild(callLink);
  callBox.appendChild(callNumber);

  return callBox;
}

function createActionBox(text) {
  const box = createAemElement('div', ['headerLevel1RightBox', 'disableRed'], null, null);
  const heading = createAemElement('div', ['headerLevel1Heading', 'disableRed'], null, null);
  heading.textContent = text;
  box.appendChild(heading);
  return box;
}

function createLoginSection() {
  const loginLi = createAemElement('li', ['nav-item-login'], null, null);
  const loginDiv = createAemElement('div', null, null, null);
  const btnGroup = createAemElement('div', ['btn-group-new', 'bt-action-login-new'], null, null);
  
  const btnLogin = createAemElement('div', ['btn-login', 'btn-action2', 'd-flex'], null, null);
  const btnText = createAemElement('span', ['btn-inner--text', 'd-block'], null, null);
  btnText.textContent = 'Login';
  
  btnLogin.appendChild(btnText);
  btnGroup.appendChild(btnLogin);
  
  const dropdownDiv = createAemElement('div', ['dropdown', 'dropdown-animate'], {'data-toggle': 'hover'}, null);
  const dropdownMenu = createAemElement('div', ['dropdown-menu', 'dropdown-menu-right', 'modal-login', 'rounded'], null, null);
  const modalBody = createAemElement('div', ['modal-body'], null, null);
  const textCapitalize = createAemElement('div', ['text-capitalize'], null, null);
  
  modalBody.appendChild(textCapitalize);
  dropdownMenu.appendChild(modalBody);
  dropdownDiv.appendChild(dropdownMenu);
  btnGroup.appendChild(dropdownDiv);
  
  loginDiv.appendChild(btnGroup);
  loginLi.appendChild(loginDiv);
  
  return loginLi;
}

function createSearchSection() {
  const searchDiv = createAemElement('div', ['ml-auto', 'mr-0', 'headerSearchOuter'], null, null);
  const searchInner = createAemElement('div', ['navbar-group-button-right', 'headerSearchInner'], null, null);
  const searchUl = createAemElement('ul', ['navbar-nav-desktop', 'headerSearchBox'], null, null);
  const searchLi = createAemElement('li', ['nav-item'], null, null);
  const searchLink = createAemElement('a', 
      ['nav-link-desktop', 'text-primary', 'nav-search'],
      {
          'href': 'javascript:;',
          'id': 'searchIcon',
          'data-action': 'search-open',
          'data-target': '#search-main',
          'title': 'Search'
      },
      null
  );
  const searchIcon = createAemElement('span', ['headerSearchIcon'], null, null);
  
  searchLink.appendChild(searchIcon);
  searchLi.appendChild(searchLink);
  searchUl.appendChild(searchLi);
  searchInner.appendChild(searchUl);
  searchDiv.appendChild(searchInner);
  
  return searchDiv;
}

function createLocatorSection() {
  const locatorDiv = createAemElement('div', ['headerLocator'], null, null);
  const locatorLi = createAemElement('li', ['headerLocatorItem'], null, null);
  const locatorLink = createAemElement('a', 
      ['headerLocatorRedirect'],
      {
          'href': '/in/en/personal/locate-us.html',
          'title': 'Locate Us'
      },
      null
  );
  const locatorIcon = createAemElement('span', ['headerLocatorIcon'], null, null);
  
  locatorLink.appendChild(locatorIcon);
  locatorLi.appendChild(locatorLink);
  locatorDiv.appendChild(locatorLi);
  
  return locatorDiv;
}

function createThemeSection() {
  const themeDiv = createAemElement('div', ['ml-auto', 'headerThemeOuter'], null, null);
  const themeNav = createAemElement('div', ['nav-accessabilty'], null, null);
  const themeUl = createAemElement('ul', ['nav'], null, null);
  const themeLi = createAemElement('li', ['nav-item', 'dropdwon-static'], null, null);
  
  const dropdownMenu = createAemElement('div', 
      ['dropdown-menu', 'dropdown-menu-sm', 'swing-in-right-fwd', 'dropdown-menu-arrow', 'position-static', 'rounded-left', 'headerNewTheme'],
      null, null
  );

  const flexDiv = createAemElement('div', ['d-flex'], null, null);
  
  // Add font size controls with fixed class handling
  const controls = [
      { id: '_smallify', text: 'A-', title: 'Decrease Font', onclick: 'decreaseFont()' },
      { id: '_reset', text: 'A', title: 'Reset Font', onclick: 'resetFont()' },
      { id: '_biggify', text: 'A+', title: 'Increase Font', onclick: 'increaseFont()' },
      { id: null, text: 'A', title: 'High Contrast', onclick: 'highContrast()', classes: ['link_highcontrast'] },
      { id: null, text: 'A', title: 'Normal Contrast', onclick: 'normalContrast()', classes: ['link_highcontrast_reset', 'disabled'] }
  ];

  controls.forEach(control => {
      const classes = ['dropdown-item', 'position-relative'];
      if (control.classes) {
          classes.push(...control.classes);
      }
      
      const link = createAemElement('a', 
          classes,
          {
              'href': `javascript:${control.onclick}`,
              'title': control.title,
              ...(control.id && { 'id': control.id })
          },
          null
      );
      link.textContent = control.text;
      flexDiv.appendChild(link);
  });

  dropdownMenu.appendChild(flexDiv);
  themeLi.appendChild(dropdownMenu);
  
  const themeLink = createAemElement('a', 
      ['nav-link', 'px-1', 'py-0', 'position-relative', 'nav-slide-toggle', 'rounded-right'],
      {
          'href': '#',
          'role': 'button',
          'data-toggle': 'dropdown',
          'aria-haspopup': 'true',
          'aria-expanded': 'false',
          'title': 'Accessibility'
      },
      null
  );
  const themeIcon = createAemElement('span', ['headerThemeIcon'], null, null);
  
  themeLink.appendChild(themeIcon);
  themeLi.appendChild(themeLink);
  themeUl.appendChild(themeLi);
  themeNav.appendChild(themeUl);
  themeDiv.appendChild(themeNav);
  
  return themeDiv;
}

function createDesktopLevel1() {
  const headerDesktopLevel1 = createAemElement('div', ['headerDesktoplevel1Outer'], null, null);
  
  // Add logo
  const logo = createAemElement('a', 
      ['navbar-brand-new', 'text-bold', 'd-block', 'mt-0'],
      {'href': '/in/en/personal.html'},
      null
  );
  const logoImg = document.createElement('img');
  logoImg.src = 'https://www.indusind.com/content/dam/indusind-platform-images/home/desktop-img/indusind-bank1.png';
  logo.appendChild(logoImg);
  
  headerDesktopLevel1.appendChild(logo);
  
  // Add navigation container
  const navContainer = createMainNavigation();
  headerDesktopLevel1.appendChild(navContainer);
  
  return headerDesktopLevel1;
}

function createMainNavigation() {
  const navContainer = document.createElement('div');
  const navigationContainer = createAemElement('div', ['container', 'navigationNewOuter'], null, null);
  
  const rowDiv = createAemElement('div', ['row'], null, null);
  const colDiv = createAemElement('div', ['position-static'], null, null);
  
  // Create navbar
  const navbar = createAemElement('div', ['navbar-nav', 'align-items-center', 'border-tr'], null, null);
  const desktopNav = createAemElement('div', ['d-none', 'd-lg-inline-block'], null, null);
  const tgNav = createAemElement('div', ['tg-nav'], {'id': 'tg-nav'}, null);
  const navigation = createAemElement('div', ['navbar-collapse', 'tg-navigation'], {'id': 'tg-navigation-new'}, null);
  
  const navList = createAemElement('ul', ['nav'], null, null);
  
  // Add main navigation items
  const mainNavItems = [
      'Accounts & Deposits',
      'Cards',
      'Loans',
      'Apply Online',
      'Digital Banking',
      '% Rates & Offers',
      'Investments & Insurance'
  ];

  mainNavItems.forEach((itemText) => {
      const navItem = createAemElement('li', 
          ['nav-item', 'navigation_desktop', 'dropdown', 'dropdown-animate', 'menu-item-has-children', 'menu-item-has-mega-menu'],
          {
              'data-toggle': 'hover',
              'aria-expanded': 'false'
          },
          null
      );

      const navLink = createAemElement('a', 
          ['navigationItemRedirect'],
          {
              'role': 'button',
              'data-toggle': 'dropdown',
              'aria-haspopup': 'true',
              'aria-expanded': 'false'
          },
          null
      );
      navLink.textContent = itemText;

      // Create flyout menu structure
      const flyoutMenu = createAemElement('div', 
          ['flyout-menu', 'flyout-custom'],
          {'id': 'flyout-menu-desktop'},
          null
      );

      const megaMenu = createAemElement('div',
          ['mega-menu-desktop', 'py-0', 'flyout-custom', 'newflyout'],
          null,
          null
      );

      const tabList = createAemElement('ul',
          ['tg-themetabnav-desktop'],
          {'role': 'tablist'},
          null
      );

      // Add presentation list item
      const presentationLi = createAemElement('li',
          null,
          {'role': 'presentation'},
          null
      );

      const tabContent = createAemElement('div',
          ['tab-content'],
          null,
          null
      );

      const tabPane = createAemElement('div',
          ['tab-pane', 'active'],
          null,
          null
      );

      const tabContainer = createAemElement('div',
          ['container'],
          null,
          null
      );

      // Build flyout structure
      tabContainer.appendChild(createFlyoutContainer());
      tabPane.appendChild(tabContainer);
      tabContent.appendChild(tabPane);
      presentationLi.appendChild(tabContent);
      tabList.appendChild(presentationLi);
      megaMenu.appendChild(tabList);
      flyoutMenu.appendChild(megaMenu);
      
      navItem.appendChild(navLink);
      navItem.appendChild(flyoutMenu);
      navList.appendChild(navItem);
  });

  navigation.appendChild(navList);
  tgNav.appendChild(navigation);
  desktopNav.appendChild(tgNav);
  navbar.appendChild(desktopNav);
  colDiv.appendChild(navbar);
  rowDiv.appendChild(colDiv);
  navigationContainer.appendChild(rowDiv);
  navContainer.appendChild(navigationContainer);
  
  return navContainer;
}

function createFlyoutContainer() {
  const container = createAemElement('div',
      ['desktop-flyoutOuterContainer', 'position-relative'],
      null,
      null
  );

  const flyout = createAemElement('div',
      ['desktop-flyout', 'desktop-flyout-threeMenu'],
      null,
      null
  );

  // Create content box
  const contentBox = createAemElement('div',
      ['flyoutDesktopContentBox', 'text-start', 'desktop-flyout-outer'],
      null,
      null
  );

  const boxDiv = createAemElement('div',
      ['desktop-flyout-Box'],
      null,
      null
  );

  // Define all section content
  const sections = [
      {
          title: 'Accounts',
          links: [
              {
                  text: 'Savings Account',
                  href: 'https://www.indusind.com/in/en/personal/accounts/saving-account.html',
                  highlight: 'Up to 7% p.a.',
                  highlightColor: '#008000',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-savings_account'
              },
              {
                  text: 'Zero Balance Savings Account',
                  href: 'https://www.indusind.com/in/en/personal/accounts/saving-account/indus-delite.html',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-zero_balance_savings_account'
              },
              {
                  text: 'Corporate Salary Account',
                  href: 'https://www.indusind.com/in/en/personal/accounts/corporate-salary-account.html',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-corporate_salary_account'
              },
              {
                  text: 'Uniformed Personnel Account',
                  href: 'https://www.indusind.com/in/en/personal/accounts/uniformed-personnel-account.html',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-uniformed_personnel_account'
              },
              {
                  text: 'Current Account',
                  href: 'https://www.indusind.com/in/en/business/accounts/current-account.html',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-current_account'
              }
          ]
      },
      {
          title: 'Deposits',
          links: [
              {
                  text: 'Fixed Deposit',
                  href: 'https://www.indusind.com/in/en/personal/deposits/fixed-deposit.html',
                  highlight: 'Up to 7.99% p.a.',
                  highlightColor: '#008000',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-fixed_deposit'
              },
              {
                  text: 'Recurring Deposit',
                  href: 'https://www.indusind.com/in/en/personal/deposits/recurring-deposit.html',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-recurring_deposit'
              },
              {
                  text: 'Senior Citizen FD',
                  href: 'https://www.indusind.com/in/en/personal/deposits/senior-citizen-scheme.html',
                  highlight: 'Up to 8.49% p.a.',
                  highlightColor: '#008000',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-senior_citizen_scheme'
              },
              {
                  text: 'Auto Sweep FD',
                  href: 'https://www.indusind.com/in/en/personal/deposits/sweep-in-sweep-out.html',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-auto_sweep_fd'
              }
          ]
      },
      {
          title: 'Locker',
          links: [
              {
                  text: 'Safe Deposit Locker',
                  href: 'https://www.indusind.com/in/en/personal/safe-deposit-locker.html',
                  utmParams: 'utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-safe_deposit_locker'
              }
          ]
      }
  ];

  sections.forEach(section => {
      const sectionDiv = createAemElement('div',
          ['flyoutSectionMenu', 'col-4'],
          null,
          null
      );

      const heading = createAemElement('a',
          ['mainCategoryHeading'],
          {'target': '_self'},
          null
      );
      heading.textContent = section.title;

      const rowOuter = createAemElement('div',
          ['row', 'rowOuterDesktop', 'row-cols-1'],
          null,
          null
      );

      // Add links for each section
      section.links.forEach(link => {
          const col = createAemElement('div', ['col'], null, null);
          const rowInner = createAemElement('div', 
              ['rowInnerDesktop'],
              link.highlight ? {'data-background': link.highlightColor} : null,
              null
          );

          const linkElement = createAemElement('a',
              ['navDeepLinking-desktop'],
              {
                  'href': link.href,
                  'target': '_self'
              },
              null
          );
          linkElement.textContent = link.text;

          rowInner.appendChild(linkElement);

          // Add highlight if present
          if (link.highlight) {
              const highlightSpan = createAemElement('span',
                  ['flyoutHighlight'],
                  {'style': `background-color: ${link.highlightColor}`},
                  null
              );
              highlightSpan.textContent = link.highlight;
              rowInner.appendChild(highlightSpan);
          }

          col.appendChild(rowInner);
          rowOuter.appendChild(col);
      });

      sectionDiv.appendChild(heading);
      sectionDiv.appendChild(rowOuter);
      boxDiv.appendChild(sectionDiv);
  });

  contentBox.appendChild(boxDiv);

  // Add quick links
  const quickLinksOuter = createAemElement('div',
      ['quick-linksOuter', 'col-12'],
      null,
      null
  );

  const quickLinksHeading = createAemElement('h3',
      ['quick-linksHeading'],
      null,
      null
  );
  quickLinksHeading.textContent = 'Quick Links';

  const quickLinksInner = createAemElement('ul',
      ['quick-linksInner', 'text-bold'],
      null,
      null
  );

  const quickLinksItems = [
      {
          text: 'Savings Account Interest Rate',
          href: 'https://www.indusind.com/in/en/personal/accounts/savings-account-interest-rate.html?utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-quick_links-sa_interest_rate'
      },
      {
          text: 'FD Calculator',
          href: 'https://www.indusind.com/in/en/personal/calculators/fixed-deposit-calculator.html?utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-quick_links-fd_calculator'
      },
      {
          text: 'FD Interest Rates',
          href: 'https://www.indusind.com/in/en/personal/fixed-deposit-interest-rate.html?utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-quick_links-fd_interest_rate'
      },
      {
          text: 'Open a Savings Account',
          href: 'https://myaccount.indusind.com/SavingsAccount/index.aspx?utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-quick_links-apply_for_savings_account_CTA'
      },
      {
          text: 'Open a Fixed Deposit',
          href: 'https://myaccount.indusind.com/fdonline/index.aspx?utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-quick_links-open_fixed_deposit_CTA'
      },
      {
          text: 'CASA Welcome Kit',
          href: 'https://www.indusind.com/in/en/personal/welcom-kit.html?utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-quick_links-casa_welcome_kit'
      },
      {
          text: 'FAQs',
          href: 'https://www.indusind.com/in/en/personal/faq.html?utm_source=website&utm_medium=header_nav&utm_campaign=apply_online-hub-faqs'
      },
      {
          text: 'Manage Mandate(s)',
          href: 'https://www.indusind.com/content/enach/welcome.html?utm_source=website&utm_medium=header_nav&utm_campaign=apply_online-hub-manage_mandate'
      }
  ];

  quickLinksItems.forEach(item => {
      const li = createAemElement('li', null, null, null);
      const link = createAemElement('a', null, {'href': item.href}, null);
      link.textContent = item.text;
      li.appendChild(link);
      quickLinksInner.appendChild(li);
  });

  quickLinksOuter.appendChild(quickLinksHeading);
  quickLinksOuter.appendChild(quickLinksInner);
  contentBox.appendChild(quickLinksOuter);

  // Add image box with promo content
  const imageBox = createFlyoutImageBox();
  flyout.appendChild(contentBox);
  flyout.appendChild(imageBox);
  container.appendChild(flyout);

  return container;
}
function createFlyoutImageBox() {
  const imageBox = createAemElement('div',
      ['flyoutDesktopImageBox'],
      null,
      null
  );

  const imageDiv = createAemElement('div',
      ['flyoutDesktopImage', 'position-relative'],
      null,
      null
  );

  // Create inner content
  const innerDiv = createAemElement('div',
      ['flyoutDesktopImageInner'],
      null,
      null
  );

  const heading = createAemElement('div',
      ['flyoutDesktopImageHeading'],
      null,
      null
  );
  heading.textContent = 'Save Today, Enjoy More Tomorrow';

  const subHeading = createAemElement('div',
      ['flyoutDesktopImageSubHeading'],
      null,
      null
  );
  subHeading.textContent = 'Earn high interest up to 7% p.a. on savings';

  const link = createAemElement('a',
      ['flyoutDesktopImageLink'],
      {
          'href': 'https://myaccount.indusind.com/SavingsAccount/index.aspx?utm_source=website&utm_medium=header_nav&utm_campaign=accounts_deposits-open_a_savings_account_CTA'
      },
      null
  );
  link.textContent = 'Open a Savings Account';

  innerDiv.appendChild(heading);
  innerDiv.appendChild(subHeading);
  innerDiv.appendChild(link);
  imageDiv.appendChild(innerDiv);
  imageBox.appendChild(imageDiv);

  return imageBox;
}

function initializeEventListeners() {
  // Add sticky header functionality
  window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar-light-desktop');
      if (navbar) {
          if (window.scrollY > 100) {
              navbar.classList.add('sticky');
          } else {
              navbar.classList.remove('sticky');
          }
      }
  });

  // Add dropdown functionality
  document.querySelectorAll('[data-toggle="dropdown"]').forEach(dropdownToggle => {
      dropdownToggle.addEventListener('click', (e) => {
          e.preventDefault();
          const dropdownMenu = dropdownToggle.nextElementSibling;
          if (dropdownMenu) {
              dropdownMenu.classList.toggle('show');
              dropdownToggle.setAttribute('aria-expanded', 
                  dropdownToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
              );
          }
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try {
      const headerBlock = document.querySelector(".header-block");
      console.log("Decorating header block:", headerBlock);
      decorate(headerBlock);
  } catch (error) {
      console.error("Error decorating header:", error);
  }
});