import React from "react";
// import img from '../Image/backlog2.png';


export default function features() {
    return (
        <>
            <div class="Page--dashboard theme-default en ">
                <header id="global" aria-label="Main menu" class="global-header is_NAI-integrated is_trial"
                    xmlns="http://www.w3.org/1999/html">
                    <div class="global-header-inner">
                        <div class="global-header-inner__left">
                            <nav class="global-nav">
                                <ul class="global-nav__list">
                                    <li class="global-nav__list-item">
                                        <div class="space-icon-set">
                                            <a role="presentation" tabindex="-1" class="space-icon-set__image"
                                                id="globalDashboardIconLink" href="/dashboard?from_globalbar">

                                                <img src="/SpaceImage.action" alt="" />

                                            </a>
                                            <a role="button" class="global-nav__link space-icon-set__text js-dashboard-link"
                                                id="globalDashboardLink" href="/dashboard?from_globalbar"><span>Dashboard</span></a>
                                        </div>
                                    </li>
                                    <li class="global-nav__list-item dropdown">
                                        <button type="button" class="global-nav__link" id="globalRecentProjectLink"
                                            aria-expanded="false" aria-controls="globalRecentProjectContainer">Projects</button>
                                        <div id="globalRecentProjectContainer" class="global-nav-content dropdown-box -global-nav">
                                            <div id="globalRecentProjectLoading" class="loading--circle -small -global-nav -recent"
                                                style={{display: "none"}}></div>
                                            <div class="dropdown-box__header">
                                                <div class="dropdown-box__title">Projects</div>
                                            </div>
                                            <div class="search-box -open-fixed dropdown-box__search">
                                                <input type="search"
                                                    class="search-box__input -w-full -no-border js-search-box dropdown-box__search-input"
                                                    value="" name="search" autocomplete="off" placeholder="Search projects" />
                                                <span class="dropdown-box__search-input-focusline"></span>
                                                <button type="button"
                                                    class="icon icon--close -small search-box__reset js-search-reset"
                                                    aria-label="Reset"></button>
                                            </div>
                                            <div class="dropdown-box__content">
                                                <ul class="data-list -btm-border js-list"></ul>
                                                <div class="pager pager--simple -global-nav js-global-pager">
                                                    <a role="button" href="javascript:void(0)"
                                                        class="pager__prev js-prev-link is_disabled">Prev</a> <a role="button"
                                                            href="javascript:void(0)"
                                                            class="pager__next js-next-link is_disabled">Next</a>
                                                </div>
                                                <div class="is_no-items">There are no projects assigned to you yet.<br />Projects
                                                    assigned to you will be listed here.</div>
                                            </div>
                                        </div>
                                    </li>


                                    <li class="global-nav__list-item dropdown">
                                        <button type="button" class="global-nav__link" id="globalRecentLink" aria-expanded="false"
                                            aria-controls="globalRecentContainer">Recently Viewed</button>
                                        <div id="globalRecentContainer" class="global-nav-content dropdown-box -global-nav">
                                            <div id="globalRecentLoading" class="loading--circle -small -global-nav -recent"
                                                style={{display: "none"}}></div>
                                            <div class="dropdown-box__header">
                                                <div class="dropdown-box__toggle recent-select">
                                                    <ul>
                                                        <li><button role="tab" aria-selected="true"
                                                            aria-controls="RecentSearchResult"
                                                            class="dropdown-box__toggle-button recent-select-button recent-issue-toggle is_active">Issues</button>
                                                        </li>
                                                        <li><button role="tab" aria-selected="false"
                                                            aria-controls="RecentSearchResult"
                                                            class="dropdown-box__toggle-button recent-select-button recent-wiki-toggle">Wikis</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="search-box -open-fixed dropdown-box__search">
                                                <input type="search"
                                                    class="search-box__input -w-full -no-border js-search-box dropdown-box__search-input"
                                                    value="" name="search" autocomplete="off"
                                                    placeholder="Search recently viewed issues" />
                                                <span class="dropdown-box__search-input-focusline"></span>
                                                <button type="button"
                                                    class="icon icon--close -small search-box__reset js-search-reset"
                                                    aria-label="Reset"></button>
                                            </div>
                                            <div id="RecentSearchResult" class="dropdown-box__content">
                                                <ul class="data-list -btm-border js-list"></ul>
                                                <div class="pager pager--simple -global-nav js-global-pager">
                                                    <a role="button" href="javascript:void(0)"
                                                        class="pager__prev js-prev-link is_disabled">Prev</a> <a role="button"
                                                            href="javascript:void(0)"
                                                            class="pager__next js-next-link is_disabled">Next</a>
                                                </div>
                                                <span class="copyButton" style={{display: "none"}}></span>
                                                <div class="is_no-items">There are no recently viewed issues yet.</div>
                                            </div>
                                        </div>
                                    </li>


                                    <li class="global-nav__list-item dropdown">
                                        <button type="button" class="global-nav__link" id="globalIssueFilterLink"
                                            aria-expanded="false" aria-controls="globalIssueFilterContainer">Filters</button>

                                        <div id="globalIssueFilterContainer" class="global-nav-content dropdown-box -global-nav">
                                            <div id="globalIssueFilterLoading" class="loading--circle -small -global-nav -recent"
                                                style={{display: "none"}}></div>
                                            <div class="dropdown-box__header">
                                                <div class="dropdown-box__toggle filter-select">
                                                    <ul>
                                                        <li><button role="tab" aria-selected="true"
                                                            aria-controls="FilterSearchResult"
                                                            class="dropdown-box__toggle-button filter-select-button list-filters-toggle is_active">
                                                            List</button></li>
                                                        <li><button role="tab" aria-selected="false"
                                                            aria-controls="FilterSearchResult"
                                                            class="dropdown-box__toggle-button filter-select-button board-filters-toggle">
                                                            Boards</button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="search-box -open-fixed dropdown-box__search">
                                                <input type="search"
                                                    class="search-box__input -w-full -no-border js-search-box dropdown-box__search-input"
                                                    value="" name="search" autocomplete="off" placeholder="Search saved filters" />
                                                <span class="dropdown-box__search-input-focusline"></span>
                                                <button type="button"
                                                    class="icon icon--close -small search-box__reset js-search-reset"
                                                    aria-label="Reset"></button>
                                            </div>
                                            <div id="FilterSearchResult" class="dropdown-box__content">
                                                <ul class="data-list -btm-border js-list"></ul>
                                                <div class="pager pager--simple -global-nav js-global-pager">
                                                    <a role="button" href="javascript:void(0)"
                                                        class="pager__prev js-prev-link is_disabled">Prev</a> <a role="button"
                                                            href="javascript:void(0)"
                                                            class="pager__next js-next-link is_disabled">Next</a>
                                                </div>
                                                <span class="copyButton" style={{ display: "none" }}></span>
                                                <div class="is_no-items">There are no saved issue filters.<br />Saved filters after
                                                    searching issues will be listed here.</div>
                                            </div>
                                        </div>

                                    </li>



                                    <li class="global-nav__list-item dropdown">
                                        <button type="button" id="addItemLink"
                                            class="icon-button icon-button--inverse add-item-link -small | simptip-position-bottom simptip-movable simptip-smooth"
                                            data-tooltip="Add" aria-label="Add menu" aria-expanded="false"
                                            aria-controls="addItemContainer">

                                            <svg role="image" class="icon -small">
                                                <use xlink href="/images/svg/sprite.symbol.svg#icon_add" />
                                            </svg>
                                        </button>
                                        <ul id="addItemContainer" class="dropdown-menu -under-small-icon">
                                            <li class="dropdown-menu__item AddIssue ">
                                                <button type="button" class="dropdown-menu__link opensAddIssueDialog">Add
                                                    Issue</button>
                                            </li>
                                            <li class="dropdown-menu__item AddProject"><button type="button"
                                                class="dropdown-menu__link opensAddProjectDialog">Add Project</button></li>

                                            <li class="dropdown-menu__item AddUser "><button type="button"
                                                class="dropdown-menu__link"
                                                onclick="backlog.GlobalBar.showGlobalInvitationDialog('GlobalBarPlus');">Add
                                                User</button>
                                            </li>
                                            <form action="/RedirectAfterEditAssignProjects.action" method="POST"
                                                id="editAssignProjectsRedirectForm">
                                            </form>

                                        </ul>
                                    </li>
                                    <li class="global-nav__list-item">
                                        <a href="https://apps.nulab.com/payment/space/YGmH9G9OKf/payment/change_plan?productKey=backlog"
                                            class="upgrade-info upgrade-tracking-element" target="_blank">
                                            <span class="upgrade-info__button
                                
                            ">
                                                Upgrade
                                            </span>
                                        </a>
                                    </li>


                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <div class="global-header-inner__right global-header__user-actions">
                    <nav class="user-nav">
                        <ul class="user-nav__list">


                            <li class="user-nav__list-item dropdown">
                                <div class="global-search-wrapper">
                                    <div id="GlobalSearchBox" class="search-box global-search-box">
                                        <input type="search" class="search-box__input" role="search"
                                            placeholder="Search this Space" value="" id="globalSearch" name="searchProject"
                                            autocomplete="off" />
                                        <button type="button" class="icon icon--close -small search-box__reset"
                                            aria-label="Reset" id="globalSearchReset"></button>
                                    </div>
                                </div>
                                <div id="globalSearchContainer" class="global-nav-content dropdown-box global-search">
                                    <div id="globalSearchUpdating" class="loading--circle -small -global-search"
                                        style={{display: "none"}}></div>
                                    <div class="dropdown-box__content global-search__content">
                                        <button type="button" aria-label="Close" id="globalSearchBoxClose"
                                            class="icon icon--close -medium global-search__close"></button>
                                        <ul id="SearchResultSwitch" class="button-group global-search__result-switch">
                                            <li class="button-group__item"><button type="button"
                                                class="button-group__link -issue js-Issue"><span
                                                    class="global-search__result-summay">Issue</span><span
                                                        class="global-search__result-num js-num">(0)</span></button></li>
                                            <li class="button-group__item"><button type="button"
                                                class="button-group__link -wiki js-Wiki"><span
                                                    class="global-search__result-summay">Wiki</span><span
                                                        class="global-search__result-num js-num">(0)</span></button></li>
                                            <li class="button-group__item"><button type="button"
                                                class="button-group__link -file js-File"><span
                                                    class="global-search__result-summay">Shared Files</span><span
                                                        class="global-search__result-num js-num">(0)</span></button></li>
                                            <li class="button-group__item"><button type="button"
                                                class="button-group__link -pull-request js-PullRequest"><span
                                                    class="global-search__result-summay">Pull requests</span><span
                                                        class="global-search__result-num js-num">(0)</span></button></li>
                                            <li class="button-group__item"><button type="button"
                                                class="button-group__link -user js-User"><span
                                                    class="global-search__result-summay">Members</span><span
                                                        class="global-search__result-num js-num">(0)</span></button></li>
                                        </ul>
                                        <ul id="SearchResult" class="data-list -top-btm-border js-list"></ul>
                                        <div class="pager pager--simple -global-nav js-global-pager">
                                            <a role="button" href="javascript:void(0)"
                                                class="pager__prev js-prev-link">Prev</a> <span
                                                    class="pager__info js-pager-info"></span> <a role="button"
                                                        href="javascript:void(0)" class="pager__next js-next-link">Next</a>
                                        </div>
                                        <div class="is_no-items">No Issues / Wikis / Files / Members were found</div>
                                        <div class="is_timeout">Timeout occurred</div>
                                        <div class="is_error">Error occurred</div>
                                        <div class="is_error_with_meg"></div>
                                    </div>
                                </div>
                            </li>


                            <li class="user-nav__list-item dropdown">
                                <button type="button" id="userActionLink"
                                    class="icon-button icon-button--inverse user-actions-link" aria-label="More menu"
                                    aria-expanded="false" aria-controls="userActionContainer">

                                    <svg role="image" class="icon -medium">
                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_others" />
                                    </svg>
                                </button>
                                <ul id="userActionContainer" class="dropdown-menu -under-icon">
                                    <li class="dropdown-menu__item Menber"><a id="listMemberLink"
                                        class="dropdown-menu__link" href="/users">Members</a></li>
                                    <li class="dropdown-menu__item Issue-search"><a class="dropdown-menu__link"
                                        href="/FindIssueAllOver.action">Find Issues</a></li>
                                </ul>
                            </li>


                            <li class="user-nav__list-item">
                                <button type="button" id="globalWatchItemLink"
                                    class="icon-button icon-button--inverse watch-list-link  | simptip-position-bottom simptip-movable simptip-smooth"
                                    data-tooltip="Watch" aria-label="Watch" aria-expanded="false"
                                    aria-controls="globalWatchItemContainer">
                                    <span class="watch-badge"></span>

                                    <svg role="image" class="icon -medium">
                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_watch" />
                                    </svg>
                                </button>
                                <div id="globalWatchItemContainer" class="global-nav-content slide-in -watch-list">
                                    <div class="slide-in__header">
                                        <div class="slide-in__title -inline">Watching issues</div>
                                        <div class="search-box -open-fixed -slide-in-header">
                                            <input type="search" class="search-box__input -w-small -no-border js-search-box"
                                                value="" name="search" autocomplete="off"
                                                placeholder="Search watching issues" />
                                            <button type="button"
                                                class="icon icon--close -small search-box__reset js-search-reset"
                                                aria-label="Reset"></button>
                                        </div>
                                        <button type="button" aria-label="Close" id="GlobalWatchItemClose"
                                            class="icon icon--close -medium -inverse slide-in__close"></button>
                                    </div>
                                    <div
                                        class="slide-in__content -title-one-line-has-search-box js_stop-scroll-propagation">
                                        <ul class="watch-list js-list"></ul>
                                        <span class="loading--circle -small -watch-list" id="globalWatchItemLoading"
                                            style={{ display: "none" }}></span>
                                        <div class="is_no-items">There are no watching issues.<br />Click the Watch link in
                                            the Show issue page.</div>
                                    </div>
                                </div>
                            </li>

                            <li class="user-nav__list-item">
                                <button type="button" id="globalNotificationsLink"
                                    class="icon-button icon-button--inverse notifications-link | simptip-position-bottom simptip-movable simptip-smooth"
                                    data-tooltip="Notification" aria-label="Notification" aria-expanded="false"
                                    aria-controls="globalNotificationsContainer">
                                    <span class="badge badge--notification"></span>

                                    <svg role="image" class="icon -medium">
                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_notification" />
                                    </svg>
                                </button>
                                <div id="globalNotificationsContainer" class="global-nav-content slide-in -notifications">
                                    <div id="globalNotificationsLoading" class="loading--circle -small -notifications"
                                        style={{display: "none"}}></div>
                                    <div class="slide-in__header">
                                        <h1 class="slide-in__title notifications-control">
                                            <span class="notifications-control__text">Notification</span>
                                            <div id="notificationUserFilter"
                                                class="select2-wrapper chosen-wrapper notifications-control__user-filter">
                                                <div data-bind="component: {name: 'user-selector', params: senderSelector}">
                                                </div>
                                            </div>
                                            <span class="notifications-control__unread-filter"><input
                                                id="hideReadNotifications" type="checkbox"
                                                class="input-checkbox -inverse" data-bind="checked: unreadOnly" /><label
                                                    for="hideReadNotifications">Unread only</label></span>
                                        </h1>
                                        <button type="button" aria-label="Close" id="GlobalNotificationClose"
                                            class="icon icon--close -medium -inverse slide-in__close js-notifications-close"></button>
                                    </div>
                                    <div
                                        class="slide-in__content slide-in__content--notifications js-notifications-content is_empty">
                                        <ul class="notification-list js-list"></ul>
                                        <div class="text _t-center _mg-t-5 _mg-b-15 js-show-more" style={{ display: "none" }}>
                                            <a href="javascript:void(0)" role="button">Show more</a>
                                        </div>
                                        <div class="slide-in__loading js-pager-loading">
                                            <div class="loading--circle -small"></div>
                                        </div>
                                        <div class="is_no-items">No new notifications</div>

                                        <div class="is_no-items-invitation">
                                            <div class="keep-global-bar-open invitation-container">
                                                <div class="invitation-icon">
                                                    <svg width="233" height="147" viewBox="0 0 233 147" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0)">
                                                            <path
                                                                d="M212.6 12.3H20.3V6C20.3 2.9 22.8 0.5 25.8 0.5H207.1C210.2 0.5 212.6 3 212.6 6V12.3Z"
                                                                fill="var(--iconColorDefault)"
                                                                stroke="var(--iconColorDefault)" stroke-miterlimit="10">
                                                            </path>
                                                            <path
                                                                d="M26.7 8.50005C27.8598 8.50005 28.8 7.55985 28.8 6.40005C28.8 5.24025 27.8598 4.30005 26.7 4.30005C25.5402 4.30005 24.6 5.24025 24.6 6.40005C24.6 7.55985 25.5402 8.50005 26.7 8.50005Z"
                                                                fill="var(--backgroundColorSchemeBase)"></path>
                                                            <path
                                                                d="M32.7 8.50005C33.8598 8.50005 34.8 7.55985 34.8 6.40005C34.8 5.24025 33.8598 4.30005 32.7 4.30005C31.5402 4.30005 30.6 5.24025 30.6 6.40005C30.6 7.55985 31.5402 8.50005 32.7 8.50005Z"
                                                                fill="var(--backgroundColorSchemeBase)"></path>
                                                            <path
                                                                d="M38.7 8.50005C39.8598 8.50005 40.8 7.55985 40.8 6.40005C40.8 5.24025 39.8598 4.30005 38.7 4.30005C37.5402 4.30005 36.6 5.24025 36.6 6.40005C36.6 7.55985 37.5402 8.50005 38.7 8.50005Z"
                                                                fill="var(--backgroundColorSchemeBase)"></path>
                                                            <path d="M212.6 12.3H20.3V128.4H212.6V12.3Z"
                                                                stroke="var(--iconColorDefault)" stroke-miterlimit="10">
                                                            </path>
                                                            <path d="M20.3 24.9H212.6" stroke="var(--iconColorDefault)"
                                                                stroke-miterlimit="10"></path>
                                                            <path
                                                                d="M118.4 133.1C149.107 133.1 174 108.207 174 77.5C174 46.793 149.107 21.9 118.4 21.9C87.693 21.9 62.8 46.793 62.8 77.5C62.8 108.207 87.693 133.1 118.4 133.1Z"
                                                                fill="var(--backgroundColorSchemeBase)"
                                                                stroke="var(--brandColorBacklog)" stroke-width="8"
                                                                stroke-miterlimit="10"></path>
                                                            <path
                                                                d="M137.6 88.5C135 87.2 133.1 81 133.1 77.8V72C133.1 64.8 128.2 58.8 121.4 56.7C121.8 56 122.1 55.1 122.1 54.3C122.1 51.4 119.7 49 116.6 49C113.6 49 111.1 51.4 111.1 54.3C111.1 55.2 111.4 56 111.8 56.7C105 58.7 100.1 64.8 100.1 72V77.9C100.1 80.9 98.4 87.1 95.6 88.6C93.9 89.5 92.7 91.2 92.7 93.2C92.7 96.1 95.1 98.5 98.2 98.5H107.4H111.4H121.8H125.7H135.1C138.1 98.5 140.6 96.1 140.6 93.2C140.5 91.2 139.4 89.4 137.6 88.5Z"
                                                                fill="var(--iconColorDefault)"
                                                                stroke="var(--iconColorDefault)" stroke-miterlimit="10">
                                                            </path>
                                                            <path
                                                                d="M122.2 101.2H111.3C111.3 104.1 113.7 106.5 116.8 106.5C119.9 106.5 122.2 104.1 122.2 101.2Z"
                                                                fill="var(--iconColorDefault)"
                                                                stroke="var(--iconColorDefault)" stroke-miterlimit="10">
                                                            </path>
                                                            <path d="M156.9 117.2L194.9 143.6"
                                                                stroke="var(--brandColorBacklog)" stroke-width="8"
                                                                stroke-miterlimit="10"></path>
                                                            <path
                                                                d="M212.6 93.8C223.535 93.8 232.4 84.9352 232.4 74C232.4 63.0647 223.535 54.2 212.6 54.2C201.665 54.2 192.8 63.0647 192.8 74C192.8 84.9352 201.665 93.8 212.6 93.8Z"
                                                                fill="var(--iconColorDefault)"
                                                                stroke="var(--iconColorDefault)" stroke-miterlimit="10">
                                                            </path>
                                                            <path
                                                                d="M212.6 76.6999C216.356 76.6999 219.4 73.7002 219.4 69.9999C219.4 66.2996 216.356 63.2999 212.6 63.2999C208.844 63.2999 205.8 66.2996 205.8 69.9999C205.8 73.7002 208.844 76.6999 212.6 76.6999Z"
                                                                stroke="var(--backgroundColorSchemeBase)" stroke-width="2">
                                                            </path>
                                                            <path
                                                                d="M219.9 84.6999C220.1 81.9999 218.7 79.4 216.4 78C214.1 76.6 211.2 76.6 208.8 78C206.5 79.4 205.1 81.9999 205.3 84.6999"
                                                                stroke="var(--backgroundColorSchemeBase)" stroke-width="2">
                                                            </path>
                                                            <path
                                                                d="M20.3 93.8C31.2352 93.8 40.1 84.9352 40.1 74C40.1 63.0647 31.2352 54.2 20.3 54.2C9.36476 54.2 0.5 63.0647 0.5 74C0.5 84.9352 9.36476 93.8 20.3 93.8Z"
                                                                fill="var(--iconColorDefault)"
                                                                stroke="var(--iconColorDefault)" stroke-miterlimit="10">
                                                            </path>
                                                            <path
                                                                d="M20.3 76.6999C24.0555 76.6999 27.1 73.7002 27.1 69.9999C27.1 66.2996 24.0555 63.2999 20.3 63.2999C16.5445 63.2999 13.5 66.2996 13.5 69.9999C13.5 73.7002 16.5445 76.6999 20.3 76.6999Z"
                                                                stroke="var(--backgroundColorSchemeBase)" stroke-width="2">
                                                            </path>
                                                            <path
                                                                d="M27.6 84.6999C27.8 81.9999 26.4 79.4 24.1 78C21.8 76.6 18.9 76.6 16.5 78C14.2 79.4 12.8 81.9999 13 84.6999"
                                                                stroke="var(--backgroundColorSchemeBase)" stroke-width="2">
                                                            </path>
                                                            <path
                                                                d="M136.4 67.2C142.365 67.2 147.2 62.3647 147.2 56.4C147.2 50.4353 142.365 45.6 136.4 45.6C130.435 45.6 125.6 50.4353 125.6 56.4C125.6 62.3647 130.435 67.2 136.4 67.2Z"
                                                                fill="var(--notificationColorDefault)"
                                                                stroke="var(--backgroundColorSchemeBase)" stroke-width="2">
                                                            </path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0">
                                                                <rect width="232.9" height="146.8"
                                                                    fill="var(--backgroundColorSchemeBase)"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div class="invitation-title">Looking for notifications?</div>

                                                <div class="invitation-explanation">Backlog is more fun with your team
                                                    members onboard. You will get notified here of any activity from your
                                                    team.</div>
                                                <div id="notifications-pane-invite-button-entry"></div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </li>
                            <li class="user-nav__list-item">
                                <button type="button" id="globalHelpLink"
                                    class="icon-button icon-button--inverse global-help-link | simptip-position-bottom simptip-movable simptip-smooth"
                                    data-tooltip="Help" aria-label="Help" aria-expanded="false"
                                    aria-controls="globalHelpContainer"><span class="help-badge"></span><span
                                        class="global-help-link__icon">
                                        <svg role="image" class="icon -small">
                                            <use xlink href="/images/svg/sprite.symbol.svg#icon_help" />
                                        </svg></span></button>
                                <div id="globalHelpContainer" class="global-nav-content slide-in">

                                    <div class="slide-in__header">
                                        <div class="slide-in__title -inline">Help</div>
                                        <button type="button" aria-label="Close" id="GlobalHelpClose"
                                            class="icon icon--close -medium -inverse slide-in__close"></button>
                                    </div>
                                    <div class="slide-in__content">
                                        <ul class="data-list -no-row-hover js_data-list" data-update-version="20210630">



                                            <li class="data-list__item video-link js_level1" style={{ display: "none" }}>
                                                <div class="video-link__image groupStep1 groupStep2">
                                                    <div class="video-link__image">
                                                        <script src="https://fast.wistia.com/embed/medias/vdms93324q.jsonp"
                                                            async></script>
                                                        <script src="https://fast.wistia.com/assets/external/E-v1.js"
                                                            async></script><span
                                                                class="wistia_embed wistia_async_vdms93324q popover=true popoverAnimateThumbnail=true"
                                                                style={{display:"inlineBlock",height:"180px",position:"relative",width:"320px"}}>&nbsp;</span>
                                                    </div>
                                                    <a class="video-link__text icon--window -p-after js_track-item"
                                                        href="https://support.backlog.com/hc/en-us/categories/360001683733?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">Watch video tutorials</a>
                                                </div>
                                            </li>

                                            <li class="data-list__item help-links js_level1" style={{ display: "none" }}>
                                                <p class="help-links-title">
                                                    Getting Started with Backlog
                                                </p>
                                                <ul class="help-link-list">
                                                    <li class="help-link-list__item"><a
                                                        class="support-link -numbers js_track-item"
                                                        href="https://backlog.com/getting-started/administrator/organization-management/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">
                                                        <div class="support-link__icon">1</div>
                                                        <div class="support-link__text">
                                                            <h2 class="support-link__text-term">Organization Management
                                                            </h2>
                                                            <p class="support-link__text-desc">Manage your Space
                                                                settings and Organization settings.</p>
                                                        </div>
                                                    </a></li>
                                                    <li class="help-link-list__item"><a
                                                        class="support-link -numbers js_track-item"
                                                        href="https://backlog.com/getting-started/administrator/team-management/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">
                                                        <div class="support-link__icon">2</div>
                                                        <div class="support-link__text">
                                                            <h2 class="support-link__text-term">Team Management</h2>
                                                            <p class="support-link__text-desc">Invite users, add them to
                                                                teams, and manage their permissions.</p>
                                                        </div>
                                                    </a></li>
                                                    <li class="help-link-list__item"><a
                                                        class="support-link -numbers js_track-item"
                                                        href="https://backlog.com/getting-started/administrator/project-management/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">
                                                        <div class="support-link__icon">3</div>
                                                        <div class="support-link__text">
                                                            <h2 class="support-link__text-term">Project Management</h2>
                                                            <p class="support-link__text-desc">Create Projects, manage
                                                                their settings, and invite members to work on them.</p>
                                                        </div>
                                                    </a></li>
                                                </ul>
                                            </li>
                                            <li class="data-list__item js_level1" style={{ display: "none" }}><a
                                                class="data-list__link -global-help js_track-item js_help-link"
                                                href="/help/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                target="_blank">
                                                <span class=" icon--window -p-after">Help Center</span>
                                            </a></li>


                                            <li class="data-list__item video-link js_level2" style={{ display: "none" }}>
                                                <div class="video-link__image groupStep1 groupStep2">
                                                    <div class="video-link__image">
                                                        <script src="https://fast.wistia.com/embed/medias/gliot5hthx.jsonp"
                                                            async></script>
                                                        <script src="https://fast.wistia.com/assets/external/E-v1.js"
                                                            async></script><span
                                                                class="wistia_embed wistia_async_gliot5hthx popover=true popoverAnimateThumbnail=true"
                                                                style={{display:"inlineBlock",height:"180px",position:"relative",width:"320px"}}>&nbsp;</span>
                                                    </div>
                                                    <a class="video-link__text icon--window -p-after js_track-item"
                                                        href="https://support.backlog.com/hc/en-us/categories/360001683733?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">Watch video tutorials</a>
                                                </div>
                                            </li>

                                            <li class="data-list__item help-links js_level2" style={{ display: "none" }}>
                                                <p class="help-links-title">
                                                    Getting Started with Backlog
                                                </p>
                                                <ul class="help-link-list">
                                                    <li class="help-link-list__item"><a
                                                        class="support-link -numbers js_track-item"
                                                        href="https://backlog.com/getting-started/user/personal-settings/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">
                                                        <div class="support-link__icon">1</div>
                                                        <div class="support-link__text">
                                                            <h2 class="support-link__text-term">Personal Settings</h2>
                                                            <p class="support-link__text-desc">Manage your profile.</p>
                                                        </div>
                                                    </a></li>
                                                    <li class="help-link-list__item"><a
                                                        class="support-link -numbers js_track-item"
                                                        href="https://backlog.com/getting-started/user/tasks/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">
                                                        <div class="support-link__icon">2</div>
                                                        <div class="support-link__text">
                                                            <h2 class="support-link__text-term">Tasks​</h2>
                                                            <p class="support-link__text-desc">Create issues and search
                                                                for them with advanced filters.</p>
                                                        </div>
                                                    </a></li>
                                                    <li class="help-link-list__item"><a
                                                        class="support-link -numbers js_track-item"
                                                        href="https://backlog.com/getting-started/user/collaboration/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">
                                                        <div class="support-link__icon">3</div>
                                                        <div class="support-link__text">
                                                            <h2 class="support-link__text-term">Collaboration</h2>
                                                            <p class="support-link__text-desc">Comment on issues to add
                                                                information or provide feedback.</p>
                                                        </div>
                                                    </a></li>
                                                    <li class="help-link-list__item"><a
                                                        class="support-link -numbers js_track-item"
                                                        href="https://backlog.com/getting-started/user/dashboard/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">
                                                        <div class="support-link__icon">4</div>
                                                        <div class="support-link__text">
                                                            <h2 class="support-link__text-term">Dashboard</h2>
                                                            <p class="support-link__text-desc">View all issues that have
                                                                been assigned to you or created by you.</p>
                                                        </div>
                                                    </a></li>
                                                </ul>
                                            </li>
                                            <li class="data-list__item js_level2" style={{ display: "none" }}><a
                                                class="data-list__link -global-help js_track-item js_help-link"
                                                href="/help/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                target="_blank">
                                                <span class=" icon--window -p-after">Help Center</span>
                                            </a></li>


                                            <li class="data-list__item video-link js_level3" style={{ display: "none" }}>
                                                <div class="video-link__image groupStep1 groupStep2">
                                                    <div class="video-link__image">
                                                        <script src="https://fast.wistia.com/embed/medias/kcwcym5ed7.jsonp"
                                                            async></script>
                                                        <script src="https://fast.wistia.com/assets/external/E-v1.js"
                                                            async></script><span
                                                                class="wistia_embed wistia_async_kcwcym5ed7 popover=true popoverAnimateThumbnail=true"
                                                                style={{display:"inlineBlock",height:"180px",position:"relative",width:"320px"}}>&nbsp;</span>
                                                    </div>
                                                    <a class="video-link__text icon--window -p-after js_track-item"
                                                        href="https://support.backlog.com/hc/en-us/categories/360001683733?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                        target="_blank">Watch video tutorials</a>
                                                </div>
                                            </li>

                                            <li class="data-list__item js_level3" style={{ display: "none" }}><a
                                                class="data-list__link -global-help support-link js_track-item js_help-link"
                                                href="/help/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                target="_blank">
                                                <div class="support-link__icon"><img class="support-link__icon-image"
                                                    src="https://assets.backlog.com/playassets/1.42.3/images/common/help/icon_getting_started.svg"
                                                    alt="" aria-hidden="true" /></div>
                                                <div class="support-link__text">
                                                    <h2 class="support-link__text-term icon--window -p-after">Getting
                                                        Started</h2>
                                                    <p class="support-link__text-desc">An easy guide for new users and
                                                        administrators.</p>
                                                </div>
                                            </a></li>
                                            <li class="data-list__item js_level3" style={{ display: "none" }}><a
                                                class="data-list__link -global-help support-link js_track-item"
                                                href="https://support.backlog.com/hc/en-us?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                target="_blank">
                                                <div class="support-link__icon"><img class="support-link__icon-image"
                                                    src="https://assets.backlog.com/playassets/1.42.3/images/common/help/icon_knowledge.svg"
                                                    alt="" aria-hidden="true" /></div>
                                                <div class="support-link__text">
                                                    <h2 class="support-link__text-term icon--window -p-after">Knowledge
                                                        Base</h2>
                                                    <p class="support-link__text-desc">Topics to help you quickly
                                                        understand individual features and settings.</p>
                                                </div>
                                            </a></li>

                                            <li class="data-list__item"><a
                                                class="data-list__link -global-help js_track-item"
                                                href="https://backlog.com/blog/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                target="_blank">
                                                <span class=" icon--window -p-after">Blog</span>
                                            </a></li>
                                            <li class="data-list__item"><a
                                                class="data-list__link -global-help js_track-item"
                                                href="https://backlog.com/product-updates/release/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                target="_blank">
                                                <span class=" icon--window -p-after">Product Updates</span>
                                            </a></li>
                                            <li class="data-list__item"><a
                                                class="data-list__link -global-help js_track-item"
                                                href="https://community.nulab.com/?utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                target="_blank">
                                                <span class=" icon--window -p-after">Community</span>
                                            </a></li>

                                            <li class="data-list__item app-bannars">
                                                <a id="mobile_cta_ios" class="app-link js_track-item"
                                                    href="https://itunes.apple.com/app/backlog-official-app/id863872037?mt=8&utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                    target="_blank">
                                                    <img class="app-link__image -app-store"
                                                        src="https://assets.backlog.com/playassets/1.42.3/images/common/help/app_store_badge.svg"
                                                        alt="Backlog for iOS" />
                                                </a>
                                                <a id="mobile_cta_android" class="app-link js_track-item"
                                                    href="http://play.google.com/store/apps/details?id=backlog.android&amp;hl=en&utm_source=backlog_app&utm_campaign=onboarding&utm_medium=global_help"
                                                    target="_blank">
                                                    <img class="app-link__image -play-store"
                                                        src="https://assets.backlog.com/playassets/1.42.3/images/common/help/google-play-badge.png"
                                                        srcset="https://assets.backlog.com/playassets/1.42.3/images/common/help/google-play-badge@2x.png 2x"
                                                        alt="Backlog for Android" />
                                                </a>
                                            </li>

                                        </ul>
                                        <span class="loading--circle -small -watch-list" id="globalHelpItemLoading"
                                            style={{ display: "none" }}></span>

                                    </div>

                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div class="user-profile dropdown">
                        <button id="userProfileLink" class="dropdown-link" aria-label="User menu">
                            <img src="/NulabAccountIcon.action?userId=454950&amp;name=large" alt="" />
                        </button>
                        <ul id="userProfileLinkContainer" class="dropdown-menu -under-icon ">
                            <li class="dropdown-menu__item user-profile__name">Hello, Rohitash Singh</li>
                            <li class="dropdown-menu__item"><a class="dropdown-menu__link"
                                href="/user/MAXPtEW0XD#activity">Activity</a></li>
                            <li class="dropdown-menu__item"><a class="dropdown-menu__link"
                                href="/user/MAXPtEW0XD#usergantt">Gantt Chart</a></li>
                            <li class="dropdown-menu__item is_border">

                                <a class="dropdown-menu__link" href="/UserMenu.action">Personal Settings</a>

                            </li>


                            <li class="dropdown-menu__item is_border"><a class="dropdown-menu__link"
                                href="/AdminMenu.action">Space Settings</a></li>



                            <li class="dropdown-menu__item ">
                                <a href="https://apps.nulab.com/payment/space/YGmH9G9OKf/payment/change_plan?productKey=backlog"
                                    class="upgrade-button dropdown-menu__link" target="_blank">

                                    Upgrade

                                </a>
                            </li>




                            <li class="dropdown-menu__item"><a id="globalbar_referral_program" class="dropdown-menu__link"
                                href="https://backlog.com/affiliate-program/" target="_blank">Referral Program</a></li>

                            <script>



                            </script>

                        </ul>
                    </div>





                    <script type="text/javascript"
                        src="https://d1lvv0q42gy9jf.cloudfront.net/assets/globalmenu/js/globalmenu.js" async defer></script>
                    <div id="nulab-apps-global-menu" class="global-launch-box -nulab-apps">
                        <div style={{margin: "0 30px", visibility: "hidden", maxWidth: "208px"}}>

                            BSA College of Engineering and...

                        </div>
                    </div>


                    <div class="global-launch-box" style={{display: "none"}}>
                        <button type="button" id="lb_start_btn"
                            class="icon-button icon-button--inverse global-launch-box__button | simptip-position-bottom simptip-movable simptip-smooth"
                            data-tooltip="Nulab Apps" aria-label="Nulab Apps">
                            <svg role="image" class="icon -medium">
                                <use xlink href="/images/svg/sprite.symbol.svg#icon_launch_box" />
                            </svg></button>
                    </div>

                </div>
            </div>
            {/* <!-- End gloabl-header-inner --> */}



            <form id="csrfTokenForm" style={{display: "none"}}>
                <input type="hidden" name="csrf-token.name" value="csrf-token" />
                <input type="hidden" name="csrf-token"
                    value="NXhQUkhjaldYTW9qSU4yQW1GalNEVGpCTUtZbmUyYklAHxYBJisEIAx1LFMMe2YECAIbNisGJA8hJ29bLXwHDw==" />
            </form>

            {/* <script id="globalTemplateNotifications" type="text/x-jquery-tmpl">
                <li class="notification-list__item js-list__item{{#if alreadyRead == false}} is_new{{/if}}{{#if resourceAlreadyRead == true}} is_read{{/if}}"
                {{ #if deleted == true }} style={{display:"none"}} {{/if}}>
                <div class="Item-id js-list_item_id">{{= id}}</div>
                <div class="Item-alreadyRead">{{= alreadyRead}}</div>
                <div class="Item-reason">{{= reason}}</div>
                {{ #if reason == '1' or reason == '2' or reason == '3' or reason == '4'}}
                <button type="button" class="open-issue-dialog-trigger -notification-list js-open-issue | simptip-position-left simptip-movable simptip-smooth" data-tooltip="Open this issue in the dialog" onclick="component.IssueDialog.show([{id: 1, link: '/globalbar/notifications/redirect/{{=id}}'}], 0);jQuery(this).closest('.js-list__item').addClass('is_read');event.stopPropagation();">
                    <svg role="image" class="icon -medium">
                        <use xlink href="/images/svg/sprite.symbol.svg#icon_open_dialog" />
                    </svg></button>
                {{/if}}
                <a class="notification-list__link js-list__link{{#if reason == '6' or reason == '10' or reason == '11' or reason == '12' or reason == '13'}} -min-height-auto{{/if}}" href="/globalbar/notifications/redirect/{{=id}}">
                    <div class="notification-list__icon"><img src="{{=content.assigner.icon}}" class="image image--circle -x-large js-notification-icon" /></div>
                    {{ #if reason == '1' }}
                    <div class="notification-list__info -change-assigner">
                        <p class="notification-list__title {{#if !content.comment}} -no-wrap{{/if}}"><span class="assigner">{{= content.assigner.name}}</span>changed the issue's<span class="reason">assignee</span> to you.</p>
                        {{ else reason == '2' }}
                        <div class="notification-list__info -comment">
                            <p class="notification-list__title"><span class="assigner">{{= content.assigner.name}}</span>added a<span class="reason">comment</span>.</p>
                            {{ else reason == '3' }}
                            <div class="notification-list__info -create">
                                <p class="notification-list__title {{#if !content.comment}} -no-wrap{{/if}}"><span class="assigner">{{= content.assigner.name}}</span><span class="reason">added</span>an issue.</p>
                                {{ else reason == '4' }}
                                <div class="notification-list__info -update">
                                    <p class="notification-list__title {{#if !content.comment}} -no-wrap{{/if}}"><span class="assigner">{{= content.assigner.name}}</span><span class="reason">updated</span>an issue.</p>
                                    {{ else reason == '5' }}
                                    <div class="notification-list__info -attach-file">
                                        <p class="notification-list__title"><span class="assigner">{{= content.assigner.name}}</span><span class="reason">attached</span>a file.</p>
                                        {{ else reason == '6' }}
                                        <div class="notification-list__info -add-project-user">
                                            <p class="notification-list__title -no-wrap"><span class="assigner">{{= content.assigner.name}}</span> has <span class="reason">added</span> you to a project.</p>
                                            {{ else reason == '9' }}
                                            <div class="notification-list__info -other">
                                                <p class="notification-list__title"><span class="assigner">{{= content.assigner.name}}</span>sent you a<span class="reason">notification</span>.</p>
                                                {{ else reason == '10' }}
                                                <div class="notification-list__info -change-pull-request-assigner">
                                                    <p class="notification-list__title {{#if !content.comment}} -no-wrap{{/if}}"><span class="assigner">{{= content.assigner.name}}</span>changed the pull request's<span class="reason">assignee</span> to you.</p>
                                                    {{ else reason == '11' }}
                                                    <div class="notification-list__info -pull-request-comment">
                                                        <p class="notification-list__title"><span class="assigner">{{= content.assigner.name}}</span>added a<span class="reason">comment</span>.</p>
                                                        {{ else reason == '12' }}
                                                        <div class="notification-list__info -pull-request-create">
                                                            <p class="notification-list__title {{#if !content.comment}} -no-wrap{{/if}}"><span class="assigner">{{= content.assigner.name}}</span><span class="reason">added</span>a pull request.</p>
                                                            {{ else reason == '13' }}
                                                            <div class="notification-list__info -pull-request-update">
                                                                <p class="notification-list__title {{#if !content.comment}} -no-wrap{{/if}}"><span class="assigner">{{= content.assigner.name}}</span><span class="reason">updated</span>the pull request.</p>
                                                                {{/if}}
                                                                {{ #if content.comment }}
                                                                <p class="notification-list__comment">&quot;{{= content.comment!}}&quot;</p>
                                                                <p class="notification-list__summary -ellipsis">{{ #if content.key }}<span class="key">{{= content.key}}</span>{{/if}} {{= content.summary!}} </p>
                                                                {{ else}}
                                                                <p class="notification-list__summary -commentless">{{ #if content.key }}<span class="key">{{= content.key}}</span>{{/if}} {{= content.summary!}} </p>
                                                                {{/if}}
                                                            </div>
                                                            <div class="notification-list__meta">
                                                                <abbr class="notification-list__time js-notification-time" title="{{=content.created}}">{{= content.created}}</abbr>
                                                                {{ #if content.status }}<span class="{{=content.statusClassName}} -small">{{= content.status.label}}</span>{{/if}}
                                                            </div>
                                                        </a>
                                                    </li>
                                                </script> */}
            {/* </header> */}
            {/* <!-- End gloabl-header --> */}



            <div class="fixed-help">

                <div id="intercom_trigger" class="global-nav-intercom">
                    <button type="button" aria-label="Live chat"
                        class="icon-button -small global-nav-intercom__icon | simptip-position-right simptip-movable simptip-smooth"
                        data-tooltip="Live chat">
                        <svg role="image" class="icon -small">
                            <use xlink href="/images/svg/sprite.symbol.svg#icon_intercom" />
                        </svg></button>
                    <button type="button" aria-label="Close"
                        class="icon-button -small global-nav-intercom__icon -close | simptip-position-right simptip-movable simptip-smooth"
                        data-tooltip="Close"><span class="icon icon--close -small -inverse"></span></button>
                </div>

            </div>


            <div id="addItemPopup" class="modal modal--default -p-fixed -settings-modal" style={{width: "80%", minWidth: "800px"}}
                data-bind="css : {is_visible : showAddItemPopup}">
                <div class="modal__content -no-padding -no-header -has-iframe">
                    <button type="button" aria-label="Close" data-bind="click:function(){addItemPopup(false)}"
                        id="addItemPopupClose"
                        class="icon icon--close -x-large -inverse modal__close js_modalDialog-close"></button>
                    <iframe class="modal__iframe js_addItemIframe"></iframe>
                </div>
            </div>

            <script type="text/javascript"
                src="https://assets.backlog.com/playassets/1.42.3/script/jquery/jquery.qtip-3.0.3.js"></script>
            <script type="text/javascript" src="https://assets.backlog.com/playassets/1.42.3/script/jquery/select2.js"></script>
            <script type="text/javascript"
                src="https://assets.backlog.com/playassets/1.42.3/script/component/issue_dialog_hx.js"></script>
            <script type="text/javascript">
                Backlog.dispatcher.trigger("bindGlobalBarLinks");
            </script>
            <script type="text/javascript" src="https://assets.backlog.com/playassets/1.42.3/script/dialogs/index.js"
                defer></script>
            <template id="issue-dialog-template">
                <div class="modal modal--default -p-fixed -issue-dialog js_issue-dialog"
                    data-bind="css : {is_visible : visible}">
                    <div class="modal__actions">

                        <div class="pager pager--simple -inverse modal__actions-col-1" data-bind="visible: issues().length > 1">

                            <a href="javascript:void(0)" class="pager__prev"
                                data-bind="click: showPrevIssue, css: {'is_visible-disabled': !canShowPrevIssue()}">Prev</a>
                            <span class="pager__partition"></span>
                            <span class="pager__info" data-bind="visible: issues().length > 0"><span
                                data-bind="text: currentIndex() + 1"></span> / <span
                                    data-bind="text: issues().length"></span></span>
                            <span class="pager__partition"></span>

                            <a href="javascript:void(0)" class="pager__next"
                                data-bind="click: showNextIssue, css: {'is_visible-disabled': !canShowNextIssue()}">Next</a>
                        </div>

                        <span class="modal__actions-col-2">
                            <a href="javascript:void(0)" class="modal__actions-button" data-bind="click:forwardCurrentIssue">Go
                                to issue</a>
                        </span>

                    </div>
                    <div class="modal__content">
                        <a data-bind="click:function(){ hide() }"
                            class="icon icon--close -x-large -inverse modal__close js_modalDialog-close"><span
                                class="_assistive-text">Close</span></a>
                        <iframe id="issue-dialog-iframe" data-bind="attr: {src: currentIssue() ? currentIssue().link : ''};"
                            class="modal__iframe"></iframe>
                    </div>
                </div>
            </template>
            <issue-dialog id="issue-dialog"></issue-dialog>
            <script>
                ko.applyBindings({ }, document.getElementById("issue-dialog"));
            </script>

            <script type="text/javascript">
                Backlog.resource['naiSpaceIsWithinUserLimit'] = true;
            </script>
            <script id="globalbarTemplateGlobalsearch" type="text/x-jquery-tmpl">
                <li class="data-list__item js-list__item">
                    <a href="{{=href}}" class="data-list__link -ellipsis js-list__link">
                        <span class="data-list__icon"><img src="{{=icon}}" alt="" />
                        </span>
                        {/* <span class="data-list__summary js-list__summary">
                                                            {{= title}}</span> */}
                    </a>
                </li>
            </script>
            {/* <script type="application/json" id="__BACKLOG_GLOBAL_BAR_DATA__">
                                                {"basePath":"","assetBasePath":"https://assets.backlog.com/playassets/1.42.3","isNulabAppsIntegratedSpace":true,"isDeveloper":true,"useFileSharing":true,"useShortcutKey":false}
                                            </script> */}
            <script type="text/javascript">
                Backlog.resource = Backlog.resource || { };


                Backlog.resource['canInviteNulabAccount'] = true;
                Backlog.resource["isJustCreated"] = false;
                Backlog.resource["isAdmin"] = true;
                Backlog.resource["isContractorAdmin"] = true;
            </script>

            <script type="text/javascript">
                Backlog.resource = Backlog.resource || { };

                Backlog.resource['lbl.assignMe'] = 'Assign to myself';

                Backlog.resource['lbl.chosen.noResultsMatch'] = 'No results match';

                Backlog.resource['lbl.a11y.reset'] = 'Reset';

                Backlog.resource['lbl.globalbar.filter.board.noitem'] = 'There are no saved issue filters.\u003cbr/\u003eSaved filters saved on the board will be listed here.';

                Backlog.resource['lbl.globalbar.filter.list.noitem'] = 'There are no saved issue filters.\u003cbr/\u003eSaved filters after searching issues will be listed here.';

                Backlog.resource['lbl.globalbar.filter.search.placeholder.board'] = 'Search saved filters';

                Backlog.resource['lbl.globalbar.filter.search.placeholder.list'] = 'Search saved filters';

                Backlog.resource['lbl.globalbar.filter.user'] = 'Filter by user';

                Backlog.resource['lbl.globalbar.issue.search.placeholder'] = 'Search recently viewed issues';

                Backlog.resource['lbl.globalbar.recent.issue.noitem'] = 'There are no recently viewed issues yet.';

                Backlog.resource['lbl.globalbar.recent.wiki.noitem'] = 'There are no recently viewed Wikis yet.';

                Backlog.resource['lbl.globalbar.search.filter.deleteConfirm'] = 'Delete Issue filter \u0022{0}\u0022?';

                Backlog.resource['lbl.globalbar.wiki.search.placeholder'] = 'Search recently viewed wiki';

                Backlog.resource['lbl.a11y.reset'] = 'Reset';

                Backlog.resource['msg.issue.store.filter.condition.invalid.argument'] = 'Enter the filter name';

            </script>


            <script type="text/javascript"
                src="https://assets.backlog.com/playassets/1.42.3/script/backlog/globalbar.js"></script>
            <script type="text/javascript"
                src="https://assets.backlog.com/playassets/1.42.3/script/backlog/favicon-notify.js"></script>
            <script type="text/javascript" src="https://assets.backlog.com/playassets/1.42.3/script/bowser.js"></script>
            <script type="text/javascript"
                src="https://assets.backlog.com/playassets/1.42.3/script/backlog/jquery.html5clip.js"></script>
            <script type="text/javascript"
                src="https://assets.backlog.com/playassets/1.42.3/script/backlog/globalbar.addon.js"></script>







            <script type="text/javascript"
                src="https://assets.backlog.com/playassets/1.42.3/script/backlog/survey_popup_hx.js"></script>
            <div id="binding-survey">
                <div data-bind="with: survey">
                    <div id="surveyPopup" class="modal modal--default -survey-modal">
                        <div class="modal__content -no-padding -no-header -has-iframe">
                            <a data-bind="click:function(){}"
                                class="icon icon--close -medium modal__close js_modalDialog-close"><span
                                    class="_assistive-text">Close</span></a>
                            <iframe data-bind="attr: {src: showSurveyPopup() ? url() : ''}" class="modal__iframe"
                                id="surveyPopupIFrame"></iframe>
                        </div>
                    </div>
                </div>
            </div>



            <script type="text/javascript" src="https://assets.backlog.com/playassets/1.42.3/script/backlog/tip_hx.js"></script>
            <div id="binding-tip">
                <div data-bind="with: tip">
                    <div id="tipPopup" class="modal modal--default -survey-modal">
                        <div class="modal__content -no-padding -no-header -has-iframe">
                            <a data-bind="click:function(){}"
                                class="icon icon--close -medium modal__close js_modalDialog-close"><span
                                    class="_assistive-text">Close</span></a>
                            <iframe data-bind="attr: {src: showTip() ? url() : ''}" class="modal__iframe"
                                id="tipPopupIFrame"></iframe>
                        </div>
                    </div>
                </div>
            </div>





            {/* <!-- Start GA tracking Code avoid sending --> */}

            {/* <!-- using old GA method to prevent send page view --> */}



            {/* <!-- Start GA tracking Code --> */}



            <script type="text/javascript"
                src="https://assets.backlog.com/playassets/1.42.3/script/backlog/onboarding_hx.js"></script>
            <div id="binding-on-boarding">
                <div data-bind="with: onBoarding">
                    <div id="onBoardingPopup" class="modal modal--default -p-fixed -on-boarding-project-modal is_visible"
                        style={{ display: "none" }}>
                        <div class="modal__content -no-padding -no-header -has-iframe">
                            <button type="button" data-bind="click:function(){}"
                                class="icon icon--close -x-large -inverse modal__close js_modalDialog-close"><span
                                    class="_assistive-text">Close</span></button>
                            <iframe data-bind="attr: {src: showOnBoardingPopup() ? url() : ''}" class="modal__iframe"></iframe>
                        </div>
                    </div>
                </div>
                <div id="inviteUserCTABar" class="upgrade-bar generic-cta-bar">
                    <div class="generic-cta-bar__wrap">
                        <div class="generic-cta-bar__content">
                            <p class="generic-cta-bar__sentence">You can still invite 9 more users to your space.
                                <a href="javascript:void(0);"
                                    onclick="backlog.GlobalBar.showGlobalInvitationDialog('DashboardInviteCTA');"
                                    aria-label="Invite more users" id="inviteUsersCTA" class="generic-cta-bar__link">Invite more
                                    users</a>
                            </p>
                        </div>
                    </div>
                    <button type="button" id="inviteUserCTA_close" class="icon icon--close -medium upgrade-bar__close"><span
                        class="_assistive-text">閉じる</span></button>
                </div>


                <div id="announce" class="dashboard-announce" data-has-updated-item="true">
                    <div class="dashboard-announce__wrap">
                        <div class="dashboard-announce__content">
                            <div id="announce_id" style={{display: "none"}}>269,267</div>
                            <ul class="dashboard-announce-list">

                                <li id="announce267" class="dashboard-announce-list__item -maintenance">
                                    <span class="dashboard-announce-list__category">
                                        Maintenance
                                    </span>
                                    <span class="dashboard-announce-list__text">
                                        <a href="https://nulab.com/release-notes/backlog/20230412/" target="_blank">Backlog will
                                            undergo system maintenance on Apr. 12, 2023, at 1:00 pm UTC for approx. 1 hour.</a>

                                        <span class="dashboard-announce-list__tag">NEW</span>
                                    </span>
                                </li>

                                <li id="announce269" class="dashboard-announce-list__item -release">
                                    <span class="dashboard-announce-list__category">
                                        Release
                                    </span>
                                    <span class="dashboard-announce-list__text">
                                        A new version of Enterprise professional edition, added channel-related functions in Slack
                                        settings, and clearer API responses. Learn more about these and all Backlog updates in our
                                        <a href="https://nulab.com/release-notes/backlog/release-notes-for-march-2023/"
                                            target="_blank">latest release notes</a>.
                                        <span class="dashboard-announce-list__tag">NEW</span>
                                    </span>
                                </li>

                            </ul>
                            <button type="button" id="announce_close"
                                class="icon icon--close -medium dashboard-announce__close"><span
                                    class="_assistive-text">Close</span></button>
                        </div>

                        <div class="dashboard-announce__gorilla">
                            <button type="button" id="announce_gorilla" class="dashboard-announce__gorilla-button"
                                data-tooltip="Show announcements from Backlog"></button>
                            <span class="dashboard-announce__gorilla-img"></span>
                        </div>
                    </div>
                </div>
                <script type="text/javascript"
                    src="https://assets.backlog.com/playassets/1.42.3/script/backlog/announce.js"></script>


                <div id="container" role="main" class="core-wrapper -dashboard">

                    <header id="header" class="content-header" role="banner">
                        <div class="content-header__inner">
                            <div class="header-icon-set  -dashboard ">
                                <div class="header-icon-set__icon"><a href="/dashboard" id="dashBoardLink">
                                    <img class="header-icon-set__image" src="/SpaceImage.action" alt="BSA College of Engineering and technology Mathura" />
                                </a></div>
                                <div class="title-group">
                                    <h1 class="header-icon-set__text title-group__inline-title">
                                        <span class="header-icon-set__name title-group__title-text -with-button">
                                            BSA College of Engineering and technology Mathura
                                            <span class="title-group__title-button">
                                                <a class="icon-button icon-button--default | simptip-position-top simptip-movable simptip-smooth"
                                                    href="/AdminMenu.action" aria-label="Space Settings"
                                                    data-tooltip="Space Settings">
                                                    <svg role="image" class="icon -medium">
                                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_settings" />
                                                    </svg></a>
                                            </span>
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End content-header__inner --> */}
                    </header>
                    {/* <!-- content-header --> */}

                    <div id="binding-main">
                        <div class="dashboard-contents">
                            <div class="dashboard-contents__left  " data-bind="css:{is_narrow:isLeftNarrow,is_wide:isLeftWide}">
                                <section class="project-list-section _mg-b-40" style={{display: "block"}} data-bind="visible: false">
                                    <div class="title-group -dashboard">
                                        <h3 class="title title--thirdly title-group__inline-title -clickable js_folding-handle">
                                            <span class="title-group__icon-collapsed">
                                                <span class="icon -medium js_folding-icon icon--arrow-up"></span>
                                            </span>
                                            Projects
                                        </h3>
                                        <div class="title-group__edit-actions">
                                            <a
                                                class="icon-button icon-button--default | simptip-position-top simptip-movable simptip-smooth">
                                            </a>
                                        </div>
                                    </div>
                                    <ul class="project-list -list-view is_placeholder">
                                        <li class="project-list__item js-project-list-item ui-placeholder-base">
                                            <div class="project-list__wrapper">
                                                <span class="project-list__info">
                                                    <span class="project-list__icon"><span class="ui-placeholder-element"
                                                        style={{height: "100%", width: "100%", display: "inlineBlock", borderRadius: "5px"}}>&nbsp;</span></span>
                                                    <span class="project-list__name"><span class="ui-placeholder-element"
                                                        style={{width: "80%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                    <span class="project-list__key"><span class="ui-placeholder-element"
                                                        style={{width: "15%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                </span>
                                            </div>
                                        </li>

                                        <li class="project-list__item js-project-list-item ui-placeholder-base">
                                            <div class="project-list__wrapper">
                                                <span class="project-list__info">
                                                    <span class="project-list__icon"><span class="ui-placeholder-element"
                                                        style={{height: "100%", width: "100%", display: "inlineBlock", borderRadius: "5px"}}>&nbsp;</span></span>
                                                    <span class="project-list__name"><span class="ui-placeholder-element"
                                                        style={{width: "80%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                    <span class="project-list__key"><span class="ui-placeholder-element"
                                                        style={{width: "15%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                </span>
                                            </div>
                                        </li>

                                        <li class="project-list__item js-project-list-item ui-placeholder-base">
                                            <div class="project-list__wrapper">
                                                <span class="project-list__info">
                                                    <span class="project-list__icon"><span class="ui-placeholder-element"
                                                        style={{height: "100%", width: "100%", display: "inlineBlock", borderRadius: "5px"}}>&nbsp;</span></span>
                                                    <span class="project-list__name"><span class="ui-placeholder-element"
                                                        style={{width: "80%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                    <span class="project-list__key"><span class="ui-placeholder-element"
                                                        style={{width: "15%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                </span>
                                            </div>
                                        </li>

                                        <li class="project-list__item js-project-list-item ui-placeholder-base">
                                            <div class="project-list__wrapper">
                                                <span class="project-list__info">
                                                    <span class="project-list__icon"><span class="ui-placeholder-element"
                                                        style={{height: "100%", width: "100%", display: "inlineBlock", borderRadius: "5px"}}>&nbsp;</span></span>
                                                    <span class="project-list__name"><span class="ui-placeholder-element"
                                                        style={{width: "80%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                    <span class="project-list__key"><span class="ui-placeholder-element"
                                                        style={{width: "15%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                </span>
                                            </div>
                                        </li>

                                        <li class="project-list__item js-project-list-item ui-placeholder-base">
                                            <div class="project-list__wrapper">
                                                <span class="project-list__info">
                                                    <span class="project-list__icon"><span class="ui-placeholder-element"
                                                        style={{height: "100%", width: "100%", display: "inlineBlock", borderRadius: "5px"}}>&nbsp;</span></span>
                                                    <span class="project-list__name"><span class="ui-placeholder-element"
                                                        style={{width: "80%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                    <span class="project-list__key"><span class="ui-placeholder-element"
                                                        style={{width: "15%", display: "inline", borderRadius: "5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                                </span>
                                            </div>
                                        </li>

                                    </ul>
                                </section>


                                {/* <!-- ko with: projects --> */}
                                <section id="project-list" class="project-list-section" style={{display: "none"}} data-bind="
        folding:{
            cookieKey:'dashboard',
            cookieSubKey:'projectlist',
            onToggleBegin:onToggleFoldingBegin.bind($data),
            onToggleEnd:onToggleFoldingEnd.bind($data)
        },
        visible: true">
                                    <div class="title-group -dashboard">

                                        <h3 class="title title--thirdly title-group__inline-title -clickable js_folding-handle">
                                            <button type="button" class="_plain-button" aria-controls="project-list-content">
                                                <span class="title-group__icon-collapsed">
                                                    <span class="icon -medium js_folding-icon icon--arrow-up"></span>
                                                </span>
                                                Projects
                                            </button>
                                        </h3>
                                        <div class="title-group__edit-actions js_folding-hideOnClose" id="project-list-content"
                                            style={{display: "none"}}>


                                            <span class="title-group__edit-actions-item">
                                                <button type="button"
                                                    data-bind="modalDialog:{toggleClass:'is_visible', target:'#addProjectPopup', onOpen: function() { onOpenAddProjectPopup() }}"
                                                    href="javascript:void(0)"
                                                    class="icon-button icon-button--default | simptip-position-top simptip-movable simptip-smooth"
                                                    data-tooltip="Add Project">

                                                    <svg role="image" class="icon -medium">
                                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_add" />
                                                    </svg><span class="_assistive-text">Add Project</span>
                                                </button>

                                                <div aria-label="Add Project" role="dialog" aria-modal="true" id="addProjectPopup"
                                                    class="modal modal--default -p-fixed -settings-modal"
                                                    data-bind="css : {is_visible : showAddProjectPopup}">
                                                    <div class="modal__content -no-padding -no-header -has-iframe">
                                                        <button type="button"
                                                            data-bind="click:function(){showAddProjectPopup(false)}"
                                                            class="icon icon--close -x-large -inverse modal__close js_modalDialog-close"><span
                                                                class="_assistive-text">Close</span></button>
                                                        <iframe
                                                            data-bind="attr: {src: showAddProjectPopup() ? '/AddProject.action?dialogMode=true' : ''}"
                                                            class="modal__iframe"></iframe>
                                                    </div>
                                                </div>
                                            </span>

                                            <span class="title-group__edit-actions-item">
                                                <search-box class="js_folding-hideOnClose"
                                                    params="valueObservable: projectSearchValue, placeHolder:'Search projects', closable:true, autocomplete:'off'"></search-box>
                                            </span>
                                        </div>
                                    </div>

                                    <div data-bind="visible:projects().length == 0" class="_mg-b-20" style={{display: "none"}}>
                                        <div id="aboutProject" class="card card--default about-project">

                                            There are no projects at the moment.<br />
                                            <a href="/AddProject.action">Add Project</a>

                                        </div>
                                    </div>


                                    <div class="see-all-wrapper js_folding-target" style={{display: "none"}}>
                                        <div data-bind="visible:projects().length>0">
                                            <ul data-bind="foreach: showingProjects" class="project-list -list-view"
                                                aria-live="polite" id="sortable-projects">
                                                <li class="project-list__item js-project-list-item"
                                                    data-bind="css: cssClasses, attr: {id: isPinning ? 'projectId_' + id: null}">
                                                    <div class="project-list__wrapper">
                                                        <span class="project-list__handles">


                                                            {/* <!-- ko if: isPinning --> */}

                                                            <svg role="image" class="icon -medium project-list__handle-icon">
                                                                <use xlink href="/images/svg/sprite.symbol.svg#icon_handle" />
                                                            </svg>
                                                            <form method="POST" name="unpinForm"
                                                                data-bind="submit:function(){$parent.unpinProject(id)}">
                                                                <input type="hidden" name="csrf-token.name" value="csrf-token" />
                                                                <input type="hidden" name="csrf-token"
                                                                    value="NXhQUkhjaldYTW9qSU4yQW1GalNEVGpCTUtZbmUyYklAHxYBJisEIAx1LFMMe2YECAIbNisGJA8hJ29bLXwHDw==" />
                                                                <button type="submit"
                                                                    class="project-list__icon-button -unpin | simptip-position-top simptip-movable simptip-smooth"
                                                                    data-tooltip="Unpin the project"
                                                                    data-bind="enable: submitEnable">

                                                                    <svg role="image" class="icon -medium">
                                                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_pin" />
                                                                    </svg>
                                                                    <span class="_assistive-text">Pin to top</span>
                                                                </button>
                                                                <input type="hidden" name="projectId" data-bind="value: id" />
                                                            </form>

                                                            {/* <!-- /ko --> */}

                                                            {/* <!-- ko if: !isPinning --> */}
                                                            <form method="POST" name="pinForm"
                                                                data-bind="submit:function(){$parent.pinProject(id)}">
                                                                <input type="hidden" name="csrf-token.name" value="csrf-token" />
                                                                <input type="hidden" name="csrf-token"
                                                                    value="NXhQUkhjaldYTW9qSU4yQW1GalNEVGpCTUtZbmUyYklAHxYBJisEIAx1LFMMe2YECAIbNisGJA8hJ29bLXwHDw==" />
                                                                <button type="submit"
                                                                    class="project-list__icon-button | simptip-position-top simptip-movable simptip-smooth"
                                                                    data-tooltip="Pin to top" data-bind="enable: submitEnable">

                                                                    <svg role="image" class="icon -medium">
                                                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_pin" />
                                                                    </svg>
                                                                    <span class="_assistive-text">Pin to top</span>
                                                                </button>
                                                                <input type="hidden" name="projectId" data-bind="value: id" />
                                                            </form>

                                                            {/* <!-- /ko --> */}

                                                        </span>
                                                        <span class="project-list__info">
                                                            <a data-bind="attr: {href: link}">
                                                                <span class="project-list__icon" aria-hidden="true">
                                                                    <project-icon params="icon: iconSrc, alt: alt"></project-icon>
                                                                </span>
                                                                <span class="project-list__name-group">
                                                                    <span class="project-list__name" data-bind="text: name"></span>
                                                                    <span class="project-list__key" data-bind="text: key"></span>
                                                                </span>
                                                            </a>
                                                            <ul class="project-launch-menu" data-bind="css: theme">

                                                                <li class="project-launch-menu__item">
                                                                    <a data-bind="attr: {href: addIssueLink}"
                                                                        class="project-launch-menu__link">
                                                                        Add Issue
                                                                    </a>
                                                                </li>

                                                                <li class="project-launch-menu__item">
                                                                    <a data-bind="attr: {href: issuesLink}"
                                                                        class="project-launch-menu__link">
                                                                        Issues
                                                                    </a>
                                                                </li>

                                                                <li class="project-launch-menu__item">
                                                                    <a data-bind="attr: {href: kanbanLink}"
                                                                        class="project-launch-menu__link">
                                                                        Board
                                                                    </a>
                                                                </li>


                                                                {/* <!-- ko if: ganttLink --> */}
                                                                <li class="project-launch-menu__item">
                                                                    <a data-bind="attr: {href: ganttLink}"
                                                                        class="project-launch-menu__link">
                                                                        Gantt Chart
                                                                    </a>
                                                                </li>

                                                                {/* <!-- /ko --> */}

                                                                {/* <!-- ko if: wikisLink --> */}
                                                                <li class="project-launch-menu__item">
                                                                    <a data-bind="attr: {href: wikisLink}"
                                                                        class="project-launch-menu__link">
                                                                        Wiki
                                                                    </a>
                                                                </li>

                                                                {/* <!-- /ko --> */}



                                                                {/* <!-- ko if: filesLink --> */}
                                                                <li class="project-launch-menu__item">
                                                                    <a data-bind="attr: {href: filesLink}"
                                                                        class="project-launch-menu__link">
                                                                        Files
                                                                    </a>
                                                                </li>

                                                                {/* <!-- /ko --> */}



                                                                {/* <!-- ko if: subversionLink --> */}
                                                                <li class="project-launch-menu__item">
                                                                    <a data-bind="attr: {href: subversionLink}"
                                                                        class="project-launch-menu__link">
                                                                        Subversion
                                                                    </a>
                                                                </li>

                                                                {/* <!-- /ko --> */}



                                                                {/* <!-- ko if: gitLink --> */}
                                                                <li class="project-launch-menu__item">
                                                                    <a data-bind="attr: {href: gitLink}"
                                                                        class="project-launch-menu__link">
                                                                        Git
                                                                    </a>
                                                                </li>

                                                                {/* <!-- /ko --> */}


                                                            </ul>
                                                        </span>
                                                    </div>
                                                    {/* <!-- End .project-list__wrapper --> */}

                                                    <a data-bind="attr: {href: projectSettingsPath}"
                                                        class="project-list__icon-button -settings | simptip-position-top simptip-movable simptip-smooth"
                                                        data-tooltip="Project Settings">

                                                        <svg role="image" class="icon -medium">
                                                            <use xlink href="/images/svg/sprite.symbol.svg#icon_settings" />
                                                        </svg>
                                                        <span class="_assistive-text">Project Settings</span>
                                                    </a>

                                                    <a class="project-list__link" data-bind="attr: {href: link}"></a>
                                                </li>

                                            </ul>

                                            <div class="see-all" data-bind="visible: hideCollapseButton" style={{display: "none"}}>
                                                <button type="button" class="see-all__link"
                                                    data-bind="visible:!loadingAll(),click: toggleCollapseProjects, attr: { 'aria-expanded': collapseable() ? 'true' : 'false' },visible:expandable"
                                                    style={{display: "none"}}>
                                                    <span class="icon icon--arrow-down -medium"></span>
                                                    <span class="_assistive-text">ProjectsShow more</span>
                                                    <span class="loading--circle -small _mg-t-15 js-loading" style={{display: "none"}}
                                                        data-bind="visible:loadingAll"></span>
                                                </button>
                                                <button type="button" class="see-all__link"
                                                    data-bind="visible:!loadingAll(),click: toggleCollapseProjects, attr: { 'aria-expanded': collapseable() ? 'true' : 'false' },visible:collapseable"
                                                    style={{display: "none"}}>
                                                    <span class="icon icon--arrow-up -medium"></span>
                                                    <span class="_assistive-text">ProjectsBack</span>
                                                    <span class="loading--circle -small _mg-t-15 js-loading" style={{display: "none"}}
                                                        data-bind="visible:loadingAll"></span>
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                </section>

                                {/* <!-- /ko --> */}

                                <section class="my-issues-section _mg-b-40" style={{display: "block"}} data-bind="visible: false">
                                    <ul class="button-list _t-right _mg-b-10 -dashboard">
                                        <li class="button-list__item">
                                            <a class="icon-button icon-button--default"></a>
                                        </li>
                                        <li class="button-list__item">
                                            <a class="icon-button icon-button--default"></a>
                                        </li>
                                        <li class="button-list__item">
                                            <a class="icon-button icon-button--default"></a>
                                        </li>
                                    </ul>
                                    <div id="issueListMenu" class="data-controller-box -top">
                                        <span class="ui-placeholder-element"
                                            style={{display: "inlineBlock", width: "8.5em", borderRadius: "10px"}}>&nbsp;</span>
                                    </div>
                                    <table id="issueList"
                                        class="data-table data-table--default -clickable -no-top-border my-issues-table -sticky">
                                        <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>



                                {/* <!-- ko with: myIssues --> */}

                                <section id="my_issues" class="my-issues-section" style={{display: "none"}} data-bind="css:{is_visible : true},
        folding:{
            cookieKey:'dashboard',
            cookieSubKey:'my_issues',
            onToggleBegin:onToggleFoldingBegin.bind($data),
            onToggleEnd:onToggleFoldingEnd.bind($data)
        },
        visible: true">
                                    <div class="js_folding-hideOnClose">
                                        <div class="loading--circle -small my-issues-section__loading"
                                            data-bind="visible : myTaskLoading() == true"></div>
                                    </div>

                                    <div class="title-group -dashboard">
                                        <h3 class="title title--thirdly title-group__inline-title -clickable js_folding-handle">
                                            <button type="button" class="_plain-button" aria-controls="my-issues-content">
                                                <span class="title-group__icon-collapsed">
                                                    <span class="icon -medium js_folding-icon icon--arrow-up"></span>
                                                </span>
                                                My Issues

                                                {/* <!-- ko if: assignedCount() > 0 --> */}
                                                <span class="title-group__number js_folding-showOnClose"
                                                    data-bind="text:' ('+assignedCount()+')'"></span>

                                                {/* <!-- /ko --> */}
                                            </button>
                                        </h3>
                                        <div id="my-issues-content"
                                            class="title-group__edit-actions js_folding-hideOnClose button-bar">
                                            <span class="title-group__edit-actions-item">

                                                <a href="/user/MAXPtEW0XD#usergantt" id="ganttchartButton"
                                                    class="icon-button icon-button--default -with-text -responsive-label | simptip-position-top simptip-movable simptip-smooth"
                                                    data-tooltip="Show my gantt chart" aria-label="Show my gantt chart">

                                                    <svg role="image" class="icon -medium">
                                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_gantt" />
                                                    </svg>
                                                    <span class="_assistive-text">Gantt Chart</span>
                                                </a>
                                            </span>
                                            <span class="title-group__edit-actions-item">

                                                <a href="/MultipleIssue.action?condition.allOver=true&condition.simpleSearch=false&condition.notStatusId=4&condition.assignerId=454950&titleId=1"
                                                    target="_blank" id="multipleIssueButton"
                                                    class="icon-button icon-button--default -with-text -responsive-label | simptip-position-top simptip-movable simptip-smooth"
                                                    data-tooltip="Update multiple issues"
                                                    aria-label="Update multiple issues (Open in new tab)">

                                                    <svg role="image" class="icon -medium">
                                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_multipleissue" />
                                                    </svg>
                                                    <span class="_assistive-text">Batch Update</span>
                                                </a>
                                            </span>
                                            <span class="title-group__edit-actions-item">

                                                <button type="button" id="calendarAssignedIssues"
                                                    data-bind="modalDialog:{toggleClass:'is_visible', target:'#calendarAssignedIssuesPopup', onOpen: onOpenICalDialog, focusTrap: true}"
                                                    class="icon-button icon-button--default -with-text -responsive-label | simptip-position-top simptip-movable simptip-smooth simptip-multiline"
                                                    data-tooltip="Open dialog to import iCalendar of issues assigned to me"
                                                    aria-label="Open dialog to import iCalendar of issues assigned to me">

                                                    <svg role="image" class="icon -medium">
                                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_calendar" />
                                                    </svg> <span class="_assistive-text">Calendar Import</span>
                                                </button>

                                                <div aria-labelledby="calendarAssignedIssuesPopupTitle" role="dialog"
                                                    aria-modal="true" id="calendarAssignedIssuesPopup"
                                                    class="modal modal--default -p-right-bottom -under-icon -medium"
                                                    data-bind="css : {is_visible : showCalenderPopup}">
                                                    <div class="modal__header">
                                                        <h1 class="modal__title" id="calendarAssignedIssuesPopupTitle">

                                                            <svg role="image" class="icon -medium">
                                                                <use xlink href="/images/svg/sprite.symbol.svg#icon_calendar" />
                                                            </svg>
                                                            <span>Import iCalendar of issues assigned to me</span>
                                                        </h1>
                                                        <button type="button" data-bind="click:function(){showCalenderPopup(false)}"
                                                            id="calendarAssignedIssuesPopupClose"
                                                            class="icon icon--close -medium -inverse modal__close js_modalDialog-close"><span
                                                                class="_assistive-text">Close</span></button>
                                                    </div>
                                                    <div class="modal__content">
                                                        <div class="form-element__item">
                                                            <label for="text_field" class="form-element__label -inline">URL</label>
                                                            <input id="calendarAssignedIssuesPopupInput" type="text"
                                                                class="input-text -w-large"
                                                                value="webcal://redstore81.backlog.com/ical/myissues.ics"
                                                                aria-describedby="calendarAssignedIssuesPopupInput_described" />
                                                        </div>
                                                        <p class="text _mg-b-15">
                                                            <a href="webcal://redstore81.backlog.com/ical/myissues.ics"
                                                                target="_blank" class="page-link">
                                                                Click here to import into Apple&#x27;s iCal.
                                                            </a>
                                                        </p>
                                                        <p class="text" id="calendarAssignedIssuesPopupInput_described">
                                                            Copy the URL to import into Google Calender and other
                                                            applications.<br />Calender applications that do not support BASIC
                                                            Authentication, you'll need to <a href="/EditPrivateAddress.action">set
                                                                up Private addresses</a>.
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                            <span class="title-group__edit-actions-item">

                                                <form id="issue_search_form" class="search-box" action="">
                                                    <search-box
                                                        params="valueObservable: myTaskSearchValue, placeHolder:'Search', id:'issue-search', closable:true, autocomplete:'off', onOpen: issueSearchOnOpen, onClose: issueSearchOnClose"></search-box>
                                                </form>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="js_folding-target" style={{display: "none"}}>
                                        <div id="issueListMenu" class="data-controller-box -top">
                                            <dl class="filter-nav">
                                                <dt class="filter-nav__term">Filters</dt>
                                                <dd class="filter-nav__item">
                                                    <button type="button" class="filter-nav__link"
                                                        data-bind="css :{is_active: myTaskType()=='assigned'}, attr :{'aria-selected': myTaskType()=='assigned' ? 'true':'false'}, click:function() {myTaskType('assigned');}">
                                                        <span class="filter-nav__text">Assigned to me</span><span
                                                            class="filter-nav__num">(<span
                                                                data-bind="text:assignedCount"></span>)</span>
                                                    </button>
                                                </dd>
                                                <dd class="filter-nav__item">
                                                    <button type="button" class="filter-nav__link"
                                                        data-bind="css :{is_active: myTaskType()=='created'}, attr :{'aria-selected': myTaskType()=='created' ? 'true':'false'}, click:function() {myTaskType('created');}">
                                                        <span class="filter-nav__text">Created by me</span><span
                                                            class="filter-nav__num">(<span
                                                                data-bind="text:createdCount"></span>)</span>
                                                    </button>
                                                </dd>
                                            </dl>

                                            <dl class="filter-nav">
                                                <dt class="filter-nav__term">Due Date</dt>
                                                <dd class="filter-nav__item">
                                                    <button type="button" class="filter-nav__link"
                                                        data-bind="css :{is_active: dueDateFilter()=='all'}, attr :{'aria-selected': dueDateFilter()=='all' ? 'true':'false'}, click:function() {showLoding();dueDateFilter('all');}">
                                                        <span class="filter-nav__text">All</span>
                                                    </button>
                                                </dd>
                                                <dd class="filter-nav__item">
                                                    <button type="button" class="filter-nav__link"
                                                        data-bind="css :{is_active: dueDateFilter()=='soon'}, attr :{'aria-selected': dueDateFilter()=='soon' ? 'true':'false'}, click:function() {showLoding();dueDateFilter('soon');}">
                                                        <span class="filter-nav__text">4 Days</span><span
                                                            class="filter-nav__num">(<span
                                                                data-bind="text:soonCount"></span>)</span>
                                                    </button>
                                                </dd>
                                                <dd class="filter-nav__item">
                                                    <button type="button" class="filter-nav__link"
                                                        data-bind="css :{is_active: dueDateFilter()=='today'}, attr :{'aria-selected': dueDateFilter()=='today' ? 'true':'false'}, click:function() {showLoding();dueDateFilter('today');}">
                                                        <span class="filter-nav__text">Due Today</span><span
                                                            class="filter-nav__num">(<span
                                                                data-bind="text:todayCount"></span>)</span>
                                                    </button>
                                                </dd>
                                                <dd class="filter-nav__item">
                                                    <button type="button" class="filter-nav__link"
                                                        data-bind="css :{is_active: dueDateFilter()=='over'}, attr :{'aria-selected': dueDateFilter()=='over' ? 'true':'false'}, click:function() {showLoding();dueDateFilter('over');}">
                                                        <span class="filter-nav__text">Overdue</span><span
                                                            class="filter-nav__num">(<span
                                                                data-bind="text:overDueCount"></span>)</span>
                                                    </button>
                                                </dd>
                                            </dl>
                                        </div>


                                        <div id="myIssueContent"
                                            class="see-all-wrapper js_hover-copy-target js_hover-open-issue-target">
                                            <table id="issueList"
                                                class="data-table data-table--default -clickable -no-top-border my-issues-table -sticky"
                                                data-bind="css:{Switching: myTaskLoading}" aria-live="polite">
                                                <thead>
                                                    <tr>
                                                        <th class="sort row-key" tabindex="0"
                                                            data-bind="issueSorter: 'paddingedKey'"><span
                                                                class="sort__icon">Key</span></th>
                                                        <th class="sort row-summary" tabindex="0"
                                                            data-bind="issueSorter: 'summary'"><span
                                                                class="sort__icon">Subject</span></th>
                                                        <th class="sort row-priority" tabindex="0"
                                                            data-bind="issueSorter: 'priority'"><span
                                                                class="sort__icon">Priority</span></th>
                                                        <th class="sort row-status" tabindex="0"
                                                            data-bind="issueSorter: 'statusSortKey'"><span
                                                                class="sort__icon">Status</span></th>
                                                        <th class="sort row-due-date" tabindex="0"
                                                            data-bind="issueSorter: 'dueDateSortKey'"><span
                                                                class="sort__icon">Due</span></th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                    <tr data-bind="visible: filteredIssues().length == 0">
                                                        <td colspan="5" class="no-data-info">No issues to display.</td>
                                                    </tr>
                                                </tfoot>
                                                <tbody
                                                    data-bind="foreach:{data:myIssuesTable.list,afterRender:setHoverCopy}, stripe:{even:'even',odd:'odd'}">
                                                    <tr data-bind="click: jumpToLink">
                                                        <td class="cell-key js-issue-key"><a
                                                            data-bind="attr: {href: link, title: key}, text :key"></a></td>
                                                        <td class="cell-summary js-issue-title">
                                                            <span data-bind="html: summary"></span>
                                                        </td>
                                                        <td class="cell-priority">
                                                            <span class="simptip-position-top simptip-movable simptip-smooth"
                                                                data-tooltip="" aria-label=""
                                                                data-bind="attr: { 'data-tooltip': priorityLocal, 'aria-label': priorityLocal}">

                                                                {/* <!-- ko if: priority == 2 --> */}

                                                                <svg role="image" class="icon -medium -priority-2">
                                                                    <use
                                                                        xlink href="/images/svg/sprite.symbol.svg#icon_priority_2" />
                                                                </svg>

                                                                {/* <!-- /ko --> */}

                                                                {/* <!-- ko if: priority == 3 --> */}

                                                                <svg role="image" class="icon -medium -priority-3">
                                                                    <use
                                                                        xlink href="/images/svg/sprite.symbol.svg#icon_priority_3" />
                                                                </svg>

                                                                {/* <!-- /ko --> */}

                                                                {/* <!-- ko if: priority == 4 --> */}

                                                                <svg role="image" class="icon -medium -priority-4">
                                                                    <use
                                                                        xlink href="/images/svg/sprite.symbol.svg#icon_priority_4" />
                                                                </svg>

                                                                {/* <!-- /ko --> */}
                                                            </span>
                                                        </td>
                                                        <td class="cell-status">
                                                            <div class="simptip-position-top simptip-movable simptip-smooth"
                                                                data-tooltip="" aria-label=""
                                                                data-bind="attr: { 'data-tooltip': statusLocal, 'aria-label': statusLocal }">
                                                                <span class="status -small"
                                                                    data-bind="text: statusLocal, css: statusTheme"></span>
                                                            </div>
                                                        </td>
                                                        <td class="cell-due-date" data-bind="css: {'over-due' : isOverDue}">
                                                            <time datetime=""
                                                                data-bind="text: dueDateLocal, attr:{datetime: dueDate}"></time>

                                                            {/* <!-- ko if: isOverDue --> */}
                                                            <span aria-label="Overdue">
                                                                <svg role="image" class="icon -medium over-due__icon">
                                                                    <use xlink href="/images/svg/sprite.symbol.svg#icon_fire" />
                                                                </svg></span>

                                                            {/* <!-- /ko --> */}
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                            <div class="see-all">
                                                <button type="button" class="see-all__link" aria-expanded="false"
                                                    data-bind="visible: filteredIssues().length != myIssuesTable.list().length, click:function(){myIssuesTable.limit(0);expandedMyTasks();}">
                                                    <span class="icon icon--arrow-down -medium"></span>
                                                    <span class="_assistive-text"> My IssuesShow all</span>
                                                </button>
                                                <button type="button" class="see-all__link" aria-expanded="true"
                                                    data-bind="visible:myIssuesTable.list().length > 10, click:function(){myIssuesTable.limit(10);collapseMyTasks();}"
                                                    style={{display: "none"}}>
                                                    <span class="icon icon--arrow-up -medium"></span>
                                                    <span class="_assistive-text"> My IssuesBack</span>
                                                </button>
                                            </div>


                                            <div class="hover-wrapper copy-trigger"
                                                data-bind="visible:myIssuesTable.list().length >0" style={{display: "none"}}><span
                                                    class="js-copy-issue"></span></div>
                                            <div class="hover-wrapper open-issue-dialog-trigger"
                                                data-bind="visible:myIssuesTable.list().length >0" style={{display: "none"}}><a
                                                    class="js-open-issue | simptip-position-top simptip-movable simptip-smooth"
                                                    data-tooltip="Open this issue in the dialog" href="javascript:void(0)">
                                                    <svg role="image" class="icon -medium">
                                                        <use xlink href="/images/svg/sprite.symbol.svg#icon_open_dialog" />
                                                    </svg></a></div>

                                        </div>

                                    </div>
                                </section>


                                {/* <!-- /ko --> */}

                                <script>
                                    {/* function onOpenICalDialog() {
                                        Backlog.dispatcher.trigger("ICalImportDialogOpened", {
                                            "Entry Point": "Dashboard"
                                        })}; */}

                                    {/* var issueSearchOnOpen = function() {
                                        ('#ganttchartButton').removeClass('-with-text')
                                            .$('#multipleIssueButton').removeClass('-with-text')
                                            .$('#calendarAssignedIssues').removeClass('-with-text')
                                    } */}
                                    {/* var issueSearchOnClose= function() {
                                        setTimeout(function () {
                                            if (!jQuery('#issue_search_form input').val()) {
                                                jQuery('#ganttchartButton').addClass('-with-text')
                                                jQuery('#multipleIssueButton').addClass('-with-text')
                                                jQuery('#calendarAssignedIssues').addClass('-with-text')
                                            }
                                        }, 150)}; */}


                                </script>




                                <section class="blog-articles-section" style={{display: "block"}} data-bind="visible: false">
                                    <div class="title-group -dashboard">
                                        <h3 class="title title--thirdly title-group__inline-title article-list-title -clickable">
                                            <span class="title-group__icon-collapsed">
                                                <span class="icon -medium js_folding-icon icon--arrow-up"></span>
                                            </span>
                                            Backlog News
                                            <span class="article-badge"></span>
                                        </h3>
                                    </div>
                                    <div id="articleContent">
                                        <ul class="blog-article-list is_placeholder">
                                            <li class="blog-article-list__item">
                                                <a class="blog-article-list__link">
                                                    <h4 class="blog-article-list__title"></h4>
                                                    <p class="blog-article-list__text"></p>
                                                </a>
                                            </li>
                                            <li class="blog-article-list__item">
                                                <a class="blog-article-list__link">
                                                    <h4 class="blog-article-list__title"></h4>
                                                    <p class="blog-article-list__text"></p>
                                                </a>
                                            </li>
                                            <li class="blog-article-list__item">
                                                <a class="blog-article-list__link">
                                                    <h4 class="blog-article-list__title"></h4>
                                                    <p class="blog-article-list__text"></p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </section>



                                {/* <!-- ko with: articles --> */}
                                <section id="articles" class="blog-articles-section" style={{display: "none"}} data-bind="css:{is_visible : true},
        folding:{
            cookieKey:'dashboard',
            cookieSubKey:'articles',
            onToggleBegin:onToggleFoldingBegin.bind($data),
            onToggleEnd:onToggleFoldingEnd.bind($data)
        },
        visible: true">
                                    <div class="js_folding-hideOnClose">
                                        <div class="loading--circle -small blog-articles-section__loading"
                                            data-bind="visible : articleLoading() == true"></div>
                                    </div>

                                    <div class="title-group -dashboard">
                                        <h3
                                            class="title title--thirdly title-group__inline-title article-list-title -clickable js_folding-handle">
                                            <button type="button" class="_plain-button" aria-controls="articleContent">
                                                <span class="title-group__icon-collapsed">
                                                    <span class="icon -medium js_folding-icon icon--arrow-up"></span>
                                                </span>
                                                Backlog News
                                                <span class="article-badge" data-bind="visible : badgeVisible()"></span>
                                            </button>
                                        </h3>
                                    </div>
                                    <div class="js_folding-target" style={{display: "none"}}>

                                        <div id="articleContent">
                                            <ul class="blog-article-list" data-bind="foreach: articles">
                                                <li class="blog-article-list__item">
                                                    <a data-bind="attr: {'href': link, 'aria-label': title + ' (Open in new tab)'}"
                                                        target="_blank" class="blog-article-list__link">
                                                        <h4 class="blog-article-list__title icon--window -p-after"
                                                            data-bind="text: title"></h4>
                                                        <p class="blog-article-list__text _t-ellipsis" data-bind="text: excerpt">
                                                        </p>
                                                    </a>
                                                </li>

                                            </ul>

                                        </div>
                                    </div>
                                </section>


                                {/* <!-- /ko --> */}



                                {/* <!--  --> */}

                            </div>
                            <div class="dashboard-contents__right  " data-bind="css:{is_narrow:isRightNarrow,is_wide:isRightWide}">


                                <section class="timeline-section" style={{display: "block"}} data-bind="visible: false">
                                    <div class="timeline__wrapper">
                                        <div class="title-group -dashboard">
                                            <h3 class="title title--thirdly title-group__inline-title -clickable js_folding-handle">
                                                <span class="title-group__icon-collapsed">
                                                    <span class="icon -medium js_folding-icon icon--arrow-up"></span>
                                                </span>
                                                Recent Updates
                                            </h3>
                                        </div>
                                        <h4 class="timeline__date"><span class="ui-placeholder-element"
                                            style={{display: "inlineBlock", width: "8.5em", borderRadius: "10px"}}>&nbsp;</span></h4>
                                        <div class="timeline">
                                            <ul class="timeline__stream">
                                                <li class="timeline__stream-item">

                                                    <div class="stream-update">
                                                        <div class="stream-update__wrap ui-placeholder-line"
                                                            style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                            <div class="stream-update__title">
                                                                <a class="stream-update__icon">
                                                                    <span
                                                                        class="image image--circle -x-large ui-placeholder-element"
                                                                        style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                                </a>
                                                                <span class="stream-update__text ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="stream-update">
                                                        <div class="stream-update__wrap ui-placeholder-line"
                                                            style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                            <div class="stream-update__title">
                                                                <a class="stream-update__icon">
                                                                    <span
                                                                        class="image image--circle -x-large ui-placeholder-element"
                                                                        style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                                </a>
                                                                <span class="stream-update__text ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="stream-update">
                                                        <div class="stream-update__wrap ui-placeholder-line"
                                                            style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                            <div class="stream-update__title">
                                                                <a class="stream-update__icon">
                                                                    <span
                                                                        class="image image--circle -x-large ui-placeholder-element"
                                                                        style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                                </a>
                                                                <span class="stream-update__text ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="stream-update">
                                                        <div class="stream-update__wrap ui-placeholder-line"
                                                            style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                            <div class="stream-update__title">
                                                                <a class="stream-update__icon">
                                                                    <span
                                                                        class="image image--circle -x-large ui-placeholder-element"
                                                                        style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                                </a>
                                                                <span class="stream-update__text ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="stream-update">
                                                        <div class="stream-update__wrap ui-placeholder-line"
                                                            style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                            <div class="stream-update__title">
                                                                <a class="stream-update__icon">
                                                                    <span
                                                                        class="image image--circle -x-large ui-placeholder-element"
                                                                        style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                                </a>
                                                                <span class="stream-update__text ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="stream-update">
                                                        <div class="stream-update__wrap ui-placeholder-line"
                                                            style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                            <div class="stream-update__title">
                                                                <a class="stream-update__icon">
                                                                    <span
                                                                        class="image image--circle -x-large ui-placeholder-element"
                                                                        style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                                </a>
                                                                <span class="stream-update__text ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                            <div class="stream-update__summary">
                                                                <span class="ui-placeholder-element"
                                                                    style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- END .timeline__wrapper --> */}
                                </section>


                                <section id="timeline-section" class="timeline-section" style={{display: "none"}}
                                    data-bind="folding:{cookieKey:'dashboard', cookieSubKey:'timeline', onToggleBegin:timeline.onToggleFoldingBegin.bind(timeline),onToggleEnd:timeline.onToggleFoldingEnd.bind(timeline)}, visible: true">
                                    <div class="timeline__wrapper">
                                        <div class="title-group -dashboard">
                                            <h3 class="title title--thirdly title-group__inline-title -clickable js_folding-handle">
                                                <button type="button" class="_plain-button" aria-controls="timeline-content">
                                                    <span class="title-group__icon-collapsed">
                                                        <span class="icon -medium js_folding-icon icon--arrow-up"></span>
                                                    </span>
                                                    Recent Updates
                                                </button>
                                            </h3>

                                            <div class="title-group__edit-actions">
                                                <span class="title-group__edit-actions-item">
                                                    <span class="_t-ellipsis">
                                                        Filter: All
                                                    </span>
                                                </span>
                                                <div class="dropdown">
                                                    <button type="button" id="timelineFilterDialogButton"
                                                        data-bind="modalDialog:{toggleClass:'is_opened', target:'#timelineFilterDialogContainer', close:'#filterClose'}, attr: { 'aria-haspopup': 'dialog' }"
                                                        class="-with-text icon-button icon-button--default title-group__edit-actions-item | simptip-position-top simptip-movable simptip-smooth"
                                                        data-tooltip="Show View Options">

                                                        <svg role="image" class="icon -medium">
                                                            <use xlink href="/images/svg/sprite.symbol.svg#icon_view_settings" />
                                                        </svg>
                                                        <span class="_assistive-text">View Options</span>
                                                    </button>
                                                    <div id="timelineFilterDialogContainer"
                                                        class="modal -timeline-filter-modal dropdown-box -small -under-icon -right"
                                                        role="dialog" aria-labelledby="timelineFilterTitle">
                                                        <div class="dropdown-box__header">
                                                            <h1 class="dropdown-box__title" id="timelineFilterTitle">View Options
                                                            </h1>
                                                        </div>
                                                        <div class="dropdown-box__content">
                                                            <div class="dropdown-box__content-inner">
                                                                <form id="timelineFilterDialog" name="DashboardTimelineCondition"
                                                                    action="/ChangeDashboardTimelineProject" method="post">
                                                                    <input type="hidden" name="csrf-token"
                                                                        value="NXhQUkhjaldYTW9qSU4yQW1GalNEVGpCTUtZbmUyYklAHxYBJisEIAx1LFMMe2YECAIbNisGJA8hJ29bLXwHDw==" />
                                                                    <div class="form-element -multiple-select project-select-wrap">
                                                                        <label class="form-element__label">Project</label>
                                                                        <div class="selectbox--multiple -tall">
                                                                            <select
                                                                                data-bind="options: projects.projects, optionsText: 'name', optionsValue: 'id', selectedOptions: selectedProjectArray, selectboxMultiple: { selectedOptions: selectedProjectArray}"
                                                                                id="selectProjects" name="projectIds" size="5"
                                                                                multiple="true" tabindex="0"
                                                                                class="-w-large"></select>
                                                                        </div>
                                                                    </div>
                                                                    <ul class="button-list _t-center _mg-t-15">
                                                                        <li class="button-list__item"><button
                                                                            data-bind="click:onCancel" type="button"
                                                                            class="button button--weak -h-small"
                                                                            id="filterClose">Cancel</button></li>
                                                                        <li class="button-list__item"><button type="submit"
                                                                            class="button button--primary -h-small">Update</button>
                                                                        </li>
                                                                    </ul>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div></section>
                            </div>




                            <div id="timeline-content" class="js_folding-target" style={{display: "none"}}>

                                {/* <!-- ko with: timeline --> */}


                                <div class="timeline" data-bind="visible: placeholder">
                                    <div data-bind="visible:blocks().length > 0">
                                        <h4 class="timeline__date"><span class="ui-placeholder-element"
                                            style={{display: "inlineBlock", width: "8.5em", borderRadius: "10px"}}>&nbsp;</span>
                                        </h4>
                                        <ul class="timeline__stream" style="padding-bottom: 20px;">
                                            <li class="timeline__stream-item">

                                                <div class="stream-update">
                                                    <div class="stream-update__wrap ui-placeholder-line"
                                                        style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                        <div class="stream-update__title">
                                                            <a class="stream-update__icon">
                                                                <span
                                                                    class="image image--circle -x-large ui-placeholder-element"
                                                                    style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                            </a>
                                                            <span class="stream-update__text ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="stream-update">
                                                    <div class="stream-update__wrap ui-placeholder-line"
                                                        style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                        <div class="stream-update__title">
                                                            <a class="stream-update__icon">
                                                                <span
                                                                    class="image image--circle -x-large ui-placeholder-element"
                                                                    style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                            </a>
                                                            <span class="stream-update__text ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="stream-update">
                                                    <div class="stream-update__wrap ui-placeholder-line"
                                                        style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                        <div class="stream-update__title">
                                                            <a class="stream-update__icon">
                                                                <span
                                                                    class="image image--circle -x-large ui-placeholder-element"
                                                                    style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                            </a>
                                                            <span class="stream-update__text ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="stream-update">
                                                    <div class="stream-update__wrap ui-placeholder-line"
                                                        style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                        <div class="stream-update__title">
                                                            <a class="stream-update__icon">
                                                                <span
                                                                    class="image image--circle -x-large ui-placeholder-element"
                                                                    style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                            </a>
                                                            <span class="stream-update__text ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="stream-update">
                                                    <div class="stream-update__wrap ui-placeholder-line"
                                                        style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                        <div class="stream-update__title">
                                                            <a class="stream-update__icon">
                                                                <span
                                                                    class="image image--circle -x-large ui-placeholder-element"
                                                                    style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                            </a>
                                                            <span class="stream-update__text ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="stream-update">
                                                    <div class="stream-update__wrap ui-placeholder-line"
                                                        style={{borderBottom: "solid 1px #d2d2d2"}}>
                                                        <div class="stream-update__title">
                                                            <a class="stream-update__icon">
                                                                <span
                                                                    class="image image--circle -x-large ui-placeholder-element"
                                                                    style={{display: "inlineBlock", borderRadius: "50%"}}>&nbsp;</span>
                                                            </a>
                                                            <span class="stream-update__text ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "20%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "100%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                        <div class="stream-update__summary">
                                                            <span class="ui-placeholder-element"
                                                                style={{display: "inlineBlock", width: "60%", borderRadius: "10px"}}>&nbsp;</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                        </ul>
                                    </div>
                                    <div class="card card--default about-timeline"
                                        data-bind="visible:blocks().length == 0 && !isLoading()" style={{ display: "none" }}>
                                        <p class="text _t-center">
                                            Project updates are displayed here. There are no updates currently.
                                        </p>
                                    </div>
                                </div>
                                <div data-bind="visible:blocks().length > 0" style={{ display: "none" }}>
                                    <div class="timeline__fixed-header js_fixed_timeline_date_header"
                                        data-bind="visible: fixedHeaderDate() != null, style: {top: (50 + fixedHeaderOffsetY()) + 'px'}">
                                        <h4 class="timeline__date" data-bind="text:fixedHeaderDate"></h4>
                                    </div>
                                    <div
                                        data-bind="foreach: { data: blocks, as: 'block', afterRender: function() { afterRender() } }">

                                        <div class="timeline">
                                            <h4 class="timeline__date js_timelineDate" data-bind="text:block.date"></h4>

                                            {/* <!-- ko if: $index() == 0 --> */}
                                            <p class="timeline__see-updated" style={{ display: "none" }}
                                                data-bind="visible:$parent.stockedCount() > 0, click:function(){$parent.showStockedActivities()}">
                                                <a data-bind="text:$parent.existNewText" href="javascript:void(0)"></a>
                                            </p>

                                            {/* <!-- /ko --> */}
                                            <ul class="timeline__stream"
                                                data-bind="foreach:{ data: block.activities, as: 'activity' }">

                                                {/* <!-- ko with: activity --> */}
                                                <li class="timeline__stream-item"
                                                    data-bind="css:{is_notification:json.notification, is_new:isNew, is_deleted:isDeleted, is_content_wide:isContentWide}, highlight:{'star-comment-highlight': {words: highlightWords, exclude: 'star'}}">
                                                    <div
                                                        data-bind="css:'stream-update ' + getStreamStyle($parentContext.block.isLast(activity))">
                                                        <div class="stream-update__wrap">


                                                            <div class="stream-update__title">
                                                                <a data-bind="title:profileLinkTitle,attr:{href:'/user/' + json.user.user_id}"
                                                                    class="stream-update__icon"><img
                                                                        class="image image--circle -x-large" alt=""
                                                                        data-bind="attr:{src:Backlog.getUserIconUrl(json.user.icon), alt: json.user.name}" /></a>
                                                                <span class="stream-update__text"
                                                                    data-bind="html:activityTitle"></span>
                                                                <span class="stream-update__meta"><abbr
                                                                    class="simptip-position-top simptip-movable simptip-smooth"
                                                                    data-bind="text:timeAgo, attr:{'data-tooltip':time}"></abbr></span>
                                                            </div>


                                                            <div class="stream-update__content">
                                                                <div class="stream-update__content-inner">

                                                                    {/* <!-- ko template: {name: typeCategory + "-template" } --> */}
                                                                    {/* <!-- /ko --> */}


                                                                    <div class="stream-update__content-block"
                                                                        data-bind="template: { name: 'file-template', foreach:attachments, as: 'file'}">
                                                                    </div>

                                                                    <div class="stream-update__content-block"
                                                                        data-bind="template: { name: 'file-template', foreach:sharedFiles, as: 'file'}">
                                                                    </div>
                                                                </div>
                                                                {/* <!-- end of .stream-update__content-inner --> */}



                                                                {/* <!-- ko if:canComment --> */}
                                                                <ul class="add-comment-area"
                                                                    data-bind="foreach:{data:addedComments, as: 'comment'}">
                                                                    <li
                                                                        class="card card--default add-comment-area__item">
                                                                        <abbr class="add-comment-area__meta"
                                                                            data-bind="attr:{title:comment.created},text:comment.timeAgo"></abbr>
                                                                        <img data-bind="attr:{src:Backlog.getUserIconUrl(comment.user.icon), alt: comment.user.name}"
                                                                            alt=""
                                                                            class="image image--circle -small add-comment-area__icon" />
                                                                        <span data-bind="text:comment.user.name"
                                                                            class="add-comment-area__name"></span>
                                                                        <p data-bind="html:comment.content"
                                                                            class="add-comment-area__content"></p>
                                                                    </li>

                                                                </ul>


                                                                {/* <!-- ko if:isCommentEditOpen() == true && isCommentUpdated() == false --> */}
                                                                <div class="comment-editor comment-editor--simple -timeline is_opened"
                                                                    data-bind="editorToolbar: {rule:'markdown',buttons:'mention,emoji', on:'.js_comment-actions', textarea: '.comment-editor__textarea'}">
                                                                    <form method="POST" data-bind="submit:postComment">
                                                                        <input type="hidden" name="csrf-token.name"
                                                                            value="csrf-token" />
                                                                        <input type="hidden" name="csrf-token"
                                                                            value="NXhQUkhjaldYTW9qSU4yQW1GalNEVGpCTUtZbmUyYklAHxYBJisEIAx1LFMMe2YECAIbNisGJA8hJ29bLXwHDw==" />
                                                                        <textarea style={{display: "none"}}
                                                                            name="comment.content"
                                                                            data-bind="textMirror:inputComment, attr:{id:'hidden-comment-'+id}"></textarea>
                                                                        <div class="comment-editor__preview-wrapper"
                                                                            data-bind="focusLinkage: {focusableTarget: '.comment-editor__textarea'}">
                                                                            <div style={{height: "104px"}}
                                                                                data-bind="contentEditable: { value: inputComment, rule: 'markdown' }"
                                                                                placeholder="Write a comment, use @mention to notify a colleague..."
                                                                                class="comment-editor__textarea hotkey-ignore">
                                                                            </div>
                                                                            <div class="comment-editor__action-wrapper">
                                                                                <div
                                                                                    class="comment-editor__tools-content">
                                                                                    <div
                                                                                        class="comment-editor__tools-content">
                                                                                        <div
                                                                                            class="comment-editor__actions js_comment-actions">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <input type="hidden" name="comment.issueId"
                                                                                data-bind="value:json.content.id" />
                                                                        </div>

                                                                        <div
                                                                            class="comment-editor__emoticon-panel js_emoticon-input-panel">
                                                                        </div>
                                                                        <div class="comment-editor__actions">

                                                                            <ul
                                                                                class="button-list comment-editor__buttons">
                                                                                <li class="button-list__item">
                                                                                    <a href="javascript:void(0)"
                                                                                        class="button button--weak -w-fixed-small -h-small"
                                                                                        data-bind="click:function(){isCommentEditOpen(false)}">Cancel</a>
                                                                                </li>
                                                                                <li class="button-list__item">
                                                                                    <input type="submit"
                                                                                        class="button button--primary -w-fixed-small -h-small"
                                                                                        value="Submit" />
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <span
                                                                            class="loading--circle -small -timeline-comment js-loading"
                                                                            style={{display: "none"}}
                                                                            data-bind="visible:addingComment"></span>
                                                                    </form>
                                                                </div>

                                                                {/* <!-- /ko --> */}
                                                                <div class="comment-editor comment-editor--simple -timeline"
                                                                    data-bind="css:{is_opened:isCommentEditOpen() == true && isCommentUpdated() == true}">
                                                                    <div id="submitWarning"
                                                                        class="message message--warning _mg-t-15"
                                                                        aria-live="polite">
                                                                        <span class="message__icon">
                                                                            <svg role="image" class="icon -medium">
                                                                                <use
                                                                                    xlink href="/images/svg/sprite.symbol.svg#icon_alert" />
                                                                            </svg></span>
                                                                        <h4 class="message__title -wrap">This comment
                                                                            probably has been modified.</h4>
                                                                        <div class="message__content">
                                                                            <button type="button"
                                                                                class="button button--default -h-small"
                                                                                data-bind="click:function(){location.href = '/' + json.link.url}">View
                                                                                latest comment</button>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <!-- /ko --> */}


                                                                {/* <!-- ko if:!isDeleted() --> */}
                                                                <div class="add-action-buttons">

                                                                    {/* <!-- ko if:canComment --> */}
                                                                    <button type="button"
                                                                        class="icon-button icon-button--default"
                                                                        data-bind="click:function(){toggleCommentPanel(json.content)}, css:{is_active:isCommentEditOpen},visible:canComment">

                                                                        <svg role="image" class="icon -medium">
                                                                            <use
                                                                                xlink href="/images/svg/sprite.symbol.svg#icon_comment" />
                                                                        </svg>
                                                                        <span class="_assistive-text">Post a
                                                                            Comment</span>
                                                                    </button>

                                                                    {/* <!-- /ko --> */}

                                                                    {/* <!-- ko if:canStar --> */}
                                                                    <star params="{starJsons:starJsons, starUrl:starUrl, highlightWordsObserver: highlightWords,
                                        projectId:json.project.id, title: starTitle, awardId:json.user.id}"></star>

                                                                    {/* <!-- /ko --> */}
                                                                </div>

                                                                {/* <!-- /ko --> */}

                                                            </div>
                                                            {/* <!-- end of .stream-update__content --> */}
                                                        </div>
                                                    </div>
                                                </li>


                                                {/* <!-- /ko --> */}
                                            </ul>
                                        </div>

                                    </div>
                                    <p id="autoLoadingMarker" class="see-all"
                                        data-bind="event: { mouseover:function(){loadOldActivities()}}, visible:hasMoreOld">
                                        <a href="javascript:void(0)" class="see-all__link"
                                            data-bind="visible:!loadingOld()"><span
                                                class="icon icon--arrow-down -medium"></span><span
                                                    class="_assistive-text">Show more</span></a>
                                        <span class="loading--circle -small _mg-t-15 js-loading" style={{display: "none"}}
                                            data-bind="visible:loadingOld"></span>
                                    </p>



                                    <script type="text/html" id="ISSUE-template">


                                        {/* <!-- ko if:isDeleted --> */}
                                        <div class="stream-update__summary">
                                            <span data-bind="text:json.link.text"></span> <span
                                                data-bind="text: (isCommentDeleted ? 'This comment has been deleted.' : 'This issue has been deleted.')"></span>
                                        </div>

                                        {/* <!-- /ko --> */}


                                        {/* <!-- ko if:!isDeleted() --> */}
                                        <div class="stream-update__summary" data-bind="css:{is_new:enhanceKey()}">

                                            {/* <!-- ko if:json.link!=null --> */}
                                            <a class="Key StarUrl"
                                                data-bind="text:json.link.text, attr:{href:starUrl}"></a>&nbsp;<span
                                                    data-bind="html:json.link.title"></span>

                                            {/* <!-- /ko --> */}
                                        </div>
                                        <div class="stream-update__content-block"
                                            data-bind="attr:{id:'activity-content-' + id}">
                                            <formatted-text
                                                params="text:content, collapse:true, autolink:true, seeMoreMsg:'See More'"></formatted-text>
                                            <div class="stream-update__change-status"
                                                data-bind="foreach: { data:json.content.changes, as: 'change' }">

                                                {/* <!-- ko if:change.field == "description" --> */}
                                                <formatted-text
                                                    params="text:$parentContext.activity.diffedDescription, collapse:true, autolink:true, css:'update-value -diff', seeMoreMsg:'See More'"></formatted-text>

                                                {/* <!-- /ko --> */}

                                                {/* <!-- ko if:change.field != "description" --> */}
                                                <span
                                                    data-bind="css:$parentContext.activity.getChangeClass(change), html:$parentContext.activity.getChangeText(change, $parent.json.content)"></span>

                                                {/* <!-- /ko --> */}
                                            </div>
                                        </div>
                                        <div class="dummy" data-bind="text:checkEmbedAfterRender()" style={{display: "none"}}>
                                        </div>

                                        {/* <!-- /ko --> */}
                                    </script>

                                    <script type="text/html" id="ISSUE_MULTI-template">
                                        <div class="stream-update__summary">
                                            <formatted-issues-link-list params="issues:issues, collapse:true, autolink:true, basePath:'', deletedMsg:'This issue has been deleted.', seeMoreMsg:'See More'"></formatted-issues-link-list>
                                        </div>
                                        <div class="stream-update__content-block">

                                            {/* <!-- ko if:json.content.comment != null --> */}
                                            <formatted-text params="text:json.content.comment.content, collapse:true, autolink:true, seeMoreMsg:'See More'"></formatted-text>

                                            {/* <!-- /ko --> */}
                                            <div data-bind="foreach: { data:json.content.changes, as: 'change' }">
                                                <span data-bind="css:$parentContext.activity.getChangeClass(change), text:$parentContext.activity.getChangeText(change)"></span>
                                            </div>
                                        </div>
                                    </script>

                                    <script type="text/html" id="WIKI-template">

                                        {/* <!-- ko if:isDeleted --> */}
                                        <div class="stream-update__summary">
                                            <span data-bind="text:json.link.text"></span> <span>This wiki has been
                                                deleted.</span>
                                        </div>

                                        {/* <!-- /ko --> */}


                                        {/* <!-- ko if:!isDeleted() --> */}
                                        <div class="stream-update__summary" data-bind="css:{is_new:enhanceKey()}">
                                            <a class="_mg-r-5"
                                                data-bind="attr:{href:getLink()},css:getStyle(), text:json.link.text"></a>
                                            <a class="diff-link icon--diff StarUrl"
                                                data-bind="visible:json.content.prevVersion > 0, attr:{href:getDiffLink()}">Difference</a>
                                            <span data-bind="html:getProjectText()"></span>
                                        </div>
                                        <div class="stream-update__content-block">

                                            {/* <!-- ko if:type != "WIKI_UPDATED" --> */}
                                            <formatted-text
                                                params="text:json.content.content, collapse:true, autolink:true, seeMoreMsg:'See More'"></formatted-text>

                                            {/* <!-- /ko --> */}

                                            {/* <!-- ko if:type == "WIKI_UPDATED" --> */}
                                            <formatted-text
                                                params="text:json.content.formattedDiff, collapse:true, autolink:true, css:'update-value -diff', seeMoreMsg:'See More'"></formatted-text>

                                            {/* <!-- /ko --> */}
                                        </div>
                                        <div class="dummy" data-bind="text:checkEmbedAfterRender()" style={{display: "none"}}>
                                        </div>

                                        {/* <!-- /ko --> */}
                                    </script>

                                    <script type="text/html" id="SVN-template">
                                        <div class="stream-update__summary">
                                            <span data-bind="html:getProjectText()"></span>
                                        </div>
                                        <div class="stream-update__content-block">
                                            <div class="commit-log" data-bind="foreach:{ data: json.content.revisions, as: 'revision' }">
                                                <div class="commit-log__item">
                                                    <a class="commit-log__number StarUrl" data-bind="attr:{href:'/' + revision.link.url}, text:revision.link.text"></a>
                                                    <span class="commit-log__message" data-bind="html:revision.comment"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </script>

                                    <script type="text/html" id="GIT_REPOSITORY-template">
                                        <div class="stream-update__summary">
                                            <span data-bind="html:getProjectText()"></span><a data-bind="attr:{href:getLink()}, text:json.link.text"></a>
                                        </div>
                                    </script>

                                    <script type="text/html" id="GIT-template">
                                        <div class="stream-update__summary">
                                            <span data-bind="html:getProjectText() + json.content.repository.name"></span>
                                        </div>
                                        <div class="stream-update__content-block">
                                            <div class="commit-log" data-bind="foreach:{ data: json.content.revisions, as: 'revision' }">
                                                <div class="commit-log__item">
                                                    <a class="commit-log__number StarUrl" data-bind="attr:{href:'/' + revision.link.url}, text:revision.link.text.substring(0,10)"></a>
                                                    <span class="commit-log__message" data-bind="html:revision.comment"></span>
                                                </div>
                                            </div>
                                            <p class="text -weak _mg-t-5" data-bind="text:'... ${json.content.has_more_revision_num} more commit', visible:json.content.has_more_revision_num > 0"></p>
                                        </div>
                                    </script>

                                    <script type="text/html" id="PULL_REQUEST-template">
                                        <div class="stream-update__summary" data-bind="css:{is_new:enhanceKey()}">
                                            <span><a class="Key StarUrl" data-bind="attr:{href:'/' + json.link.url}, text:getKeyText()"></a>&nbsp;</span><span data-bind="html:json.link.title"></span>
                                        </div>
                                        <div class="stream-update__content-block">
                                            <formatted-text params="text:content, collapse:true, autolink:true, seeMoreMsg:'See More'"></formatted-text>
                                            <div class="stream-update__change-status" data-bind="foreach: { data:json.content.changes, as: 'change' }">

                                                {/* <!-- ko if:change.field == "description" --> */}
                                                <formatted-text params="text:$parentContext.activity.diffedDescription, collapse:true, autolink:true, css:'update-value -diff', seeMoreMsg:'See More'"></formatted-text>

                                                {/* <!-- /ko --> */}

                                                {/* <!-- ko if:change.field != "description" --> */}
                                                <span data-bind="css:$parentContext.activity.getChangeClass(change), text:$parentContext.activity.getChangeText(change)"></span>

                                                {/* <!-- /ko --> */}
                                            </div>
                                        </div>
                                        <div class="dummy" data-bind="text:checkEmbedAfterRender()" style={{display: "none"}}></div>
                                    </script>

                                    <script type="text/html" id="PROJECT_USER-template">
                                        <div class="stream-update__summary">
                                            <a class="Key -project-icon StarUrl" data-bind="attr:{href:'/' + json.link.url}">

                                                {/* <!-- ko if:showProjectList --><img class="image -x-small image--circle user-icon" data-bind="attr:{src:Backlog.getUserIconUrl(json.link.icon)}" /> */}
                                                {/* <!-- /ko --> */}

                                                {/* <!-- ko if:showUserList --><project-icon params="icon: json.link.icon, style:'image -x-small'"></project-icon> */}
                                                {/* <!-- /ko --> */}
                                            </a>&nbsp;<span data-bind="html:linkText"></span>
                                        </div>
                                        <div class="stream-update__content-block">

                                            {/* <!-- ko if:showUserList --> */}
                                            <div data-bind="foreach: { data:getInitialProjectUsers(), as: 'user' }">
                                                <div class="icon-item">
                                                    <a class="icon-item__icon" data-bind="attr:{href:'/user/' + user.user_id}">
                                                        <img class="image image--circle -x-small" data-bind="attr:{src:Backlog.getUserIconUrl(user.icon), alt: user.name}" />
                                                    </a>
                                                    <span class="icon-item__text" data-bind="text:$parent.getJoinUserText(user)"></span>
                                                </div>
                                            </div>

                                            <a class="SeeMore" data-bind="visible:hasMore && showMore() == false, click:function(){showMore(true)}">&hellip; See More</a>
                                            <div class="Collapsed" data-bind="visible:showMore, foreach: { data:getMoreProjectUsers(), as: 'user' }">
                                                <div class="icon-item">
                                                    <a class="icon-item__icon" data-bind="attr:{href:'/user/' + user.user_id}">
                                                        <img class="image image--circle -x-small" data-bind="attr:{src:Backlog.getUserIconUrl(user.icon), alt: user.name}" loading="lazy" />
                                                    </a>
                                                    <span class="icon-item__text" data-bind="text:$parent.getJoinUserText(user)"></span>
                                                </div>
                                            </div>

                                            {/* <!-- /ko --> */}

                                            {/* <!-- ko if:showProjectList --> */}
                                            <span data-bind="foreach: { data:getInitialProjects(), as: 'project' }">
                                                <div class="icon-item">
                                                    <span data-bind="text:$parent.getJoinProjectText1(project)"></span>
                                                    <a class="icon-item__icon" data-bind="attr:{href:'/projects/' + project.key}">
                                                        <project-icon params="icon: project.icon, alt: project.iconAlt, style:'image -x-small project-icon'"></project-icon>
                                                    </a>
                                                    <span class="icon-item__text" data-bind="text:$parent.getJoinProjectText2(project, type)"></span>
                                                </div>
                                            </span>
                                            <a class="SeeMore" data-bind="visible:hasMore && showMore() == false, click:function(){showMore(true)}">&hellip; See More</a>
                                            <span class="Collapsed" data-bind="visible:showMore, foreach: { data:getMoreProjects(), as: 'project' }">
                                                <div class="icon-list-item">
                                                    <span data-bind="text:$parent.getJoinProjectText1(project)"></span>
                                                    <a class="icon-item__icon" data-bind="attr:{href:'/projects/' + project.key}">
                                                        <project-icon params="icon: project.icon, alt: project.iconAlt, style:'image -x-small project-icon'"></project-icon>
                                                    </a>
                                                    <span class="icon-item__text" data-bind="text:$parent.getJoinProjectText2(project, type)"></span>
                                                </div>
                                            </span>

                                            {/* <!-- /ko --> */}
                                        </div>
                                    </script>

                                    <script type="text/html" id="PROJECT_PARTY-template">
                                        <div class="stream-update__summary">
                                            <a class="Key StarUrl" data-bind="attr:{href:'/' + json.link.url}">
                                                <img class="image -x-small"
                                                    data-bind="attr:{src:'/' + json.link.icon},
                                                    css:{'image--circle user-icon':showProjectList,'project-icon':showPartyList}" />
                                            </a>
                                            &nbsp;
                                            <span data-bind="html:linkText"></span>
                                        </div>
                                        <div class="stream-update__content-block">

                                            {/* <!-- ko if:showPartyList --> */}
                                            <div data-bind="foreach: { data:getInitialProjectParties(), as: 'party' }">
                                                <div class="icon-item">
                                                    <a class="icon-item__icon" data-bind="attr:{href:'/EditParty.action?party.id=' + party.id}">
                                                        <img class="image image--circle -x-small" data-bind="attr:{src:'/' + party.icon, alt: party.name}" />
                                                    </a>
                                                    <span class="icon-item__text" data-bind="text:$parent.getJoinPartyText(party)"></span>
                                                </div>
                                            </div>

                                            <a class="SeeMore" data-bind="visible:hasMore && showMore() == false, click:function(){showMore(true)}">
                                                &hellip; See More
                                            </a>
                                            <div class="Collapsed" data-bind="visible:showMore, foreach: { data:getMoreProjectParties(), as: 'party' }">
                                                <div class="icon-item">
                                                    <a class="icon-item__icon" data-bind="attr:{href:'/EditParty.action?party.id=' + party.id}">
                                                        <img class="image image--circle -x-small" data-bind="attr:{src:'/' + party.icon, alt: party.name}" />
                                                    </a>
                                                    <span class="icon-item__text" data-bind="text:$parent.getJoinPartyText(party)"></span>
                                                </div>
                                            </div>

                                            {/* <!-- /ko --> */}

                                            {/* <!-- ko if:showProjectList --> */}
                                            <span data-bind="foreach: { data:getInitialProjects(), as: 'project' }">
                                                <div class="icon-item">
                                                    <span data-bind="text:$parent.getJoinProjectText1(project)"></span>
                                                    <a class="icon-item__icon" data-bind="attr:{href:'/projects/' + project.key}">
                                                        <img class="image -x-small project-icon" data-bind="attr:{src: Backlog.getProjectIconUrl(project.icon), alt:project.iconAlt}" loading="lazy" />
                                                    </a>
                                                    <span class="icon-item__text" data-bind="text:$parent.getJoinProjectText2(project, type)"></span>
                                                </div>
                                            </span>
                                            <a class="SeeMore" data-bind="visible:hasMore && showMore() == false, click:function(){showMore(true)}">&hellip; See More</a>
                                            <span class="Collapsed" data-bind="visible:showMore, foreach: { data:getMoreProjects(), as: 'project' }">
                                                <div class="icon-list-item">
                                                    <span data-bind="text:$parent.getJoinProjectText1(project)"></span>
                                                    <a class="icon-item__icon" data-bind="attr:{href:'/projects/' + project.key}">
                                                        <img class="image -x-small project-icon" data-bind="attr:{src: Backlog.getProjectIconUrl(project.icon), alt:project.iconAlt}" />
                                                    </a>
                                                    <span class="icon-item__text" data-bind="text:$parent.getJoinProjectText2(project, type)"></span>
                                                </div>
                                            </span>

                                            {/* <!-- /ko --> */}
                                        </div>
                                    </script>

                                    <script type="text/html" id="ISSUE_NOTIFY-template">

                                        {/* <!-- ko if:isDeleted --> */}
                                        <div class="stream-update__summary">
                                            <span data-bind="text:json.link.text"></span> <span>This issue has been
                                                deleted.</span>
                                        </div>

                                        {/* <!-- /ko --> */}


                                        {/* <!-- ko if:!isDeleted() --> */}
                                        <div class="stream-update__summary">
                                            <a class="Key StarUrl"
                                                data-bind="text:json.link.text, attr:{href:'/' + json.link.url}"></a><span
                                                    data-bind="html:json.link.title"></span>
                                        </div>
                                        <div class="Issue-user-notified">
                                            <span data-bind="foreach: { data:getInitialNotifyUsers(), as: 'notify' }">
                                                <img class="image image--circle -x-small"
                                                    data-bind="attr:{src:Backlog.getUserIconUrl(notify.user.icon)}" />
                                            </span>
                                            <a class="SeeMore"
                                                data-bind="visible:hasMore && showMore() == false, click:function(){showMore(true)}">&hellip;
                                                See More</a>
                                            <span class="Collapsed"
                                                data-bind="visible:showMore, foreach: { data:getMoreNotifyUsers(), as: 'notify' }">
                                                <img class="image image--circle -x-small"
                                                    data-bind="attr:{src:Backlog.getUserIconUrl(notify.user.icon)}" />
                                            </span>
                                        </div>

                                        {/* <!-- /ko --> */}
                                    </script>

                                    <script type="text/html" id="VERSION-template">

                                        {/* <!-- ko if:isDeleted --> */}
                                        <div class="stream-update__summary">
                                            <span data-bind="text:json.content.version.name"></span>
                                        </div>

                                        {/* <!-- /ko --> */}


                                        {/* <!-- ko if:!isDeleted() --> */}
                                        <div class="stream-update__summary" data-bind="css:{is_new:enhanceKey()}">
                                            <a class="Key -project-icon StarUrl"
                                                data-bind="attr:{href:'/' + json.link.url}">

                                                {/* <!-- ko if:showUserIcon --><img */}
                                                {/* class="image -x-small image--circle user-icon" */}
                                                {/* data-bind="attr:{src:Backlog.getUserIconUrl(json.link.icon)}" /> */}
                                                {/* <!-- /ko --> */}

                                                {/* <!-- ko if:showProjectIcon --><project-icon */}
                                                {/* params="icon: json.link.icon, style:'image -x-small'"></project-icon> */}
                                            {/* <!-- /ko --> */}
                                        </a>
                                        &nbsp;<span data-bind="html:getLinkText()"></span>
                                    </div>
                                    <div class="stream-update__summary">
                                        <span data-bind="text:json.content.version.name"></span>
                                    </div>
                                    <div class="stream-update__content-block"
                                        data-bind="foreach: { data:json.content.version.changes, as: 'change' }">
                                        <span class="update-value"
                                            data-bind="text:$parentContext.activity.getChangeText(change)"></span>
                                    </div>

                                {/* <!-- /ko --> */}
                            </script>

                            <script type="text/html" id="FILE-template">
                                <div class="stream-update__summary">
                                    <span data-bind="html:getProjectText()"></span>
                                </div>
                            </script>


                            <script type="text/html" id="file-template">


                                {/* <!-- ko if:file.thumbnail == true && file.isDeleted() == false --> */}
                                <a class="attachment-file-link"
                                    data-bind="colorbox:{}, attr: {href: file.src, rel:'zoom-'+ $parentContext.activity.json.id, title:file.name}">
                                    <img class="attachment-file-image"
                                        data-bind="attr: {src:file.src, alt:file.name}" />

                                </a>


                                {/* <!-- /ko --> */}
                                <span class="file-name"
                                    data-bind="css:{is_deleted:file.isDeleted() || $parentContext.activity.type == 'FILE_DELETED'}">
                                    <img class="file-name__icon"
                                        data-bind="attr: {src:'https://assets.backlog.com/playassets/1.42.3/images/icon/files/' + file.type + '.png', srcset:'https://assets.backlog.com/playassets/1.42.3/images/icon/files/' + file.type + '.png 1x, ' + 'https://assets.backlog.com/playassets/1.42.3/images/icon/files/' + file.type + '@2x.png 2x', alt:'Shared Files'}" />
                                        <a data-bind="attr: {css:file.style, href:'/' + file.link}, text:file.name, visible:!file.isDeleted() && $parentContext.activity.type != 'FILE_DELETED'"
                                            target="_blank"></a>
                                        <span
                                            data-bind="attr: {css:file.style, href:'/' + file.link}, text:file.name, visible:file.isDeleted() || $parentContext.activity.type == 'FILE_DELETED'"></span>
                                        <br />
                                </span>
                            </script>

                            <script type="text/html" id="STATUS_DELETED-template">
                                <div class="stream-update__summary">
                                    <formatted-issues-link-list params="issues:issues, collapse:true, autolink:true, basePath:'', deletedMsg:'This issue has been deleted.', seeMoreMsg:'See More'"></formatted-issues-link-list>
                                </div>
                                <div class="stream-update__content-block">

                                    {/* <!-- ko if:json.content.change != null --> */}
                                    <span data-bind="css: getChangeClass(json.content.change), text: getChangeText(json.content.change)"></span>

                                    {/* <!-- /ko --> */}
                                </div>
                            </script>
                        </div>

                        {/* <!-- /ko --> */}
                    </div>
                </div>            
                {/* <!-- END .timeline__wrapper --> */}
            {/* </section> */}

        </div >
            </div >

        {/* </div > */}
                                                {/* </div > */}
    {/* 
                                                // <!-- .core-wrapper --> */}
{/* </div ></div ></div ></div ></div ></div ></div ></a ></script ></header ></div > */}
    {/* 
                                                // <!-- <footer id="footer" class="content-footer" role="contentinfo"> --> */}
    {/* 
                                                    // <!-- footer --> */}
    {/* 
                                                    // <!-- </footer> --> */}


                                                <script type="text/javascript"
                                                    src="https://assets.backlog.com/playassets/1.42.3/script/backlog/dashboard-all.js"></script>






                                                <script type="text/javascript"
                                                    src="https://assets.backlog.com/playassets/1.42.3/script/backlog/statusbar.js"></script>




                                                <script type="text/javascript"
                                                    src="https://assets.backlog.com/playassets/1.42.3/script/jquery/jquery.caret.js"></script>
                                                <script type="text/javascript"
                                                    src="https://assets.backlog.com/playassets/1.42.3/script/knockout-bindings.js"></script>
                                                <script type="text/javascript"
                                                    src="https://assets.backlog.com/playassets/1.42.3/script/backlog/dashboard_hx.js"></script>
                                                {/* <script type="application/json" id="__BACKLOG_DATA__">
                                                    {"basePath":"","hasCurrentSpaceImg":true,"japaneseArticleConfig":{"newsWordpressApiUrl":"https://backlog.com/ja/wp-json/wp/v2/posts?per_page=3"},"englishArticleConfig":{"pageDataUrl":"https://nulab.com/page-data/learn/project-management/page-data.json","baseUrl":"https://nulab.com/","displayNewsCount":4},"projects":[],"myAssignedIssueCount":0,"myCreatedIssueCount":0,"myWatchingIssueCount":0,"myPullRequests":[],"selectTimelineProjects":[],"activities":[],"allStatus":[{"id":1,"name":"Open"},{"id":2,"name":"In Progress"},{"id":3,"name":"Resolved"},{"id":4,"name":"Closed"}],"dateFormat":"ddd MMM. dd, yyyy","lang":"en"}
                                                </script> */}

                                                {/* <script type="text/javascript">
                                                    Backlog.resource['timelineMessage'] = {
                                                        ACTIVITY_ISSUE_CREATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e added a new \u003cspan class=\u0022Action 
                                                         AddIssue\u0022\u003eissue\u003c/span\u003e",
                                                    ACTIVITY_ISSUE_UPDATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action UpdateIssue\u0022\u003eupdated\u003c/span\u003e the issue",
                                                    ACTIVITY_ISSUE_COMMENTED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e  posted a \u003cspan class=\u0022Action AddComment\u0022\u003ecomment\u003c/span\u003e on the issue",
                                                    ACTIVITY_ISSUE_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action DeleteIssue\u0022\u003edeleted\u003c/span\u003eissue",
                                                    ACTIVITY_WIKI_CREATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e added a \u003cspan class=\u0022Action AddWiki\u0022\u003eWiki\u003c/span\u003e",
                                                    ACTIVITY_WIKI_UPDATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e updated the \u003cspan class=\u0022Action AddWiki\u0022\u003eWiki\u003c/span\u003e",
                                                    ACTIVITY_WIKI_UPDATED_ATTACHED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e attached a file to \u003cspan class=\u0022Action AddWiki\u0022\u003eWiki\u003c/span\u003e",
                                                    ACTIVITY_WIKI_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e deleted the \u003cspan class=\u0022Action AddWiki\u0022\u003eWiki\u003c/span\u003e",
                                                    ACTIVITY_FILE_ADDED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e added a \u003cspan class=\u0022Action AddFile\u0022\u003efile\u003c/span\u003e",
                                                    ACTIVITY_FILE_UPDATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e updated a \u003cspan class=\u0022Action AddFile\u0022\u003efile\u003c/span\u003e",
                                                    ACTIVITY_FILE_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e deleted a \u003cspan class=\u0022Action AddFile\u0022\u003efile\u003c/span\u003e",
                                                    ACTIVITY_SVN_COMMITTED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action Commit\u0022\u003ecommitted\u003c/span\u003e",
                                                    ACTIVITY_GIT_PUSHED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action GitPushed\u0022\u003epushed\u003c/span\u003e to \u003ca href=\u0022{{= content.branch.link}}\u0022\u003e{{= content.branch.name}}\u003c/a\u003e at {{= content.repository.name}}",
                                                    ACTIVITY_GIT_PUSHED_BRANCH_CREATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action GitPushed\u0022\u003ecreated branch\u003c/span\u003e \u003ca href=\u0022{{= content.branch.link}}\u0022\u003e{{= content.branch.name}}\u003c/a\u003e at {{= content.repository.name}}",
                                                    ACTIVITY_GIT_PUSHED_BRANCH_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action GitPushed\u0022\u003edeleted branch\u003c/span\u003e {{= content.branch.name}} at {{= content.repository.name}}",
                                                    ACTIVITY_GIT_PUSHED_TAG_CREATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action GitPushed\u0022\u003ecreated tag\u003c/span\u003e \u003ca href=\u0022{{= content.tag.link}}\u0022\u003e{{= content.tag.name}}\u003c/a\u003e at {{= content.repository.name}}",
                                                    ACTIVITY_GIT_PUSHED_TAG_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action GitPushed\u0022\u003edeleted tag\u003c/span\u003e {{= content.tag.name}} at {{= content.repository.name}}",
                                                    ACTIVITY_GIT_REPOSITORY_CREATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action GitPushed\u0022\u003ecreated repository\u003c/span\u003e \u003ca href=\u0022{{= link.url}}\u0022\u003e{{= content.repository.name}}\u003c/a\u003e",
                                                    ACTIVITY_ISSUE_MULTI_UPDATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action UpdateIssue\u0022\u003eupdated\u003c/span\u003e the issue",
                                                    ACTIVITY_PROJECT_USER_ADDED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e edited the \u003cspan class=\u0022Action ProjectUser\u0022\u003emembers\u003c/span\u003e of this project.",
                                                    ACTIVITY_PROJECT_USER_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e edited the \u003cspan class=\u0022Action ProjectUser\u0022\u003emembers\u003c/span\u003e of this project.",
                                                    ACTIVITY_PROJECT_PARTY_ADDED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e edited the \u003cspan class=\u0022Action ProjectUser\u0022\u003eteams\u003c/span\u003e of this project.",
                                                    ACTIVITY_PROJECT_PARTY_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e edited the \u003cspan class=\u0022Action ProjectUser\u0022\u003eteams\u003c/span\u003e of this project.",
                                                    ACTIVITY_ISSUE_NOTIFY_ADD: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e notified \u003cspan class=\u0022Action AddComment\u0022\u003ecomment\u003c/span\u003e on the issue",
                                                    ACTIVITY_PULL_REQUEST_CREATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e added a new \u003cspan class=\u0022Action AddPullRequest\u0022\u003epull request\u003c/span\u003e",
                                                    ACTIVITY_PULL_REQUEST_UPDATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action UpdatePullRequest\u0022\u003eupdated\u003c/span\u003e the pull request",
                                                    ACTIVITY_PULL_REQUEST_COMMENTED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action AddPullRequestComment\u0022\u003ecommented\u003c/span\u003e on the pull request",
                                                    ACTIVITY_PULL_REQUEST_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action DeletePullRequest\u0022\u003edeleted\u003c/span\u003ethe pull request",
                                                    ACTIVITY_VERSION_CREATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e added a new \u003cspan class=\u0022Action AddMilestone\u0022\u003eVersion/Milestone\u003c/span\u003e",
                                                    ACTIVITY_VERSION_UPDATED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action UpdateMilestone\u0022\u003eupdated\u003c/span\u003e the Version/Milestone",
                                                    ACTIVITY_VERSION_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action DeleteMilestone\u0022\u003edeleted\u003c/span\u003e the Version/Milestone",
                                                    ACTIVITY_STATUS_DELETED: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action DeletedStatus\u0022\u003edeleted\u003c/span\u003e status [{{= content.deletedStatus.name}}]",
                                                    ACTIVITY_STATUS_DELETED_SUBSTITUTE: "\u003cspan class=\u0022Fn\u0022\u003e{{= user.name}}\u003c/span\u003e \u003cspan class=\u0022Action DeletedStatus\u0022\u003edeleted\u003c/span\u003e status [{{= content.deletedStatus.name}}] and \u003cspan class=\u0022Action UpdateIssue\u0022\u003eupdated\u003c/span\u003e issue(s)",
                                                    ACTIVITY_ERROR_ERROR: "Unable to load updates",
                                                    EMPTY_VALUE:"empty",
                                                    DELETED_VALUE:"(deleted)",
                                                    FAIL_GET_ACTIVITIES: "Unable to load updates",
                                                    FAIL_ADD_COMMENT: "Error occurred while posting a comment",
                                                    PROJECT_SHOW_ALL: "Show all",
                                                    PROJECT_COLLAPSE: "Back",
                                                    NEW_ACTIVITIES: "There are {0} new updates",
                                                    ACTIVITY_CONTENT_SEE_MORE: "See More",
                                                    PROFILE_LINK_TITLE: "Profile of {0}",
                                                    ISSUE_OVER: "Up to 600 filtered issues can be updated at once.\u000aPlease narrow down the issues so that there will be less than 600 results.",
                                                    STATUS_LABEL_1: "Open",
                                                    STATUS_LABEL_2: "In Progress",
                                                    STATUS_LABEL_3: "Resolved",
                                                    STATUS_LABEL_4: "Closed",
                                                    PROJECTUSER_DESCRIPTION: "{0}",
                                                    PROJECTUSER_DESCRIPTION_JOINED_MEMBERS__PROJECT1: "You have been added to",
                                                    PROJECTUSER_DESCRIPTION_JOINED_MEMBERS__PROJECT2: "{1}({0}).",
                                                    PROJECTUSER_DESCRIPTION_OUT_OF_MEMBERS__PROJECT1: "You have been removed from",
                                                    PROJECTUSER_DESCRIPTION_OUT_OF_MEMBERS__PROJECT2: "{1}({0}).",
                                                    PROJECTUSER_DESCRIPTION_JOINED_MEMBERS__USER: "{0} has been added as a project member.",
                                                    PROJECTUSER_DESCRIPTION_OUT_OF_MEMBERS__USER: "{0} has been removed from project member.",
                                                    PROJECTUSER_DESCRIPTION_JOINED_MEMBERS__PARTY: "{0} has been added as a project.",
                                                    PROJECTUSER_DESCRIPTION_OUT_OF_MEMBERS__PARTY: "{0} has been removed from project member."

    }; */}
                                                {/* </script> */}
                                                </div>
                                            {/* </div ></div ></div ></div ></div ></div ></div ></a ></script > */}
        </>
    )
}