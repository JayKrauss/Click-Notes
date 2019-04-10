import React from 'react';

// Reactstrap components.
import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

// Custom components.
import { ReportModal } from '../../';

export default function NavItemsList(props) {
  const { navItems, makeReport } = props;

  // Iterate over the nav items array and make a reactstrap NavItem component for each.
  return (
    <React.Fragment>
      {navItems.map((navItem) => (
        navItem.hasOwnProperty('items') ? (
          <UncontrolledDropdown
            nav inNavbar
            key={navItem.id}
          >
            <DropdownToggle
              nav caret
              className="font-italic text-uppercase font-small"
            >
              More
            </DropdownToggle>
            <DropdownMenu
              right
              className="bg-primary shadow"
            >
              <div className="d-flex justify-content-around">
                {navItem.items.map((item) => (
                  item.text === 'report' ? (
                    <ReportModal
                      key={item.id}
                      makeReport={makeReport}
                    />
                  ) : (
                    <DropdownItem
                      disabled
                      key={item.id}
                      tag="a"
                      href={item.location}
                      target="_blank"
                      className="flex-fill text-center text-uppercase text-white-50 font-italic nav-sub-item"
                    >
                      {item.text}
                    </DropdownItem>
                  )
                ))}
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : (
          <NavItem
            key={navItem.id}
          >
            <NavLink
              disabled
              href={navItem.location}
              className="py-1 font-italic text-uppercase"
              target="_blank"
            >
              {navItem.text}
            </NavLink>
          </NavItem>
        )
      ))}

    </React.Fragment>
  );
}
