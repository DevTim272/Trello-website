class SolutionsView {
   _markup = `
   
<!-- SOLUTIONS NAVIGATION TRIGGER -->
<li class="header__nav-item">
  <button
    class="header__nav-button"
    type="button"
    id="solutions-trigger"
    aria-expanded="true"
    aria-controls="solutions-menu"
  >
    Solutions
    <i data-lucide="chevron-down" aria-hidden="true"></i>
  </button>
</li>

<!-- SOLUTIONS MEGA MENU -->
<div
  class="solutions-menu"
  id="solutions-menu"
  aria-labelledby="solutions-trigger"
>
  <div class="solutions-menu__content">

    <!-- MAIN SOLUTIONS SECTION -->
    <section
      class="solutions-menu__main"
      aria-labelledby="solutions-heading"
    >
      <h2 class="solutions-menu__heading" id="solutions-heading">
        Take a page out of these pre-built Trello playbooks designed for all teams
      </h2>

      <nav aria-label="Solutions by team">
        <ul class="solutions-menu__grid">

          <li>
            <a href="/teams/marketing" class="solutions-menu__item">
              <span class="solutions-menu__item-heading">
                <i data-lucide="megaphone" aria-hidden="true"></i>
                Marketing teams
              </span>

              <span class="solutions-menu__description">
                Whether launching a new product, campaign, or creating
                content, Trello helps marketing teams succeed.
              </span>
            </a>
          </li>

          <li>
            <a href="/teams/product-management" class="solutions-menu__item">
              <span class="solutions-menu__item-heading">
                <i data-lucide="layout-dashboard" aria-hidden="true"></i>
                Product management
              </span>

              <span class="solutions-menu__description">
                Use Trello's management boards and roadmap features to
                simplify complex projects and processes.
              </span>
            </a>
          </li>

          <li>
            <a href="/teams/engineering" class="solutions-menu__item">
              <span class="solutions-menu__item-heading">
                <i data-lucide="terminal-square" aria-hidden="true"></i>
                Engineering teams
              </span>

              <span class="solutions-menu__description">
                Ship more code, faster, and give your developers the
                freedom to be more agile with Trello.
              </span>
            </a>
          </li>

          <li>
            <a href="/teams/design" class="solutions-menu__item">
              <span class="solutions-menu__item-heading">
                <i data-lucide="pencil" aria-hidden="true"></i>
                Design teams
              </span>

              <span class="solutions-menu__description">
                Empower your design teams by using Trello to streamline
                creative requests and promote more fluid cross-team
                collaboration.
              </span>
            </a>
          </li>

          <li>
            <a href="/teams/startups" class="solutions-menu__item">
              <span class="solutions-menu__item-heading">
                <i data-lucide="calendar-days" aria-hidden="true"></i>
                Startups
              </span>

              <span class="solutions-menu__description">
                From hitting revenue goals to managing workflows,
                small businesses thrive with Trello.
              </span>
            </a>
          </li>

          <li>
            <a href="/teams/remote" class="solutions-menu__item">
              <span class="solutions-menu__item-heading">
                <i data-lucide="globe" aria-hidden="true"></i>
                Remote teams
              </span>

              <span class="solutions-menu__description">
                Keep your remote team connected and motivated, no matter
                where they're located around the world.
              </span>
            </a>
          </li>

        </ul>
      </nav>

      <a href="/teams" class="solutions-menu__all-link">
        See all teams
        <i data-lucide="arrow-right" aria-hidden="true"></i>
      </a>
    </section>

    <!-- PRODUCT IN ACTION SIDEBAR -->
    <aside
      class="solutions-menu__aside"
      aria-labelledby="solutions-use-cases-heading"
    >
      <h2
        class="solutions-menu__aside-heading"
        id="solutions-use-cases-heading"
      >
        Our product in action
      </h2>

      <nav aria-label="Trello use cases">
        <ul class="solutions-menu__use-cases">

          <li>
            <a
              href="/use-cases/task-management"
              class="solutions-menu__use-case"
            >
              <span class="solutions-menu__use-case-title">
                Use case: Task management
              </span>

              <span class="solutions-menu__use-case-description">
                Track progress of tasks in one convenient place with
                a visual layout that adds to-do to your to-do list.
              </span>
            </a>
          </li>

          <li>
            <a
              href="/use-cases/resource-hub"
              class="solutions-menu__use-case"
            >
              <span class="solutions-menu__use-case-title">
                Use case: Resource hub
              </span>

              <span class="solutions-menu__use-case-description">
                Save hours when you give teams a well-designed hub
                to find information easily and quickly.
              </span>
            </a>
          </li>

          <li>
            <a
              href="/use-cases/project-management"
              class="solutions-menu__use-case"
            >
              <span class="solutions-menu__use-case-title">
                Use case: Project management
              </span>

              <span class="solutions-menu__use-case-description">
                Keep projects organized, deadlines on track, and
                teammates aligned with Trello.
              </span>
            </a>
          </li>

        </ul>
      </nav>

      <a href="/use-cases" class="solutions-menu__all-link">
        See all use cases
        <i data-lucide="arrow-right" aria-hidden="true"></i>
      </a>

    </aside>

  </div>
</div>

`

}
export default new SolutionsView()