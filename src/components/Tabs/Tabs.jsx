import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          className={cn('', {
            'is-active': selectedTab.id === tab.id,
          })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            key={tab.id}
            onClick={() => {
              if (selectedTab.id !== tab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>

    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);
