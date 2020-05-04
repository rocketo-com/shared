import React, { useState, useEffect } from 'react';
import { Header, HeaderItem, Content } from './styled';
import HScrollBox from '../HScrollBox';

const Tabs = ({ tabs, value, onChange, maxTabTextLength }) => {
  const firstTab = tabs[0];
  const initialActive = value || firstTab.key;
  const [active, setActive] = useState(initialActive);

  useEffect(() => {
    if (value && value !== active) {
      setActive(value);
    }
  }, [value]);

  const handleChangeTab = tabKey => () => {
    onChange(tabKey);
    setActive(tabKey);
  };

  const getIsActive = tabKey => active === tabKey;

  const renderHeaderItem = tab => {
    const isActive = getIsActive(tab.key);
    const isCustomRender = typeof tab.header === 'function';

    if (isCustomRender) {
      return tab.header({ tab, isActive });
    }

    let { header } = tab;

    if (maxTabTextLength && maxTabTextLength < header.length) {
      header = `${header.slice(0, maxTabTextLength)}...`;
    }

    return (
      <HeaderItem
        title={tab.header}
        key={tab.key}
        isActive={isActive}
        onClick={handleChangeTab(tab.key)}
      >
        {header}
      </HeaderItem>
    );
  };

  const header = tabs.map(tab => renderHeaderItem(tab));

  const activeTab = tabs.find(tab => getIsActive(tab.key));
  const content = activeTab.content(activeTab);

  return (
    <section>
      <HScrollBox>
        <Header>{header}</Header>
      </HScrollBox>
      <Content>{content}</Content>
    </section>
  );
};

Tabs.defaultProps = {
  onChange: () => {},
};

export default Tabs;
