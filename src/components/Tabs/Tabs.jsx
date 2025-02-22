export const Tabs = ({ tabs, activeTabid, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              className={tab.id === activeTabid ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== activeTabid) {
                  onTabSelected(tab);
                }
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabid)?.content || tabs[0].content}
      </div>
    </div>
  );
};
