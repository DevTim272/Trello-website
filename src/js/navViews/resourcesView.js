
 class ResourcesView {
   _markup = `
<div
  class="resources-menu nav-drop-down"
  id="resources-menu"
  aria-labelledby="resources-trigger"
  data-open="false"
>
  <div class="resources-menu__content">

    <!-- MAIN RESOURCES SECTION -->
    <section
      class="resources-menu__main"
      aria-labelledby="resources-heading"
    >
      <h2 class="resources-menu__heading" id="resources-heading">
        Learn &amp; connect
      </h2>

      <nav aria-label="Trello resources">
        <ul class="resources-menu__grid">

          <li>
            <a href="/guide" class="resources-menu__item">
              <span class="resources-menu__item-heading">
                Trello guide
              </span>

              <span class="resources-menu__description">
                Our easy to follow workflow guide will take you from
                project set-up to Trello expert in no time.
              </span>
            </a>
          </li>

          <li>
            <a href="/remote-work" class="resources-menu__item">
              <span class="resources-menu__item-heading">
                Remote work guide
              </span>

              <span class="resources-menu__description">
                The complete guide to setting up your team for
                remote work success.
              </span>
            </a>
          </li>

          <li>
            <a href="/webinars" class="resources-menu__item">
              <span class="resources-menu__item-heading">
                Webinars
              </span>

              <span class="resources-menu__description">
                Enjoy our free Trello webinars and become a
                productivity professional.
              </span>
            </a>
          </li>

          <li>
            <a href="/customers" class="resources-menu__item resources-menu__item--highlight">
              <span class="resources-menu__item-heading">
                Customer stories
              </span>

              <span class="resources-menu__description">
                See how businesses have adopted Trello as a vital
                part of their workflow.
              </span>
            </a>
          </li>

          <li>
            <a href="/developers" class="resources-menu__item">
              <span class="resources-menu__item-heading">
                Developers
              </span>

              <span class="resources-menu__description">
                The sky's the limit in what you can deliver to
                Trello users in your Power-Up!
              </span>
            </a>
          </li>

          <li>
            <a href="/help" class="resources-menu__item">
              <span class="resources-menu__item-heading">
                Help resources
              </span>

              <span class="resources-menu__description">
                Need help? Articles and FAQs to get you unstuck.
              </span>
            </a>
          </li>

        </ul>
      </nav>
    </section>

    <!-- BLOG SIDEBAR -->
    <aside
      class="resources-menu__aside"
      aria-labelledby="resources-aside-heading"
    >
      <h2
        class="resources-menu__aside-heading"
        id="resources-aside-heading"
      >
        Helping teams work better together
      </h2>

      <p class="resources-menu__aside-description">
        Discover Trello use cases, productivity tips, best practices
        for team collaboration, and expert remote work advice.
      </p>

      <a href="/blog" class="resources-menu__aside-button">
        Check out the Trello blog
      </a>
    </aside>

  </div>
</div>
`
}
export default new ResourcesView();