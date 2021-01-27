import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';

export const CXLVaadinAccordionJobsListing = () => html`
  <cxl-app-layout class="cxl-app-layout" id="container" layout="1c-w" scroll="document" wide="">
    <cxl-marketing-nav
      class="menu menu--primary headroom headroom--not-bottom headroom--top headroom--pinned"
      slot="header"
      style="top: 32px;"
      wide=""
    >
      <template id="cxl-marketing-nav-search-form-template">
        <vaadin-context-menu-item class="menu-item-search">
          <form
            action="https://jobs.cxl.co/"
            class="search-form"
            id="search-form"
            method="get"
            role="search"
          >
            <label for="search-input">Search CXL Jobs:</label>
            <input
              class="search-field"
              id="search-input"
              name="s"
              placeholder="Search …"
              type="search"
              value=""
            />
            <vaadin-button
              aria-label="Search"
              class="search-submit"
              onclick="document.getElementById('search-form').submit();"
              theme="icon"
              type="submit"
            >
              <iron-icon icon="lumo:angle-right"></iron-icon>
            </vaadin-button>
          </form>
        </vaadin-context-menu-item>
      </template>

      <vaadin-tabs
        aria-orientation="horizontal"
        class="menu-items"
        id="menu-global-items"
        orientation="horizontal"
        role="tablist"
        selected="0"
        theme="cxl-marketing-nav"
        wide="true"
      >
        <vaadin-tab
          aria-selected="true"
          class="menu-item-wide menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-120 menu__item menu__item--current menu-item-wide"
          id="menu-item-120"
          orientation="horizontal"
          role="tab"
          selected=""
          tabindex="0"
          theme="cxl-marketing-nav"
          ><a aria-current="page" href="https://jobs.cxl.co">
            <iron-icon
              icon="cxl:logo"
              style="width: var(--lumo-icon-size-l, 48px);"
            ></iron-icon> </a
        ></vaadin-tab>
        <vaadin-tab
          aria-selected="false"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-121 menu__item "
          id="menu-item-121"
          orientation="horizontal"
          role="tab"
          tabindex="-1"
          theme="cxl-marketing-nav"
          ><a href="https://cxl.com/institute/">Institute</a></vaadin-tab
        >
        <vaadin-tab
          aria-selected="false"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-122 menu__item "
          id="menu-item-122"
          orientation="horizontal"
          role="tab"
          tabindex="-1"
          theme="cxl-marketing-nav"
          ><a href="https://cxl.com/agency/">Conversion optimization services</a></vaadin-tab
        >
        <vaadin-tab
          aria-selected="false"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-123 menu__item "
          id="menu-item-123"
          orientation="horizontal"
          role="tab"
          tabindex="-1"
          theme="cxl-marketing-nav"
          ><a href="https://cxl.com/agency/case-studies/">Agency case studies</a></vaadin-tab
        >
        <vaadin-tab
          aria-selected="false"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-124 menu__item "
          id="menu-item-124"
          orientation="horizontal"
          role="tab"
          tabindex="-1"
          theme="cxl-marketing-nav"
          ><a href="https://cxl.com/blog/">Blog</a></vaadin-tab
        >
        <vaadin-tab
          aria-selected="false"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-125 menu__item "
          id="menu-item-125"
          orientation="horizontal"
          role="tab"
          tabindex="-1"
          theme="cxl-marketing-nav"
          ><a href="https://cxl.com/live/"
            >CXL Live 2020
            <iron-icon icon="cxl:live" style="color: var(--lumo-primary-color)"></iron-icon> </a
        ></vaadin-tab>
        <vaadin-tab
          aria-selected="false"
          class="menu-item-split-nav menu-item-wide menu-item-search menu-item menu-item-type-custom menu-item-object-custom menu-item-126 menu__item menu-item-split-nav menu-item-wide menu-item-search"
          id="menu-item-126"
          orientation="horizontal"
          role="tab"
          tabindex="-1"
          theme="cxl-marketing-nav"
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
        aria-orientation="horizontal"
        class="menu-items"
        id="menu-primary-items"
        orientation="horizontal"
        role="tablist"
        selected="0"
        theme="cxl-marketing-nav"
        wide="true"
      >
        <vaadin-tab
          aria-selected="true"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-117 menu__item menu__item--current "
          id="menu-item-117"
          orientation="horizontal"
          role="tab"
          selected=""
          tabindex="0"
          theme="cxl-marketing-nav"
          ><a aria-current="page" href="https://jobs.cxl.co/">Jobs list</a></vaadin-tab
        >
        <vaadin-tab
          aria-selected="false"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119 menu__item "
          id="menu-item-119"
          orientation="horizontal"
          role="tab"
          tabindex="-1"
          theme="cxl-marketing-nav"
          ><a href="https://jobs.cxl.co/post-a-job/">Post a Job</a></vaadin-tab
        >
        <vaadin-tab
          aria-selected="false"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-118 menu__item "
          id="menu-item-118"
          orientation="horizontal"
          role="tab"
          tabindex="-1"
          theme="cxl-marketing-nav"
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
      <main class="app-main mx-auto mb-12 text-lg leading-loose" id="main">
        <article class="entry post-6 page type-page status-publish hentry" id="post-6">
          <header class="entry__header mb-8 text-center">
            <h1 class="entry__title md:max-w-4xl mx-8 sm:mx-auto my-0">Jobs list</h1>
          </header>

          <div class="entry__content o-content-width flow-root">
            <div class="gv-grid gv-widgets-header">
              <div class="gv-grid-col-1-1 gv-left">
                <form
                  action="https://jobs.cxl.co/"
                  class="gv-widget-search gv-search-horizontal"
                  data-viewid="102"
                  method="get"
                >
                  <div class="gv-search-box gv-search-field-text gv-search-field-search_all">
                    <div class="gv-search">
                      <label for="gv_search_102">Search Entries:</label>
                      <p><input id="gv_search_102" name="gv_search" type="search" value="" /></p>
                    </div>
                  </div>
                  <div class="gv-search-box gv-search-field-select">
                    <label for="search-box-filter_41_6">Country</label>
                    <p>
                      <select id="search-box-filter_41_6" name="filter_41_6">
                        <option selected="selected" value="">—</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Poland">Poland</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="United States">United States</option>
                      </select>
                    </p>
                  </div>
                  <div class="gv-search-box gv-search-field-select">
                    <label for="search-box-filter_7">Employment type</label>
                    <p>
                      <select id="search-box-filter_7" name="filter_7">
                        <option selected="selected" value="">—</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Full-time remote">Full-time remote</option>
                        <option value="Contractor">Contractor</option>
                      </select>
                    </p>
                  </div>
                  <div class="gv-search-box gv-search-box-submit">
                    <vaadin-button
                      onclick="window.location.href='/'"
                      role="button"
                      style="cursor: pointer;"
                      tabindex="0"
                      theme="button outlined gv-search-clear"
                      >Clear filters
                    </vaadin-button>
                    <input name="mode" type="hidden" value="all" />
                    <vaadin-button
                      onclick="document.querySelector('form[data-viewid=&quot;102&quot;]').submit()"
                      role="button"
                      style="cursor: pointer;"
                      tabindex="0"
                      theme="button primary"
                      type="submit"
                    >
                      <iron-icon icon="lumo:angle-right" slot="suffix"></iron-icon>
                      Search
                    </vaadin-button>
                  </div>
                </form>
              </div>
              <div class="gv-grid-col-1-2 gv-left">
                <div class="gv-widget-pagination "><p>Displaying 1 - 7 of 7</p></div>
              </div>
              <div class="gv-grid-col-1-2 gv-right"></div>
            </div>

            <div
              class="gv-list-container gv-list-view gv-list-multiple-container gv-container gv-container-102"
            >
              <cxl-vaadin-accordion opened="0" theme="cxl-jobs-listing">
                <div class="gv-list-view" id="gv_list_12">
                  <vaadin-accordion-panel tabindex="0" theme="cxl-jobs-listing reverse">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F02%2F1c9a94d6cf75838cf6.png&amp;form-id=1&amp;field-id=26&amp;hash=2f8dd0df2879d708e4f959ae8804d0e57135ad07bec041d44ae1a09257d740bc"
                            width="250"
                          />
                        </h3>
                        <div class="cxl-job-role gv-field-1-5" id="gv-field-1-5">
                          <span class="gv-field-label">RemoteOK</span>
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/12/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >software tester</a
                            >
                          </p>
                        </div>
                        <div class="cxl-job-location gv-field-1-41" id="gv-field-1-41">
                          <p>klaipeda<br />Lithuania</p>
                        </div>
                        <div class="cxl-job-type gv-field-1-7" id="gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          class="cxl-job-date-updated gv-field-1-date_created"
                          id="gv-field-1-date_created"
                        >
                          <p>2 weeks ago</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div class="cxl-job-description gv-field-1-11" id="gv-field-1-11">
                          <h2 id="tldr">TLDR</h2>
                          <p>&nbsp;</p>
                          <h1 id="whatyoushouldknowaboutourcompanywpmedia">
                            What You Should Know About Our Company: WP Media
                          </h1>
                          <p>
                            Founded in 2014 in the beautiful Lyon, France,&nbsp;<a
                              href="http://wp-media.me/"
                              >WP Media</a
                            >&nbsp;is an equal opportunity employer with a distributed team of +35
                            teammates living around the world.
                          </p>
                          <p>
                            <img
                              alt="team"
                              src="https://lh5.googleusercontent.com/mnGfvJu-RQt2Z3cL8WRaxtuuH3Fu1xZc9hLoceC5Toj6Qp4zzoo38BPDc9JgMZi8maEp2sRmGOjHcUc58Jrdup8ECEqCnoOYmpNKzOaNPW3Oyxz94E8AMyixp4ObeWgomOct1jWI"
                            />
                          </p>
                          <p>
                            Our plugin makes sites go at the speed of light in just a few clicks. We
                            love to make our customers’ lives easier, which is why WP Rocket applies
                            key best web performance practices right upon activation.
                          </p>
                          <h1 id="dowesharethesamevalues">Do We Share the Same Values?</h1>
                          <p>
                            It's a great opportunity if you love open source, dev tools, systems
                            programming. Join our well-funded remote-first&nbsp;<a
                              href="http://dvc.org/"
                              >DVC</a
                            >&nbsp;team to build developer tools to see how your code is used by
                            thousands of developers every day! If you don't mind Python.
                          </p>
                          <hr />
                          <h2 id="aboutus">About us</h2>
                          <p>
                            We are the company behind very popular open-source tools for ML
                            workflow-&nbsp;<a href="https://dvc.org/">DVC</a>&nbsp;and&nbsp;<a
                              href="https://cml.dev/"
                              >CML</a
                            >. We're a well-funded, remote-first team on a missing to solve the
                            complexity of managing datasets, ML infrastructure, ML models lifecycle
                            management.
                          </p>
                          <p><strong>Learn more:</strong></p>
                          <ul>
                            <li>
                              Check out our&nbsp;<a href="https://github.com/iterative/dvc"
                                >GitHub</a
                              >
                            </li>
                            <li>
                              Check out the&nbsp;<a href="https://dvc.org/">Website</a
                              >&nbsp;and&nbsp;<a href="https://dvc.org/doc">Docs</a>
                            </li>
                            <li>
                              Finally, take a look at our&nbsp;<a href="https://dvc.org/blog"
                                >Blog</a
                              >&nbsp;and&nbsp;<a
                                href="https://www.youtube.com/channel/UC37rp97Go-xIX3aNFVHhXfQ"
                                >YouTube</a
                              >
                            </li>
                          </ul>
                          <p><strong>What we offer:</strong></p>
                          <ul>
                            <li>Team is distributed remotely worldwide.</li>
                            <li>You will be one of the first employees for the DVC core team.</li>
                            <li>Highly competitive salary, stock options, and bonuses.</li>
                            <li>
                              Open source-first company- you work will be visible and will be used
                              by thousands developers every day! This feels great! Check out our
                              Discord and GitHub.
                            </li>
                            <li>
                              Founders and team with strong engineering, data science, and open
                              source experience. We all code and understand engineering first-hand.
                            </li>
                            <li>
                              Engineering team is involved into product discussions and planning. We
                              do it openly via&nbsp;<a href="https://github.com/iterative/dvc"
                                >Github</a
                              >&nbsp;or&nbsp;<a href="http://dvc.org/chat">Discord chat</a>.
                            </li>
                            <li>
                              Besides building the product we participate in conferences (PyCon,
                              PyData, O'Reilly AI, etc). We encourage and support the team in giving
                              talks, writing&nbsp;<a href="https://dvc.org/blog">blog-posts</a>, and
                              other activities.
                            </li>
                            <li>Well-defined process that we all participate in improving.</li>
                          </ul>
                          <h2 id="aboutyou">About you</h2>
                          <p>
                            -&nbsp;<strong>Strong Python knowledge</strong>&nbsp;and excellent
                            coding culture (standards, unit test, docs, etc) are required.
                            Alternatively very strong experience with languages like Go, C + some
                            experience with Python).
                          </p>
                          <p>
                            -&nbsp;<strong>Remote work self-discipline.</strong>&nbsp;A lot of our
                            processes are built on trust- we don't like and don't have time to
                            micro-manage
                          </p>
                          <p>
                            -&nbsp;<strong>Excellent communication skills</strong>&nbsp;- clear,
                            constructive, and respectful dialog with other team members, community
                          </p>
                          <p>
                            -&nbsp;<strong>Ability to write</strong>&nbsp;technical docs, blogs.
                            Team is responsible to keep basic docs up to date
                          </p>
                          <p>
                            -&nbsp;<strong>DVC core team</strong>&nbsp;is 4 engineers, you will one
                            of the earliest employees and we expect you to&nbsp;<strong
                              >drive major parts of the product</strong
                            >
                          </p>
                          <h1 id="location">Location</h1>
                          <p>🌏 Worldwide</p>
                          <p>
                            <strong
                              >Please note that this is a joke, no such position exists and it does
                              not constitute investment advice.</strong
                            >
                          </p>
                          <p>🚀🚀🚀</p>
                          <p>
                            WE SEEK ALPHA AND MASTER BETA!!!!11 La-li-lu-le-lo. Are funds SAFU or
                            SNAFU? Is Bitcoin your safeword?
                          </p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                          id="gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/12/?edit=8061da5b53&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div class="cxl-job-expiry-date gv-field-1-52" id="gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>2 weeks
                        </div>
                        <div class="gv-field-1-entry_link" id="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/12/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div class="gv-list-view" id="gv_list_10">
                  <vaadin-accordion-panel tabindex="0" theme="cxl-jobs-listing reverse">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F02%2Flogo.png&amp;form-id=1&amp;field-id=26&amp;hash=6241cf213b72648f4d474d5c5984c553889e3cabba1a4d17b16b7a869b4bfb72"
                            width="250"
                          />
                        </h3>
                        <div class="cxl-job-role gv-field-1-5" id="gv-field-1-5">
                          <span class="gv-field-label">The World</span>
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/10/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >Software engineer</a
                            >
                          </p>
                        </div>
                        <div class="cxl-job-location gv-field-1-41" id="gv-field-1-41">
                          <p>Austin, Texas<br />United States</p>
                        </div>
                        <div class="cxl-job-type gv-field-1-7" id="gv-field-1-7">
                          <p>Contractor</p>
                        </div>
                        <div
                          class="cxl-job-date-updated gv-field-1-date_created"
                          id="gv-field-1-date_created"
                        >
                          <p>2 weeks ago</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div class="cxl-job-description gv-field-1-11" id="gv-field-1-11">
                          <p>
                            We are a remote startup (headquartered in Canada) building a smart,
                            curious, and driven team that’s making software to help sales reps sell
                            better.
                          </p>
                          <p>
                            Prospect is a lead generation app that helps you find contact data right
                            inside your browser in real-time. The best sales teams from the top tech
                            companies in the world use Prospect to crush their sales targets.
                          </p>
                          <p><strong>MORE ABOUT US</strong></p>
                          <p>We are currently a team of 11 people -- you will be #12 🙂</p>
                          <p>
                            We are self-funded and profitable (no VCs or investors). We did this
                            because we want to do what’s best for our team and customers.
                          </p>
                          <p>
                            We have sane working hours (~8 hours/day), don’t work weekends, and take
                            ample time off. We don’t have any “managers” and we rarely do any
                            internal meetings.
                          </p>
                          <p><strong>ABOUT YOU</strong></p>
                          <p>
                            You enjoy writing beautiful code. You care not just about whether the
                            code works, but you think deeply about how well it performs, and how it
                            will be understood by future developers.
                          </p>
                          <p>
                            You like shipping things. You realize that building excellent products
                            is a marathon, not a sprint, and regularly make improvements in
                            iterations.
                          </p>
                          <p>
                            You are an excellent communicator. You realize that working remotely
                            requires thoughtful communication and you do so through great written
                            communication.
                          </p>
                          <p>
                            You self-manage. You enjoy taking a goal and figuring out how to ship it
                            without heavy direction and regular check-ins.
                          </p>
                          <p>
                            You are product and customer-centric. Whether it is a bug fix, perf
                            improvement, or a new feature, you realize that every line of code is an
                            opportunity to make a user’s experience better.
                          </p>
                          <p><strong>OUR ENGINEERING TEAM RIGHT NOW</strong></p>
                          <p>
                            We are currently a team of 7 engineers. Our roles are divided based on
                            the projects we work on.
                          </p>
                          <p>
                            We work in 4-week long development cycles in which we focus on adding
                            new features, fixing bugs, or making improvements. After each cycle, we
                            have a 2-week cool-off which we use to work on anything we would like to
                            as well as plan for the next cycle.
                          </p>
                          <p>Our stack is currently:</p>
                          <ul>
                            <li>Backend: Java 8 on Spring and Dropwizard</li>
                            <li>Cloud: A mix of AWS and Google Cloud</li>
                            <li>Database: PostgreSQL</li>
                            <li>Frontend: ES6, TypeScript, React, and Redux</li>
                            <li>Internal: GitLab for CI/CD and issue tracking</li>
                          </ul>
                          <p><strong>PROJECTS YOU WILL WORK ON</strong></p>
                          <p>
                            You will be working on our backend which is a REST API written using
                            modern Java practices.
                          </p>
                          <p>
                            This is a high impact role. We are looking for someone to take real
                            ownership of one or two core features within the first year. You will
                            own some extremely important parts of our application that serve
                            thousands of customers.
                          </p>
                          <p>
                            We prioritize our projects based on what customers are requesting the
                            most. Some things that you might work on include:
                          </p>
                          <ul>
                            <li>
                              Data: Scale our real-time data discovery engine to process 5x-10x more
                              volume
                            </li>
                            <li>
                              DevOps: Improve our CI pipeline by adding static analysis and
                              improving tests
                            </li>
                            <li>
                              Integrations: Add features to and revamp our Salesforce integration
                            </li>
                            <li>
                              Monitoring: Add metrics and real-time alerts for core application
                              functionality
                            </li>
                            <li>
                              Upgrades: Migrate to the latest versions of core dependencies, such as
                              PostgreSQL
                            </li>
                          </ul>
                          <p><strong>MUST HAVES</strong></p>
                          <ul>
                            <li>3-5+ years of Java programming experience</li>
                            <li>Experience with PostgreSQL and handling large amounts of data</li>
                            <li>
                              We don’t require a degree but you should have demonstrated the ability
                              to learn new things quickly (either self-learned, freelance projects,
                              or from school)
                            </li>
                          </ul>
                          <p><strong>BONUS NICE-TO-HAVES</strong></p>
                          <ul>
                            <li>Past remote work experience</li>
                            <li>Worked at a tech startup or a small company before</li>
                            <li>
                              Experience with modern infrastructure tools such as using Terraform
                            </li>
                            <li>
                              Experience with modern Java frameworks without the enterprise bloat
                            </li>
                            <li>
                              A knack for taking a metrics-driven approach using Grafana or similar
                            </li>
                          </ul>
                          <p><strong>COMPENSATION AND PERKS</strong></p>
                          <ul>
                            <li>Salary: $90,000 - $120,000 Canadian dollars / year</li>
                            <li>$1,500 annual self-continued learning budget</li>
                            <li>
                              $1,000+ annual travel spending allowance (money to spend during your
                              vacation)
                            </li>
                            <li>4 weeks paid time off</li>
                            <li>Fridays off every July and August (enjoy the summer! ☀️)</li>
                            <li>
                              Benefits (health, dental, etc) through our company HSA (for people
                              living in Canada)<a
                                href="http://www.text.com"
                                rel="noopener"
                                target="_blank"
                                >Test</a
                              >
                            </li>
                          </ul>
                          <h1 id="salary">Salary</h1>
                          <p>$90,000 — $120,000</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                          id="gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/10/?edit=1b8387e330&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div class="cxl-job-expiry-date gv-field-1-52" id="gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>2 weeks
                        </div>
                        <div class="gv-field-1-entry_link" id="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/10/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div class="gv-list-view" id="gv_list_9">
                  <vaadin-accordion-panel tabindex="0" theme="cxl-jobs-listing reverse">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F02%2Foperation.png&amp;form-id=1&amp;field-id=26&amp;hash=5e88f92d8998a042cd9ad02fa2cf6b62a951ec6930a2625e4a6b6752ecb9ed71"
                            width="250"
                          />
                        </h3>
                        <div class="cxl-job-role gv-field-1-5" id="gv-field-1-5">
                          <span class="gv-field-label">Operations</span>
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/9/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >Developer</a
                            >
                          </p>
                        </div>
                        <div class="cxl-job-location gv-field-1-41" id="gv-field-1-41">
                          <p>Vilnius, LT<br />Lithuania</p>
                        </div>
                        <div class="cxl-job-type gv-field-1-7" id="gv-field-1-7">
                          <p>Full-time remote</p>
                        </div>
                        <div
                          class="cxl-job-date-updated gv-field-1-date_created"
                          id="gv-field-1-date_created"
                        >
                          <p>2 weeks ago</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div class="cxl-job-description gv-field-1-11" id="gv-field-1-11">
                          <p>
                            About Us: We are an established rapidly growing SaaS company solving
                            complex issues for dealers to simplify their lives. We are looking for a
                            Junior - Mid level PHP developer who is passionate and motived to join
                            our team.
                          </p>
                          <p>
                            About You:. You bring 5+ years of experience as a software developer
                            with a proven track record of building SaaS web applications with
                            complex logic Strong knowledge of modern web frameworks and
                            technologies, for example: JavaScript/Angular PHP/Symfony/Laravel/Zend
                            Familiarity with Redis, MySQL, ElasticSearch Experience in end to end
                            development from server setup to deployment (Linux, Docker)a plus
                            Curiosity and an interest in continuously developing yourself and adding
                            new technologies to your knowledge base If you have a degree in maths,
                            physics or computer science we consider this a plus.
                          </p>
                          <p>
                            Competitive pay based on experience / Remote ok / Must be North America
                            based or willing to work North American business hours. Base plus
                            ability to make bonus | Posted by: OperateBeyond.com
                          </p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                          id="gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/9/?edit=29995e31a3&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div class="cxl-job-expiry-date gv-field-1-52" id="gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>2 weeks
                        </div>
                        <div class="gv-field-1-entry_link" id="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/9/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div class="gv-list-view" id="gv_list_8">
                  <vaadin-accordion-panel tabindex="0" theme="cxl-jobs-listing reverse">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2F368px-Google_2015_logo.svg.png&amp;form-id=1&amp;field-id=26&amp;hash=8e51092706ed0910ce209dce0c16f65b60a21c39cb9a32aaa225643757707fdf"
                            width="250"
                          />
                        </h3>
                        <div class="cxl-job-role gv-field-1-5" id="gv-field-1-5">
                          <span class="gv-field-label">Google</span>
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/8/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >Content marketer</a
                            >
                          </p>
                        </div>
                        <div class="cxl-job-location gv-field-1-41" id="gv-field-1-41">
                          <p>Glasgow<br />United Kingdom</p>
                        </div>
                        <div class="cxl-job-type gv-field-1-7" id="gv-field-1-7">
                          <p>Full-time remote</p>
                        </div>
                        <div
                          class="cxl-job-date-updated gv-field-1-date_created"
                          id="gv-field-1-date_created"
                        >
                          <p>4 weeks ago</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='https://grnh.se/b1e1dcd11us'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div class="cxl-job-description gv-field-1-11" id="gv-field-1-11">
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
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='https://grnh.se/b1e1dcd11us'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                          id="gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/8/?edit=d9e0ebf8a0&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div class="cxl-job-expiry-date gv-field-1-52" id="gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>4 days
                        </div>
                        <div class="gv-field-1-entry_link" id="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/8/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div class="gv-list-view" id="gv_list_7">
                  <vaadin-accordion-panel tabindex="0" theme="cxl-jobs-listing reverse">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2F1c9a94d6cf75838cf63.png&amp;form-id=1&amp;field-id=26&amp;hash=bef7031346a53e865b3fc52345363bbfd5aabe14fbb91c99c11b5ac59badc988"
                            width="250"
                          />
                        </h3>
                        <div class="cxl-job-role gv-field-1-5" id="gv-field-1-5">
                          <span class="gv-field-label">Tomas &amp; Tomas</span>
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/7/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >SEO &amp; SEO</a
                            >
                          </p>
                        </div>
                        <div class="cxl-job-location gv-field-1-41" id="gv-field-1-41">
                          <p>Gdansk, G<br />Poland</p>
                        </div>
                        <div class="cxl-job-type gv-field-1-7" id="gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          class="cxl-job-date-updated gv-field-1-date_created"
                          id="gv-field-1-date_created"
                        >
                          <p>4 weeks ago</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div class="cxl-job-description gv-field-1-11" id="gv-field-1-11">
                          <p>job description</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                          id="gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/7/?edit=8814a439bb&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div class="cxl-job-expiry-date gv-field-1-52" id="gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>2 days
                        </div>
                        <div class="gv-field-1-entry_link" id="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/7/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div class="gv-list-view" id="gv_list_6">
                  <vaadin-accordion-panel tabindex="0" theme="cxl-jobs-listing reverse">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2F1c9a94d6cf75838cf62.png&amp;form-id=1&amp;field-id=26&amp;hash=f5014ecd86708e25e674b262254e2a7fb83d8bbc67dd91277fcb13f1f6e7735f"
                            width="250"
                          />
                        </h3>
                        <div class="cxl-job-role gv-field-1-5" id="gv-field-1-5">
                          <span class="gv-field-label">billing_company</span>
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/6/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >job role 5</a
                            >
                          </p>
                        </div>
                        <div class="cxl-job-location gv-field-1-41" id="gv-field-1-41">
                          <p>tallinn, T<br />Estonia</p>
                        </div>
                        <div class="cxl-job-type gv-field-1-7" id="gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          class="cxl-job-date-updated gv-field-1-date_created"
                          id="gv-field-1-date_created"
                        >
                          <p>4 weeks ago</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div class="cxl-job-description gv-field-1-11" id="gv-field-1-11">
                          <p>description</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.google.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                          id="gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/6/?edit=a7b2fc18ba&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div class="cxl-job-expiry-date gv-field-1-52" id="gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>4 days
                        </div>
                        <div class="gv-field-1-entry_link" id="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/6/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div class="gv-list-view" id="gv_list_5">
                  <vaadin-accordion-panel tabindex="0" theme="cxl-jobs-listing reverse">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F01%2F1c9a94d6cf75838cf6.png&amp;form-id=1&amp;field-id=26&amp;hash=f028f4574b3ca943fe902c095b57e89cb83bb1cb49bf30874c892209c313f9ef"
                            width="250"
                          />
                        </h3>
                        <div class="cxl-job-role gv-field-1-5" id="gv-field-1-5">
                          <span class="gv-field-label">company name</span>
                          <p>
                            <a
                              href="https://jobs.cxl.co/entry/5/"
                              rel="noopener noreferrer"
                              target="_blank"
                              >seo</a
                            >
                          </p>
                        </div>
                        <div class="cxl-job-location gv-field-1-41" id="gv-field-1-41">
                          <p>riga, LV<br />Latvia</p>
                        </div>
                        <div class="cxl-job-type gv-field-1-7" id="gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          class="cxl-job-date-updated gv-field-1-date_created"
                          id="gv-field-1-date_created"
                        >
                          <p>4 weeks ago</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.url.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div class="cxl-job-description gv-field-1-11" id="gv-field-1-11">
                          <p>description</p>
                        </div>
                        <div
                          class="cxl-apply-for-job-container gv-field-1-custom"
                          id="gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              onclick="window.location.href='www.url.com'"
                              role="button"
                              style="cursor: pointer;"
                              tabindex="0"
                              theme="primary cxl-apply-for-job"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                          id="gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/5/?edit=0dd9020330&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div class="cxl-job-expiry-date gv-field-1-52" id="gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>2 days
                        </div>
                        <div class="gv-field-1-entry_link" id="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/5/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
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

            <input class="gravityview-view-id" type="hidden" value="102" />
          </div>
        </article>
      </main>
    </div>
    <footer class="app-footer overflow-y-hidden font-secondary text-base">
      <div class="app-footer__meta py-4 px-8 border-0 border-t border-solid"></div>
    </footer>
  </cxl-app-layout>
`;
