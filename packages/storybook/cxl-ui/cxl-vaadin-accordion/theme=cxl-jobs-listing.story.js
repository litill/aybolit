import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';

export const CXLVaadinAccordionJobsListing = () => html`
  <cxl-app-layout id="container" class="cxl-app-layout" wide="" layout="1c-w" scroll="document">
    <cxl-marketing-nav
      class="menu menu--primary headroom headroom--not-bottom headroom--not-top headroom--unpinned"
      slot="header"
      wide=""
    >
      <template id="cxl-marketing-nav-search-form-template">
        <vaadin-context-menu-item class="menu-item-search">
          <form
            id="search-form"
            role="search"
            method="get"
            class="search-form"
            action="https://jobs.cxl.co/"
          >
            <label for="search-input">Search CXL Jobs:</label>
            <input
              id="search-input"
              type="search"
              class="search-field"
              placeholder="Search …"
              value=""
              name="s"
            />
            <vaadin-button
              type="submit"
              class="search-submit"
              aria-label="Search"
              theme="icon"
              onclick="document.getElementById('search-form').submit();"
            >
              <iron-icon icon="lumo:angle-right"></iron-icon>
            </vaadin-button>
          </form>
        </vaadin-context-menu-item>
      </template>

      <vaadin-tabs
        id="menu-global-items"
        class="menu-items"
        theme="cxl-marketing-nav"
        selected="0"
        orientation="horizontal"
        role="tablist"
        aria-orientation="horizontal"
        wide="true"
      >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-120"
          class="menu-item-wide menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-120 menu__item menu__item--current menu-item-wide"
          aria-selected="true"
          role="tab"
          orientation="horizontal"
          tabindex="0"
          selected=""
          ><a href="https://jobs.cxl.co" aria-current="page">
            <iron-icon
              icon="cxl:logo"
              style="width: var(--lumo-icon-size-l, 48px);"
            ></iron-icon> </a
        ></vaadin-tab>
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-121"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-121 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/institute/">Institute</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-122"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-122 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/agency/">Conversion optimization services</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-123"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-123 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/agency/case-studies/">Agency case studies</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-124"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-124 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/blog/">Blog</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-125"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-125 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/live/"
            >CXL Live 2020
            <iron-icon icon="cxl:live" style="color: var(--lumo-primary-color)"></iron-icon> </a
        ></vaadin-tab>
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-126"
          class="menu-item-split-nav menu-item-wide menu-item-search menu-item menu-item-type-custom menu-item-object-custom menu-item-126 menu__item menu-item-split-nav menu-item-wide menu-item-search"
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a
            >Search
            <iron-icon icon="lumo:search"></iron-icon> </a
        ></vaadin-tab>
      </vaadin-tabs>
      <script>
        window.CXL = window.CXL || {};
        window.CXL.contextMenuItems = window.CXL.contextMenuItems || {};
        window.CXL.contextMenuItems['global'] = [
          {
            depth: 0,
            text: '',
            component: 'a',
            href: 'https:\\/\\/jobs.cxl.co',
            id: 120,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Institute',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/institute\\/',
            id: 121,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Conversion optimization services',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/agency\\/',
            id: 122,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Agency case studies',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/agency\\/case-studies\\/',
            id: 123,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Blog',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/blog\\/',
            id: 124,
            parent: 0,
          },
          {
            depth: 0,
            text: 'CXL Live 2020',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/live\\/',
            id: 125,
            parent: 0,
          },
          { depth: 0, text: 'Search', id: 126, parent: 0 },
        ];
      </script>
      <vaadin-tabs
        id="menu-primary-items"
        class="menu-items"
        theme="cxl-marketing-nav"
        selected="0"
        orientation="horizontal"
        role="tablist"
        aria-orientation="horizontal"
        wide="true"
      >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-117"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-117 menu__item menu__item--current "
          aria-selected="true"
          role="tab"
          orientation="horizontal"
          tabindex="0"
          selected=""
          ><a href="https://jobs.cxl.co/" aria-current="page">Jobs list</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-119"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://jobs.cxl.co/post-a-job/">Post a Job</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-118"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-118 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://jobs.cxl.co/employer-dashboard/">Employer Dashboard</a></vaadin-tab
        >
      </vaadin-tabs>
      <script>
        window.CXL = window.CXL || {};
        window.CXL.contextMenuItems = window.CXL.contextMenuItems || {};
        window.CXL.contextMenuItems['primary'] = [
          {
            depth: 0,
            text: 'Jobs list',
            component: 'a',
            href: 'https:\\/\\/jobs.cxl.co\\/',
            id: 117,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Post a Job',
            component: 'a',
            href: 'https:\\/\\/jobs.cxl.co\\/post-a-job\\/',
            id: 119,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Employer Dashboard',
            component: 'a',
            href: 'https:\\/\\/jobs.cxl.co\\/employer-dashboard\\/',
            id: 118,
            parent: 0,
          },
        ];
      </script> </cxl-marketing-nav
    ><!-- #menu-primary -->

    <div class="app-content max-w-full overflow-hidden my-0 mx-auto pt-12">
      <main id="main" class="app-main mx-auto mb-12 text-lg leading-loose">
        <article class="entry post-6 page type-page status-publish hentry" id="post-6">
          <header class="entry__header mb-8 text-center">
            <h1 class="entry__title md:max-w-4xl mx-8 sm:mx-auto my-0">Jobs list</h1>
          </header>

          <div class="entry__content o-content-width flow-root">
            <div class="gv-grid gv-widgets-header">
              <div class="gv-grid-col-1-1 gv-left">
                <form
                  class="gv-widget-search gv-search-horizontal"
                  method="get"
                  action="https://jobs.cxl.co/"
                  data-viewid="102"
                >
                  <div class="gv-search-box gv-search-field-text gv-search-field-search_all">
                    <div class="gv-search">
                      <label for="gv_search_102">Search Entries:</label>
                      <p><input type="search" name="gv_search" id="gv_search_102" value="" /></p>
                    </div>
                  </div>
                  <div class="gv-search-box gv-search-field-select">
                    <label for="search-box-filter_41_6">Country</label>
                    <p>
                      <select name="filter_41_6" id="search-box-filter_41_6">
                        <option value="" selected="selected">—</option>
                        <option value="United States">United States</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Poland">Poland</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </p>
                  </div>
                  <div class="gv-search-box gv-search-field-select">
                    <label for="search-box-filter_7">Employment type</label>
                    <p>
                      <select name="filter_7" id="search-box-filter_7">
                        <option value="" selected="selected">—</option>
                        <option value="Contractor">Contractor</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Full-time remote">Full-time remote</option>
                      </select>
                    </p>
                  </div>
                  <div class="gv-search-box gv-search-box-submit">
                    <input type="hidden" name="mode" value="all" />
                    <vaadin-button
                      type="submit"
                      theme="primary"
                      onclick="document.querySelector('form[data-viewid=&quot;102&quot;]').submit()"
                      style="cursor: pointer;"
                      tabindex="0"
                      role="button"
                    >
                      <iron-icon slot="suffix" icon="lumo:angle-right"></iron-icon>
                      Search
                    </vaadin-button>
                  </div>
                </form>
              </div>
              <div class="gv-grid-col-1-2 gv-left">
                <div class="gv-widget-pagination "><p>Displaying 1 - 5 of 5</p></div>
              </div>
              <div class="gv-grid-col-1-2 gv-right"></div>
            </div>

            <div
              class="gv-list-container gv-list-view gv-list-multiple-container gv-container gv-container-102"
            >
              <cxl-vaadin-accordion theme="cxl-jobs-listing" opened="0">
                <div id="gv_list_8" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2F368px-Google_2015_logo.svg.png&amp;form-id=1&amp;field-id=26&amp;hash=8e51092706ed0910ce209dce0c16f65b60a21c39cb9a32aaa225643757707fdf"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/8/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >Content marketer</a
                            >
                          </p>
                        </div>
                        <div id="gv-field-1-25" class="cxl-job-company-name gv-field-1-25">
                          <p>Google</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>Glasgow<br />United Kingdom</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time remote</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated gv-field-1-date_created"
                        >
                          <span class="gv-field-label">Date posted:</span>
                          <p>1 week ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a class="button cxl-apply-for-job" href="https://grnh.se/b1e1dcd11us"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                        <div id="gv-field-1-custom" class="cxl-job-expand gv-field-1-custom">
                          <p>
                            <span>Chevron</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>
                            Pressable is a leading provider of managed WordPress hosting. We're
                            looking for a hardworking developer to help us build the world's best
                            WordPress hosting service.
                          </p>
                          <p>
                            As a software engineer with Pressable, you will provide a phenomenal
                            user experience, build advanced tools and integrations, and solve
                            difficult problems with creative solutions as we grow and deliver new
                            capabilities to our customers!
                          </p>
                          <p>
                            <strong
                              >SOME OF THE PROJECTS YOU'LL BE WORKING ON AS A MEMBER OF OUR
                              TEAM</strong
                            >
                          </p>
                          <ul>
                            <li>
                              A new frontend control panel to deliver a modern and polished user
                              experience
                            </li>
                            <li>
                              A new API that will enable our customers to interact with our platform
                              in ways they never have before
                            </li>
                            <li>
                              Data analytics, reporting, and visualization for both customers and
                              internal team collaboration
                            </li>
                            <li>
                              Integrations with third-party tools including GitHub and WordPress
                            </li>
                            <li>
                              Collaboration with other teams including Customer Success, Marketing,
                              and Sales to automate and improve the customer experience
                            </li>
                            <li>
                              Tighter integration with our customer WordPress sites with advanced
                              tooling and abilities from our control panel
                            </li>
                            <li>
                              Daily upkeep, maintenance, monitoring of Pressable's control panel and
                              systems
                            </li>
                            <li>
                              A new event system to enable notifications, webhooks, and websocket
                              support with ActionCable
                            </li>
                          </ul>
                          <p><strong>TOOLS AND FRAMEWORKS WE USE</strong></p>
                          <ul>
                            <li>Ruby 2.6.6 and Ruby on Rails 6</li>
                            <li>MySQL/MariaDB</li>
                            <li>Vue.js and Typescript</li>
                            <li>Docker and Docker Compose</li>
                            <li>Elastic Stack for logging and metrics</li>
                            <li>PHP and WordPress</li>
                            <li>Git / GitLab / GitHub</li>
                            <li>Sass / SCSS</li>
                          </ul>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a class="button cxl-apply-for-job" href="https://grnh.se/b1e1dcd11us"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/8/?edit=4d5b7bbf7b&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="gv-field-1-52">
                          <span class="gv-field-label">Expires at</span>2021-02-20 12:21:44
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div id="gv_list_7" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2F1c9a94d6cf75838cf63.png&amp;form-id=1&amp;field-id=26&amp;hash=bef7031346a53e865b3fc52345363bbfd5aabe14fbb91c99c11b5ac59badc988"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/7/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >SEO &amp; SEO</a
                            >
                          </p>
                        </div>
                        <div id="gv-field-1-25" class="cxl-job-company-name gv-field-1-25">
                          <p>Tomas &amp; Tomas</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>Gdansk, G<br />Poland</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated gv-field-1-date_created"
                        >
                          <span class="gv-field-label">Date posted:</span>
                          <p>1 week ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a class="button cxl-apply-for-job" href="www.google.com"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                        <div id="gv-field-1-custom" class="cxl-job-expand gv-field-1-custom">
                          <p>
                            <span>Chevron</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>job description</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a class="button cxl-apply-for-job" href="www.google.com"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/7/?edit=f517319459&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="gv-field-1-52">
                          <span class="gv-field-label">Expires at</span>2021-02-18 08:30:22
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div id="gv_list_6" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2F1c9a94d6cf75838cf62.png&amp;form-id=1&amp;field-id=26&amp;hash=f5014ecd86708e25e674b262254e2a7fb83d8bbc67dd91277fcb13f1f6e7735f"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/6/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >job role 5</a
                            >
                          </p>
                        </div>
                        <div id="gv-field-1-25" class="cxl-job-company-name gv-field-1-25">
                          <p>billing_company</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>tallinn, T<br />Estonia</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated gv-field-1-date_created"
                        >
                          <span class="gv-field-label">Date posted:</span>
                          <p>1 week ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a class="button cxl-apply-for-job" href="www.google.com"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                        <div id="gv-field-1-custom" class="cxl-job-expand gv-field-1-custom">
                          <p>
                            <span>Chevron</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>description</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a class="button cxl-apply-for-job" href="www.google.com"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/6/?edit=92ed0c0d80&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="gv-field-1-52">
                          <span class="gv-field-label">Expires at</span>2021-02-20 06:45:22
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div id="gv_list_5" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2F1c9a94d6cf75838cf6.png&amp;form-id=1&amp;field-id=26&amp;hash=f028f4574b3ca943fe902c095b57e89cb83bb1cb49bf30874c892209c313f9ef"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/5/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >seo</a
                            >
                          </p>
                        </div>
                        <div id="gv-field-1-25" class="cxl-job-company-name gv-field-1-25">
                          <p>company name</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>riga, LV<br />Latvia</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated gv-field-1-date_created"
                        >
                          <span class="gv-field-label">Date posted:</span>
                          <p>1 week ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a class="button cxl-apply-for-job" href="www.url.com"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                        <div id="gv-field-1-custom" class="cxl-job-expand gv-field-1-custom">
                          <p>
                            <span>Chevron</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>description</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a class="button cxl-apply-for-job" href="www.url.com"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/5/?edit=f76a09c068&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="gv-field-1-52">
                          <span class="gv-field-label">Expires at</span>2021-02-18 06:53:05
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div id="gv_list_2" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2Fxolo.png&amp;form-id=1&amp;field-id=26&amp;hash=9319e7b2e90ed48c29ce0777170b36909754f85a56dc06e7787e9dbca987c3db"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/2/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >Growth Marketing Manager</a
                            >
                          </p>
                        </div>
                        <div id="gv-field-1-25" class="cxl-job-company-name gv-field-1-25">
                          <p>Xolo</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>Anywhere in the world<br />United States</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Contractor</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated gv-field-1-date_created"
                        >
                          <span class="gv-field-label">Date posted:</span>
                          <p>3 weeks ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a
                              class="button cxl-apply-for-job"
                              href="https://www.linkedin.com/jobs/view/2346274069"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                        <div id="gv-field-1-custom" class="cxl-job-expand gv-field-1-custom">
                          <p>
                            <span>Chevron</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>
                            As a Growth Marketing Manager at Xolo your responsibilities will range
                            from planning, implementing, analyzing and optimizing user acquisition
                            campaigns across digital channels.
                          </p>
                          <p>
                            To get things done, you will collaborate closely with our marketing,
                            product development and customer support teams. You will fit in our
                            startup - like setting if you are self driven, curious, collaborative,
                            take responsibility for your tasks and feel comfortable delivering
                            results in a fast paced environment.
                          </p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <a
                              class="button cxl-apply-for-job"
                              href="https://www.linkedin.com/jobs/view/2346274069"
                              ><br />
                              Apply now<br />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/2/?edit=b612fb3c27&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="gv-field-1-52">
                          <span class="gv-field-label">Expires at</span>2021-02-18 06:45:29
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>
              </cxl-vaadin-accordion>
            </div>
            <div class="gv-grid gv-widgets-footer">
              <div class="gv-grid-col-1-1 gv-left"></div>
              <div class="gv-grid-col-1-2 gv-left"></div>
              <div class="gv-grid-col-1-2 gv-right"></div>
            </div>

            <input type="hidden" class="gravityview-view-id" value="102" />
          </div>
        </article>
      </main>
    </div>
    <footer class="app-footer overflow-y-hidden font-secondary text-base">
      <div class="app-footer__meta py-4 px-8 border-0 border-t border-solid"></div>
    </footer>
  </cxl-app-layout>
`;
