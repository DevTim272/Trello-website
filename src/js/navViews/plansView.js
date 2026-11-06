class plansView {
   _markup = `
<!-- PLANS MEGA MENU -->
<div class="plans-menu plans-menu--open" aria-label="Plans menu">

  <div class="plans-menu__content">

    <div class="plans-menu__main">

      <nav class="plans-menu__grid" aria-label="Trello plans">

        <!-- Standard -->
        <a href="/pricing" class="plans-menu__item">
          <span class="plans-menu__item-heading">
            <i data-lucide="lightbulb" aria-hidden="true"></i>
            Standard
          </span>

          <span class="plans-menu__description">
            For teams that need to manage more work and scale collaboration.
          </span>
        </a>

        <!-- Premium -->
        <a href="/pricing/premium" class="plans-menu__item">
          <span class="plans-menu__item-heading">
            <i data-lucide="star" aria-hidden="true"></i>
            Premium
          </span>

          <span class="plans-menu__description">
            Best for teams up to 100 that need to track multiple projects
            and visualize work in a variety of ways.
          </span>
        </a>

        <!-- Enterprise -->
        <a href="/pricing/enterprise" class="plans-menu__item">
          <span class="plans-menu__item-heading">
            <i data-lucide="building-2" aria-hidden="true"></i>
            Enterprise
          </span>

          <span class="plans-menu__description">
            Everything your enterprise teams and admins need to manage
            projects.
          </span>
        </a>

      </nav>

      <!-- Free plan -->
      <div class="plans-menu__free-plan">

        <div class="plans-menu__free-info">
          <span class="plans-menu__item-heading">
            <i data-lucide="zap" aria-hidden="true"></i>
            Free plan
          </span>

          <p class="plans-menu__description">
            For individuals or small teams looking to keep work organized.
          </p>
        </div>

        <a href="/tour" class="plans-menu__tour-button">
          Take a tour of Trello
        </a>

      </div>

    </div>

    <!-- Compare plans panel -->
    <aside class="plans-menu__aside">

      <h2 class="plans-menu__aside-heading">
        Compare plans &amp; pricing
      </h2>

      <p class="plans-menu__aside-text">
        Whether you’re a team of 2 or 2,000, Trello’s flexible pricing
        model means you only pay for what you need.
      </p>

      <a href="/pricing" class="plans-menu__aside-button">
        View Trello pricing
      </a>

    </aside>

  </div>
</div>
 `
}
export default new plansView()