function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
     // tabs
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabsContent() {
        tabsContent.forEach(element => {
            element.classList.add('hide');
        });

        tabs.forEach(element => {
            element.classList.remove(activeClass);
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((element, i) => {
                if (target == element) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

export default tabs;