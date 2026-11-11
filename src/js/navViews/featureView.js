import featureView from "../featureView"


 class NavFeatureView{
    _markup = `
<div class="features-menu features-menu--open nav-drop-down" aria-label="Features menu" data-open="false">

  <div class="features-menu__content">

    <div class="features-menu__main">
      <h2 class="features-menu__heading">
        Explore the features that help your team succeed
      </h2>

      <nav class="features-menu__grid" aria-label="Trello features">

        <a href="/features/inbox" class="features-menu__item">
          <span class="features-menu__item-heading">
            <i data-lucide="inbox" aria-hidden="true"></i>
            Inbox
          </span>
          <span class="features-menu__description">
            Capture every vital detail from emails, Slack, and more directly
            into your Trello Inbox.
          </span>
        </a>

        <a href="/features/planner" class="features-menu__item">
          <span class="features-menu__item-heading">
            <i data-lucide="calendar-days" aria-hidden="true"></i>
            Planner
          </span>
          <span class="features-menu__description">
            Sync your calendar and allocate focused time slots to boost
            productivity.
          </span>
        </a>

        <a href="/features/automation" class="features-menu__item">
          <span class="features-menu__item-heading">
            <i data-lucide="zap" aria-hidden="true"></i>
            Automation
          </span>
          <span class="features-menu__description">
            Automate tasks and workflows with Trello.
          </span>
        </a>

        <a href="/features/power-ups" class="features-menu__item">
          <span class="features-menu__item-heading">
            <i data-lucide="plug" aria-hidden="true"></i>
            Power-Ups
          </span>
          <span class="features-menu__description">
            Power up your teams by linking their favorite tools with Trello
            plugins.
          </span>
        </a>

        <a href="/templates" class="features-menu__item">
          <span class="features-menu__item-heading">
            <i data-lucide="copy" aria-hidden="true"></i>
            Templates
          </span>
          <span class="features-menu__description">
            Give your team a blueprint for success with easy-to-use templates
            from industry leaders and the Trello community.
          </span>
        </a>

        <a href="/integrations" class="features-menu__item">
          <span class="features-menu__item-heading">
            <i data-lucide="settings" aria-hidden="true"></i>
            Integrations
          </span>
          <span class="features-menu__description">
            Find the apps your team is already using or discover new ways
            to get work done in Trello.
          </span>
        </a>

        <a href="/features/mcp-server" class="features-menu__item">
          <span class="features-menu__item-heading">
            <i data-lucide="grid-2x2-plus" aria-hidden="true"></i>
            MCP server
          </span>
          <span class="features-menu__description">
            Connect Trello to any AI tool.
          </span>
        </a>

      </nav>
    </div>

    <aside class="features-menu__aside">
      <h2 class="features-menu__aside-heading">Meet Trello</h2>

      <p class="features-menu__aside-text">
        Trello makes it easy for your team to get work done. No matter the
        project, workflow, or type of team, Trello can help keep things
        organized. It's simple – sign-up, create a board, and you're off!
        Productivity awaits.
      </p>

      <a href="/about" class="features-menu__aside-button">
        Check out Trello
      </a>
    </aside>

  </div>
</div>

    `
    

}
export default new NavFeatureView();